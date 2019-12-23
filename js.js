document.getElementById("cookie").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;


document.getElementById("sprak").innerHTML = navigator.language;

if(navigator.language == "sv-SE"){

document.getElementById("sprak").innerHTML = "du har valt språket svenska"

}
else{

document.getElementById("sprak").innerHTML = "du har valt språket inte svenska"

}


document.getElementById("java").innerHTML = navigator.javaEnabled();

if(navigator.javaEnabled == "false"){

	document.getElementById("java").innerHTML = "javascript är inte aktiverat"
}
else{

document.getElementById("java").innerHTML = "javascript är aktiverat"

}