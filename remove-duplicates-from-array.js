// Подается на вход массив чисел, нужно удалить дубликаты и вернуть длину нового массива с удаленными дубликатами

const arr1 = [1, 1, 2];
const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4];

// решение через set
let removeDuplicates = (nums) => {
	const uniqNums = [...new Set(nums)];

	nums.length = 0;

	nums.push(...uniqNums);

	return nums.length;
}

//решение перебором
let removeDuplicates2 = (nums) => {
	for(let i = 0; i < nums.length; i++) {
		if(nums[i] === nums[i-1]) {
			nums.splice(i, 1);
			i--;
		}
	}
	
	return nums.length;
}

console.log(removeDuplicates2(arr1));
console.log(arr1);

console.log(removeDuplicates2(arr2));
console.log(arr2);