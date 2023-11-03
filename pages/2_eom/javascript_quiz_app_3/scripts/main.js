let Otvet = document.querySelector('#check_button_1');
let Povtor = document.querySelector('#check_button_2');
let Dalee = document.querySelector('#check_button_3');

Povtor.classList = ('disabled_button');
Povtor.addEventListener('click' , function(){
    window.location.reload();
});


let numberOfQuestion = 3; 
let numberOfQuestionSum = 9;
let numberOfQuestionPlace = document.querySelector('#number_of_question')
let numberOfQuestionPlaceDescription = document.querySelector('#number_of_question_in_description')

numberOfQuestionPlace.innerHTML = numberOfQuestion + '.';
numberOfQuestionPlaceDescription.innerHTML = numberOfQuestion + '/' + numberOfQuestionSum;

let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}


function checkAnswer() { 
    const answer = document.getElementById("answer").value;
    const answerClass = document.getElementById("answer");
    if (answer === "Насадочная колонна") {
        answerClass.classList.add('correct');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: true}));
    } else { 
        answerClass.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 
    const answer2 = document.getElementById("answer2").value; 
    const answerClass2 = document.getElementById("answer2")
    if (answer2 === "I стриппинг") {
        answerClass2.classList.add('correct');
    } else { 
        answerClass2.classList.add('incorrect');
    } 
    const answer3 = document.getElementById("answer3").value; 
    const answerClass3 = document.getElementById("answer3")
    if (answer3 === "II стриппинг") {
        answerClass3.classList.add('correct');
    } else { 
        answerClass3.classList.add('incorrect');
    } 
    const answer4 = document.getElementById("answer4").value; 
    const answerClass4 = document.getElementById("answer4")
    if (answer4 === "Воздушный холодильник") {
        answerClass4.classList.add('correct');
    } else { 
        answerClass4.classList.add('incorrect');
    } 
    const answer5 = document.getElementById("answer5").value; 
    const answerClass5 = document.getElementById("answer5")
    if (answer5 === "Рефлюксная емкость") {
        answerClass5.classList.add('correct');
    } else { 
        answerClass5.classList.add('incorrect');
    } 
    
    Otvet.classList.add('disabled_button');
    Povtor.classList.remove('disabled_button');
    Dalee.classList.remove('disabled_button');
}

let popUpWindow = document.querySelector('#popup1')

function showPopUp(){
    popUpWindow.classList.remove('close')
}

function closePopUp(){
    popUpWindow.classList.add('close')
}