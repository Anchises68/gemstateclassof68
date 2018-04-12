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
    'image': "images/house2.jpg"
  },
  {
    'image': "images/house3.jpg"
  },
  {
    'image': "images/house4.jpg"
  },
  {
    'image': "images/house5.jpg"
  },
  {
    'image': "images/house3.jpg"
  },
  {
    'image': "images/house4.jpg"
  },
  {
    'image': "images/house3.jpg"
  },
  {
    'image': "images/house2.jpg"
  },
  {
    'image': "images/house4.jpg"
  },
  {
    'image': "images/house5.jpg"
  },
  {
    'image': "images/house3.jpg"
  },
  {
    'image': "images/house4.jpg"
  },
  {
    'image': "images/house3.jpg"
  },
  {
    'image': "images/house2.jpg"
  },
  {
    'image': "images/house4.jpg"
  },
  {
    'image': "images/house5.jpg"
  },
  {
    'image': "images/house3.jpg"
  },
  {
    'image': "images/house4.jpg"
  },
  {
    'image': "images/house3.jpg"
  },
  {
    'image': "images/house4.jpg"
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
