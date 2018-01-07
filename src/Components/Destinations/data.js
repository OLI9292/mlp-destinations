import colors from '../../Library/colors';

export default [
  {
    name: 'Africa',
    places: 'Botswana, Ethiopia, Kenya, Madagascar, Malawi, Mauritius, Morocco, Mozambique, Namibia, Rwanda, Seychelles, South Africa, Tanzania, Uganda, Zambia, Zimbabwe',
    slug: 'africa',
    image: require('../../Library/Images/destinations/africa/lions.jpg'),
    imagePath: 'destinations/africa/lions.jpg',
    darkenImage: 0.5,
    description: 'The breadth and scope of diversity in Africa requires a number of specialists. Aside from the individual country differences the safari options are also abundant, and it is essential to have a knowledgeable and trustworthy resource. The specialists I work with have often lived and worked in their regions of expertise and each have a deep love of Africa which translates to the service they provide. Whether it is a self-drive safari in Namibia, a tour of the souks in Fez or a gorilla trek you will be connected to a true expert.',
    informations: []
  },
  {
    name: 'Asia',
    places: 'Bhutan, Burma, Cambodia, India, Indonesia, Japan, Laos, Malaysia, Nepal, Sri Lanka, Thailand, The Maldives, Vietnam',
    slug: 'asia',
    image: require('../../Library/Images/destinations/asia/boats.jpg'),
    imagePath: 'destinations/asia/boats.jpg',
    description: 'Good transport connections and feeling secure are two of the most important requisites for traveling in Asian countries. This all comes down to knowing the right people on the ground and the loyalty that can only be achieved by their long-term working relationships with the specialist. Traveling to Asia is not only about visiting cultural sites but receiving the right advice to pace your time and not overload your itinerary. For example, India is such a huge and diverse country that it is advisable to savor fewer areas for longer rather than rush around with only a day or two in each place.',
    darkenImage: 0.45,
    informations: []
  },
  {
    name: 'Central & South America',
    places: 'Antarctica, Argentina, Belize, Bolivia, Brazil, Chile, Colombia, Costa Rica, Cuba, Ecuador, Guatemala, Mexico, Panama, Peru, The Galapagos, Turks & Caicos, Uruguay',
    slug: 'central-and-south-america',
    image: require('../../Library/Images/destinations/south-america/cowboy.png'),
    imagePath: 'destinations/south-america/cowboy.png',
    description: 'As part of the world I have frequented the most I am always excited to share my knowledge of its vast range of possibilities. For travelers from North America it is an ideal year-round vacation spot as much closer than many realize with a number of direct flights from US hubs, and no jet-lag. It is also a region where two countries often combine well, such as Peru with Bolivia and Argentina and Uruguay. And now there are an exciting number of independent, design-worthy lodges in the more extreme and stunningly beautiful areas so you don’t have to rough it. Whether traveling as a family or as a couple the diversity of activities is abundant, and even a 7 day trip can include a large range of different experiences.',
    darkenImage: 0.4,
    informations: [
      {
        title: 'FROMAGERIE',
        location: 'Vira,Vira, Chile',
        content: 'Cheese is not highly rated in Chile but at this beautiful private lodge in the heart of the lake and volcano district, the owner decided to address this issue. Alongside their organic farm Michael built a fully-fledged fromagerie, imported cultures from Europe, and employed a full-time cheese-maker who is supervised by annual visits from a Swiss expert. The result is shavings of real Parmigiano served on farm-raised wild boar risotto.',
        imageUrl: require('../../Library/Images/destinations/south-america/cheese.jpg'),
        frameColor: colors.green,
        orientFrame: ['bottom', 'right'],
        inverted: true
      },
      {
        title: 'WINERY',
        location: 'Narbona, Uruguay',
        content: 'Rather like Sleeping Beauty, the Narbona vineyard was brought back to life after 30 years of abandonment. The main house and neighboring grocery store have been converted into a small hotel and appealing restaurant. Parrots nest in the surrounding trees, and a stunning state of the art building now houses the wine production side. A perfect break after a visit to the UNESCO city of Colonia.',
        imageUrl: require('../../Library/Images/destinations/south-america/fruit.jpg'),
        frameColor: colors.red,
        orientFrame: ['bottom', 'left'],
        inverted: false
      },
      {
        title: 'RELAX',
        location: 'Cordoba, Argentina',
        content: 'Cordoba is a region in the north west of Argentina mostly known for dove-shooting. There is also some amazing riding to be had, especially if you are looking for a really authentic estancia experience and a few days rest and relaxation. There are a couple of different but truly fantastic estancias to suit beginners and advanced riders.',
        imageUrl: require('../../Library/Images/destinations/south-america/horse.jpg'),
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
    image: require('../../Library/Images/destinations/europe/doorways.jpg'),
    imagePath: 'destinations/europe/doorways.jpg',
    description: 'Unlike other destinations, the \'full service\' treatment with guides and an itinerary is often not necessary for European travel. However, for Italy and the Nordic countries I work with two out- standing specialists who can make all the difference to your trip if you decide some direction with villa rentals or activities would be helpful.',
    darkenImage: 0.5,
    informations: []
  },
  {
    name: 'Middle East',
    places: 'Iran, Jordan, Oman, UAE',
    slug: 'middle-east',
    image: require('../../Library/Images/destinations/middle-east/palace.png'),
    imagePath: 'destinations/middle-east/palace.png',
    description: 'This a select region with travel only safe to some countries and where the situation can change constantly. These currently include Oman, UAE, Jordan and Iran.',
    darkenImage: 0.55,
    informations: []
  },
  {
    name: 'USA & Canada',
    places: 'USA, Canada',
    slug: 'usa-and-canada',
    image: require('../../Library/Images/destinations/usa-and-canada/lighthouse.png'),
    imagePath: 'destinations/usa-and-canada/lighthouse.png',
    description: 'Similar to Europe, regular travel can easily be self-booked. If you want to expand the options, such as a different kind of US road-trip, seeing the Aurora Borealis from Canada or a Quebec gourmet trail I would be happy to provide an outline. Having lived in both countries for the past 30 years I have done some exploring and found a number of unique places. When it comes to booking flights and hotels I can connect you with the right specialist.',
    darkenImage: 0.5,
    informations: []
  }
]
