/*jslint browser: true*/
/*global $, jQuery, alert*/

function getNums() {
    "use strict";
    
    var amount = parseFloat(document.getElementById("amount").value),
        rec = parseFloat(document.getElementById("rec").value),
        time = parseFloat(document.getElementById("time").value),
        rate = parseFloat(document.getElementById("rate").value),
        v = document.getElementById("timeSelect"),
        t = v.value,
        result = 0;
    
    function calc(amount, time, rate) {
        var ans = amount * Math.pow((1 + (rate * t) / 100), time * t) + rec * (Math.pow((1 + (rate * t) / 100), time * t) - 1) / rate;
        return ans.toFixed(2);
    }
    
    result = calc(amount, time, rate);
    document.getElementById("result").innerHTML = result;
   
}




$(document).ready(getNums);
$(document).ready(function () {
    "use strict";
    $("#button").click(function button() {
        $(this).next().fadeToggle(400);
        $("#button").toggleClass("active");
    });
    
    $(".exampleButton").click(function button() {
        $(this).next().fadeToggle(400);
    });
});