$(function() {
    $("#m2tosheetsize").keyup(function() {
    var val1 = parseFloat($(this).val());
    var val2 = parseFloat($(this).val());
    var val3 = parseFloat($(this).val());
    var val4 = parseFloat($(this).val());
    var val5 = parseFloat($(this).val());
    var val6 = parseFloat($(this).val());
    var val7 = parseFloat($(this).val());
    // If val is a good float, divide by the m2 of the board
    val1 = Math.ceil(val1 ? val1 / 0.36 : "Invalid number");
    val2 = Math.ceil(val2 ? val2 / 0.54 : "Invalid number");
    val3 = Math.ceil(val3 ? val3 / 0.72 : "Invalid number");
    val4 = Math.ceil(val4 ? val4 / 1.62 : "Invalid number");
    val5 = Math.ceil(val5 ? val5 / 2.88 : "Invalid number");
    val6 = Math.ceil(val6 ? val6 / 3.24 : "Invalid number"); 
    val7 = Math.ceil(val7 ? val7 / 3.6 : "Invalid number");    
    $("#m2sizeresult1").text(val1);
    $("#m2sizeresult2").text(val2);
    $("#m2sizeresult3").text(val3);
    $("#m2sizeresult4").text(val4);
    $("#m2sizeresult5").text(val5);
    $("#m2sizeresult6").text(val6);
    $("#m2sizeresult7").text(val7);
    })
});


$(function() {
    $("#m2tosheetcost").keyup(function() {
    var val1 = parseFloat($(this).val());
    var val2 = parseFloat($(this).val());
    var val3 = parseFloat($(this).val());
    var val4 = parseFloat($(this).val());
    var val5 = parseFloat($(this).val());
    var val6 = parseFloat($(this).val());
    var val7 = parseFloat($(this).val());
    // If val is a good float, times this to get the board cost
    val1 = (val1 ? val1 * 0.36 : "Invalid number").toFixed(2);
    val2 = (val2 ? val2 * 0.54 : "Invalid number").toFixed(2);
    val3 = (val3 ? val3 * 0.72 : "Invalid number").toFixed(2);
    val4 = (val4 ? val4 * 1.62 : "Invalid number").toFixed(2);
    val5 = (val5 ? val5 * 2.88 : "Invalid number").toFixed(2);
    val6 = (val6 ? val6 * 3.24 : "Invalid number").toFixed(2);
    val7 = (val7 ? val7 * 3.6 : "Invalid number").toFixed(2);
    $("#m2costresult1").text(val1);
    $("#m2costresult2").text(val2);
    $("#m2costresult3").text(val3);
    $("#m2costresult4").text(val4);
    $("#m2costresult5").text(val5);
    $("#m2costresult6").text(val6);
    $("#m2costresult7").text(val7);
    })
}); 

// Discount calculator 
function calculateDiscount() {
    var percentage = $('input[name=percentage]').val(),
        price = $('input[name=price]').val(),
        calcPrice = price - ( (price/100) * percentage ),
        discountPrice = calcPrice.toFixed(2);
    $('input[name=\'discount\']').val(discountPrice);
}
/*
function calculatePerc() {
    var discountPrice = $('input[name=discount]').val(),    
        price = $('input[name=price]').val(),
        calcPerc = (price/100) * (price-discountPrice),
        discountPerc = calcPerc.toFixed();
    $('input[name=percentage]').val(discountPerc);
}
*/

// Margin addition calculator

function calculateMargin() {
    var margin = $('input[name=margin]').val(),
        cost = $('input[name=cost]').val(),
        marginPerc = margin / 100,
        calcMargin = (cost) / (1 - (marginPerc)),
        sellingPrice = calcMargin.toFixed(2);
    $('input[name=\'sellingprice\']').val(sellingPrice);
}

/*
function calculateMarginPerc() {
    var sellingPrice = $('input[name=sellingprice]').val(),    
        cost = $('input[name=cost]').val(),
        calcMargPerc = (cost/100) * (cost-sellingPrice),
        marginPerc = calcMargPerc.toFixed();
    $('input[name=margin]').val(marginPerc);
}
*/
