export interface Iarticle {
  id: number;
  country: string;
  city: string;
  departureDate: string;
  returnDate: string;
  mainImage: string;
  secondaryImages: string;
  gallery: Igallery[];
  tripDescription: string;
  positivePoints: IpositivePoints[];
  negativePoints: InegativePoints[];
  advices: Iadvices[];
  summary: string;
  topArticle: boolean;
}

export interface Igallery {
  title: string;
  image: string;
}
export interface IpositivePoints {
  text: string;
}
export interface InegativePoints {
  text: string;
}
export interface Iadvices {
  text: string;
}

export const ARTICLES: Iarticle[] = [
  {
    id: 1,
    country: 'Albanie',
    city: 'Tirana',
    departureDate: '13/03/2023',
    returnDate: '31/03/2023',
    mainImage: '/assets/mainImages/Albanie.png',
    secondaryImages: '/assets/secondaryImages/AlbanieSecondary.png',
    gallery: [
      {
        title: 'Albanie',
        image: 'assets/galleryImages/Albanie/Albanie1.png',
      },
      {
        title: 'Albanie',
        image: 'assets/galleryImages/Albanie/Albanie2.png',
      },
      {
        title: 'Albanie',
        image: 'assets/galleryImages/Albanie/Albanie3.png',
      },
      {
        title: 'Albanie',
        image: 'assets/galleryImages/Albanie/Albanie4.png',
      },
      {
        title: 'Albanie',
        image: 'assets/galleryImages/Albanie/Albanie5.png',
      },
      {
        title: 'Albanie',
        image: 'assets/galleryImages/Albanie/Albanie6.png',
      },
      {
        title: 'Albanie',
        image: 'assets/galleryImages/Albanie/Albanie7.png',
      },
      {
        title: 'Albanie',
        image: 'assets/galleryImages/Albanie/Albanie8.png',
      },
    ],
    tripDescription:
      "                            L'Albanie est une destination qui mérite vraiment d'être découverte. En tant que voyageur, j'ai été agréablement surpris par la beauté de ses paysages, la richesse de son patrimoine culturel et la chaleur de ses habitants. Les montagnes majestueuses, les plages de sable fin et les villes historiques sont autant d'atouts qui font de l'Albanie une destination à part entière. La gastronomie albanaise est également à découvrir, avec ses plats traditionnels savoureux et ses vins locaux. En somme, l'Albanie est une destination encore peu connue mais qui gagne à être explorée pour sa diversité et son authenticité.",
      positivePoints: [
        { text: "Les prix abordables, qui rendent les voyages en Albanie moins coûteux que dans d'autres destinations européennes." },
        { text: "La richesse de la culture albanaise, avec des sites historiques tels que les ruines de Butrint et la cité de Berat." },
        { text: "L'hospitalité et la chaleur des habitants, qui sont souvent accueillants envers les voyageurs." },
      ],
      negativePoints: [
        { text: "Il faut parler anglais !" },
        { text: "Les routes souvent étroites et sinueuses qui peuvent rendre les déplacements difficiles et fatigants pour les voyageurs." },
      ],
      advices: [
        { text: 'Vérifiez la validité de votre passeport' },
        { text: 'Les plats locaux sont délicieux ! Goûtez-les' },
      ],
    summary:
      "                           Tirana, la capitale de l'Albanie, offre une expérience unique pour les voyageurs. La ville est colorée et animée, avec des bâtiments historiques, des parcs verdoyants et une vie nocturne vibrante. Les visiteurs peuvent également explorer la culture et la gastronomie albanaise, ainsi que les sites touristiques tels que la tour de l'horloge, la mosquée d'Et'hem Bey et le musée national d'histoire. ",
    topArticle: true,
  },
  {
    id: 2,
    country: 'Grèce',
    city: 'Athène',
    departureDate: '01/01/2023',
    returnDate: '16/01/2023',
    mainImage: '/assets/mainImages/greceMain.png',
    secondaryImages: '/assets/secondaryImages/grece.png',
    gallery: [
      {
        title: 'Grèce',
        image: 'assets/galleryImages/Grece/grece1.png',
      },
      {
        title: 'Grèce',
        image: 'assets/galleryImages/Grece/grece2.png',
      },
      {
        title: 'Grèce',
        image: 'assets/galleryImages/Grece/grece3.png',
      },
      {
        title: 'Grèce',
        image: 'assets/galleryImages/Grece/grece4.png',
      },
      {
        title: 'Grèce',
        image: 'assets/galleryImages/Grece/grece5.png',
      },
      {
        title: 'Grèce',
        image: 'assets/galleryImages/Grece/grece6.png',
      },
      {
        title: 'Grèce',
        image: 'assets/galleryImages/Grece/grece7.png',
      },
      {
        title: 'Grèce',
        image: 'assets/galleryImages/Grece/grece8.png',
      },
    ],
    tripDescription:
"La Grèce est une destination emblématique qui ne déçoit jamais les voyageurs. En tant que voyageur moi-même, j'ai été émerveillé par la beauté de ses paysages naturels, tels que les plages de sable fin, les eaux cristallines et les montagnes majestueuses. La richesse de son patrimoine culturel est également impressionnante, avec des sites archéologiques tels que l'Acropole d'Athènes et le théâtre antique d'Epidaure. La cuisine grecque est un autre point fort, avec ses plats traditionnels savoureux et ses vins locaux. En somme, la Grèce est une destination incontournable pour les amateurs de culture, d'histoire, de nature et de gastronomie",
      positivePoints: [
        { text: "La convivialité et la chaleur des habitants, qui sont souvent accueillants et serviables envers les voyageurs." },
        { text: "La nourriture grecque, avec une grande variété de plats savoureux et de boissons locales." },
        { text: "Les magnifiques plages et les îles pittoresques, avec des paysages spectaculaires et une eau cristalline." },
      ],
      negativePoints: [
        { text: "La haute saison touristique, qui peut rendre certaines zones très fréquentées et bondées." },
        { text: "Les prix élevés dans certaines zones touristiques, notamment les îles, qui peuvent rendre le voyage coûteux" },
      ],
      advices: [
        { text: 'Vérifiez la validité de votre passeport' },
        { text: 'Les plats locaux sont délicieux ! Goûtez-les' },
      ],
    summary:
      "Athènes, la capitale de la Grèce, est une destination fascinante pour les voyageurs en quête de culture et d'histoire. Les visiteurs peuvent explorer des sites emblématiques tels que l'Acropole, le Parthénon et l'Agora antique. La ville offre également une ambiance animée, avec des marchés traditionnels, des restaurants et des bars branchés.",
    topArticle: false,
  },
  {
    id: 3,
    country: 'Guatemala',
    city: 'Monterrico',
    departureDate: '14/09/2022',
    returnDate: '02/10/2022',
    mainImage: '/assets/mainImages/guatemalaMain.png',
    secondaryImages: '/assets/secondaryImages/guatemala.png',
    gallery: [ {
      title: 'Guatemala',
      image: 'assets/galleryImages/Guatemala/guatemala1.png',
    },
    {
      title: 'Guatemala',
      image: 'assets/galleryImages/Guatemala/guatemala2.png',
    },
    {
      title: 'Guatemala',
      image: 'assets/galleryImages/Guatemala/guatemala3.png',
    },
    {
      title: 'Guatemala',
      image: 'assets/galleryImages/Guatemala/guatemala4.png',
    },
    {
      title: 'Guatemala',
      image: 'assets/galleryImages/Guatemala/guatemala5.png',
    },
    {
      title: 'Guatemala',
      image: 'assets/galleryImages/Guatemala/guatemala6.png',
    },
    {
      title: 'Guatemala',
      image: 'assets/galleryImages/Guatemala/guatemala7.png',
    },
    {
      title: 'Guatemala',
      image: 'assets/galleryImages/Guatemala/guatemala8.png',
    },],
    tripDescription:
      "Le Guatemala est une destination qui offre une expérience de voyage unique. En tant que voyageur, j'ai été captivé par la beauté de ses paysages naturels, avec des volcans majestueux, des lacs cristallins et des forêts tropicales luxuriantes. La richesse de sa culture indigène est également fascinante, avec des sites archéologiques tels que Tikal et des villages mayas traditionnels. Les marchés colorés, la gastronomie locale et la musique traditionnelle ajoutent à l'ambiance chaleureuse du pays. En somme, le Guatemala est une destination à découvrir pour les amoureux de la nature, de la culture et de l'aventure.",
      positivePoints: [
        { text: "La beauté naturelle du Guatemala, avec des paysages variés allant des plages tropicales aux volcans majestueux et aux forêts luxuriantes." },
        { text: "La richesse de la culture maya, avec des sites archéologiques impressionnants tels que Tikal et Copán." },
        { text: "La diversité de la cuisine guatémaltèque, avec des plats traditionnels uniques tels que le pepián et le tamal." },
        { text: "La gentillesse et la générosité des habitants, qui accueillent souvent les voyageurs avec une grande hospitalité." },
      ],
      negativePoints: [
        { text: 'Il faut parler anglais !' },
        { text: "Les défis liés aux voyages dans certaines zones, tels que les routes difficiles, les pannes d'électricité et les pénuries d'eau" },
      ],
      advices: [
        { text: "Les problèmes de sécurité dans certaines régions, notamment les risques de criminalité et de violence." },
        { text: 'Les plats locaux sont délicieux ! Goûtez-les' },
      ],
    summary:
      "Monterrico est une petite ville côtière située au Guatemala, offrant une expérience de voyage tranquille et détendue. Les visiteurs peuvent profiter des plages de sable noir, des eaux chaudes de l'océan Pacifique et des zones protégées pour observer les tortues marines. La ville possède également une ambiance agréable, avec des restaurants, des bars et des marchés locaux.",
    topArticle: false,
  },
  {
    id: 4,
    country: 'Tunisie',
    city: 'Tunis',
    departureDate: '13/06/2022',
    returnDate: '31/06/2022',
    mainImage: '/assets/mainImages/tunisie1Main.png',
    secondaryImages: '/assets/secondaryImages/tunisie.png',
    gallery: [
      {
        title: 'Tunisie',
        image: 'assets/galleryImages/Tunisie1/tunisie1.png',
      },
      {
        title: 'Tunisie',
        image: 'assets/galleryImages/Tunisie1/tunisie2.png',
      },
      {
        title: 'Tunisie',
        image: 'assets/galleryImages/Tunisie1/tunisie3.png',
      },
      {
        title: 'Tunisie',
        image: 'assets/galleryImages/Tunisie1/tunisie4.png',
      },
      {
        title: 'Tunisie',
        image: 'assets/galleryImages/Tunisie1/tunisie5.png',
      },
      {
        title: 'Tunisie',
        image: 'assets/galleryImages/Tunisie1/tunisie6.png',
      },
      {
        title: 'Tunisie',
        image: 'assets/galleryImages/Tunisie1/tunisie7.png',
      },
      {
        title: 'Tunisie',
        image: 'assets/galleryImages/Tunisie1/tunisie8.png',
      },
    ],
    tripDescription:
      "La Tunisie est une destination qui offre une riche expérience de voyage. En tant que voyageur, j'ai été séduit par la beauté de ses plages de sable fin, de ses oasis verdoyantes et de ses paysages désertiques. La richesse de son patrimoine culturel est également impressionnante, avec des sites historiques tels que Carthage et le colisée d'El Jem. La cuisine tunisienne est un autre point fort, avec ses plats traditionnels savoureux et ses épices locales. Les souks colorés, les hôtels luxueux et les stations balnéaires ajoutent également à l'ambiance chaleureuse et conviviale du pays. En somme, la Tunisie est une destination à découvrir pour les amoureux de la culture, de la nature et de la gastronomie.",
      positivePoints: [
        { text: "La richesse de la culture tunisienne, avec des sites historiques tels que Carthage et le colisée d'El Jem." },
        { text: "Les magnifiques plages de sable fin et les paysages naturels variés, avec des oasis verdoyantes et des déserts impressionnants." },
        { text: "La cuisine tunisienne, avec des plats traditionnels savoureux et une grande variété d'épices locales." },
      ],
      negativePoints: [
        { text: "Les problèmes de sécurité dans certaines zones" },
        { text: "Le manque d'infrastructures touristiques dans certaines régions, notamment en dehors des zones côtières." },
      ],
      advices: [
        { text: 'Vérifiez la validité de votre passeport' },
        { text: 'Les plats locaux sont délicieux ! Goûtez-les' },
      ],
    summary:
      "Tunis est la capitale de la Tunisie et une ville fascinante pour les voyageurs en quête de culture et d'histoire. Les visiteurs peuvent explorer la médina de Tunis, classée au patrimoine mondial de l'UNESCO, ainsi que le musée national du Bardo et la mosquée Zitouna. La ville offre également une ambiance animée, avec des marchés traditionnels, des restaurants et des bars branchés.",
    topArticle: false,
  },
  {
    id: 5,
    country: 'Tunisie',
    city: 'El Jem',
    departureDate: '13/06/2022',
    returnDate: '31/06/2022',
    mainImage: '/assets/mainImages/tunisie2Main.png',
    secondaryImages: '/assets/secondaryImages/tunisie2.png',
    gallery: [     {
      title: 'Tunisie',
      image: 'assets/galleryImages/Tunisie2/tunisie9.png',
    },
    {
      title: 'Tunisie',
      image: 'assets/galleryImages/Tunisie2/tunisie10.png',
    },
    {
      title: 'Tunisie',
      image: 'assets/galleryImages/Tunisie2/tunisie11.png',
    },
    {
      title: 'Tunisie',
      image: 'assets/galleryImages/Tunisie2/tunisie12.png',
    },
    {
      title: 'Tunisie',
      image: 'assets/galleryImages/Tunisie2/tunisie13.png',
    },
    {
      title: 'Tunisie',
      image: 'assets/galleryImages/Tunisie2/tunisie14.png',
    },
    {
      title: 'Tunisie',
      image: 'assets/galleryImages/Tunisie2/tunisie15.png',
    },
    {
      title: 'Tunisie',
      image: 'assets/galleryImages/Tunisie2/tunisie16.png',
    },
    {
      title: 'Tunisie',
      image: 'assets/galleryImages/Tunisie2/tunisie17.png',
    },
  
  ],
    tripDescription:
    "La Tunisie est une destination qui offre une riche expérience de voyage. En tant que voyageur, j'ai été séduit par la beauté de ses plages de sable fin, de ses oasis verdoyantes et de ses paysages désertiques. La richesse de son patrimoine culturel est également impressionnante, avec des sites historiques tels que Carthage et le colisée d'El Jem. La cuisine tunisienne est un autre point fort, avec ses plats traditionnels savoureux et ses épices locales. Les souks colorés, les hôtels luxueux et les stations balnéaires ajoutent également à l'ambiance chaleureuse et conviviale du pays. En somme, la Tunisie est une destination à découvrir pour les amoureux de la culture, de la nature et de la gastronomie.",
    positivePoints: [
      { text: "La richesse de la culture tunisienne, avec des sites historiques tels que Carthage et le colisée d'El Jem." },
      { text: "Les magnifiques plages de sable fin et les paysages naturels variés, avec des oasis verdoyantes et des déserts impressionnants." },
      { text: "La cuisine tunisienne, avec des plats traditionnels savoureux et une grande variété d'épices locales." },
    ],
    negativePoints: [
      { text: "Les problèmes de sécurité dans certaines zones" },
      { text: "Le manque d'infrastructures touristiques dans certaines régions, notamment en dehors des zones côtières." },
    ],
    advices: [
      { text: 'Vérifiez la validité de votre passeport' },
      { text: 'Les plats locaux sont délicieux ! Goûtez-les' },
    ],
    summary:
      "El Jem est une petite ville située en Tunisie, célèbre pour son impressionnant colisée romain. Les visiteurs peuvent explorer les ruines bien conservées du colisée et découvrir l'histoire et la culture romaines de la région. La ville offre également une ambiance agréable, avec des restaurants locaux et des marchés traditionnels.",
    topArticle: false,
  },
];
