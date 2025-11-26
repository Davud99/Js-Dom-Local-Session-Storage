function getValues() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    return { n1, n2 };
}

function toplama() {
    const { n1, n2 } = getValues();
    document.getElementById("result").value = n1 + n2;
}

function cixma() {
    const { n1, n2 } = getValues();
    document.getElementById("result").value = n1 - n2;
}

function vurma() {
    const { n1, n2 } = getValues();
    document.getElementById("result").value = n1 * n2;
}

function bolme() {
    const { n1, n2 } = getValues();
    if (n2 === 0) {
        document.getElementById("result").value = "0-a bölmək olmaz!";
    } else {
        document.getElementById("result").value = n1 / n2;
    }
}
