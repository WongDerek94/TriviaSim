var currentQuestion = 2;

var assessResult = () => {
    return undefined;
};

var nextQuestion = () => {
    currentQuestion++;
};

var displayQuestion = () => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","/", true);
    xmlhttp.onreadystatechange = () =>{
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            document.getElementById('questionNumber').innerHTML = 'QUESTION ' + currentQuestion.toString();
        }
    };
    xmlhttp.send();
};

displayQuestion();