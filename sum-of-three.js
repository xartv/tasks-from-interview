// Найти три числа, сумма которых дает заданное число

// Решение основано на трех указателях и сортировки первоначального массива. Указатель i отвечает за перебираемый элемент, j за следующий элемент, k за последний элемент. Если нам нужно увеличивать сумму, то двигаем указатель j вправо (к большим числам, т.к. массив отсортирован от меньшего к большему), если нам нужно уменьшать сумму, то двигаем указатель k
const array = [-1, 0, 1, 2, -1, -4];

const threeSum = (nums, target = 0) => {
	const result = [];

	if (nums.length < 3) return result;

	nums.sort((a, b) => a - b);

	for(let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > target) break;

		if (i > 0 && nums[i] === nums[i - 1]) continue; // проверка, исключающая повторяющиеся указатели i

		let j = i + 1;
		let k = nums.length - 1;

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k];
			
			if (sum === target) {
				result.push([nums[i], nums[j], nums[k]]);

				while (nums[j] === nums[j + 1]) j++; // проверка, исключающая повторяющиеся указатели j
				while (nums[k] === nums[k - 1]) k--; // проверка, исключающая повторяющиеся указатели k

				j++;
				k--;
				continue;
			}

			if (sum < target) {
				j++;
				continue;
			}

			if (sum > target) {
				k--;
				continue;
			}
		}
	}

	return result;
}

console.log(threeSum(array));

// [[-1, -1, 2], [-1, 0, 1]]