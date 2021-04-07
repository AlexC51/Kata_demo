function preFizz(n) {
    var i=1;
    var a = [i];
      while (i<n)
    {
        i++;
        a.push(i);
    }
    return a;
    }

    var C = preFizz (20);
    C.forEach(element => console.log(element));

