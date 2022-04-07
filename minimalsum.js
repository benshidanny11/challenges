
 
	const minimum_cost = (arr, S) => {
        const ceil_div = parseInt(a / b) + ((a ^ b) > 0 && a % b);
		let sum = 0;
		let n = arr.length;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		if (sum <= S) {
			return 0;
		}
		arr.sort();

		let diff = sum - S;
		let ops = sum - S;
		let s = 0;
		let x;

		for (let i = n - 1; i > 0; i--) {
			s += arr[i];
			let dec = (n - i) * arr[0];
			if (s - dec >= diff) {
				x = 0;
			}
			else {
				x = Math.max(ceil_div((diff - s + dec),
					(n - i + 1)), 0);
			}
			if (x + n - i < ops) {
				ops = x + n - i;
			}
		}
		return ops;
	}

	let arr = [2,4, 1, 6, 12];
	let S = 5;
	console.log(minimum_cost(arr, S));
