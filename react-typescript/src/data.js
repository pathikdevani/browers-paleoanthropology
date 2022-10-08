const inquiries = [
  {
    title: "General inquiries",
    office_name: "Mondia Group",
    address: [
      "Farqad Street",
      "Internet city",
      "35V5+M4",
      "Dubai",
      "United Arab Emirates",
    ],
    mobile: "+971 4 568 7391",
    emails: ["info@mondia.com"],
  },
  {
    title: "Media inquiries",
    office_name: "Mondia Group",
    address: [
      "Farqad Street",
      "Internet city",
      "35V5+M4",
      "Dubai",
      "United Arab Emirates",
    ],
    mobile: "+971 4 568 7391",
    emails: [
      "info@mondia.com",
      "julia.bespala@mondia.com",
      "michael@ownalchemy.com",
    ],
  },
];

const countries = [
  {
    src: "https://mondia.com/images/2022/02/algeria.png",
    srcset:
      "https://mondia.com/images/2022/02/algeria.png 225w, https://mondia.com/images/2022/02/algeria-150x150.png 150w",
    title: "Algiers",
    address: [
      "2, Rue Kaddour Rahim,",
      "nHussein Dey, 16040,",
      "nAlgiers, Algeria",
    ],
  },
  {
    src: "https://mondia.com/images/2022/03/egypt-flag.png",
    srcset:
      "https://mondia.com/images/2022/03/egypt-flag.png 224w, https://mondia.com/images/2022/03/egypt-flag-150x150.png 150w",
    title: "Cairo",
    address: [
      "Mondia Media Egypt LLC,",
      "n61 Ninety St. – El Tagamo’",
      "nEl Khames Floor 1,",
      "nNew Cairo, Egypt",
      "n+20 25372020",
    ],
  },
  {
    src: "https://mondia.com/images/2022/02/SA-flag-mondia.png",
    srcset:
      "https://mondia.com/images/2022/02/SA-flag-mondia.png 250w, https://mondia.com/images/2022/02/SA-flag-mondia-150x150.png 150w",
    title: "Cape Town",
    address: [
      "Unit 7 Dinglewood",
      "n92 Rosmead Avenue",
      "nKenilworth, Cape Town",
      "nWestern Cape, 7708",
    ],
  },
  {
    src: "https://mondia.com/images/2022/02/Morocco.png",
    srcset:
      "https://mondia.com/images/2022/02/Morocco.png 300w, https://mondia.com/images/2022/02/Morocco-150x150.png 150w",
    title: "Casablanca",
    address: [
      "Espace Porte d’Anfa",
      "n3 Rue Bab El Mansour,",
      "nFloor 1 Office 3",
      "nCasablanca",
    ],
  },
  {
    src: "https://mondia.com/images/2022/03/tanzania-flag.png",
    srcset:
      "https://mondia.com/images/2022/03/tanzania-flag.png 225w, https://mondia.com/images/2022/03/tanzania-flag-150x150.png 150w",
    title: "Dar Es Salaam",
    address: [
      "ESBC Kimbiji House,",
      "n1st Floor 344 Ghuba Road",
      "nOyster Bay Shopping Centre",
      "nDar es Salaam, Tanzania",
    ],
  },
  {
    src: "https://mondia.com/images/2022/03/german-flag.png",
    srcset:
      "https://mondia.com/images/2022/03/german-flag.png 225w, https://mondia.com/images/2022/03/german-flag-150x150.png 150w",
    title: "Düsseldorf",
    address: [
      "Mondia Media Germany GmbH,",
      "nAlt-Niederkassel 69",
      "n40547 Düsseldorf",
      "nGermany",
      "n+4940 3861 7400",
    ],
  },
  {
    src: "https://mondia.com/images/2022/03/dubai-flag.png",
    srcset:
      "https://mondia.com/images/2022/03/dubai-flag.png 225w, https://mondia.com/images/2022/03/dubai-flag-150x150.png 150w",
    title: "Dubai",
    address: [
      "Farqad Street",
      "nInternet city",
      "n35V5+M4",
      "nDubai",
      "nUnited Arab Emirates",
    ],
  },
  {
    src: "https://mondia.com/images/2022/03/german-flag.png",
    srcset:
      "https://mondia.com/images/2022/03/german-flag.png 225w, https://mondia.com/images/2022/03/german-flag-150x150.png 150w",
    title: "Hamburg",
    address: [
      "Mondia Media Germany GmbH,",
      "nCaffamacherreihe 5,",
      "n20355 Hamburg,",
      "nGermany",
      "n+4940 3861 7400",
    ],
  },
  {
    src: "https://mondia.com/images/2022/02/drc-1.png",
    srcset:
      "https://mondia.com/images/2022/02/drc-1.png 225w, https://mondia.com/images/2022/02/drc-1-150x150.png 150w",
    title: "Kinshasa",
    address: ["Boulevard Du 30 Juin,", "nKinshasa,", "nDRC"],
  },
  {
    src: "https://mondia.com/images/2022/03/spain.png",
    srcset:
      "https://mondia.com/images/2022/03/spain.png 225w, https://mondia.com/images/2022/03/spain-150x150.png 150w",
    title: "Madrid",
    address: [
      "Mondia Media Spain,",
      "nMadrid Paseo de la Castellana 200 28046",
      "nMadrid, Spain",
      "n+34 919 047 201",
    ],
  },
  {
    src: "https://mondia.com/images/2022/02/Nigeria-1.png",
    srcset:
      "https://mondia.com/images/2022/02/Nigeria-1.png 300w, https://mondia.com/images/2022/02/Nigeria-1-150x150.png 150w",
    title: "Lagos",
    address: [
      "Joint venture with I-Cell",
      "nMultimedia Limited",
      "nLagos,",
      "nNigeria",
    ],
  },
  {
    src: "https://mondia.com/images/2022/02/mozambique.png",
    srcset:
      "https://mondia.com/images/2022/02/mozambique.png 225w, https://mondia.com/images/2022/02/mozambique-150x150.png 150w",
    title: "Maputo",
    address: ["Rua dos Desportistas nr 649,", "nMaputo,", "nMozambique"],
  },
  {
    src: "https://mondia.com/images/2022/02/Nairobi.png",
    srcset:
      "https://mondia.com/images/2022/02/Nairobi.png 300w, https://mondia.com/images/2022/02/Nairobi-150x150.png 150w",
    title: "Nairobi",
    address: [
      "Ndikimi & Company Advocates",
      "n 10th Floor, Western Heights",
      "n Karuna Road, Westlands",
      "n P.O. Box 29037 – 00625",
      "n Nairobi",
    ],
  },
  {
    src: "https://mondia.com/images/2022/02/KSA.png",
    srcset:
      "https://mondia.com/images/2022/02/KSA.png 300w, https://mondia.com/images/2022/02/KSA-150x150.png 150w",
    title: "Riyadh",
    address: ["2908, Prince Mohammed Ibn Abdulaziz Road, Riyadh,", "nKSA"],
  },
  {
    src: "https://mondia.com/images/2022/03/italyflag.png",
    srcset:
      "https://mondia.com/images/2022/03/italyflag.png 225w, https://mondia.com/images/2022/03/italyflag-150x150.png 150w",
    title: "Rome",
    address: [
      "Mondia Media Srl,",
      "nRome Via Gregoriana,",
      "n38, 00187 Rome,",
      "nItaly",
      "n+39 06 42016 426",
    ],
  },
  {
    src: "https://mondia.com/images/2022/02/lesotho.png",
    srcset:
      "https://mondia.com/images/2022/02/lesotho.png 225w, https://mondia.com/images/2022/02/lesotho-150x150.png 150w",
    title: "Maseru",
    address: ["585 Mabile Road,", "nMaseru 100,", "nLesotho"],
  },
  {
    src: "https://mondia.com/images/2022/02/new-signapore-flag-1.png",
    srcset:
      "https://mondia.com/images/2022/02/new-signapore-flag-1.png 250w, https://mondia.com/images/2022/02/new-signapore-flag-1-150x150.png 150w",
    title: "Singapore",
    address: [
      "Mondia Media Asia Pacific Pte Ltd. 261 Waterloo Street,",
      "n#03-32 Waterloo Centre,",
      "nSingapore 180261",
    ],
  },
  {
    src: "https://mondia.com/images/2022/02/SA-flag-mondia.png",
    srcset:
      "https://mondia.com/images/2022/02/SA-flag-mondia.png 250w, https://mondia.com/images/2022/02/SA-flag-mondia-150x150.png 150w",
    title: "Johannesburg",
    address: [
      "Block C, Suite 9,",
      "nCarlswald Close,",
      "nCNR New Road and 7th Road,",
      "n1685 Midrand,",
      "nSouth Africa",
      "n+27 10 010 5274",
    ],
  },
  {
    src: "https://mondia.com/images/2022/02/Tunis.png",
    srcset:
      "https://mondia.com/images/2022/02/Tunis.png 300w, https://mondia.com/images/2022/02/Tunis-150x150.png 150w",
    title: "Tunis",
    address: [
      "Carthage Center,",
      "nRue du Lac de Constance,",
      "nLes Berges du Lac,",
      "nTunis, 1053 Tunis,",
      "nTunisia",
    ],
  },
];
module.exports = {
  inquiries,
  countries,
};
