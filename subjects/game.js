const questions = [
    {
        question: "which is largest animal in world",
        answer:[
            {text:"Shark",correct:flase},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: flase},
            {text: "Giraffe", correct: flase},
        ]
    },
    {
        question: `Evaluate the given expression.
        43 – 3 – 8 + 4`,
        answer:[
            {text:"36",correct:true},
            {text: "30", correct: false},
            {text: "46", correct: flase},
            {text: "40", correct: flase},
        ]
    },
    {
        question: `Evaluate the given expression.
        27 – 8 + 29 – 15`,
        answer:[
            {text:"34",correct:flase},
            {text: "33", correct: true},
            {text: "27", correct: flase},
            {text: "23", correct: flase},
        ]
    },
    {
        question: `Evaluate the given expression.
        19 – 13 + 8 – 6`,
        answer:[
            {text:"8",correct: true},
            {text: "24", correct: false},
            {text: "18", correct: flase},
            {text: "10", correct: flase},
        ]
    },
    {
        question: `Evaluate the given expression.
        7 x 4 x 12 ÷ 2`,
        answer:[
            {text:"158",correct:flase},
            {text: "150", correct: false},
            {text: "168", correct: true},
            {text: "128", correct: flase},
        ]
    },
    {
        question: `Evaluate the given expression.
        10 x 6 x 3 ÷ 3`,
        answer:[
            {text:"40",correct:flase},
            {text: "60", correct: true},
            {text: "50", correct: flase},
            {text: "30", correct: flase},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetstate();
    let currentQuestion=questions[currentQuestionIndex];
    let questionN0=currentQuestionIndex+1;
    questionElement.innerHTML=questionN0+"."+currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button=document.createElement("button");
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetstate(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(){
    const selectedBtn=e.target;
    const isCorrect = selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

}
function showScore(){
    resetstate();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML=" Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
     if(currentQuestionIndex<questions.length){
        handleNextButton();
     }
     else{
        startQuiz();
     }
})
startQuiz();