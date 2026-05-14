const { Client, GatewayIntentBits, Partials } = require('discord.js');
const conf = require("./ekmek.json");
const cron = require('node-cron');
const burc = require("burc-yorum");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel],
  presence: {
    activities: [{ name: `Monica was here ?` }],
    status: "idle",
  },
});

///////////////////// UZUN MESAJ BÖLME /////////////////////

async function sendLongMessage(channel, text) {
  const maxLength = 2000;

  for (let i = 0; i < text.length; i += maxLength) {
    await channel.send({
      content: text.slice(i, i + maxLength)
    });
  }
}

///////////////////// KOMUT SİSTEMİ /////////////////////

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith("!burc")) return;

  const args = message.content.split(" ").slice(1);
  if (!args[0]) {
    return message.reply("❌ Kullanım: `!burc koç` | `!burc haftalık aslan` | `!burc aylık balık`");
  }

  let tur = "daily";
  let burcAdi = args[0].toLowerCase();

  if (["haftalık", "weekly"].includes(args[0])) {
    tur = "weekly";
    burcAdi = args[1];
  }

  if (["aylık", "monthly"].includes(args[0])) {
    tur = "monthly";
    burcAdi = args[1];
  }

  if (!burcAdi) return message.reply("❌ Burç adı yazmalısın.");

  try {
    let yorum;

    if (tur === "daily") yorum = await burc.daily(burcAdi);
    if (tur === "weekly") yorum = await burc.weekly(burcAdi);
    if (tur === "monthly") yorum = await burc.monthly(burcAdi);

    const text = `🔮 **${burcAdi.toUpperCase()} (${tur})**\n${yorum}`;

    await sendLongMessage(message.channel, text);

  } catch (err) {
    message.reply("❌ Geçersiz burç adı girdin.");
  }
});

///////////////////// OTOMATİK GÜNLÜK BURÇ /////////////////////

client.on('clientReady', () => {
  console.log(`🤖 Burç botu aktif!`);

  const gunlukChannel = client.channels.cache.get(conf.GUNLUK_YORUM_CHANNEL);
  if (!gunlukChannel) return console.log("❌ Günlük burç kanalı bulunamadı!");

  cron.schedule('0 0 * * *', async () => {
    const burclar = ["koç","boğa","ikizler","yengeç","aslan","başak","terazi","akrep","yay","oğlak","kova","balık"];

    for (const b of burclar) {
      const yorum = await burc.daily(b);
      const text = `🔮 **${b.toUpperCase()}**\n${yorum}`;

      await sendLongMessage(gunlukChannel, text);
    }
  });
});

client.login(conf.TOKEN);