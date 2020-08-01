const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000,
}

for (let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}

basket.forEach(item => {
	console.log(item);
})

// for of
//iterating - arrays, strings

for (item of basket) {
	console.log(item);
}

// for in - loop over and see the object properties
//enumerating - objects

for (item in basket) {
	console.log(item)
}

const array = [-1,0,3,100, 99, 2, 99];
function biggestNumberInArray(arr) {
	let highest = 0;
	for (let i = 0; i < arr.length; i++) {
		if (highest < arr[i]) {
			highest = arr[i];
		}
	}
	return highest
}