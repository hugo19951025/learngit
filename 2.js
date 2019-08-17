#!/usr/bin/env node
var buff = [];

function isPrivate(ip){
    // TODO
    var aBegin = getIpNum("10.0.0.0");
    var aEnd = getIpNum("10.255.255.255");
    var bBegin = getIpNum("172.16.0.0");
    var bEnd = getIpNum("172.31.255.255");
    var cBegin = getIpNum("192.168.0.0");
    var cEnd = getIpNum("192.168.255.255");
    var circleBegin = getIpNum("127.0.0.0");
    var circleEnd = getIpNum("127.0.255.255");
    var ipNum = getIpNum(ip);
    var res = inRange(ipNum,aBegin,aEnd) | inRange(ipNum,bBegin,bEnd) |inRange(ipNum,cBegin,cEnd) | inRange(ipNum,circleBegin,circleEnd);
    return !!res;
}
function getIpNum(ipAd) {
    var ip = ipAd.split('.');
    var a = parseInt(ip[0]);
    var b = parseInt(ip[1]);
    var c = parseInt(ip[2]);
    var d = parseInt(ip[3]);
    var ipNum = a * 256 * 256 * 256 + b * 256 * 256 + c * 256 + d;
    return ipNum;
}
function inRange(ip, begin, end) {
    return (ip >= begin) && (ip <= end);
}

process.stdin.on('data', (data) => {
    buff.push(data)
    var input = Buffer.concat(buff).toString('UTF-8');
    // console.log(input);
    var res = isPrivate(input);
    console.log(res);
});

process.stdin.once('end', () => {
    var input = Buffer.concat(buff).toString('UTF-8');
    var res = isPrivate(input);
    console.log(res);
});