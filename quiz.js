function checkAnswers() {
    var x = 0;
    if (q1.value.toLowerCase() == "standard template library") {
        x++;
        q1.classList.add("correct");
    }
    else
        q1.classList.add("incorrect");
    if (q2.value == "public") {
        x++;
        q2.classList.add("correct");
    }
    else
        q2.classList.add("incorrect");
    if (q3Ans.checked) {
        x++;
        q3Ans.classList.add("correct");
    }
    else
        q3Wrong.classList.add("incorrect");
    if (q4.value == "stack") {
        x++;
        q4.classList.add("correct");
    }
    else
        q4.classList.add("incorrect");
    if (q5.value.toLowerCase() == "application programming interface") {
        x++;
        q5.classList.add("correct");
    }
    else
        q5.classList.add("incorrect");
    if (q6.value.toLowerCase() == "return type") {
        x++;
        q6.classList.add("correct");
    }
    else
        q6.classList.add("incorrect");
    if (q7.value.toLowerCase() == "null terminator") {
        x++;
        q7.classList.add("correct");
    }
    else
        q7.classList.add("incorrect");
    if (q8.value == "2") {
        x++;
        q8.classList.add("correct");
    }
    else
        q8.classList.add("incorrect");
    if (q9.value == "2^31 - 1") {
        x++;
        q9.classList.add("correct");
    }
    else
        q9.classList.add("incorrect");
    if (q10.value.toLowerCase() == "std::ostream") {
        x++;
        q10.classList.add("correct");
    }
    else
        q10.classList.add("incorrect");
    mark.textContent = "Your mark: " + x + "/10";
}
function inputFunc() {
    mark.textContent = "Your mark: ?/10";
    q1.classList.remove("correct");
    q1.classList.remove("incorrect");
    q2.classList.remove("correct");
    q2.classList.remove("incorrect");
    q3Ans.classList.remove("correct");
    q3Wrong.classList.remove("incorrect");
    q4.classList.remove("correct");
    q4.classList.remove("incorrect");
    q5.classList.remove("correct");
    q5.classList.remove("incorrect");
    q6.classList.remove("correct");
    q6.classList.remove("incorrect");
    q7.classList.remove("correct");
    q7.classList.remove("incorrect");
    q8.classList.remove("correct");
    q8.classList.remove("incorrect");
    q9.classList.remove("correct");
    q9.classList.remove("incorrect");
    q10.classList.remove("correct");
    q10.classList.remove("incorrect");
}
button.onclick = checkAnswers;
questions.oninput = inputFunc;
q8.oninput = inputFunc;