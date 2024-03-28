function isMiraculous(number) {
  // Helper functions
  function isFourDigit(number) {
    return number >= 1000 && number <= 9999;
  }

  function sumOfDigits(number) {
    let sum = 0;
    while (number != 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }

  function isPrime(sumOfNumbers) {
    if (sumOfNumbers < 2) return false;
    for (let i = 2; i * i <= sumOfNumbers; i++) {
      if (sumOfNumbers % i === 0) return false;
    }
    return true;
  }

  function isPerfectSq(number) {
    const sqrt = Math.floor(Math.sqrt(number));
    return sqrt * sqrt === number;
  }

  // Main logic
  if (!isFourDigit(number)) return "Non Miraculous";

  const sum = sumOfDigits(number);
  if (!isPrime(sum) && !isPerfectSq(sum)) return "Non Miraculous";

  return "Miraculous";
}

// Test cases
console.log(isMiraculous(1237)); // Output: Miraculous
console.log(isMiraculous(567)); // Output: Non Miraculous
// console.log(String(1234).split("").length);
