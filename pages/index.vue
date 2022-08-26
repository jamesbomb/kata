<template>
  <div>
    <Header :places="places" :profile-links="profileLinks" />
    <TravelList :places="places" />
  </div>
</template>

<script>

import Header from "~/components/Header.vue";
import TravelList from "~/components/TravelList/TravelList.vue";

export default {
  name: 'Index',
  components: { Header, TravelList },
  data() {
    return {
      places: [
        { name: 'Europa', link: '#', sectionTitle: 'Vedi tutti i viaggi in Europa', description: 'È la culla delle grandi civiltà antiche, di Imperi che hanno navigato nell’oro e sono caduti nelle ceneri; patria di scrittori, poeti e filosofi che hanno posto le basi del pensiero dell’uomo, di artisti che con la loro arte hanno influenzato il mondo. Centro della Terra per secoli, da qui partirono i grandi navigatori verso l’ignoto– mentre ora è meta ambita per i viaggiatori da tutto il globo. Ci sono infinite storie da ascoltare e innumerevoli scorci nascosti da ammirare: ogni strada è avventura, ogni angolo una nuova scoperta.' },
        { name: 'Asia', link: '#', sectionTitle: 'Vedi tutti i viaggi in Asia', description: 'Se contiamo tutte le sue parti, l’Asia vince il primato del continente più esteso al mondo, oltre ad essere l’unico bagnato da tre oceani - un viaggio qui è uno di quelli che un po’ ti cambia la vita. Culla di antichi imperi, a renderlo unico è l’incredibile varietà di popoli che lo abitano, assieme alle loro religioni e tradizioni: la cultura di queste terre sta sospesa nell’aria e si respira nei gesti semplici di tutti i giorni. Chi viaggia in queste terre è consapevole che incontrerà sempre sorrisi accoglienti e parole di benvenuto e che incrocerà gli sguardi profondi di chi nasconde antichi segreti e conosce già, in cuor suo, il futuro del mondo. Noi lo esploriamo in tutte le sue sfaccettature: dalle moderne metropoli del Giappone fino ai villaggi immersi nella giungla dello Sri Lanka, dalle vette himalayane del Nepal fino ai templi dell’India, e poi fino in Cina, tra parchi nazionali incredibili e megalopoli tecnologiche.' },
        { name: 'Africa', link: '#', sectionTitle: 'Vedi tutti i viaggi in Africa', description: 'Pensi all’Africa e subito davanti ai tuoi occhi si aprono paesaggi immensi, deserti, savane, leoni ed elefanti – e probabilmente nella tua testa stai anche cantando “alle falde del Kilimamgiaro, paraponzi ponzi po’”. In effetti in Africa tutto è vasto: il continente innanzitutto, che ricopre più del 20% delle terre emerse del pianeta, il deserto del Sahara, il più esteso del mondo, il fiume più lungo, il Nilo, le temperature più calde e centinaia di dialetti e culture diffuse fra un miliardo di abitanti. Ma nonostante questa “grandezza”, resterai stupito dal senso di intimità che si prova una volta che avrai esplorato e capito l’Africa – l’ultima grande frontiera dell’avventura.' },
        { name: 'America', link: '#', sectionTitle: 'Vedi tutti i viaggi in America', description: 'Hai mai pensato di fare un tour dell’America Centrale? Un viaggio che ti porti a scoprire l’entroterra messicano e le sue spiagge paradisiache, il Mar dei Caraibi e le isole, da Cuba fino a Guadalupa e Martinica, e poi scendere verso sud, passando per il Belize e il Guatemala, e ancora più a sud, fino ad arrivare in Costa Rica? Sarebbe un viaggio incredibile da fare solo in una volta, per ora ci accontentiamo di spezzettarlo un pochino. Scopriamo un mondo tra due mondi, un ponte tra le due Americhe: è la culla delle antichissime civiltà dei Maya e degli Aztechi e di paesaggi naturali incontaminati, un susseguirsi di storia, archeologia, arte, folclore e avventura. Gran parte di questa zona del mondo è fatta anche dalle isole, tra le quali domina Cuba, dove ancora sembra di essere rimasti fermi a 100 anni fa - e poi tutte le altre, piccoli paradisi terrestri dove tutto è incontaminato. Un ponte tra Nord e Sud certo, ma anche fra Est e Ovest, tra l’Oceano Atlantico e Pacifico: chi passa da queste parti ha un assaggio della "pura vida" che i locali vivono ogni giorno.' },
        { name: 'Oceania', link: '#', sectionTitle: 'Vedi tutti i viaggi in Oceania', description: 'Fare un viaggio in Sud Est Asiatico è un po’ un rito di iniziazione - infatti, qui vengono molti giovani, un po’ per i prezzi decisamente bassi, un po’ per il grande numero di backpackers da tutto il mondo che attraversano queste terre, un po’ per le persone che vivono qui, sempre accoglienti e ospitali. Non serve un linguaggio comune per capirsi: sono gli occhi e, soprattutto, i sorrisi, a prendere il posto delle parole, e basta un gesto solidale per trasformare uno sconosciuto in una figura amica. È così che si scopre, a poco a poco, che le cose che contano davvero non sono quelle che riempiono le nostre case, ma i momenti che si possono vivere tra le risaie vietnamite accarezzate dai raggi del sole al tramonto, o la felicità che si prova mentre si ammira l’alba sul monte Bromo in Indonesia, dopo ore di trekking al buio, o ancora, la pace che si respira tra i templi thailandesi o pagaiando tra le acque delle lagune nascoste delle Filippine. Fare un viaggio in Sud Est Asiatico è un po’ come imparare a respirare di nuovo, ma con un ritmo tutto nuovo, e con una pace che non si era mai provata prima.' }
      ],
      profileLinks: [
        { name: 'Registrati', link: '#' },
        { name: 'Accedi', link: '#' }
      ]
    }
  }
}
</script>
