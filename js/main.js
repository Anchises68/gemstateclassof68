import React from 'react';
import ReactDOM from 'react-dom';
import Bios from './bio';
import Photos from './photo';

const alumniBio = [
  {
    'name': "Alice Lindsay Kirk",
    'image': {
      'desc': "Alice Lindsay Kirk Photo",
      'src': "images/AliceLindsayKirk.jpg"
    },
    'bio': "*She became at LPN and worked at a hospital in Walla Walla *She married to Glen Mereen (Class of ‘69) *No new additional information"
  },
  {
    'name': "Betty Weisz",
    'image': {
      'desc': "Betty Weisz Photo",
      'src': "images/BettyWeisz.jpg"
    },
    'bio': "Betty lives in Battle Ground, Wa"
  },
  {
    'name': "Caryn Loeffler Sjoren",
    'image': {
      'desc': "Caryn Loeffler Sjoren Photo",
      'src': "images/CarynLoefflerSjoren.jpg"
    },
    'bio': "After graduating from GSA, I began my college education at WWU, PUC and LLU, where I finished my degree in Physical Therapy.  During that time I was privileged to have Nancy Crisp Worley as a classmate and Donna Miracle-Judy was in the following class.  At LLU, I met my husband, Ken, who is a Dentist.  We live in Hermiston, OR and have celebrated our 45th anniversary last year.  We have 3 sons, a daughter and 4 grandchildren.  In our spare time we love camping, kayaking, motorcycling and bicycling as well as gardening.  One of my favorite trips was with NADAD (National Association of SDA Dentists) to visit and learn stories of our early Advent history.  Standing on “Ascension Rock”, getting a glimpse of how the pioneers felt Oct 22, 1844 when they expected the Lord to come.  This May/June we are looking forward to a trip with the GC Great Controversy Tour in Europe.  We will be studying as we visit various sites of the Reformation.  It is inspiring to me how these faithful believers stood victorious in the Lord.  My greatest desire is to faithful to the Lord, and I pray that our next reunion will find each one of us gathered by the Sea of Glass praising the Lord.  Caryn"
  },
  {
    'name': "Clinton Schultz",
    'image': {
      'desc': "Clinton Schultz Photo",
      'src': "images/ClintonSchultz.jpg"
    },
    'bio': "*Clinton married his Academy classmate and sweetheart, Linda Haugen in 1971.  *After graduating from GSA, Clinton attended Walla Walla College and then Seminary at Andrews University.  *From 1975 to 2000, he served as pastor for Upper Columbia Conference.   *In 2004, he received a clinical counseling degree from Eastern Washington University and founded Christian Counseling Northwest. *In 2006, he was again employed by the Upper Columbia Conference where he continues to serve as pastor and counselor in a multi-parish ministry.   *Clinton’s greatest pleasure is in sharing the good news of Jesus Christ as our Savior and soon coming King."
  },
  {
    'name': "Connie Beam Vance",
    'image': {
      'desc': "Connie Beam Vance Photo",
      'src': "images/ConnieBeamVance.jpg"
    },
    'bio': "*Connie married her sweetheart in a double wedding with her brother, Tony Beam and Patty Lovell.   Connie, Tony and Patty were all in the Class of '68.  *The two couples enjoyed laughter and many happy camping adventures together  *Connie became a Certified Nursing Assistant and spent many years caring for those that needed her care  *She enjoys living in Arizona with her husband and extended family"
  },
  {
    'name': "Dale Jenner",
    'image': {
      'desc': "Dale Jenner Photo",
      'src': "images/DaleJenner.jpg"
    },
    'bio': "*Married grade school and high school sweetheart and classmate, Judy Mc Alexander (Class of ‘69) in 1971.  Graduated with a associate degree in Forestry from Central Oregon Community College in Bend, Oregon and worked in forest management over 47 years.  Dale is actually mentioned in the Lock, Stock, and Boards: The Harris Pine Mill Story.  *Dale’s bio on the next page shows extensive entrepreneurial,  administrative leadership involving various organizations, boards, affiliations associated with forestry, fish and wildlife. *Dale and Judy have 2 children, 5 grandchildren and 1 great-grandchild.  They are very involved in the local church in Pendleton, enjoying the out of doors, researching his Native American genealogy and spending time with family."
  },
  {
    'name': "Dale Thompson",
    'image': {
      'desc': "Dale Thompson Photo",
      'src': "images/DaleThompson.jpg"
    },
    'bio': ""
  },
  {
    'name': "Dennis Mack",
    'image': {
      'desc': "Dennis Mack Photo",
      'src': "images/DennisMack.jpg"
    },
    'bio': "Lorem ipsum dolor sit amet, ad sea mazim audire, ex porro euismod est. Fierent postulant est id, vis sumo alterum albucius at, in possim laboramus sed. An prodesset moderatius pro, vix te ponderum insolens, clita voluptua oporteat cum cu. In dicunt platonem his. Pro at noster necessitatibus, vel option inermis appellantur id, vix no probo molestiae.  Bonorum albucius mea ad. Minimum eleifend adolescens an mei, veri invenire maiestatis vis no. At sed erant civibus mnesarchum, cu viderer integre iuvaret nec. Sea veri voluptaria ullamcorper at.  Ex essent reformidans sit, usu ne nonumy iisque. Eu malis vitae similique sit, vim propriae deseruisse in. Et graecis salutandi mea, id cibo partiendo eos. Eos tale consequat liberavisse ea. Mazim viris accumsan usu at, legere mnesarchum no vel, eos quis everti cu.  Cum no suas vocibus referrentur, nostro audire te eum. No vix veniam dictas disputando, ea qui splendide mediocritatem. At clita persequeris est. Nulla veritus moderatius eu eum, vis ornatus insolens interesset id, eam purto volutpat honestatis ea. No sea clita regione petentium, dictas voluptatum ullamcorper cu qui.  Eu ius novum possim, no sea blandit aliquando, sea dico simul temporibus ex. Ad putant ceteros vix, eum et aliquando torquatos, clita volutpat ut cum. Mel id habeo putent suavitate. Nam te brute clita, adipisci instructior ea vim. Tota scaevola pertinax nec ad, at sanctus splendide mel."
  },
  {
    'name': "Olof Regina Thoroddsen",
    'image': {
      'desc': "Olof Regina Maronson Torfadottir Thoroddsen Photo",
      'src': "images/OlofReginaMaronsonTorfadottirThoroddsen.jpg"

    },
    'bio': "*Lives in Akureyri, Iceland *Went to Tyriford Heyere Skole (SDA school in Norway?) *Studied Dentistry at Haskoli Islands, graduating in 1978 *Studied Neuroanatomy at Karolinska Institutet *Mother to one daughter, Grandmother, Mother in Law, Mezzosoprano"
  },
  {
    'name': "Pam & Franklin Loop",
    'image': {
      'desc': "Pam & Franklin Photo",
      'src': "images/PamFranklinLoop.jpg"
    },
    'bio': "*Married Jerry Loop (GSA Class of ‘67) in 1970 *Attended WWU and completed Graduate degree in Mathematics from Boise State *Had two children, Ben and Becky. They also have10 grandchildren *Jerry has a stone and tile business in Caldwell and Pam has been actively involved in the business *They are very involved in their grandchildren’s lives and their local church"
  },
  {
    'name': "Sandra Williams Depner",
    'image': {
      'desc': "Sandra Williams Depner Photo",
      'src': "images/SandraWilliamsDepner.jpg"
    },
    'bio': "Lorem ipsum dolor sit amet, ad sea mazim audire, ex porro euismod est. Fierent postulant est id, vis sumo alterum albucius at, in possim laboramus sed. An prodesset moderatius pro, vix te ponderum insolens, clita voluptua oporteat cum cu. In dicunt platonem his. Pro at noster necessitatibus, vel option inermis appellantur id, vix no probo molestiae.  Bonorum albucius mea ad. Minimum eleifend adolescens an mei, veri invenire maiestatis vis no. At sed erant civibus mnesarchum, cu viderer integre iuvaret nec. Sea veri voluptaria ullamcorper at.  Ex essent reformidans sit, usu ne nonumy iisque. Eu malis vitae similique sit, vim propriae deseruisse in. Et graecis salutandi mea, id cibo partiendo eos. Eos tale consequat liberavisse ea. Mazim viris accumsan usu at, legere mnesarchum no vel, eos quis everti cu.  Cum no suas vocibus referrentur, nostro audire te eum. No vix veniam dictas disputando, ea qui splendide mediocritatem. At clita persequeris est. Nulla veritus moderatius eu eum, vis ornatus insolens interesset id, eam purto volutpat honestatis ea. No sea clita regione petentium, dictas voluptatum ullamcorper cu qui.  Eu ius novum possim, no sea blandit aliquando, sea dico simul temporibus ex. Ad putant ceteros vix, eum et aliquando torquatos, clita volutpat ut cum. Mel id habeo putent suavitate. Nam te brute clita, adipisci instructior ea vim. Tota scaevola pertinax nec ad, at sanctus splendide mel."
  }

]

const alumniAlbum = [
  {
    'image': "images/20180331_191417.jpg"
  },
  {
    'image': "images/20180331_191418.jpg"
  },
  {
    'image': "images/20180331_191420.jpg"
  },
  {
    'image': "images/20180331_191152.jpg"
  },
  {
    'image': "images/20180331_191256.jpg"
  },
  {
    'image': "images/20180331_191411.jpg"
  },
  {
    'image': "images/20180331_191414.jpg"
  },
  {
    'image': "images/20180331_191424.jpg"
  },
  {
    'image': "images/20180331_191433.jpg"
  },
  {
    'image': "images/20180331_191435.jpg"
  },
  {
    'image': "images/20180331_191545.jpg"
  },
  {
    'image': "images/20180331_191553.jpg"
  },
  {
    'image': "images/20180331_191554.jpg"
  },
  {
    'image': "images/20180331_191557.jpg"
  },
  {
    'image': "images/20180331_191620.jpg"
  },
  {
    'image': "images/20180331_191624.jpg"
  },
  {
    'image': "images/20180331_191627.jpg"
  },
  {
    'image': "images/20180331_191818.jpg"
  },
  {
    'image': "images/20180331_191820.jpg"
  },
  {
    'image': "images/20180331_192038.jpg"
  },
  {
    'image': "images/20180331_192039.jpg"
  },
  {
    'image': "images/20180331_192056.jpg"
  },
  {
    'image': "images/20180331_192234.jpg"
  },
  {
    'image': "images/20180331_192801.jpg"
  },
  {
    'image': "images/20180331_193323.jpg"
  },
  {
    'image': "images/20180331_193459.jpg"
  },
  {
    'image': "images/20180331_193516.jpg"
  },
  {
    'image': "images/20180331_193529.jpg"
  },
  {
    'image': "images/20180331_193533.jpg"
  },
  {
    'image': "images/20180331_193614.jpg"
  },
  {
    'image': "images/20180331_193619.jpg"
  },
  {
    'image': "images/20180331_193624.jpg"
  },
  {
    'image': "images/20180331_193631.jpg"
  },
  {
    'image': "images/20180331_193657.jpg"
  },
  {
    'image': "images/20180331_193659.jpg"
  },
  {
    'image': "images/20180331_193710.jpg"
  },
  {
    'image': "images/20180331_193719.jpg"
  },
  {
    'image': "images/20180331_193737.jpg"
  },
  {
    'image': "images/20180331_193742.jpg"
  },
  {
    'image': "images/20180331_193811.jpg"
  },
  {
    'image': "images/20180331_193813.jpg"
  },
  {
    'image': "images/20180331_193906.jpg"
  },
  {
    'image': "images/20180331_193908.jpg"
  },
  {
    'image': "images/20180331_193910.jpg"
  },
  {
    'image': "images/20180331_193919.jpg"
  },
  {
    'image': "images/20180331_193921.jpg"
  },
  {
    'image': "images/20180331_193942.jpg"
  },
  {
    'image': "images/20180331_194007.jpg"
  },
  {
    'image': "images/20180331_194010.jpg"
  },
  {
    'image': "images/20180331_194110.jpg"
  },
  {
    'image': "images/20180331_194117.jpg"
  },
  {
    'image': "images/20180331_194249.jpg"
  },
  {
    'image': "images/20180331_194254.jpg"
  },
  {
    'image': "images/20180331_194331.jpg"
  },
  {
    'image': "images/20180331_194338.jpg"
  },
  {
    'image': "images/20180331_194919.jpg"
  },
  {
    'image': "images/20180331_195149.jpg"
  },
  {
    'image': "images/20180331_195546.jpg"
  },
  {
    'image': "images/20180331_195549.jpg"
  },
  {
    'image': "images/20180331_195603.jpg"
  },
  {
    'image': "images/20180331_195604.jpg"
  },
  {
    'image': "images/20180331_195606.jpg"
  },
  {
    'image': "images/20180331_195619.jpg"
  },
  {
    'image': "images/20180331_195916.jpg"
  },
  {
    'image': "images/20180331_195931.jpg"
  },
  {
    'image': "images/20180331_200522.jpg"
  },
  {
    'image': "images/20180331_200531.jpg"
  },
  {
    'image': "images/20180331_200544.jpg"
  },
  {
    'image': "images/20180331_201145.jpg"
  },
  {
    'image': "images/20180331_201305.jpg"
  },
  {
    'image': "images/20180331_201314.jpg"
  },
  {
    'image': "images/20180331_203341.jpg"
  },
  {
    'image': "images/20180331_203353.jpg"
  },
  {
    'image': "images/20180331_203512.jpg"
  },
  {
    'image': "images/20180331_210438.jpg"
  },
  {
    'image': "images/20180331_210440.jpg"
  },
  {
    'image': "images/20180331_213337.jpg"
  },
  {
    'image': "images/IMG_0001.jpg"
  },
  {
    'image': "images/IMG_0003.jpg"
  },
  {
    'image': "images/IMG_0004.jpg"
  },
  {
    'image': "images/IMG_0005.jpg"
  },
  {
    'image': "images/IMG_0006.jpg"
  },
  {
    'image': "images/IMG_0007.jpg"
  },
  {
    'image': "images/IMG_0008.jpg"
  },
  {
    'image': "images/IMG_0009.jpg"
  },
  {
    'image': "images/IMG_0010.jpg"
  },
  {
    'image': "images/IMG_0011.jpg"
  },
  {
    'image': "images/IMG_0012.jpg"
  },
  {
    'image': "images/IMG_0013.jpg"
  },
  {
    'image': "images/IMG_0014.jpg"
  },
  {
    'image': "images/IMG_0015.jpg"
  },
  {
    'image': "images/IMG_0016.jpg"
  },
  {
    'image': "images/IMG_0017.jpg"
  },
  {
    'image': "images/IMG_0018.jpg"
  },
  {
    'image': "images/IMG_0019.jpg"
  },
  {
    'image': "images/IMG_0020.jpg"
  },
  {
    'image': "images/IMG_0021.jpg"
  },
  {
    'image': "images/IMG_0022.jpg"
  },
  {
    'image': "images/IMG_0023.jpg"
  },
  {
    'image': "images/IMG_0024.jpg"
  },
  {
    'image': "images/IMG_0025.jpg"
  },
  {
    'image': "images/IMG_0026.jpg"
  },
  {
    'image': "images/IMG_0027.jpg"
  },
  {
    'image': "images/IMG_0028.jpg"
  },
  {
    'image': "images/IMG_0029.jpg"
  },
  {
    'image': "images/IMG_0030.jpg"
  },
  {
    'image': "images/IMG_0031.jpg"
  },
  {
    'image': "images/IMG_0032.jpg"
  },
  {
    'image': "images/IMG_0033.jpg"
  },
  {
    'image': "images/IMG_0034.jpg"
  },
  {
    'image': "images/IMG_0035.jpg"
  },
  {
    'image': "images/IMG_0036.jpg"
  },
  {
    'image': "images/IMG_0037.jpg"
  },
  {
    'image': "images/IMG_0038.jpg"
  },
  {
    'image': "images/IMG_0039.jpg"
  },
  {
    'image': "images/IMG_0040.jpg"
  },
  {
    'image': "images/IMG_0041.jpg"
  },
  {
    'image': "images/IMG_0042.jpg"
  },
  {
    'image': "images/IMG_0043.jpg"
  },
  {
    'image': "images/IMG_0044.jpg"
  },
  {
    'image': "images/IMG_0045.jpg"
  },
  {
    'image': "images/IMG_0046.jpg"
  },
  {
    'image': "images/IMG_0047.jpg"
  },
  {
    'image': "images/IMG_0048.jpg"
  },
  {
    'image': "images/IMG_0049.jpg"
  },
  {
    'image': "images/IMG_0050.jpg"
  },
  {
    'image': "images/IMG_0051.jpg"
  },
  {
    'image': "images/IMG_0052.jpg"
  },
  {
    'image': "images/IMG_0053.jpg"
  },
  {
    'image': "images/IMG_0054.jpg"
  },
  {
    'image': "images/IMG_0055.jpg"
  },
  {
    'image': "images/IMG_0056.jpg"
  },
  {
    'image': "images/IMG_0057.jpg"
  },
  {
    'image': "images/IMG_0058.jpg"
  },
  {
    'image': "images/IMG_0059.jpg"
  },
  {
    'image': "images/IMG_0060.jpg"
  },
  {
    'image': "images/IMG_0061.jpg"
  },
  {
    'image': "images/IMG_0062.jpg"
  },
  {
    'image': "images/IMG_0063.jpg"
  },
  {
    'image': "images/IMG_0064.jpg"
  },
  {
    'image': "images/IMG_0065.jpg"
  },
  {
    'image': "images/IMG_0067.jpg"
  },
  {
    'image': "images/IMG_0068.jpg"
  },
  {
    'image': "images/IMG_0069.jpg"
  },
  {
    'image': "images/IMG_0070.jpg"
  },
  {
    'image': "images/IMG_0071.jpg"
  },
  {
    'image': "images/IMG_0072.jpg"
  },
  {
    'image': "images/IMG_0073.jpg"
  },
  {
    'image': "images/IMG_0077.jpg"
  },
  {
    'image': "images/IMG_0078.jpg"
  },
  {
    'image': "images/IMG_0079.jpg"
  },
  {
    'image': "images/IMG_0080.jpg"
  },
  {
    'image': "images/IMG_0081.jpg"
  },
  {
    'image': "images/IMG_0082.jpg"
  },
  {
    'image': "images/Reunion1.jpg"
  },
  {
    'image': "images/Reunion2.jpg"
  },
  {
    'image': "images/Reunion3.jpg"
  },
  {
    'image': "images/Reunion4.jpg"
  },
  {
    'image': "images/Reunion5.jpg"
  },
  {
    'image': "images/Reunion6.jpg"
  },
  {
    'image': "images/Reunion7.jpg"
  },
  {
    'image': "images/Reunion8.jpg"
  },
  {
    'image': "images/Reunion9.jpg"
  },
  {
    'image': "images/Reunion10.jpg"
  },
  {
    'image': "images/Reunion11.jpg"
  },
  {
    'image': "images/Reunion12.jpg"
  },
  {
    'image': "images/Reunion13.jpg"
  },
  {
    'image': "images/Reunion14.jpg"
  },
  {
    'image': "images/Reunion15.jpg"
  },
  {
    'image': "images/Reunion16.jpg"
  },
  {
    'image': "images/Reunion17.jpg"
  },
  {
    'image': "images/Reunion18.jpg"
  },
  {
    'image': "images/Reunion19.jpg"
  },
  {
    'image': "images/Reunion20.jpg"
  },
  {
    'image': "images/Reunion21.jpg"
  },
  {
    'image': "images/Reunion22.jpg"
  },
  {
    'image': "images/Reunion23.jpg"
  },
  {
    'image': "images/Reunion24.jpg"
  },
  {
    'image': "images/Reunion25.jpg"
  },
  {
    'image': "images/Reunion26.jpg"
  },
  {
    'image': "images/Reunion27.jpg"
  },
  {
    'image': "images/Reunion28.jpg"
  },
  {
    'image': "images/Reunion29.jpg"
  }
]


class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Bios alumni={alumniBio} />
        <Photos photo={alumniAlbum} />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('photo'));
