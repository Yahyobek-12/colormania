function setBgColor2 (e) {
    e.preventDefault();
    let newColor = document.getElementById("inp-1").value;
    if (newColor) {
        // document.body.style.background = newColor;
        document.getElementById("result-2").innerText = newColor;
        document.getElementById("result-2").style.color = newColor;
        document.getElementById("color-2").style.background = newColor;
        document.getElementById("container").style.borderBottom = `5px solid ${newColor}`;
    } else {
        document.getElementById("color-2").style.background = "white";
    }
}
document.getElementById("Go-2").addEventListener("click", setBgColor2);
