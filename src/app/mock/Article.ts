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
      '                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut. Sed risus pretium quam vulputate dignissim suspendisse in est. Lectus sit amet est placerat in egestas erat. Morbi tincidunt ornare massa eget egestas. Purus faucibus ornare suspendisse sed. Montes nascetur ridiculus mus mauris vitae. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis in eu mi bibendum. Nunc vel risus commodo viverra maecenas accumsan. Pulvinar proin gravida hendrerit lectus a.',
    positivePoints: [
      { text: 'close to France' },
      { text: 'not expensive' },
      { text: 'beautiful landscapes' },
    ],
    negativePoints: [
      { text: 'only few peoples speak english' },
      { text: 'hotels are not clean' },
    ],
    advices: [
      { text: 'check your passport validity' },
      { text: 'try to eat some local dishes, it worth !' },
    ],
    summary:
      '                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Pulvinar pellentesque habitant morbi tristique senectus et netus. ',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut. Sed risus pretium quam vulputate dignissim suspendisse in est. Lectus sit amet est placerat in egestas erat. Morbi tincidunt ornare massa eget egestas. Purus faucibus ornare suspendisse sed. Montes nascetur ridiculus mus mauris vitae. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis in eu mi bibendum. Nunc vel risus commodo viverra maecenas accumsan. Pulvinar proin gravida hendrerit lectus a.',
    positivePoints: [
      { text: 'close to France' },
      { text: 'not expensive' },
      { text: 'beautiful landscapes' },
    ],
    negativePoints: [
      { text: 'only few peoples speak english' },
      { text: 'hotels are not clean' },
    ],
    advices: [
      { text: 'check your passport validity' },
      { text: 'try to eat some local dishes, it worth !' },
    ],
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Pulvinar pellentesque habitant morbi tristique senectus et netus. ',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut. Sed risus pretium quam vulputate dignissim suspendisse in est. Lectus sit amet est placerat in egestas erat. Morbi tincidunt ornare massa eget egestas. Purus faucibus ornare suspendisse sed. Montes nascetur ridiculus mus mauris vitae. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis in eu mi bibendum. Nunc vel risus commodo viverra maecenas accumsan. Pulvinar proin gravida hendrerit lectus a.',
    positivePoints: [
      { text: 'close to France' },
      { text: 'not expensive' },
      { text: 'beautiful landscapes' },
    ],
    negativePoints: [
      { text: 'only few peoples speak english' },
      { text: 'hotels are not clean' },
    ],
    advices: [
      { text: 'check your passport validity' },
      { text: 'try to eat some local dishes, it worth !' },
    ],
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Pulvinar pellentesque habitant morbi tristique senectus et netus. ',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut. Sed risus pretium quam vulputate dignissim suspendisse in est. Lectus sit amet est placerat in egestas erat. Morbi tincidunt ornare massa eget egestas. Purus faucibus ornare suspendisse sed. Montes nascetur ridiculus mus mauris vitae. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis in eu mi bibendum. Nunc vel risus commodo viverra maecenas accumsan. Pulvinar proin gravida hendrerit lectus a.',
    positivePoints: [
      { text: 'close to France' },
      { text: 'not expensive' },
      { text: 'beautiful landscapes' },
    ],
    negativePoints: [
      { text: 'only few peoples speak english' },
      { text: 'hotels are not clean' },
    ],
    advices: [
      { text: 'check your passport validity' },
      { text: 'try to eat some local dishes, it worth !' },
    ],
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Pulvinar pellentesque habitant morbi tristique senectus et netus. ',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut. Sed risus pretium quam vulputate dignissim suspendisse in est. Lectus sit amet est placerat in egestas erat. Morbi tincidunt ornare massa eget egestas. Purus faucibus ornare suspendisse sed. Montes nascetur ridiculus mus mauris vitae. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis in eu mi bibendum. Nunc vel risus commodo viverra maecenas accumsan. Pulvinar proin gravida hendrerit lectus a.',
    positivePoints: [
      { text: 'close to France' },
      { text: 'not expensive' },
      { text: 'beautiful landscapes' },
    ],
    negativePoints: [
      { text: 'only few peoples speak english' },
      { text: 'hotels are not clean' },
    ],
    advices: [
      { text: 'check your passport validity' },
      { text: 'try to eat some local dishes, it worth !' },
    ],
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Pulvinar pellentesque habitant morbi tristique senectus et netus. ',
    topArticle: false,
  },
];
