let options = document.querySelectorAll(".option");
let playerName = document.querySelector(".input input");
let submitFormBtn = document.querySelector(".submit-form");
let formContainer = document.querySelector(".form-container");
let quizContainer = document.querySelector(".quiz-container");
let playAgain = document.querySelector(".play-again");
let score = document.querySelector(".score");
let messege = document.querySelector(".score h2");
let totalQuestion = document.querySelector(".total-question");
let rightAnswer = document.querySelector(".right-answer");
let wrongAnswer = document.querySelector(".wrong-answer");

let player = ""
const submitForm = () => {
    submitFormBtn.addEventListener("click", () => {
        if (playerName.value.length > 0) {
            player = playerName.value;
            formContainer.style.display = ("none");
            quizContainer.style.display = ("flex");
            messege.style.textTransform = ("capitalize")
            messege.innerHTML = `Hello Mr. ${player} thanks for playing quiz.`
        }
    })
}
submitForm();
options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((opt) => {
            opt.classList.remove("active");
            opt.style.opacity = ("0.4");
        });
        option.classList.add("active");
        option.style.opacity = ("1");
    })
});

const questions = [
    {
        question: " Full form of CSS.",
        options: [
            "(a) Cascading Style Sheet.",
            "(b) Cascading Store Sheet.",
            "(c) Cascading Style Shop.",
            "(d) Center Style Sheet.",
        ],
        correct: 0,
    },
    {
        question: " Full form of HTML.",
        options: [
            "(a) Cascading Style Sheet.",
            "(b) Cascading Store Sheet.",
            "(c) Hyper Text Markup Language",
            "(d) Center Style Sheet.",
        ],
        correct: 2,
    },
    {
        question: " Full form of JS.",
        options: [
            "(a) Cascading Style Sheet.",
            "(b) Javascript",
            "(c) Hyper Text Markup Language",
            "(d) Center Style Sheet.",
        ],
        correct: 1,
    },
];

let question = document.querySelector(".question");
let totalQuestions = questions.length;
totalQuestion.innerHTML = `Total Questions: ${questions.length}`;
let index = 0;
let correct = 0;
let inCorrect = 0;
rightAnswer.innerHTML = `Right Answer: 0`;
wrongAnswer.innerHTML = `Wrong Answer: 0`;

const endQuiz = () => {
    score.style.display = ("flex");
    quizContainer.style.display = ("none");
}

const resetOptions = () => {
    options.forEach((opt) => {
        opt.classList.remove("active");
        opt.style.opacity = ("1");
    });
}
const loadQuestion = () => {
    if (index === totalQuestions) {
        return endQuiz();
    } else {
        resetOptions();
    }
    question.innerHTML = `${index + 1} . ${questions[index].question}`;
    options[0].innerHTML = questions[index].options[0];
    options[1].innerHTML = questions[index].options[1];
    options[2].innerHTML = questions[index].options[2];
    options[3].innerHTML = questions[index].options[3];
};

loadQuestion();

const checkAnswer = () => {
    let selectedIndex = -1; 

    options.forEach((opt, i) => {
        if (opt.classList.contains("active")) {
            selectedIndex = i;
        }
    });

    return selectedIndex;
};

let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = checkAnswer();
    if (selectedOptionIndex > -1) {
        if (selectedOptionIndex === questions[index].correct) {
            correct++;
            rightAnswer.innerHTML = `Right Answer: ${correct}`;
        } else {
            inCorrect++;
            wrongAnswer.innerHTML = `Wrong Answer: ${inCorrect}`;
        }
        index++;
        loadQuestion();
    }
});

const playQuizAgain = () => {
    playAgain.addEventListener("click", () => {
        index = 0;
        correct = 0;
        inCorrect = 0;
        playerName.value = "";
        formContainer.style.display = ("flex");
        score.style.display = ("none");
        rightAnswer.innerHTML = `Right Answer: 0`;
        wrongAnswer.innerHTML = `Wrong Answer: 0`;
        resetOptions();
        loadQuestion();
    })
}
playQuizAgain();