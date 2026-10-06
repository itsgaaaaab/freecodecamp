function isPrime(str){

    if (str <= 1) return false;
  if (str <= 3) return true;
  if (str % 2 === 0 || str % 3 === 0) return false;

  for (let i = 5; i * i <= str; i += 6) {
    if (str % i === 0 || str % (i + 2) === 0) return false;
  }

  return true;

}

module.exports = {
 isPrime
};