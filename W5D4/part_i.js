function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping5() {
  var x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  var x = 'out of block again';
  console.log(x);
}

// mysteryScoping5()

function madlib(verb, adj, noun) {
  return "We Shall" +' '+ verb.toUpperCase() + 'the ' + adj.toUpperCase() + noun.toUpperCase()
}
// console.log(madlib('make', 'best', 'guac'));

function isSubstring(str, sub) {
  return str.includes(sub)
}
// console.log(isSubstring("Jump for joy", "joys"));

function fizzBuzz (arr) {
  const result = []
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (num % 3 === 0 && num % 5 !== 0) {
      result.push(num);
    } else if (num % 3 !== 0 && num % 5 === 0) {
      result.push(num);
    }
  }
  return result
}

console.log(fizzBuzz([9, 15,6,3 ,4]))

function  isPrime(num) {
  return false if num < 2;

  for(let i = 2; i < num; i++) {
    return false if num % i === 0;
  }

  return true
}

console.log(isPrime(8));
