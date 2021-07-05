function XO(str) {
 var a=0
 var b=0   

    for (var i=0;i<=str.length;i++)
{
    if (str[i]=="x" || str[i]=="X") a++
    if (str[i]=="o" || str[i]=="O") b++
}
if (a==b) return true;
else return false;

}
var str = "Xo";

console.log(XO(str));