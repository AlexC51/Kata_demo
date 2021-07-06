function multi (x)
{
    let sum=1;
    while (x!=0)
    {sum*=x%10; x=(x-x%10)/10;}
    return sum;

}

function persistence(num) {
    let i=0;
    
    while (num>9)
    {
        i++;
        num=multi(num);
        console.log(num);
    }
return i;
 }


 let num=25;
 console.log(persistence(num));