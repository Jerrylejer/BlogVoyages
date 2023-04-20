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
    gallery: [],
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
    gallery: [],
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
    gallery: [],
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
    gallery: [],
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
