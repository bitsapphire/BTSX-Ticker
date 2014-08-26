$.ajax({
    
    url: 'https://bitsharestalk.org/Themes/default/scripts/btcvalue.php',

    method: 'GET',

    dataType: 'json',

    success: function(response) {

        btsx_to_btc = parseFloat(response);
        $('.price p').text( "Current BTSX Buy Price : " + (btsx_to_btc).toFixed(8) + " BTC");

    },

    error: function(response) {
        console.log(response.responseText);
    }

});