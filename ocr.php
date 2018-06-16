
<?php
    $appid = "1256911885";
    $secret_id = "AKIDUtCLJ7QgfgeUAepKSPBlHftu15yhld7S";
    $secret_key = "JSQDuY6UhmhS3lJgv0BD5mHblkeOyOdi";
    $expired = time() + 2592000;
    $current = time();
    $rdm = rand();
    $userid = "0";

    $originalStr = 'a='.$appid.'&b='.'&k='.$secret_id.'&e='.$expired.'&t='.$current.'&r='.$rdm.'&u='
    .$userid.'&f=';

    $signStr = base64_encode(hash_hmac('SHA1', $originalStr, $secret_key, true).$originalStr);

    echo $signStr;
?>
