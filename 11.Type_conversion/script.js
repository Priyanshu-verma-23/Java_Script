const age = '1992'
// here 1992 is a string
console.log(age + 78);
// Output is 199278;
/*because here age and 78 both
 act as string and + operator add the both string*/
//  but if we use Number function it convert our string to number
// Example

console.log(Number(age) + 21);
// Output 2012
/*with the help of number converter we try to
 convert string to number than output is NaN(not a number)*/
 const fName = 'sahil';
 console.log(Number(fName));
//  Output NaN


// Number to string convert
console.log(String(121)+18);
// Output is 12118