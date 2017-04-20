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
        var ans = amount * Math.pow((1 + (rate * t) / 100), time) + rec * (Math.pow((1 + (rate * t) / 100), time) - 1) / (rate * t / 100);
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

function graph() {
    "use strict";
    var ctx = document.getElementById('myChart').getContext('2d'),
        amount = parseFloat(document.getElementById("amount").value),
        rec = parseFloat(document.getElementById("rec").value),
        time = parseFloat(document.getElementById("time").value),
        rate = parseFloat(document.getElementById("rate").value),
        rateadd = parseFloat(document.getElementById("rate").value) + 1,
        rateless = parseFloat(document.getElementById("rate").value) - 1,
        v = document.getElementById("timeSelect"),
        t = v.value,
        period = v.textContent,
        n0 = amount,
        n1 = amount * Math.pow((1 + (rate * t) / 100), time / 5) + rec * (Math.pow((1 + (rate * t) / 100), time / 5) - 1) / (rate * t / 100),
        n2 = amount * Math.pow((1 + (rate * t) / 100), time *  2 / 5) + rec * (Math.pow((1 + (rate * t) / 100), time * 2 / 5) - 1) / (rate * t / 100),
        n3 = amount * Math.pow((1 + (rate * t) / 100), time*3/5) + rec * (Math.pow((1 + (rate * t) / 100), time*3/5) - 1) / (rate*t/100),
        n4 = amount * Math.pow((1 + (rate * t) / 100), time*4/5) + rec * (Math.pow((1 + (rate * t) / 100), time*4/5) - 1) / (rate*t/100),
        n = document.getElementById("result").innerHTML,
        a1 = amount * Math.pow((1 + (rateadd * t) / 100), time*1/5) + rec * (Math.pow((1 + (rateadd * t) / 100), time*1/5) - 1) / (rateadd*t/100),
        a2 = amount * Math.pow((1 + (rateadd * t) / 100), time*2/5) + rec * (Math.pow((1 + (rateadd * t) / 100), time*2/5) - 1) / (rateadd*t/100),
        a3 = amount * Math.pow((1 + (rateadd * t) / 100), time*3/5) + rec * (Math.pow((1 + (rateadd * t) / 100), time*3/5) - 1) / (rateadd*t/100),
        a4 = amount * Math.pow((1 + (rateadd * t) / 100), time*4/5) + rec * (Math.pow((1 + (rateadd * t) / 100), time*4/5) - 1) / (rateadd*t/100),
        a5 = amount * Math.pow((1 + (rateadd * t) / 100), time) + rec * (Math.pow((1 + (rateadd * t) / 100), time) - 1) / (rateadd*t/100),
        l1 = amount * Math.pow((1 + (rateless * t) / 100), time*1/5) + rec * (Math.pow((1 + (rateless * t) / 100), time*1/5) - 1) / (rateless*t/100),
        l2 = amount * Math.pow((1 + (rateless * t) / 100), time*2/5) + rec * (Math.pow((1 + (rateless * t) / 100), time*2/5) - 1) / (rateless*t/100),
        l3 = amount * Math.pow((1 + (rateless * t) / 100), time*3/5) + rec * (Math.pow((1 + (rateless * t) / 100), time*3/5) - 1) / (rateless*t/100),
        l4 = amount * Math.pow((1 + (rateless * t) / 100), time*4/5) + rec * (Math.pow((1 + (rateless * t) / 100), time*4/5) - 1) / (rateless*t/100),
        l5 = amount * Math.pow((1 + (rateless * t) / 100), time) + rec * (Math.pow((1 + (rateless * t) / 100), time) - 1) / (rateless*t/100);
                    
                    var myChart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: [ 0, time*1/5, time*2/5, time*3/5, time*4/5, time],
                            datasets: [{
                                label: 'Your investment',
                                data: [n0, n1, n2, n3, n4, n],
                                backgroundColor: "rgba(40, 180, 99, 0.4)"
                                }, {
                                label: '+1% return',
                                data: [n0, a1, a2, a3, a4, a5],
                                backgroundColor: "rgba(171, 235, 198,0.4)"
                                }, {
                                label: '-1% return',
                                data: [n0, l1, l2, l3, l4, l5],
                                backgroundColor: "rgba(20, 90, 50  , 0.4)"
                            }]
                        },
                        options: {
                            responsive: true,
                            scales: {
                                xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: "No. of periods"
                                    }
                                }]
                            }
                        }
                    });                                  
}
                    

function allFunctions() {
    getNums();
    graph();
}