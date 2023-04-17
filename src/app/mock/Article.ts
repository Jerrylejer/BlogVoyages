export interface Iarticle {
  id: number;
  country: string;
  city: string;
  departureDate: string;
  returnDate: string;
  mainImage: string;
  secondaryImages: string;
  gallery: string[];
  tripDescription: string;
  positvePoints: string[];
  negativePoints: string[];
  notices: string[];
  summary: string;
  topArticle: boolean;
}

export const ARTICLES: Iarticle[] = [
  {
    id: 1,
    country: 'Albanie',
    city: 'Tirana',
    departureDate: '13/03/2023',
    returnDate: '31/03/2023',
    mainImage: '../assets/mainImages/Albanie.png',
    secondaryImages: '../assets/secondaryImage/Albanie.png',
    gallery: [
      '..assetsgalleryImagesAlbanieAlbanie1.png',
      '..assetsgalleryImagesAlbanieAlbanie2.png',
      '..assetsgalleryImagesAlbanieAlbanie3.png',
    ],
    tripDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut. Sed risus pretium quam vulputate dignissim suspendisse in est. Lectus sit amet est placerat in egestas erat. Morbi tincidunt ornare massa eget egestas. Purus faucibus ornare suspendisse sed. Montes nascetur ridiculus mus mauris vitae. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis in eu mi bibendum. Nunc vel risus commodo viverra maecenas accumsan. Pulvinar proin gravida hendrerit lectus a.',
    positvePoints: ['close to France', 'not expensive', 'beautiful landscapes'],
    negativePoints: ['only few peoples speak english', 'hotels are not clean'],
    notices: [
      'check your passport validity',
      'try to eat some local dishes, it worth !',
    ],
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Pulvinar pellentesque habitant morbi tristique senectus et netus. ',
    topArticle: true,
  },
  {
    id: 2,
    country: 'USA',
    city: 'New-York',
    departureDate: '01/01/2023',
    returnDate: '16/01/2023',
    mainImage: '../assets/mainImages/Albanie.png',
    secondaryImages: '../assets/secondaryImage/Albanie.png',
    gallery: [
      '..assetsgalleryImagesAlbanieAlbanie1.png',
      '..assetsgalleryImagesAlbanieAlbanie2.png',
      '..assetsgalleryImagesAlbanieAlbanie3.png',
    ],
    tripDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut. Sed risus pretium quam vulputate dignissim suspendisse in est. Lectus sit amet est placerat in egestas erat. Morbi tincidunt ornare massa eget egestas. Purus faucibus ornare suspendisse sed. Montes nascetur ridiculus mus mauris vitae. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis in eu mi bibendum. Nunc vel risus commodo viverra maecenas accumsan. Pulvinar proin gravida hendrerit lectus a.',
    positvePoints: ['close to France', 'not expensive', 'beautiful landscapes'],
    negativePoints: ['only few peoples speak english', 'hotels are not clean'],
    notices: [
      'check your passport validity',
      'try to eat some local dishes, it worth !',
    ],
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Pulvinar pellentesque habitant morbi tristique senectus et netus. ',
    topArticle: true,
  },
  {
    id: 3,
    country: 'United-Kingdom',
    city: 'London',
    departureDate: '14/09/2022',
    returnDate: '02/10/2022',
    mainImage: '../assets/mainImages/Albanie.png',
    secondaryImages: '../assets/secondaryImage/Albanie.png',
    gallery: [
      '..assetsgalleryImagesAlbanieAlbanie1.png',
      '..assetsgalleryImagesAlbanieAlbanie2.png',
      '..assetsgalleryImagesAlbanieAlbanie3.png',
    ],
    tripDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut. Sed risus pretium quam vulputate dignissim suspendisse in est. Lectus sit amet est placerat in egestas erat. Morbi tincidunt ornare massa eget egestas. Purus faucibus ornare suspendisse sed. Montes nascetur ridiculus mus mauris vitae. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis in eu mi bibendum. Nunc vel risus commodo viverra maecenas accumsan. Pulvinar proin gravida hendrerit lectus a.',
    positvePoints: ['close to France', 'not expensive', 'beautiful landscapes'],
    negativePoints: ['only few peoples speak english', 'hotels are not clean'],
    notices: [
      'check your passport validity',
      'try to eat some local dishes, it worth !',
    ],
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Pulvinar pellentesque habitant morbi tristique senectus et netus. ',
    topArticle: true,
  },
  {
    id: 4,
    country: 'Italy',
    city: 'Napoli',
    departureDate: '13/06/2022',
    returnDate: '31/06/2022',
    mainImage: '../assets/mainImages/Albanie.png',
    secondaryImages: '../assets/secondaryImage/Albanie.png',
    gallery: [
      '..assetsgalleryImagesAlbanieAlbanie1.png',
      '..assetsgalleryImagesAlbanieAlbanie2.png',
      '..assetsgalleryImagesAlbanieAlbanie3.png',
    ],
    tripDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut. Sed risus pretium quam vulputate dignissim suspendisse in est. Lectus sit amet est placerat in egestas erat. Morbi tincidunt ornare massa eget egestas. Purus faucibus ornare suspendisse sed. Montes nascetur ridiculus mus mauris vitae. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis in eu mi bibendum. Nunc vel risus commodo viverra maecenas accumsan. Pulvinar proin gravida hendrerit lectus a.',
    positvePoints: ['close to France', 'not expensive', 'beautiful landscapes'],
    negativePoints: ['only few peoples speak english', 'hotels are not clean'],
    notices: [
      'check your passport validity',
      'try to eat some local dishes, it worth !',
    ],
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Pulvinar pellentesque habitant morbi tristique senectus et netus. ',
    topArticle: true,
  },
  {
    id: 5,
    country: 'Marroco',
    city: 'Casablanca',
    departureDate: '10/04/2021',
    returnDate: '25/04/2021',
    mainImage: '../assets/mainImages/Albanie.png',
    secondaryImages: '../assets/secondaryImage/Albanie.png',
    gallery: [
      '..assetsgalleryImagesAlbanieAlbanie1.png',
      '..assetsgalleryImagesAlbanieAlbanie2.png',
      '..assetsgalleryImagesAlbanieAlbanie3.png',
    ],
    tripDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut. Sed risus pretium quam vulputate dignissim suspendisse in est. Lectus sit amet est placerat in egestas erat. Morbi tincidunt ornare massa eget egestas. Purus faucibus ornare suspendisse sed. Montes nascetur ridiculus mus mauris vitae. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis in eu mi bibendum. Nunc vel risus commodo viverra maecenas accumsan. Pulvinar proin gravida hendrerit lectus a.',
    positvePoints: ['close to France', 'not expensive', 'beautiful landscapes'],
    negativePoints: ['only few peoples speak english', 'hotels are not clean'],
    notices: [
      'check your passport validity',
      'try to eat some local dishes, it worth !',
    ],
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Pulvinar pellentesque habitant morbi tristique senectus et netus. ',
    topArticle: true,
  },
];
