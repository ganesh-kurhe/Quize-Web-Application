const questions =  [
    {
        que:'Which of the following is the markup langage?',
        a:'HTML',
        b:'CSS',
        c:'Javascript',
        d:'PHP',
        correct:'a'
    },
    {
        que:'what year was Javascript launched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'None of the above',
        correct:'b'
    },
    {
        que:'What does CSS stands for?',
        a:'Hyperext Markup Language',
        b:'Cascading Style Sheet',
        c:'Jason Object Notation',
        d:'Helicopters Terminals Motorboats Lamborginis',
        correct:'b'
    },
    {
        que:'Inside which HTML element do we put the JavaScript?',
        a:`< js >`,
        b:"< scripting >",
        c:"< javascript >",
        d:"< script >",
        correct:'d'
    },
    {
        que:'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
        a:'document.getElementById("demo").innerHTML = "Hello World!" ',
        b:'document.getElement("p").innerHTML = "Hello World!"',
        c:'document.getElementId("p").innerHTML = "Hello World!";t',
        d:'#demo.innerHTML = "Hello World!"',
        correct:'a'
    },
    {
        que:'How do you write "Hello World" in an alert box?',
        a:'alert("Hello World")',
        b:'msg("Hello World")',
        c:'alertBox("Hello World")',
        d:'msgBox("Hello World")',
        correct:'a'
    },
    {
        que:'What is the correct way to write a JavaScript array?',
        a:'var colors = (1:"red", 2:"green", 3:"blue")',
        b:'var colors = ["red", "green", "blue"] ',
        c:'var .colors = "red", "green", "blue"',
        d:'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue") ',
        correct:'b'
    },
    {
        que:'How do you round the number 7.25, to the nearest integer?',
        a:'Math.rnd(7.25)',
        b:'rnd(7.25)',
        c:'Math.round(7.25)  ',
        d:'round(7.25)',
        correct:'c'
    },
    {
        que:'How do you find the number with the highest value of x and y?',
        a:'top(x, y)',
        b:'ceil(x, y)',
        c:'Math.ceil(x, y)',
        d:'Math.max(x, y) ',
        correct:'d'
    },
    {
        que:'How to insert a comment that has more than one line?',
        a:'/*This comment has more than one line*/',
        b:'< !--This comment has more than one line-- >',
        c:'//This comment has more than one line//',
        d:'/This comment has more than one line/',
        correct:'a'
    },
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById("queBox")
const optionsInputs = document.querySelectorAll(".options")

const loadQuestions = ()=>{
    if(index == total){
        return endQuize();
    }
    reset();
    const data = questions[index];
    queBox.innerHTML = `${index+1}) ${data.que}`;
    optionsInputs[0].nextElementSibling.innerHTML = data.a;
    optionsInputs[1].nextElementSibling.innerHTML = data.b;
    optionsInputs[2].nextElementSibling.innerHTML = data.c;
    optionsInputs[3].nextElementSibling.innerHTML = data.d;
    
    
}

const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
         right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer = () =>{
    let answer;
    optionsInputs.forEach((input) => {
        if(input.checked) {
          answer = input.value;
        }
    })
    return answer;
}

const reset = () => {
    optionsInputs.forEach((input) => {
         input.checked = false;
    })
}

const endQuize = () => {
   document.getElementById("box").innerHTML = `
    <div style ="text-align:center">
      <h3 style=padding:18px> Thank you for playing quize.</h3>
      <h2> ${right} / ${total} are correct </h2>
    </div>`
}

// initial call
loadQuestions();