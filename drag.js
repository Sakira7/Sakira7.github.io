$(document).ready(function() {
    updateJP();

    setInterval(function(){ updateJP(); }, 300000);
});

function updateJP() {
    $.getJSON("https://connect.idpit.se/jpinfo.php", {format: "json"}, function(){console.log("success")})
    .done(function( data ) {
      $("#super1").html("" + numberWithSpaces(data[0].rad1) + " kr");
      $("#super2").html("" + numberWithSpaces(data[0].rad2) + " kr");
      $("#super3").html("" + numberWithSpaces(data[0].rad3) + " kr");
      $("#eldorado").html("" + numberWithSpaces(data[0].eldorado) + " kr");
      $("#drom").html("" + numberWithSpaces(data[0].drom) + " kr");
    })
    .fail(function() {
        console.log("Failed");
    });
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}