const preFizz = (n) => {
	let count = 1;
	const result = [count];
	while (count++ < n)
		result.push(count)
	return result
}

    var C = preFizz (20);
    C.forEach(element => console.log(element));

