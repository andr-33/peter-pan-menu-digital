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
  priceCopa?: string;
  priceCachi: string;
}

export interface SpiritItem {
  name: string;
  priceCopa: string;
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
  bebidas: GenericItem[];
}

export const menuData: MenuData = {
  categories: [
    { id: 'clasicos', label: { es: 'Nuestros Clásicos', en: 'Our Classics' } },
    { id: 'copas', label: { es: 'Copas', en: 'Mixers' } },
    { id: 'cervezas', label: { es: 'Cervezas', en: 'Beers' } },
    { id: 'chupitos', label: { es: 'Chupitos', en: 'Shots' } },
    { id: 'vinos', label: { es: 'Vinos', en: 'Wine' } },
    { id: 'bebidas', label: { es: 'Bebidas', en: 'Drinks' } },
  ],
  clasicos: [
    {
      id: 'c1',
      name: { es: 'Peter Pan', en: 'Peter Pan' },
      description: { es: 'Licor de manzana y melocotón, Vodka, Granadina y Kas limón', en: 'Apple and peach liqueur, Vodka, Grenadine and lemon soda' },
      priceCachi: '7,5'
    },
    {
      id: 'c2',
      name: { es: 'Mágico', en: 'Magic' },
      description: { es: 'Vino, Wisky, Licor de melocotón, Vermut blanco y rosado, azúcar y Kas naranja', en: 'Wine, Whisky, Peach liqueur, white and rose Vermouth, sugar and orange soda' },
      priceCachi: '7,5'
    },
    {
      id: 'c3',
      name: { es: 'Real Racing', en: 'Real Racing' },
      description: { es: 'Licor de manzana, Ginebra, Kiwi y 7Up', en: 'Apple liqueur, Gin, Kiwi and 7Up' },
      priceCachi: '7,5'
    },
    {
      id: 'c4',
      name: { es: 'Sexo en la playa', en: 'Sex on the beach' },
      description: { es: 'Licor de melocotón, Malibu y zumo de piña', en: 'Peach liqueur, Malibu and pineapple juice' },
      priceCachi: '7,5'
    },
    {
      id: 'c5',
      name: { es: 'Sexo en el Peter', en: 'Sex on the Peter' },
      description: { es: 'Vodka, Malibu y zumo de piña', en: 'Vodka, Malibu and pineapple juice' },
      priceCachi: '7,5'
    },
    {
      id: 'c6',
      name: { es: 'Orgasmo de limon', en: 'Orgasm lemon' },
      description: { es: 'Licor de manzana, Tropical Blue y Kas limón', en: 'Apple liqueur, Tropical Blue and lemon soda' },
      priceCachi: '7,5'
    },
    {
      id: 'c7',
      name: { es: 'Orgasmo de naranja', en: 'Orgasm orange' },
      description: { es: 'Licor de melocotón, Tropical Blue y Kas naranja', en: 'Peach liqueur, Tropical Blue and orange soda' },
      priceCachi: '7,5'
    },
    {
      id: 'c8',
      name: { es: 'Mojito Clásico', en: 'Mojito Classic' },
      description: { es: 'Rodajas de limon, hierbabuena, Ron blanco, azúcar y 7Up.', en: 'Lime slices, mint, white rum, sugar and 7Up.' },
      priceCopa: '7,5',
      priceCachi: '9,5'
    }
  ],
  copas: [
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
    }
  ],
  cervezas: [
    { name: { es: 'Tercio Mahou', en: 'Mahou Bottle' }, price: '2,7' },
    { name: { es: 'Tercio Estrella Galicia', en: 'Estrella Galicia Bottle' }, price: '2,7' },
    { name: { es: 'Tercio Alhambra', en: 'Alhambra Bottle' }, price: '3' },
    { name: { es: 'Tercio Voll Damm', en: 'Voll Damm Bottle' }, price: '3' },
    { name: { es: 'Tercio Radler', en: 'Radler Bottle' }, price: '3' },
    { name: { es: 'Tercio 0,0 Tostada', en: '0,0 Tostada Bottle' }, price: '3' },
    { name: { es: 'Caña', en: 'Half-pint' }, price: '3,5' },
    { name: { es: 'Cachi de Cerveza', en: 'Cachi Beer (1 Liter)' }, price: '6,5' },
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
    { name: { es: 'Calimocho', en: 'Calimocho' }, price: '4,5' },
    { name: { es: 'Calimora', en: 'Calimora' }, price: '4,8' },
    { name: { es: 'Tinto de verano', en: 'Tinto de verano' }, price: '4,5' },
    { name: { es: 'Calimocho (Rioja)', en: 'Calimocho (Rioja)' }, price: '5,7' },
    { name: { es: 'Rebujito', en: 'Rebujito' }, price: '5,7' },
    { name: { es: 'Sangria', en: 'Sangria' }, price: '6' },
    { name: { es: 'Vino de Coco', en: 'Coconut Wine' }, price: '6,7' },

  ],
  bebidas: [
    { name: { es: 'Agua sin gas', en: 'Still water' }, price: '1,8' },
    { name: { es: 'Agua con gas', en: 'Sparkling water' }, price: '2,7' },
    { name: { es: 'Coca-Cola', en: 'Coke' }, price: '2,7' },
    { name: { es: 'Coca-Cola Zero', en: 'Coke Zero' }, price: '2,7' },
    { name: { es: 'Kas Naranja', en: 'Kas Orange' }, price: '2,7' },
    { name: { es: 'Kas Limón', en: 'Kas Lemon' }, price: '2,7' },
    { name: { es: 'Tónica', en: 'Tonic' }, price: '2,7' },
    { name: { es: 'Sprite', en: 'Sprite' }, price: '2,7' },
    { name: { es: 'Nestea', en: 'Nestea' }, price: '2,7' },
    { name: { es: 'Zumos de Piña', en: 'Pineapple juice' }, price: '2,7' },
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
    en: 'All spirits include your favorite mixer'
  },
  copaHeader: { es: 'Copa', en: 'Glass' },
  cachiHeader: { es: 'Cachi', en: 'Cachi' }
};
