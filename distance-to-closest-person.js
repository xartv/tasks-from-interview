// найти максимальное расстояние на котором можно поставить единицу от ближайшей единицы

const input1 = [0, 0, 0, 1, 0, 0, 0, 0]; // 2
const input2 = [1, 0, 0, 0, 0]; // 3

const maxDistToClosest = (seats) => {
  let count = 0
  let max = 0;
  
  if (seats[0] === 0) {
    for(let i = 0; i < seats.length; i++) {
      let item = seats[i];

      if (item === 1) {
        break;
      }

      max++;
    }
  }
  
  for(let i = 0; i < seats.length; i++) {
    let item = seats[i];

    if(i === seats.length - 1 && item === 0) {
      count++;
      max = Math.max(max, count);
      break;
    }

    if (item === 0) {
      count++;
      max = Math.max(max, Math.ceil(count/2));
    } else {
      count = 0;
    }

  }

  return max;
}

console.log(maxDistToClosest(input1));
//console.log(maxDistToClosest(input2));