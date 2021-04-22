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






const distanceBetweenPoints = (a, b) => {
    
	const XD = a.x > b.x ? (a.x - b.x) : (b.x-a.x)
	const YD = a.y > b.y ? (a.y - b.y) : (b.y-a.y)
	
	return Math.pow((XD*XD+YD*YD),0.5)
}

var dist = 0
dist = distanceBetweenPoints (a,b);
console.log(dist);
