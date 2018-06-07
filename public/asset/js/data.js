const brontisOfficeTL = [
  {
    situation: `Bienvenue à toi ! Je vais te poser quelques questions pour connaître tes motivations. 
    N'aie pas peur, il n'y a pas de pièges, enfin ... :3 
    J'aimerai d'abord que tu te présente et que tu me dise dans quelle filière tu voudrais aller.`,
    character: "./asset/img/brontis.jpg",
    background: "./asset/img/desert-island.png",
    answers: [
          answer1 = {
            content: "Suivant",
            target: [0, 1]
          }
    ]
  },
  {
    situation: "Je m'appelle Bob, j'ai 22ans, je suis passioné de curling et je voudrais aller en :",
    character: "./asset/img/brontis.jpg",
    background: "./asset/img/desert-island.png",
    answers: [
          answer1 = {
            content: "bachelor 3D",
            target: [1, 0]
          },
          answer2 = {
            content: "bachelor Web",
            target: [0, 2]
          },
          answer3 = {
            content: "grande école",
            target: [1, 1]
          }
    ]
  },
  {
      situation: "Très bien, tu as fais le bon choix mon cher Bob. Maintenant, imagine que tu te retrouve sur une île déserte. Tu as le droit de prendre uniquement 3 objets avec toi, que seront-ils ?",
    character: "./asset/img/brontis.jpg",
    background: "./asset/img/desert-island.png",
      answers: [
          answer1 = {
              content: "Suivant",
              target: [0, 3]
          }
      ]
  },
  {
      situation: "Sans hésiter, je prendrais évidemment :",
    character: "./asset/img/brontis.jpg",
    background: "./asset/img/desert-island.png",
      answers: [
          answer1 = {
              content: "Un sifflet, une canne à pêche et une machette.",
              target: [2, 0]
          },
          answer2 = {
              content: "Une machette, un briquet et le collier légué par ma grand mère.",
              target: [2, 0]
          },
          answer3 = {
              content: "Un pistolet, du rhum et une fusée de detresse.",
              target: [3, 0]
          }
      ]
  },
  {
      //brontis
        situation: "C'est une otarie impressionante ! Vous m'avez impressioné par votre capacité d'adaptation. Félicitation, je suis certain que vous brillerez dans notre bachelor Web.",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: []
  }
];

const endsTL = [
    {
      //3D choice 0
        situation: "Vous êtes écrasé devant la puissance de Monsieur Stéphane Dalberra. Le birdies devient votre résidence principale et vous sombrez dans l'alcool pour vous consoler.",
        character: "./asset/img/brontis.jpg",
        audio: "asset/audio/denis.mp3",
        background: "./asset/img/denis.jpg",
        answers: [
            answer1 = {
                content: "Recommencer",
                target: [0, 0]
            }
        ],
    },
    {
      //grande école choice 1
        situation: "Après 5ans à faire du coloriage vous finissez intégrateur. Lors du développement d'un site, uneanneedevoyage.com, vous vous rendez compte que vous auriez du allez en Bachelor Web. Vous continuerez à faire des intégrations bootstrap jusqu`à la fin de vos jours.",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "Recommencer",
                target: [0, 0]
            }
        ],
    },
    {
      //Denis choice, disqualified 2
        situation: "L'homme sort alors une ak47 et vous tire dessus jusqu'à ce que mort s'en suive en s'exclamant plusieurs fois 'AH !'.",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        audio: "./asset/audio/ahcut.mp3",

        answers: [
            answer1 = {
                content: "Recommencer",
                target: [0, 0]
            },
            answer2 = {
                content: "Recommencer au début de l'île",
                target: [2, 0]
            }
        ],
    },
    {
      //Denis choice, machette 3
        situation: "L'homme réplique et sort alors une ak47 et vous tire dessus jusqu'à ce que mort s'en suive en s'exclamant plusieurs fois 'AH !'.",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        audio: "./asset/audio/ahcut.mp3",
        answers: [
            answer1 = {
                content: "Recommencer",
                target: [0, 0]
            },
            answer2 = {
                content: "Recommencer au début de l'île",
                target: [2, 0]
            }
        ],
    },
    {
      //Otarie dead, machette, vegans 4
        situation: "Vraiment ? Vous venez de tuer une otarie sans défense ? Une horde de vegans extrémistes enragés apparait devant vous. Ils vous tabassent à mort à l'aide de légumineuses."
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "Recommencer",
                target: [0, 0]
            },
            answer2 = {
                content: "Recommencer au début de l'île",
                target: [2, 0]
            }
        ],
    },
    {
      //Otarie relachée, canne à pêche, horde d'otarie 5
        situation: "Une fois relâchée, l'otarie pousse un cri: 'egg egg egg egg d'egg l'egg egg SMIOUUUUF'. Une horde d'otarie sanguinaire arrive alors à la rescousse de leure amie. Elles se jettent sur vous et vous dévore alégrement.",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "Recommencer",
                target: [0, 0]
            },
            answer2 = {
                content: "Recommencer au début de l'île",
                target: [2, 0]
            }
        ],
    }
];

const islandOtarieTL = [
//  First set of obects: [Un sifflet, une canne à pêche, une machette]
//  Second set of obects: [Une machette, un briquet, le collier légué par ma grand mère]
//  Third set of obects: [Un pistolet, du rhum et une fusée de détresse]
    {
        situation: "Un flash de lumière rempli la salle, vous ouvrez alors vos yeux et découvrez, ébahie, que vous êtes en plein milieu d'une île déserte.",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "Suivant",
                target: [2, 1]
            }
        ],
    },
    {
        situation: "À 1km sur votre droite vous pouvez apercevoir la silhouette d'un homme. Sur votre gauche vous apercevez une plage au loin.",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "Allez à droite vers l'homme.",
                target: [2, 2]
            },
            answer1 = {
                content: "Allez à gauche vers la plage.",
                target: [2, 5]
            }
        ],
    },
    {
        situation: "Alors que vous arrivez au niveau de l'homme, ce dernier se retourne brusquement en vous fixant. Il s'énonce: 'AH !'",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/denis.jpg",
        answers: [
            answer1 = {
                content: "Le laisser parler.",
                target: [2, 3]
            },
            answer1 = {
                content: "Cette onomatopée provoque en vous une peur terrible. Vous sortez précipitamment votre machette et essayez de le tuer.",
                target: [1, 3]
            }
        ],
    },
    {
        situation: "Avez-vous un collier d'immunité ? Si oui, souhaitez-vous le jouer ce soir ?",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "T'es qui toi ?",
                target: [2, 4]
            },
            answer1 = {
                content: "Vous ne comprenez pas. Sans vraiment chercher à comprendre vous sortez votre machette et essayez de le tuer.",
                target: [1, 3]
            }
        ],
    },
    {
        situation: "AH ! (L'homme rentre alors un bulletin de vote dans une urne.) Je vais maintenant procéder au dépouillement, les votes sont unanimes 1 à 0 contre vous. Bob, les aventuriers ont décidé de vous éliminer et la sentence est irrévocable.",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/denis.jpg",
        audio: "./asset/audio/ahBrontis.mp3",
        answers: [
            answer1 = {
                content: "Suivant",
                target: [1, 2]
            }
        ],
    },
    {
        situation: "Vous arrivez sur la plage. Que faire ?",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "Pêcher à l'aide de la canne à pêche.",
                target: [2, 6]
            },
            answer1 = {
                content: "Utiliser le sifflet.",
                target: [2, 7]
            }
        ],
    },
    {
        situation: "Rien ne mort à l'ameçon ... Que faire ?",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "Pêcher à l'aide de la canne à pêche.",
                target: [2, 6]
            },
            answer1 = {
                content: "Utiliser le sifflet.",
                target: [2, 7]
            }
        ],
    },
    {
        situation: "Le son de votre sifflet attire une otarie. L'otarie s'exclame: 'egg egg egg egg d'egg l'egg egg SMIIIIFFF', que faire ?",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "Lui jeter la machette dans l'intention de la tuer.",
                target: [1, 4]
            },
            answer1 = {
                content: "Lui répondre: 'egg egg egg egg d'egg l'egg egg SMOOOOOFFF'",
                target: [2, 8]
            },
            answer1 = {
                content: "La pêcher à l'aide de la canne à pêche.",
                target: [2, 10]
            }
        ],
    },
    {
        situation: "Pris d'amitié pour vous, l'otarie vous fait signe de monter sur son dos.",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "Lui jeter la machette dans l'intention de la tuer.",
                target: [1, 4]
            },
            answer1 = {
                content: "Lui faire confiance et surfer sur elle.",
                target: [2, 9]
            },
            answer1 = {
                content: "La pêcher à l'aide de la canne à pêche.",
                target: [2, 10]
            }
        ],
    },
    {
        situation: "Vous retournez à la civilisation en surfant sur son dos. Brontis vous attends dans son bureau avec un grand sourir.",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "Suivant.",
                target: [0, 4]
            }
        ],
    },
    {
        situation: "Vous avez réussi à la pêcher, elle git sans défense sur la plage",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "La relacher ?",
                target: [1, 5]
            },
            answer1 = {
                content: "La tuer à l'aide la machette.",
                target: [1, 4]
            }
        ],
    }
];

const islandJackSparrowTL = [
//  First set of obects: [Un sifflet, une canne à pêche, une machette]
//  Second set of obects: [Une machette, un briquet, le collier légué par ma grand mère]
//  Third set of obects: [Un pistolet, du rhum et une fusée de détresse]
    {
        situation: "Un flash de lumière rempli la salle, vous ouvrez alors vos yeux et découvrez, ébahie, que vous êtes en plein milieu d'une île déserte.",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
        answers: [
            answer1 = {
                content: "Suivant",
                target: [2, 1]
            }
        ],
    }
]