function convert(){
    // The getElementById() method returns an element with a specified value.
    var USD=document.getElementById("mValue").value;

    // Calculation

    var USD=0.053*MXD;

    // The innerHTML property sets or returns the HTML content (inner HTML) of an element.
    // The toFixed methods rounds the string to a specified number of decimals.
    document.getElementById("uValue").innerHTML=USD.toFixed(2);
    
}

// When to run the function? addEventListener
document.getElementById("button").addEventListener("click", convert);
