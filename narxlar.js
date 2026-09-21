// ZEMAX Kitchen: narxlar va aloqa sozlamalari.
// Faqat qo'shtirnoq ichidagi matn va raqamlarni o'zgartiring.
// Vergul (,) va qo'shtirnoq (") belgilarini o'chirmang, aks holda standart narxlar ishlaydi.

window.ZEMAX_CONFIG = {

  // Aloqa (buyurtma shu yerga keladi)
  phone: "",          // telefon, masalan "+998901234567"
  telegram: "",       // Telegram nomi @ belgisiz, masalan "zemax_manager"
  web3formsKey: "",   // web3forms.com dan olingan kalit (ixtiyoriy)

  // Narxlar (so'm)
  prices: {
    kvLow: 1600000,       // pastki shkaf, 1 kv narxi
    kvUp: 1200000,        // yuqori shkaf va antresol, 1 kv narxi
    kvPenal: 1500000,     // penal, 1 kv narxi
    counterPerM: 350000,  // stol usti, 1 metr narxi (0 bo'lsa, ko'rinmaydi)
    install: 0            // o'rnatish narxi (0 bo'lsa, ko'rinmaydi)
  },

  // Qo'shimchalar. Narxi 0 bo'lgan qator mijozga ko'rinmaydi.
  extras: [
    { id: "sink",    name: "Moyka",                              price: 600000 },
    { id: "mixer",   name: "Suv aralashtirgich (smesitel)",      price: 350000 },
    { id: "dryer",   name: "Idish quritgich (shushilka)",        price: 400000 },
    { id: "bin",     name: "Chiqindi paqiri (musor paqir)",      price: 450000 },
    { id: "cutlery", name: "Qoshiq-sanchqi qutisi (qoshiq don)", price: 250000 }
  ]
};
