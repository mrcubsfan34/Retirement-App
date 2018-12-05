function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageMike = calculateAge(1982);
var ageJohn = calculateAge(1968);
var ageJane = calculateAge(1970);
console.log(var ageMike, var ageJohn, var ageJane);



function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement < 0) {
       console.log(firstName + ' retires in' + retirement + ' years.');
    } else {
       console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1982, 'Mike');
yearsUntilRetirement(1968, 'John');
yearsUntilRetirement(1970, 'Jane');

