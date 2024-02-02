// Question 1
/*Check you are able to get driving licence or not . if not
than how many year left*/

// Solution
let ageRequired = 18, presentAge = 12, left;

if(presentAge >= ageRequired){
    console.log('you are able to drive the car');
}
else{
    console.log(`leftyear ${ageRequired-presentAge}`);

}

