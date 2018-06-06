const tl1 = [
	{
		situation: `Bienvenue à toi Bienvenue à toi Bienvenue à toiBienvenue à toiBienvenue à toi
		Bienvenue à toiBienvenue à toiBienvenue à toiBienvenue à toiBienvenue à toiBienvenue à toi
		Bienvenue <br /> à toiBienvenue à toiBienvenue à toiBienvenue
		 à toiBienvenue à toi`,
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/desert-island.png",
		answers: [
      		answer1 = {
        		content: "> Suivant",
        		target: [0, 1]
      		}
    	]
	},
	{
		situation: "Je suis Bob, j'ai 22ans, 3 femmes 2 enfants, et je voudrais aller en :",
        character: "./asset/img/jack.jpg",
        background :"./asset/img/brontis.jpg",
        answers: [
      		answer1 = {
        		content: "> bachelor 3D",
        		target: [1, 0]
      		},
      		answer2 = {
        		content: "> bachelor Web",
        		target: [0, 2]
      		},
      		answer3 = {
        		content: "> grande école",
        		target: [1, 0]
      		}
    	]
	},
    {
        situation: "Bien Vu Man :",
        answers: [
            answer1 = {
                content: "> Un couteau",
                target: [1, 0]
            },
            answer2 = {
                content: "> Un sifflet",
                target: [0, 2]
            },
            answer3 = {
                content: "> TOTO",
                target: [1, 0]
            }
        ]
    }
];

const tl2 = [
    {
        situation: "Vous êtes mort psk 3D",
        character: "./asset/img/brontis.jpg",
        background: "./asset/img/denis.jpg",
        audio: "./asset/audio/denis.mp3",
        answers: [
            answer1 = {
                content: "> Recommencer",
                target: [0, 0]
            }
        ],
    }
];

