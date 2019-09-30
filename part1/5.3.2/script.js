let inputStr1 = 'buy ViAgRA now';
let inputStr2 = 'free xxxxx';
let inputStr3 = "innocent rabbit";

console.log(checkSpam(inputStr1));
console.log(checkSpam(inputStr2));
console.log(checkSpam(inputStr3));

function checkSpam(str)  {
    str = str.toLowerCase();
    if (str.includes('xxx') || str.includes('viagra')) {
        return true;
    }
    return false;
}