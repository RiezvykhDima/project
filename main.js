exports.fibonacci = function(number) {

    let numbers = [0,1,];

    for (let i = 2; i < number; i++) {
      let plus = numbers[i-1] + numbers[i-2];
      numbers.push(plus);
    }
    
    return numbers;
  }