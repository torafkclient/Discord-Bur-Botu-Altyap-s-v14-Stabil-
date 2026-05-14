🔮 Discord Burç Botu Altyapısı (v14 & Stabil)
Discord sunucunuzdaki üyelerin günlük, haftalık ve aylık burç yorumlarını takip edebileceği, modern ve stabil bir bot altyapısıdır. Node.js ile geliştirilmiş olup, her sunucuya uygun şekilde optimize edilmiştir.

✨ Öne Çıkan Özellikler
📅 Geniş Zaman Aralığı: Günlük yorumların yanı sıra Haftalık ve Aylık burç yorumları desteği.

⏰ Otomatik Paylaşım (Cron): Her gün belirlediğiniz saatte otomatik olarak burç yorumlarını ilgili kanala gönderir.

🛠 2000 Karakter Fix: Uzun burç yorumlarında Discord'un mesaj sınırına takılmaz, içeriği parçalayarak veya düzenleyerek sorunsuz gönderir.

🚀 Hızlı ve Hafif: API bazlı çalışır, sunucunuzu yormaz.

📋 Kullanım Komutları
Botu başlattıktan sonra aşağıdaki komutlarla test edebilirsiniz:

!burc [burç-adı] → Günlük burç yorumunu getirir. (Örn: !burc koç)

!burc haftalık [burç-adı] → Haftalık detaylı yorumu listeler.

!burc aylık [burç-adı] → Aylık genel analizi getirir.

🛠 Kurulum Adımları
Bağımlılıklar: Proje klasöründe terminali açıp npm install yazarak gerekli kütüphaneleri yükleyin.

Yapılandırma: ekmek.json dosyasını açın ve aşağıdaki alanları doldurun:

token: Botunuzun token adresi.

logChannel: Botun günlük paylaşım yapacağı kanal ID'si.

prefix: Botun komut ön eki (Varsayılan: !).

Çalıştırma: node index.js komutu ile botu aktif hale getirin.

📂 Teknik Detaylar
Dil: JavaScript (Node.js)

Kütüphane: Discord.js v14

Veri Kaynağı: Güncel burç yorumu API servisleri.

⚠️ Bilgilendirme
Bu altyapı tamamen ücretsizdir. Geliştirme önerilerinizi iletebilir veya hataları Issues kısmından bildirebilirsiniz.
