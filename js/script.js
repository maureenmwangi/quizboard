function myButton(){
    //code here
    //document.write("Your Results");
    var correct = 0;
    var currentAnswer1 = document.first.answer1.value;
    var currentAnswer2 = document.first.answer2.value;
    var currentAnswer3 = document.first.answer3.value;
    var currentAnswer4 = document.first.answer4.value;
    var currentAnswer5 = document.first.answer5.value;
    var results= document.getElementById("text");
    if (currentAnswer1=="James Gosling")(correct++);
    if (currentAnswer2=="Compares loose equality")(correct++);
    if (currentAnswer3==".concat")(correct++);
    if (currentAnswer4=="*=")(correct++);
    if (currentAnswer5=="camelCase")(correct++);
        document.write(score);
        quizboard.style.display = "none";
        results.textContent = correct;
    if (correct => 80){
        results.textContent="Congratulations you did it"
    }
    else if (correct => 50) {
        results.textContent="you're average"
    } 
    else if(correct< 50){
        results.textContent="You're below average. Kindly retake the quiz"
    } 
}