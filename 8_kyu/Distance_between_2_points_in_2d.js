/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.
*/

class Point
{
    constructor (x,y)
    {
this.x = x;
this.y = y;
    }
}

var a = new Point (1,6);
var b = new Point (4,2);





  function distanceBetweenPoints(a, b) {
    var XD;
    var YD;
    if (a.x > b.x )
    {XD = (a.x - b.x)}
    else XD = (b.x-a.x)

    if (a.y > b.y )
    {YD = (a.y - b.y)}
    else YD = (b.y-a.y)
    
    
    return Math.pow((XD*XD+YD*YD),0.5)
  }

var dist = 0
dist = distanceBetweenPoints (a,b);
console.log(dist);
