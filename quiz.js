function checkAnswers() {
    var x = 0;
    if (q1.value == "correct answer")
        x++;
    if (q2.value == "correct answer")
        x++;
    if (q3.value == "correct answer")
        x++;
    if (q4.value == "correct answer")
        x++;
    if (q5.value == "correct answer")
        x++;
    if (q6.value == "correct answer")
        x++;
    if (q7.value == "correct answer")
        x++;
    if (q8.value == "correct answer")
        x++;
    if (q9.value == "correct answer")
        x++;
    if (q10.value == "correct answer")
        x++;
    mark.textContent = "Your mark: " + x + "/10";
}
function inputFunc() {
    mark.textContent = "Your mark: ?/10"
}
button.onclick = checkAnswers;
questions.oninput = inputFunc;