function sweetDate(w1,r1,w2,r2,timePeriod){
    //coding here...
    let i;
    let result = 0;
    let number;
    for (i=1;i<=timePeriod;i++)
    if (i%(w1+r1) == 0 || i%(w1+r1)>w1)
    {
        
        if (i%(w2+r2) == 0 || i%(w2+r2)>w2)
        {
    result++;}
    
    }
return result;
        
  }
  
  let a= sweetDate(3,1,7,3,1000);
  
  console.log(a);
  