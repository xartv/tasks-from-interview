// Найти одинокое число. Необходимо сделать так, чтобы код выполнялся за линейное время.

const input = [2, 6, 2, 1, 1, 6, 8];

// мое решение, два перебора
const singleNumber = function (nums) {
  if (nums.length === 0 || !nums) return null;

  const map = {};

  for(let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] + 1 || 1;
  }

  for(let [key, value] of Object.entries(map)) {
    if (value === 1) return key
  }

  return null;

}

//хитрое решение с математикой
const singleNumber2 = (nums) => {
  const uniq = [...new Set(nums)];

  const sumUniq = uniq.reduce((acc, item) => acc + item, 0);
  const sumOrig = nums.reduce((acc, item) => acc + item, 0);

  return sumUniq * 2 - sumOrig;
}

console.log(singleNumber2(input))