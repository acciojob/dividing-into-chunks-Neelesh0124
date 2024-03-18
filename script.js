const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	
	for (let i = 0; i < arr.length; i++) {
		let maxSum = 0;
		for (let j = i; j < arr.length; j++) {
			maxSum = maxSum + arr[j];
			if (maxSum<=n) {
				
			}
		}
	}
};

//const n = prompt("Enter n: ");
//alert(JSON.stringify(divide(arr, n)));
