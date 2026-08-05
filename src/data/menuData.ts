export interface MultilingualString {
  es: string;
  en: string;
}

export interface Category {
  id: string;
  label: MultilingualString;
}

export interface ClassicItem {
  id: string;
  name: MultilingualString;
  description: MultilingualString;
  mix: MultilingualString;
  priceCopa?: string;
  priceCachi: string;
  image?: string;
}

export interface SpiritItem {
  name: string;
  priceCopa?: string;
  priceCachi: string;
}

export interface SpiritCategory {
  categoryId: string;
  name: MultilingualString;
  items: SpiritItem[];
}

export interface GenericItem {
  name: MultilingualString;
  price?: string;
}

export interface MenuData {
  categories: Category[];
  clasicos: ClassicItem[];
  copas: SpiritCategory[];
  cervezas: GenericItem[];
  chupitos: GenericItem[];
  vinos: GenericItem[];
  refrescos: GenericItem[];
}

export const menuData: MenuData = {
  categories: [
    { id: 'clasicos', label: { es: 'Nuestros Clásicos', en: 'Our Classics' } },
    { id: 'copas', label: { es: 'Cachis', en: 'Cachis' } },
    { id: 'cervezas', label: { es: 'Cervezas', en: 'Beers' } },
    { id: 'vinos', label: { es: 'Vinos', en: 'Wine' } },
    { id: 'chupitos', label: { es: 'Chupitos', en: 'Shots' } },
    { id: 'refrescos', label: { es: 'Refrescos', en: 'Soft Drinks' } },
  ],
  clasicos: [
    {
      id: 'c1',
      name: { es: 'Peter Pan', en: 'Peter Pan' },
      description: { es: 'Imposible que falle', en: 'Impossible to fail' },
      mix: { es: 'Licor de manzana y melocotón, Vodka, Granadina y Kas limón', en: 'Apple and peach liqueur, Vodka, Grenadine and lemon soda' },
      priceCachi: '7,5',
      image: '/cachis/peter-pan.webp'
    },
    {
      id: 'c2',
      name: { es: 'Mágico', en: 'Magic' },
      description: { es: 'Para una noche mágica', en: 'For a magical night' },
      mix: { es: 'Vino, Wisky, Licor de melocotón, Vermut blanco y rojo, azúcar y Kas naranja', en: 'Wine, Whisky, Peach liqueur, white and red Vermouth, sugar and orange soda' },
      priceCachi: '7,5',
      image: '/cachis/magico.jpg'
    },
    {
      id: 'c3',
      name: { es: 'Real Racing', en: 'Real Racing' },
      description: { es: 'Este también sube', en: 'This also goes up' },
      mix: { es: 'Licor de manzana, Ginebra, Kiwi y 7Up', en: 'Apple liqueur, Gin, Kiwi and 7Up' },
      priceCachi: '7,5',
      image: '/cachis/real-racing.jpg'
    },
    {
      id: 'c4',
      name: { es: 'Sexo en la playa', en: 'Sex on the beach' },
      description: { es: 'Lo mejor para verano', en: 'The best for summer' },
      mix: { es: 'Licor de melocotón, Malibu y zumo de piña', en: 'Peach liqueur, Malibu and pineapple juice' },
      priceCachi: '7,5',
      image: '/cachis/sexo.jpg'
    },
    {
      id: 'c5',
      name: { es: 'Sexo en el Peter', en: 'Sex on the Peter' },
      description: { es: 'Como en la playa, pero más atrevido', en: 'Like on the beach, but more daring' },
      mix: { es: 'Vodka, Malibu y zumo de piña', en: 'Vodka, Malibu and pineapple juice' },
      priceCachi: '7,5',
      image: '/cachis/sexo.jpg'
    },
    {
      id: 'c6',
      name: { es: 'Orgasmo de limon', en: 'Orgasm lemon' },
      description: { es: 'Uno no es suficiente', en: 'One is not enough' },
      mix: { es: 'Licor de manzana, Tropical Blue y Kas limón', en: 'Apple liqueur, Tropical Blue and lemon soda' },
      priceCachi: '7,5',
      image: '/cachis/orgasmo-limon.jpg'
    },
    {
      id: 'c7',
      name: { es: 'Orgasmo de naranja', en: 'Orgasm orange' },
      description: { es: 'Uno no es suficiente', en: 'One is not enough' },
      mix: { es: 'Licor de melocotón, Tropical Blue y Kas naranja', en: 'Peach liqueur, Tropical Blue and orange soda' },
      priceCachi: '7,5',
      image: '/cachis/orgasmo-naranja.jpg'
    },
    {
      id: 'c8',
      name: { es: 'Mojito Clásico', en: 'Mojito Classic' },
      description: { es: 'El caribe en tu mano', en: 'The Caribbean in your hand' },
      mix: { es: 'Rodajas de limon, hierbabuena, Ron blanco, azúcar y 7Up.', en: 'Lime slices, mint, white rum, sugar and 7Up.' },
      priceCopa: '7,5',
      priceCachi: '9,5',
      image: '/cachis/mojito.webp'
    }
  ],
  copas: [
    {
      categoryId: 'con-vino',
      name: { es: 'Con vino', en: 'With wine' },
      items: [
        { name: 'Calimocho', priceCopa: '3,5', priceCachi: '4,5' },
        { name: 'Tinto de verano', priceCachi: '4,5' },
        { name: 'Calimora', priceCachi: '4,8' },
        { name: 'Calimocho (Rioja)', priceCachi: '5,7' },
        { name: 'Rebujito', priceCachi: '5,7' },
        { name: 'Sangria', priceCachi: '6' },
        { name: 'Vino de Coco', priceCachi: '6,7' },
      ]
    },
    {
      categoryId: 'ron',
      name: { es: 'Rones', en: 'Rums' },
      items: [
        { name: 'Brugal Añejo', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Barceló', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Cacique', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Santa Teresa', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Arehucas', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Barcardí', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Barcardí Limón', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Legendario', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Malibu', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Negrita', priceCopa: '6,50', priceCachi: '7,7' },
        { name: 'Captain Morgan', priceCopa: '6,50', priceCachi: '8,5' }
      ]
    },
    {
      categoryId: 'whisky',
      name: { es: 'Whiskys', en: 'Whiskies' },
      items: [
        { name: "Ballantine's", priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'DYC', priceCopa: '6,50', priceCachi: '7,7' },
        { name: "Jack Daniel's", priceCopa: '6,50', priceCachi: '10,5' },
        { name: 'Johnnie Walker', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Bold', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Jameson', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'JB', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'White Label', priceCopa: '6,50', priceCachi: '8,5' }
      ]
    },
    {
      categoryId: 'ginebra',
      name: { es: 'Ginebras', en: 'Gins' },
      items: [
        { name: 'Beefeater', priceCopa: '6,50', priceCachi: '8,5' },
        { name: "Seagram's", priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Tanqueray', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Puerto de Indias', priceCopa: '6,50', priceCachi: '8,7' },
        { name: 'Larios', priceCopa: '6,50', priceCachi: '7,7' },
        { name: 'Bombay', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Bombay Sapphire', priceCopa: '6,50', priceCachi: '10,5' },
      ]
    },
    {
      categoryId: 'vodka',
      name: { es: 'Vodkas', en: 'Vodkas' },
      items: [
        { name: 'Absolut', priceCopa: '6,50', priceCachi: '8,5' },
        { name: 'Eristoff', priceCopa: '6,50', priceCachi: '7,7' },
        { name: 'Vodka Negro', priceCopa: '6,50', priceCachi: '8,5' },
      ]
    },
    {
      categoryId: 'cerveza-chachi',
      name: { es: 'Cerveza', en: 'Beer' },
      items: [
        { name: 'Estrella Galicia ', priceCopa: '3,50', priceCachi: '6,50' }
      ]
    }
  ],
  cervezas: [
    { name: { es: 'Mahou', en: 'Mahou' }, price: '2,7' },
    { name: { es: 'Estrella Galicia', en: 'Estrella Galicia' }, price: '2,7' },
    { name: { es: 'Alhambra', en: 'Alhambra' }, price: '3' },
    { name: { es: 'Voll Damm', en: 'Voll Damm' }, price: '3' },
    { name: { es: 'Radler', en: 'Radler' }, price: '3' },
    { name: { es: '0,0 Tostada', en: '0,0 Tostada' }, price: '3' },
    { name: { es: 'Caña (0,5L)', en: 'Half-pint (0.5L)' }, price: '3,5' },
  ],
  chupitos: [
    { name: { es: 'Tequila José Cuervo', en: 'José Cuervo Tequila' } },
    { name: { es: 'Tequila de fresa', en: 'Strawberry Tequila' } },
    { name: { es: 'Plata o Plomo', en: 'Plata o Plomo' } },
    { name: { es: 'Jägermeister', en: 'Jägermeister' } },
    { name: { es: 'Crema de Orujo', en: 'Orujo Cream' } },
    { name: { es: 'Ron miel', en: 'Honey Rum' } },
    { name: { es: 'Vodka Negro', en: 'Black Vodka' } },
    { name: { es: 'Peche', en: 'Peche' } },
    { name: { es: 'Thunder Bitch', en: 'Thunder Bitch' } },
  ],
  vinos: [
    { name: { es: 'Copa Rioja', en: 'Red Wine' }, price: '1,8' },
    { name: { es: 'Copa Rueda', en: 'White Wine' }, price: '1,8' },
  ],
  refrescos: [
    { name: { es: 'Agua sin gas', en: 'Still water' }, price: '1,7' },
    { name: { es: 'Agua con gas', en: 'Sparkling water' }, price: '2,7' },
    { name: { es: 'Coca-Cola', en: 'Coke' }, price: '2,7' },
    { name: { es: 'Coca-Cola Zero', en: 'Coke Zero' }, price: '2,7' },
    { name: { es: 'Kas Naranja', en: 'Kas Orange' }, price: '2,7' },
    { name: { es: 'Kas Limón', en: 'Kas Lemon' }, price: '2,7' },
    { name: { es: 'Tónica', en: 'Tonic' }, price: '2,7' },
    { name: { es: 'Sprite', en: 'Sprite' }, price: '2,7' },
    { name: { es: 'Nestea', en: 'Nestea' }, price: '2,7' },
    { name: { es: 'Zumo de Piña', en: 'Pineapple juice' }, price: '2,7' },
    { name: { es: 'Mosto', en: 'Grape juice' }, price: '2,7' },
    { name: { es: 'Red Bull', en: 'Red Bull' }, price: '3' }
  ]
};

export const uiTexts = {
  title: 'PETER PAN',
  subtitle: { es: 'La casa del Cachi', en: 'Home of the Cachi' },
  cachiInfo: {
    es: 'Cachi = Vaso de 1 Litro',
    en: 'Cachi = 1 Liter Cup'
  },
  mixInfo: {
    es: 'Todas las copas incluyen tu mezcla favorita',
    en: 'All drinks include your favorite mixer'
  },
  copaHeader: { es: 'Copa', en: 'Glass' },
  copaInfo: { es: 'Pideló en copa por 6,5€', en: 'Ask for a glass for 6,5€' },
  cachiHeader: { es: 'Cachi', en: 'Cachi' },
  footer: {
    addressTitle: { es: 'Dirección', en: 'Location' },
    addressText: {
      es: 'Calle Daoiz y Velarde, 21, Santander',
      en: 'Calle Daoiz y Velarde, 21, Santander'
    },
    scheduleTitle: { es: 'Horario', en: 'Schedule' },
    scheduleDetails: [
      {
        days: { es: 'Martes a Sábado', en: 'Tuesday to Saturday' },
        hours: '20:00 - 03:30'
      }
    ]
  }
};
