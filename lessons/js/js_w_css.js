btn_yes = true
bg_changed = false
hidden = true

document.getElementById("cbtn").onclick = changetored;
document.getElementById("bbtn").onclick = changebackground;
document.getElementById("codebtn").onclick = show_hide_code;

function changetored() {
    if (btn_yes) {
        document.getElementById("cbtn").style.backgroundColor = "red";
        document.getElementById("cbtn").innerHTML = "Click Me again I turn Back";
        btn_yes = false
    } else {
        document.getElementById("cbtn").style.backgroundColor = "green";
        document.getElementById("cbtn").innerHTML = "Click me I turn red";
        btn_yes = true
    }
}

function changebackground() {
    if (!bg_changed) {
        document.getElementById("main-body").style.backgroundColor = "blue";
        document.getElementById("bbtn").innerHTML = "Click Me Again To Change Back";
        bg_changed = true
    } else {
        document.getElementById("main-body").style.backgroundColor = "white";
        document.getElementById("bbtn").innerHTML = "Click Me I Turn The Page Blue";
        bg_changed = false
    }
}

function show_hide_code() {
    if (hidden) {
        document.getElementById("code").style.display = ""
        document.getElementById("codebtn").innerHTML ="<span><i class=\"fa-solid fa-code\"></i></span> Click Me to Hide Code"
        hidden = false
    } else {
        document.getElementById("code").style.display = "none"
        document.getElementById("codebtn").innerHTML = "<span><i class=\"fa-solid fa-code\"></i></span> Click Me to Show Code"
        hidden = true
    }
}