const questions = [
    {
        question : " What is the largest animal in the word?",
        answers : [
            { text:"shark", correct: false},
            { text:"blue whale", correct: true},
            { text:"Element", correct: false},
            { text:"Giraffe", correct: false},

        ]
    },
    {
        question : "Which of the following keywords is used to define a variable in Javascript?",
        answers : [
            { text:"var", correct: false},
            { text:"let", correct: false},
            { text:"Both A and B", correct: true},
            { text:"None of the above", correct: false},

        ]
    },
    {
        question : " Which of the following methods is used to access HTML elements using Javascript? ",
        answers : [
            { text:"getElementbyId", correct: false},
            { text:"getElementByClassName", correct: false},
            { text:"Both A and B", correct: true},
            { text:"None of the above", correct: false},

        ]
    },
    {
        question : "How can a datatype be declared to be a constant type?",
        answers : [
            { text:"const", correct: true},
            { text:"var", correct: false},
            { text:"let", correct: false},
            { text:"constant", correct: false},

        ]
    },
    {
        question : " When an operator’s value is NULL, the typeof returned by the unary operator is?",
        answers : [
            { text:"boolean", correct: false},
            { text:"object", correct: true},
            { text:"undefine", correct: false},
            { text:"integer", correct: false},

        ]
    }
]

const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}
// console.log(nextButton)

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;

    
    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer);
        
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=> {
        if(button.dataset.correct ==="true"){
            console.log(button.classList.add("correct"))
        }
        button.disabled = true;
    });
    nextButton.style.display="block"
}

function showScore(){
    resetState();
    questionElement.innerHTML= `you scored  ${score} out of ${questions.length}!`
    nextButton.innerHTML="play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
       showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz()