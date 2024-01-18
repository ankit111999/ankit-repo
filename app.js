const btn=document.querySelector('#btn');
const main=document.querySelector('.container');
const message=pageEles(main,'div','Press Start button','message');
const output=pageEles(main,'div','','game');
const url='quiz.json';
btn.onclick = loadData;
function loadData() {
    btn.style.display='none';
    fetch(url)
    .then(res =>res.json())
    .then(data=>{
        const temp= {
            total:data.length,
            q:data,
            score:0,
        counter:0
    };
        createQuestion(data);
    })
}
function createQuestion(data) {
    const el = pageEles(output, 'div', '', 'question');
    if (data.q.length == 0) {
        // No more questions, end the game
        endGame(data);
    } else {
        const question = data.q.shift();
        data.counter++;
        message.textContent = `Question ${data.counter} of ${data.total}`;
        outputQuestion(question, el, data);
    }
}
function endGame(data) {
    message.textContent = `Game Over. Your final score is ${data.score} out of ${data.total}`;
    // Optionally, you can display a button to restart the game
    const restartBtn = pageEles(output, 'button', 'Restart', 'restart-btn');
    restartBtn.onclick = () => {
        // Reset the game state and start over
        message.textContent = 'Press Start button';
        restartBtn.style.display = 'none';
        loadData();
    };
}
function outputQuestion(question,parent){
    console.log(question);
    const que=pageEles(parent,'div',`${question.question}?`,'question');
    const arr=question.opt;
    arr.push(question.answer);  
    arr.sort(()=>{
        return Math.random() - 0.5;
    });
    const btns=pageEles(parent,'','opts');
    arr.forEach(e=>{
        const optemp=pageEles(btns,'button',e,'btns');
        optemp.onclick=()=>{
            if(question.answer==e){
                message.textContent='Correct';
            } else {
                message.textContent='Incorrect';
            }
            const temps=parent.querySelectorAll('.btns');
            temps.forEach(el=>{
                el.disabled=true;
                const bgc=(question.answer==el.textContent)?'green':'red';
                el.style.backgroundColor=bgc;

            })
        }
    })
    console.log(arr);
}
function pageEles(parent,t,html,c) {
    const ele=document.createElement(t);
    ele.innerHTML=html;
    ele.classList.add(c);
    return parent.appendChild(ele);
}