
//let toto = tl1[0].answers[0].target;

let timeLine = [tl1, tl2];

//console.log(timeLine[toto[0]][toto[1]]);


const display = (text, choices) => {
    let body = document.querySelector('body');
    let template = `
        <p>${text}</p>
    `;
    let templateChoice = ``;
    for (let i = 0; i < choices.length; i++) {
        templateChoice += `<div data-target="${choices[i].target}" class="next">${choices[i].content}</div>`
    }
    body.innerHTML = template + templateChoice;
    let but = document.querySelectorAll(".next");
        for (let i = 0; i < but.length; i++) {
            but[i].addEventListener("click", function () {
                let target = this.getAttribute("data-target");
                let wesh = target.split(',');
                console.log(wesh);
                //console.log(timeLine[wesh[0]][wesh[1]].answers);
                display(timeLine[wesh[0]][wesh[1]].situation, timeLine[wesh[0]][wesh[1]].answers);

            });
        }
};


let but = display(timeLine[0][0].situation, timeLine[0][0].answers);



/*but[0].addEventListener("click", function () {
let target = this.getAttribute("data-target");
let wesh = target.split(',');
display(timeLine[wesh[0]][wesh[1]].situation, timeLine[wesh[0]][wesh[1]].answers);

});*/
//console.log(wesh)
