import colors from '../../Library/colors';

export default [
  {
    name: 'Africa',
    places: 'Botswana, Ethiopia, Kenya, Madagascar, Malawi, Mauritius, Morocco, Mozambique, Namibia, Rwanda, Seychelles, South Africa, Tanzania, Uganda, Zambia, Zimbabwe',
    slug: 'africa',
    image: require('../../Library/Images/Destinations/africa.jpg'),
    informations: []
  },
  {
    name: 'Asia',
    places: 'Bhutan, Burma, Cambodia, India, Indonesia, Japan, Laos, Malaysia, Nepal, Sri Lanka, Thailand, The Maldives, Vietnam',
    slug: 'asia',
    image: require('../../Library/Images/Destinations/asia.jpg'),
    informations: []
  },
  {
    name: 'Central & South America',
    places: 'Antarctica, Argentina, Belize, Bolivia, Brazil, Chile, Colombia, Costa Rica, Cuba, Ecuador, Guatemala, Mexico, Panama, Peru, The Galapagos, Turks & Caicos, Uruguay',
    slug: 'central-and-south-america',
    image: require('../../Library/Images/Destinations/central-and-south-america.jpg'),
    description: 'As the region I have frequented the most I am always excited to share my knowledge of its vast range of possibilities. For travelers from North America it is an ideal year-round vacation destination as much closer than many realize with a number of direct flights from US hubs, and no jet-lag. It is also a region where two countries often combine well, such as Peru with Bolivia and Argentina and Uruguay. And there are now an exciting number of independent, design-worthy lodges in the more extreme and stunningly beautiful areas so you don\'t have to rough it. Whether traveling as a family or as a couple the diversity of activities is abundant, and even a 7 day trip can include a large range of different experiences.',
    informations: [
      {
        title: 'FROMAGERIE',
        location: 'Vira,Vira, Chile',
        content: 'Cheese is not highly rated in Chile but at this beautiful private lodge in the heart of the lake and volcano district, the owner decided to address this issue. Alongside their organic farm Michael built a fully-fledged fromagerie, imported cultures from Europe, and employed a full-time cheese-maker who is supervised by annual visits from a Swiss expert. The result is shavings of real Parmigiano served on farm-raised wild boar risotto.',
        imageUrl: require('../../Library/Images/Destinations/central-and-south-america-1.jpg'),
        frameColor: colors.green,
        orientFrame: ['bottom', 'right'],
        inverted: true
      },
      {
        title: 'WINERY',
        location: 'Narbona, Uruguay',
        content: 'Rather like Sleeping Beauty, the Narbona vineyard was brought back to life after 30 years of abandonment. The main house and neighboring grocery store have been converted into a small hotel and appealing restaurant. Parrots nest in the surrounding trees, and a stunning state of the art building now houses the wine production side. A perfect break after a visit to the UNESCO city of Colonia.',
        imageUrl: require('../../Library/Images/Destinations/central-and-south-america-2.jpg'),
        frameColor: colors.red,
        orientFrame: ['bottom', 'left'],
        inverted: false
      },
      {
        title: 'RELAX',
        location: 'Cordoba, Argentina',
        content: 'Cordoba is a region in the north west of Argentina mostly known for dove-shooting. There is also some amazing riding to be had, especially if you are looking for a really authentic estancia experience and a few days rest and relaxation. There are a couple of different but truly fantastic estancias to suit beginners and advanced riders.',
        imageUrl: require('../../Library/Images/Destinations/central-and-south-america-3.jpg'),
        frameColor: colors.green,
        orientFrame: ['bottom', 'right'],
        inverted: true
      }
    ]
  },
  {
    name: 'Europe',
    places: 'Denmark, Finland, Greenland, Iceland, Italy, Norway, Sweden',
    slug: 'europe',
    image: require('../../Library/Images/Destinations/europe.jpg'),
    informations: []
  },
  {
    name: 'Middle East',
    places: 'Jordan, Oman, UAE',
    slug: 'middle-east',
    image: require('../../Library/Images/Destinations/middle-east.jpg'),
    informations: []
  },
  {
    name: 'USA & Canada',
    places: 'USA, Canada',
    slug: 'usa-and-canada',
    image: require('../../Library/Images/Destinations/canada.jpg'),
    informations: []
  }
]
