let timeLine = [brontisOfficeTL, endsTL, islandTL];

const imageFade = (fade) => {
    let visible = 0.0;
    let intervalID = setInterval(function() {
      if (visible !== 1) {
          fade.style.opacity = visible;
          visible += 0.1;
          visible = Math.round(10 * visible) / 10;
      } else
          clearInterval(intervalID);
  }, 30);   
};

const transiText = (text, target, answerContainer, choices, tabAnswer) => {
    let textDelayed = "";
    let i = 0;
    let interval = setInterval(() => {
     textDelayed += text[i];
     target.textContent = textDelayed;
     i++;
     if (i >= text.length) {
         for (i = 0; i < tabAnswer.length; i++) {
             tabAnswer[i].dataset.target = choices[i].target;
             tabAnswer[i].innerHTML = choices[i].content;
         }
         clearInterval(interval);
     }
    }, 5)
};

const setAudio = (audio) => {
    if (audio !== false) {
        let aud = document.createElement("audio");
        console.log(aud);
        aud.src = audio;
        console.log(aud);
        aud.play();
        return aud;
    } else
        return false;
};

const templateCore = (situation, choices, character, background, audio) => {
    document.querySelector("body").innerHTML = "";
    let myDiv = document.createElement('div');
    let tabAnswer = [];
     myDiv.innerHTML = `
        <section class="core">
            <div class="container">
                <img class="imgSituation" src="${background}">
                <div class="characterContainer">
                    <img class="characterImg" src="${character}">
                </div>
                <div class="bubbleText">
                   <p class="text situation"></p>
                   <div class="answerContainer">
                   </div>
                   <div class="arrow-left"></div>
                   </div>
             </div>
        </section>`;
    document.querySelector('body').appendChild(myDiv);
    let answerContainer = document.querySelector(".answerContainer");
    for (let i = 0; i < choices.length; i++) {
        let myAnswer = document.createElement('p');
        myAnswer.classList.add('text', 'answer');
        tabAnswer.push(myAnswer);
    }
    transiText(situation, document.querySelector('.situation'), answerContainer, choices, tabAnswer);
    for (let i = 0; i < tabAnswer.length; i++) {
        answerContainer.appendChild(tabAnswer[i]);
    }
    let audioSet = setAudio(audio);
    if (audioSet !== false)
        myDiv.appendChild(audioSet);
    return myDiv;
};

const display = (situation, choices, character, background, audio = false, redirection = 0) => {
    let body = document.querySelector('body');

    let newChoice = templateCore(situation, choices, character, background, audio);
    body.appendChild(newChoice);
    console.log(redirection[0]);
    if (redirection[0] != 1) {
        let fade = document.querySelector(".imgSituation");
        imageFade(fade);
    } else
        console.log("toto");
    let but = document.querySelectorAll(".answer");
    for (let i = 0; i < but.length; i++) {
        but[i].addEventListener("click", function() {
            let target = this.getAttribute("data-target");
            let redirection = target.split(',');
            display(timeLine[redirection[0]][redirection[1]].situation,
                timeLine[redirection[0]][redirection[1]].answers,
                timeLine[redirection[0]][redirection[1]].character,
                timeLine[redirection[0]][redirection[1]].background,
                timeLine[redirection[0]][redirection[1]].audio,
                redirection);
        });
    }
};

/*display(timeLine[0][0].situation, timeLine[0][0].answers,
    timeLine[0][0].character, timeLine[0][0].background,
    );*/