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



  function distanceBetweenPoints(a, b) {
    var XD;
    if (a.x > b.x )
    XD = (a.x - b.x)
    else XD = (b.x-a.x)
    return XD
  }

var dist = distanceBetweenPoints (7,9)
console.log(dist);
