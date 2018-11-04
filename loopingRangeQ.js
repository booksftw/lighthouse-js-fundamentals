// code  output
// range(0, 10, 2);  [ 0, 2, 4, 6, 8, 10 ]
// range(10, 30, 5); [ 10, 15, 20, 25, 30 ]
// range(-5, 2, 3);  [ -5, -2, 1 ]

// The function should return an empty array [] if given incorrect parameters, such as:

// start, end, or step being undefined
// start being greater than end
// step being negative
// Hint: at some point in your code, you may want to use some_array.push(some_value)


function range (start, end, step) {
  let response = [];

  if (start > end) {return [];}
  if (step < 0) {return [];}
  if (start === undefined || end === undefined || step === undefined) {return [];}

  for (var i = start; i <= end; i = i + step) {
    response.push(i);
  }

  return response;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));