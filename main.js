player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("Player_question").innerHTML =  "Question Turn - " + player1_name ;
document.getElementById("Player_answer").innerHTML =  "Answer Turn - " + player2_name ;

function SendAns(){
    number_1 = document.getElementById("Question_Number_1").value;
    number_2 = document.getElementById("Questoin_Number_2").value;
    Multiplication_ans = parseInt(number_1) * parseInt(number_2);
    console.log(number_1 + " * " + number_2 + "=" + Multiplication_ans);

    document.getElementById("Question").innerHTML = number_1 + " X " + number_2;
    document.getElementById("Question_Number_1").value = "";
    document.getElementById("Questoin_Number_2").value = "";
}