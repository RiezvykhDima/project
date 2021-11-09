exports.fibonachi = function() {
    // 0 1 1 2 3 5 8 13 21 34 55 89 }
    // 0 1 1 2 4 7 13 24 44 

    let numbers = [0,1,];

    for (let i = 2; i < 30; i++) {
      let plus = numbers[i-1] + numbers[i-2];
      numbers.push(plus);
    }
    console.log(numbers);
  }