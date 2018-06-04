let timeLine = [tl1, tl2];

const templateCore = (situation, choices) => {
    document.querySelector("body").innerHTML = "";
    let myDiv = document.createElement('div');
    let inteCore = `<section class="core">
       <div class="container">
           <img class="imgSituation" src="./asset/img/desert-island.png">
           <div class="characterContainer">
               <img class="characterImg" src="./asset/img/brontis.jpg">
           </div>
           <div class="bubbleText">
               <p class="text situation">${situation}</p>
               <div class="answerContainer">
               </div>
               <div class="arrow-left"></div>
           </div>
       </div>
    </section>`;

    myDiv.innerHTML = inteCore;
    document.querySelector('body').appendChild(myDiv);
    let answerContainer = document.querySelector(".answerContainer");
    for (let i = 0; i < choices.length; i++) {
        let myAnswer = document.createElement('p');
        myAnswer.dataset.target = choices[i].target;
        myAnswer.innerHTML = choices[i].content;
        myAnswer.classList.add('text', 'answer');
        answerContainer.appendChild(myAnswer);
    }
    return myDiv;
};

const display = (situation, choices) => {
    let body = document.querySelector('body');
    let newChoice = templateCore(situation, choices);
    body.appendChild(newChoice);
    let but = document.querySelectorAll(".answer");
    for (let i = 0; i < but.length; i++) {
        but[i].addEventListener("click", function () {
            console.log('toto');
            let target = this.getAttribute("data-target");
            let redirection = target.split(',');
            display(timeLine[redirection[0]][redirection[1]].situation, timeLine[redirection[0]][redirection[1]].answers);
        });
    }
};

display(timeLine[0][0].situation, timeLine[0][0].answers);