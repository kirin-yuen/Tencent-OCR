var express = require('express'),
    router = express.Router(),
    crypto = require('crypto');

var secretId = 'AKIDUtCLJ7QgfgeUAepKSPBlHftu15yhld7S',
    secretKey = 'JSQDuY6UhmhS3lJgv0BD5mHblkeOyOdi',
    appid = '1256911885',
    pexpired = 86400,
    userid = 0;

var now = parseInt(Date.now() / 1000),
    rdm = parseInt(Math.random() * Math.pow(2, 32)),
    // 签名拼接串
    plainText = 'a=' + appid + '&k=' + secretId + '&e=' + (now + pexpired) + '&t=' + now + '&r=' + rdm + '&u=' + userid + '&f=',
    data = new Buffer(plainText, 'utf8'),
    res = crypto.createHmac('sha1', secretKey).update(data).digest(),
    bin = Buffer.concat([res, data]),
    sign = bin.toString('base64');


/* post api listing. */
router.post('/', function(req, res, next) {
    // 解决跨域
    res.header("Access-Control-Allow-Origin", "*");

    res.json({
        sign: sign
    })
});

module.exports = router;