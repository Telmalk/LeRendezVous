let timeLine = [tl1, tl2];

const templateCore = () => {

};



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
                display(timeLine[wesh[0]][wesh[1]].situation, timeLine[wesh[0]][wesh[1]].answers);

            });
        }
};


display(timeLine[0][0].situation, timeLine[0][0].answers);
