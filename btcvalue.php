<?php
$btsx_to_btc = file_get_contents('https://poloniex.com/public?command=returnTicker');

$btsx_to_btc = json_decode($btsx_to_btc);

die(json_encode($btsx_to_btc->BTC_BTSX->last));
?>