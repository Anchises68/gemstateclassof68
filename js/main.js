import React from 'react';
import ReactDOM from 'react-dom';
import Bios from './bio';
import Photos from './photo';

const alumniBio = [
  {
    'name': "John Doe",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/team1.jpg"
    },
    'bio': "Lorem ipsum dolor sit amet, ad sea mazim audire, ex porro euismod est. Fierent postulant est id, vis sumo alterum albucius at, in possim laboramus sed. An prodesset moderatius pro, vix te ponderum insolens, clita voluptua oporteat cum cu. In dicunt platonem his. Pro at noster necessitatibus, vel option inermis appellantur id, vix no probo molestiae.  Bonorum albucius mea ad. Minimum eleifend adolescens an mei, veri invenire maiestatis vis no. At sed erant civibus mnesarchum, cu viderer integre iuvaret nec. Sea veri voluptaria ullamcorper at.  Ex essent reformidans sit, usu ne nonumy iisque. Eu malis vitae similique sit, vim propriae deseruisse in. Et graecis salutandi mea, id cibo partiendo eos. Eos tale consequat liberavisse ea. Mazim viris accumsan usu at, legere mnesarchum no vel, eos quis everti cu.  Cum no suas vocibus referrentur, nostro audire te eum. No vix veniam dictas disputando, ea qui splendide mediocritatem. At clita persequeris est. Nulla veritus moderatius eu eum, vis ornatus insolens interesset id, eam purto volutpat honestatis ea. No sea clita regione petentium, dictas voluptatum ullamcorper cu qui.  Eu ius novum possim, no sea blandit aliquando, sea dico simul temporibus ex. Ad putant ceteros vix, eum et aliquando torquatos, clita volutpat ut cum. Mel id habeo putent suavitate. Nam te brute clita, adipisci instructior ea vim. Tota scaevola pertinax nec ad, at sanctus splendide mel."
  },
  {
    'name': "Bob",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/team2.jpg"
    },
    'bio': "Lorem ipsum dolor sit amet, ad sea mazim audire, ex porro euismod est. Fierent postulant est id, vis sumo alterum albucius at, in possim laboramus sed. An prodesset moderatius pro, vix te ponderum insolens, clita voluptua oporteat cum cu. In dicunt platonem his. Pro at noster necessitatibus, vel option inermis appellantur id, vix no probo molestiae.  Bonorum albucius mea ad. Minimum eleifend adolescens an mei, veri invenire maiestatis vis no. At sed erant civibus mnesarchum, cu viderer integre iuvaret nec. Sea veri voluptaria ullamcorper at.  Ex essent reformidans sit, usu ne nonumy iisque. Eu malis vitae similique sit, vim propriae deseruisse in. Et graecis salutandi mea, id cibo partiendo eos. Eos tale consequat liberavisse ea. Mazim viris accumsan usu at, legere mnesarchum no vel, eos quis everti cu.  Cum no suas vocibus referrentur, nostro audire te eum. No vix veniam dictas disputando, ea qui splendide mediocritatem. At clita persequeris est. Nulla veritus moderatius eu eum, vis ornatus insolens interesset id, eam purto volutpat honestatis ea. No sea clita regione petentium, dictas voluptatum ullamcorper cu qui.  Eu ius novum possim, no sea blandit aliquando, sea dico simul temporibus ex. Ad putant ceteros vix, eum et aliquando torquatos, clita volutpat ut cum. Mel id habeo putent suavitate. Nam te brute clita, adipisci instructior ea vim. Tota scaevola pertinax nec ad, at sanctus splendide mel."
  },
  {
    'name': "Molly",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/team3.jpg"
    },
    'bio': "Lorem ipsum dolor sit amet, ad sea mazim audire, ex porro euismod est. Fierent postulant est id, vis sumo alterum albucius at, in possim laboramus sed. An prodesset moderatius pro, vix te ponderum insolens, clita voluptua oporteat cum cu. In dicunt platonem his. Pro at noster necessitatibus, vel option inermis appellantur id, vix no probo molestiae.  Bonorum albucius mea ad. Minimum eleifend adolescens an mei, veri invenire maiestatis vis no. At sed erant civibus mnesarchum, cu viderer integre iuvaret nec. Sea veri voluptaria ullamcorper at.  Ex essent reformidans sit, usu ne nonumy iisque. Eu malis vitae similique sit, vim propriae deseruisse in. Et graecis salutandi mea, id cibo partiendo eos. Eos tale consequat liberavisse ea. Mazim viris accumsan usu at, legere mnesarchum no vel, eos quis everti cu.  Cum no suas vocibus referrentur, nostro audire te eum. No vix veniam dictas disputando, ea qui splendide mediocritatem. At clita persequeris est. Nulla veritus moderatius eu eum, vis ornatus insolens interesset id, eam purto volutpat honestatis ea. No sea clita regione petentium, dictas voluptatum ullamcorper cu qui.  Eu ius novum possim, no sea blandit aliquando, sea dico simul temporibus ex. Ad putant ceteros vix, eum et aliquando torquatos, clita volutpat ut cum. Mel id habeo putent suavitate. Nam te brute clita, adipisci instructior ea vim. Tota scaevola pertinax nec ad, at sanctus splendide mel."
  },
  {
    'name': "Julio",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/team4.jpg"
    },
    'bio': "Lorem ipsum dolor sit amet, ad sea mazim audire, ex porro euismod est. Fierent postulant est id, vis sumo alterum albucius at, in possim laboramus sed. An prodesset moderatius pro, vix te ponderum insolens, clita voluptua oporteat cum cu. In dicunt platonem his. Pro at noster necessitatibus, vel option inermis appellantur id, vix no probo molestiae.  Bonorum albucius mea ad. Minimum eleifend adolescens an mei, veri invenire maiestatis vis no. At sed erant civibus mnesarchum, cu viderer integre iuvaret nec. Sea veri voluptaria ullamcorper at.  Ex essent reformidans sit, usu ne nonumy iisque. Eu malis vitae similique sit, vim propriae deseruisse in. Et graecis salutandi mea, id cibo partiendo eos. Eos tale consequat liberavisse ea. Mazim viris accumsan usu at, legere mnesarchum no vel, eos quis everti cu.  Cum no suas vocibus referrentur, nostro audire te eum. No vix veniam dictas disputando, ea qui splendide mediocritatem. At clita persequeris est. Nulla veritus moderatius eu eum, vis ornatus insolens interesset id, eam purto volutpat honestatis ea. No sea clita regione petentium, dictas voluptatum ullamcorper cu qui.  Eu ius novum possim, no sea blandit aliquando, sea dico simul temporibus ex. Ad putant ceteros vix, eum et aliquando torquatos, clita volutpat ut cum. Mel id habeo putent suavitate. Nam te brute clita, adipisci instructior ea vim. Tota scaevola pertinax nec ad, at sanctus splendide mel."
  },
  {
    'name': "Pepe",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample6.jpg"

    },
    'bio': "Lorem ipsum dolor sit amet, ad sea mazim audire, ex porro euismod est. Fierent postulant est id, vis sumo alterum albucius at, in possim laboramus sed. An prodesset moderatius pro, vix te ponderum insolens, clita voluptua oporteat cum cu. In dicunt platonem his. Pro at noster necessitatibus, vel option inermis appellantur id, vix no probo molestiae.  Bonorum albucius mea ad. Minimum eleifend adolescens an mei, veri invenire maiestatis vis no. At sed erant civibus mnesarchum, cu viderer integre iuvaret nec. Sea veri voluptaria ullamcorper at.  Ex essent reformidans sit, usu ne nonumy iisque. Eu malis vitae similique sit, vim propriae deseruisse in. Et graecis salutandi mea, id cibo partiendo eos. Eos tale consequat liberavisse ea. Mazim viris accumsan usu at, legere mnesarchum no vel, eos quis everti cu.  Cum no suas vocibus referrentur, nostro audire te eum. No vix veniam dictas disputando, ea qui splendide mediocritatem. At clita persequeris est. Nulla veritus moderatius eu eum, vis ornatus insolens interesset id, eam purto volutpat honestatis ea. No sea clita regione petentium, dictas voluptatum ullamcorper cu qui.  Eu ius novum possim, no sea blandit aliquando, sea dico simul temporibus ex. Ad putant ceteros vix, eum et aliquando torquatos, clita volutpat ut cum. Mel id habeo putent suavitate. Nam te brute clita, adipisci instructior ea vim. Tota scaevola pertinax nec ad, at sanctus splendide mel."
  },
  {
    'name': "Sam",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample7.jpg"
    },
    'bio': "Lorem ipsum dolor sit amet, ad sea mazim audire, ex porro euismod est. Fierent postulant est id, vis sumo alterum albucius at, in possim laboramus sed. An prodesset moderatius pro, vix te ponderum insolens, clita voluptua oporteat cum cu. In dicunt platonem his. Pro at noster necessitatibus, vel option inermis appellantur id, vix no probo molestiae.  Bonorum albucius mea ad. Minimum eleifend adolescens an mei, veri invenire maiestatis vis no. At sed erant civibus mnesarchum, cu viderer integre iuvaret nec. Sea veri voluptaria ullamcorper at.  Ex essent reformidans sit, usu ne nonumy iisque. Eu malis vitae similique sit, vim propriae deseruisse in. Et graecis salutandi mea, id cibo partiendo eos. Eos tale consequat liberavisse ea. Mazim viris accumsan usu at, legere mnesarchum no vel, eos quis everti cu.  Cum no suas vocibus referrentur, nostro audire te eum. No vix veniam dictas disputando, ea qui splendide mediocritatem. At clita persequeris est. Nulla veritus moderatius eu eum, vis ornatus insolens interesset id, eam purto volutpat honestatis ea. No sea clita regione petentium, dictas voluptatum ullamcorper cu qui.  Eu ius novum possim, no sea blandit aliquando, sea dico simul temporibus ex. Ad putant ceteros vix, eum et aliquando torquatos, clita volutpat ut cum. Mel id habeo putent suavitate. Nam te brute clita, adipisci instructior ea vim. Tota scaevola pertinax nec ad, at sanctus splendide mel."
  },
  {
    'name': "Karl",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample8.jpg"
    },
    'bio': "Lorem ipsum dolor sit amet, ad sea mazim audire, ex porro euismod est. Fierent postulant est id, vis sumo alterum albucius at, in possim laboramus sed. An prodesset moderatius pro, vix te ponderum insolens, clita voluptua oporteat cum cu. In dicunt platonem his. Pro at noster necessitatibus, vel option inermis appellantur id, vix no probo molestiae.  Bonorum albucius mea ad. Minimum eleifend adolescens an mei, veri invenire maiestatis vis no. At sed erant civibus mnesarchum, cu viderer integre iuvaret nec. Sea veri voluptaria ullamcorper at.  Ex essent reformidans sit, usu ne nonumy iisque. Eu malis vitae similique sit, vim propriae deseruisse in. Et graecis salutandi mea, id cibo partiendo eos. Eos tale consequat liberavisse ea. Mazim viris accumsan usu at, legere mnesarchum no vel, eos quis everti cu.  Cum no suas vocibus referrentur, nostro audire te eum. No vix veniam dictas disputando, ea qui splendide mediocritatem. At clita persequeris est. Nulla veritus moderatius eu eum, vis ornatus insolens interesset id, eam purto volutpat honestatis ea. No sea clita regione petentium, dictas voluptatum ullamcorper cu qui.  Eu ius novum possim, no sea blandit aliquando, sea dico simul temporibus ex. Ad putant ceteros vix, eum et aliquando torquatos, clita volutpat ut cum. Mel id habeo putent suavitate. Nam te brute clita, adipisci instructior ea vim. Tota scaevola pertinax nec ad, at sanctus splendide mel."
  },
  {
    'name': "Adolf",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample1.jpg"
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
    'image': "images/IMG_0075.jpg"
  },
  {
    'image': "images/IMG_0076.jpg"
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
