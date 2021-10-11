let title = "Where is the capital of Jordan";
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

function isAnswerCorrect(index){
    return index === correctAnswerIndex;
}

function getCorrectAnswer(){
    return options[correctAnswerIndex];
}


let questions = {
    title: "Where is the capital of Jordan",
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect(index){
        return index === question.correctAnswerIndex;
    },
    getCorrectAnswer(){
        return question.options[question.correctAnswerIndex];
    }
};


function createQuestion(title, options, correctAnswerIndex){
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function(index){
        return index === question.correctAnswerIndex;
    }
    question.getCorrectAnswer = function(){
        return question.options[question.correctAnswerIndex];
    }
}

let testData = {
    title: "Where is the capital of Jordan",
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
};


function createQuestion(title, options, correctAnswerIndex){
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function(index){
        return index === this.correctAnswerIndex;
    }
    question.getCorrectAnswer = function(){
        return this.options[this.correctAnswerIndex];
    }
}