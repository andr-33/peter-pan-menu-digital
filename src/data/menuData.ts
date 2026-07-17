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
  priceCopa: string;
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
  price: string;
}

export interface MenuData {
  categories: Category[];
  clasicos: ClassicItem[];
  copas: SpiritCategory[];
  cervezas: GenericItem[];
  chupitos: GenericItem[];
  otros: GenericItem[];
}

export const menuData: MenuData = {
  categories: [
    { id: 'clasicos', label: { es: 'Nuestros Clásicos', en: 'Our Classics' } },
    { id: 'copas', label: { es: 'Copas', en: 'Spirits & Mixers' } },
    { id: 'cervezas', label: { es: 'Cervezas', en: 'Beers' } },
    { id: 'chupitos', label: { es: 'Chupitos', en: 'Shots' } },
    { id: 'otros', label: { es: 'Otros', en: 'Others' } }
  ],
  clasicos: [
    {
      id: 'c1',
      name: { es: 'Peter Pan', en: "Peter Pan" },
      description: { es: 'Ron blanco, licor de melón, zumo de piña y polvo de hadas.', en: 'White rum, melon liqueur, pineapple juice and fairy dust.' },
      priceCopa: '7.00',
      priceCachi: '13.00'
    },
    {
      id: 'c2',
      name: { es: 'Sombra Perdida', en: 'Lost Shadow' },
      description: { es: 'Vodka negro, mora, sour de lima y un toque de Sprite.', en: 'Black vodka, blackberry, lime sour and a touch of Sprite.' },
      priceCopa: '7.50',
      priceCachi: '14.00'
    },
    {
      id: 'c3',
      name: { es: 'Garra del Capitán', en: "Captain's Hook" },
      description: { es: 'Ron especiado, ginger beer, lima y un toque picante.', en: 'Spiced rum, ginger beer, lime and a spicy touch.' },
      priceCopa: '8.00',
      priceCachi: '15.00'
    },
    {
      id: 'c4',
      name: { es: 'Campanilla', en: 'Tinkerbell' },
      description: { es: 'Tequila, puré de maracuyá, triple sec y borde de azúcar pica-pica.', en: 'Tequila, passion fruit puree, triple sec and sour sugar rim.' },
      priceCopa: '7.50',
      priceCachi: '14.00'
    }
  ],
  copas: [
    {
      categoryId: 'ron',
      name: { es: 'Rones', en: 'Rums' },
      items: [
        { name: 'Brugal Añejo', priceCopa: '6.50', priceCachi: '12.00' },
        { name: 'Barceló', priceCopa: '6.50', priceCachi: '12.00' },
        { name: 'Cacique', priceCopa: '6.50', priceCachi: '12.00' },
        { name: 'Santa Teresa 1796', priceCopa: '9.00', priceCachi: '16.00' }
      ]
    },
    {
      categoryId: 'whisky',
      name: { es: 'Whiskys', en: 'Whiskies' },
      items: [
        { name: "Ballantine's", priceCopa: '6.50', priceCachi: '12.00' },
        { name: 'DYC 8', priceCopa: '6.00', priceCachi: '11.00' },
        { name: "Jack Daniel's", priceCopa: '7.50', priceCachi: '14.00' },
        { name: 'Johnnie Walker Black', priceCopa: '8.50', priceCachi: '15.00' }
      ]
    },
    {
      categoryId: 'ginebra',
      name: { es: 'Ginebras', en: 'Gins' },
      items: [
        { name: 'Beefeater', priceCopa: '6.50', priceCachi: '12.00' },
        { name: "Seagram's", priceCopa: '6.50', priceCachi: '12.00' },
        { name: 'Puerto de Indias (Fresa)', priceCopa: '7.00', priceCachi: '13.00' },
        { name: "Hendrick's", priceCopa: '9.00', priceCachi: '16.00' }
      ]
    },
    {
      categoryId: 'vodka',
      name: { es: 'Vodkas', en: 'Vodkas' },
      items: [
        { name: 'Absolut', priceCopa: '6.50', priceCachi: '12.00' },
        { name: 'Smirnoff', priceCopa: '6.50', priceCachi: '12.00' },
        { name: 'Grey Goose', priceCopa: '9.50', priceCachi: '17.00' }
      ]
    }
  ],
  cervezas: [
    { name: { es: 'Caña Mahou', en: 'Small Draft Beer' }, price: '2.00' },
    { name: { es: 'Doble Mahou', en: 'Large Draft Beer' }, price: '3.00' },
    { name: { es: 'Tercio Mahou 5 Estrellas', en: 'Mahou 5 Estrellas Bottle' }, price: '3.50' },
    { name: { es: 'Tercio Alhambra Reserva', en: 'Alhambra Reserva Bottle' }, price: '4.00' },
    { name: { es: 'Cachi de Cerveza', en: 'Cachi Beer (1 Liter)' }, price: '7.00' },
    { name: { es: 'Cachi de Calimocho', en: 'Cachi Calimocho (Wine & Cola)' }, price: '7.00' }
  ],
  chupitos: [
    { name: { es: 'Tequila José Cuervo', en: 'José Cuervo Tequila' }, price: '2.50' },
    { name: { es: 'Jägermeister', en: 'Jägermeister' }, price: '3.00' },
    { name: { es: 'Crema de Orujo', en: 'Orujo Cream' }, price: '2.50' },
    { name: { es: 'Vodka Caramelo', en: 'Caramel Vodka' }, price: '2.50' }
  ],
  otros: [
    { name: { es: 'Refrescos (Cola, Naranja, Limón...)', en: 'Sodas (Cola, Orange, Lemon...)' }, price: '2.50' },
    { name: { es: 'Zumos (Piña, Melocotón)', en: 'Juices (Pineapple, Peach)' }, price: '2.50' },
    { name: { es: 'Agua Mineral', en: 'Mineral Water' }, price: '2.00' },
    { name: { es: 'Red Bull', en: 'Red Bull' }, price: '3.50' },
    { name: { es: 'Copa de Vino (Tinto / Blanco)', en: 'Glass of Wine (Red / White)' }, price: '3.00' }
  ]
};

export const uiTexts = {
  title: 'PETER PAN BAR',
  subtitle: { es: 'El hogar del Cachi', en: 'Home of the Cachi' },
  cachiInfo: {
    es: 'Cachi = Vaso de 1 Litro',
    en: 'Cachi = 1 Liter Cup'
  },
  mixInfo: {
    es: 'Todas las copas incluyen tu mezcla favorita (Cola, Limón, Naranja, Tónica, etc).',
    en: 'All spirits include your favorite mixer (Cola, Lemon, Orange, Tonic, etc).'
  },
  copaHeader: { es: 'Copa', en: 'Glass' },
  cachiHeader: { es: 'Cachi', en: 'Cachi' }
};
