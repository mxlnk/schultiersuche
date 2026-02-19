export interface Animal {
  id: string;
  name: string;
  text: string;
  tags: string[];
}

export const animals: Animal[] = [
  {
    id: "hund",
    name: "Hund",
    text: "Der Hund ist eines der ältesten Haustiere des Menschen. Hunde gehören zur Familie der Hundeartigen und stammen vom Wolf ab. Sie werden seit Tausenden von Jahren als treue Begleiter, Wach- und Hütehunde eingesetzt. Hunde sind sehr soziale Tiere und brauchen viel Aufmerksamkeit und Bewegung.",
    tags: ["haustier", "säugetier"],
  },
  {
    id: "katze",
    name: "Katze",
    text: "Die Katze ist das beliebteste Haustier in Deutschland. Katzen sind eigenwillige und unabhängige Tiere, die aber auch sehr verschmust sein können. Sie gehören zur Familie der Katzenartigen und sind geschickte Jäger. Katzen schlafen bis zu 16 Stunden am Tag.",
    tags: ["haustier", "säugetier"],
  },
  {
    id: "hamster",
    name: "Hamster",
    text: "Der Hamster ist ein kleines Nagetier, das gerne in unterirdischen Bauten lebt. Hamster sind vor allem in der Dämmerung und nachts aktiv. Sie sammeln Futter in ihren großen Backentaschen und legen Vorräte an. Als Haustiere sind besonders Goldhamster und Zwerghamster beliebt.",
    tags: ["haustier", "säugetier", "nagetier"],
  },
  {
    id: "wellensittich",
    name: "Wellensittich",
    text: "Der Wellensittich stammt ursprünglich aus Australien und ist ein beliebter Heimvogel. Wellensittiche sind sehr gesellige Tiere und sollten mindestens zu zweit gehalten werden. Sie können lernen, Wörter und Melodien nachzuahmen. Ihr Gefieder ist meist grün-gelb mit wellenförmigen Mustern.",
    tags: ["haustier", "vogel"],
  },
  {
    id: "kaninchen",
    name: "Kaninchen",
    text: "Das Kaninchen ist ein beliebtes Haustier, besonders bei Kindern. Kaninchen sind soziale Tiere und sollten nicht alleine gehalten werden. Sie brauchen viel Platz zum Hoppeln und fressen am liebsten Heu, Gras und frisches Gemüse. Wildkaninchen leben in großen Gruppen in unterirdischen Bauten.",
    tags: ["haustier", "säugetier"],
  },
  {
    id: "meerschweinchen",
    name: "Meerschweinchen",
    text: "Meerschweinchen stammen ursprünglich aus Südamerika. Sie sind gesellige Tiere und sollten immer in Gruppen gehalten werden. Meerschweinchen kommunizieren mit verschiedenen Lauten wie Quietschen und Gurren. Sie brauchen täglich frisches Heu und Vitamin-C-reiches Futter.",
    tags: ["haustier", "säugetier", "nagetier"],
  },
  {
    id: "schildkroete",
    name: "Schildkröte",
    text: "Schildkröten gehören zu den ältesten Tierarten der Welt. Es gibt Land- und Wasserschildkröten. Sie tragen einen festen Panzer, der sie vor Feinden schützt. Manche Schildkrötenarten können über 100 Jahre alt werden. Als Haustiere brauchen sie viel Platz und spezielle Pflege.",
    tags: ["haustier", "reptil"],
  },
  {
    id: "goldfisch",
    name: "Goldfisch",
    text: "Der Goldfisch ist einer der bekanntesten Zierfische. Er stammt ursprünglich aus Ostasien und wurde dort schon vor über 1000 Jahren gezüchtet. Goldfische können bis zu 30 Jahre alt werden und brauchen ein ausreichend großes Aquarium mit guter Wasserqualität.",
    tags: ["haustier", "fisch"],
  },
];
