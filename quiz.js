function checkAnswers() {
    var x = 0;
    if (q1.value.toLowerCase() == "standard template library") {
        x++;
        q1Res.textContent = "Correct";
    }
    else
        q1Res.textContent = "Incorrect";
    if (q2.value.toLowerCase() == "public") {
        x++;
        q2Res.textContent = "Correct";
    }
    else
        q2Res.textContent = "Incorrect";
    if (q3.value.toLowerCase() == "false") {
        x++;
        q3Res.textContent = "Correct";
    }
    else
        q3Res.textContent = "Incorrect";
    if (q4.value.toLowerCase() == "stack") {
        x++;
        q4Res.textContent = "Correct";
    }
    else
        q4Res.textContent = "Incorrect";
    if (q5.value.toLowerCase() == "2147483647") {
        x++;
        q5Res.textContent = "Correct";
    }
    else
        q5Res.textContent = "Incorrect";
    if (q6.value.toLowerCase() == "return type") {
        x++;
        q6Res.textContent = "Correct";
    }
    else
        q6Res.textContent = "Incorrect";
    if (q7.value.toLowerCase() == "null terminator") {
        x++;
        q7Res.textContent = "Correct";
    }
    else
        q7Res.textContent = "Incorrect";
    if (q8.value.toLowerCase() == "2") {
        x++;
        q8Res.textContent = "Correct";
    }
    else
        q8Res.textContent = "Incorrect";
    if (q9.value.toLowerCase() == "application programming interface") {
        x++;
        q9Res.textContent = "Correct";
    }
    else
        q9Res.textContent = "Incorrect";
    if (q10.value.toLowerCase() == "std::ostream") {
        x++;
        q10Res.textContent = "Correct";
    }
    else
        q10Res.textContent = "Incorrect";
    mark.textContent = "Your mark: " + x + "/10";
}
function inputFunc() {
    mark.textContent = "Your mark: ?/10";
    q1Res.textContent = "";
    q2Res.textContent = "";
    q3Res.textContent = "";
    q4Res.textContent = "";
    q5Res.textContent = "";
    q6Res.textContent = "";
    q7Res.textContent = "";
    q8Res.textContent = "";
    q9Res.textContent = "";
    q10Res.textContent = "";
}
button.onclick = checkAnswers;
questions.oninput = inputFunc;