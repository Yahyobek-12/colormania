function setBgColor (e) {
    e.preventDefault();
    let newColor = document.getElementById("myForm").elements[0].value;
    if (newColor) {
        document.getElementById("result-1").innerText = newColor;
        document.getElementById("result-1").style.color = newColor;
        document.getElementById("color-1").style.background = newColor;
        document.getElementById("container").style.borderTop = `5px solid ${newColor}`;
    } else {
        document.getElementById("color").style.background = "white";
    }
}
document.getElementById("Go-1").addEventListener("click", setBgColor);
