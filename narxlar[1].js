// ZEMAX Kitchen: narxlar va aloqa sozlamalari.
// Faqat qo'shtirnoq ichidagi matn va raqamlarni o'zgartiring.
// Vergul (,) va qo'shtirnoq (") belgilarini o'chirmang, aks holda standart narxlar ishlaydi.

window.ZEMAX_CONFIG = {

  // Aloqa (buyurtma shu yerga keladi)
  phone: "",          // telefon, masalan "+998901234567"
  telegram: "",       // Telegram nomi @ belgisiz, masalan "zemax_manager"
  web3formsKey: "",   // web3forms.com dan olingan kalit (ixtiyoriy)
  botToken: "8946168353:AAF9JuAnmVFBEd31_HLakVD3cmPRTnc1ZyI", // Telegram bot tokeni
  chatId: "180844999",   // Sizning Telegram chat ID'ingiz (buyurtma shu yerga keladi)
  sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQV-GqtfpgMaytswnuyJ5Pxy6tdQiY0d5kp16h52mh7Cw28wmOiPSEPv6npg0mCW7502Q25udu0XbhH/pub?gid=343875229&single=true&output=csv",       // Google Jadval (CSV) havolasi. To'ldirilsa, narxlar jadvaldan olinadi

  // Umumiy narxlar (barcha material turlari uchun bir xil)
  prices: {
    counterPerM: 350000,  // stol usti, 1 metr narxi (0 bo'lsa, ko'rinmaydi)
    install: 0             // o'rnatish narxi (0 bo'lsa, ko'rinmaydi)
  },

  // Material turlari. Har biri o'z pastki/yuqori/penal narxiga ega.
  // O'lcham bir marta kiritilganda, HAMMASI (3 tasi ham) natijada birdan chiqadi.
  // Kerak bo'lsa qator qo'shishingiz yoki o'chirishingiz mumkin (2 ta yoki 4 ta ham bo'lishi mumkin).
  materials: [
    {
      id: "akril",
      name: "Fasad akril, korpus laminat",
      kvLow: 1600000,   // pastki shkaf, 1 kv narxi
      kvUp: 1200000,    // yuqori shkaf va antresol, 1 kv narxi
      kvPenal: 1500000  // penal, 1 kv narxi
    },
    {
      id: "laminat",
      name: "Fasad laminat, korpus laminat",
      kvLow: 1300000,
      kvUp: 1000000,
      kvPenal: 1200000
    },
    {
      id: "krashenoy",
      name: "Fasad krashenoy, korpus laminat/MDF",
      kvLow: 1900000,
      kvUp: 1500000,
      kvPenal: 1800000
    }
  ],

  // Qo'shimchalar. Narxi 0 bo'lgan qator mijozga ko'rinmaydi.
  extras: [
    { id: "sink",    name: "Moyka",                              price: 600000 },
    { id: "mixer",   name: "Suv aralashtirgich (smesitel)",      price: 350000 },
    { id: "dryer",   name: "Idish quritgich (shushilka)",        price: 400000 },
    { id: "bin",     name: "Chiqindi paqiri (musor paqir)",      price: 450000 },
    { id: "cutlery", name: "Qoshiq-sanchqi qutisi (qoshiq don)", price: 250000 }
  ]
};
