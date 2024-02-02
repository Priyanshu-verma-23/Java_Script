/*Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
1. Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
2. Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall*/

let markMass = 78, markHeight = 1.69, markBmi;
markBmi = markMass / markHeight**2;
console.log(markBmi)


let johnMass = 92, johnHeight = 1.95, johnBmi;
johnBmi = johnMass / johnHeight**2;
console.log(johnBmi);

if(markBmi>johnBmi){
    console.log("markbmi is greater")
}
else if(johnBmi>markBmi){
    console.log("johnbmii is greater")
}




