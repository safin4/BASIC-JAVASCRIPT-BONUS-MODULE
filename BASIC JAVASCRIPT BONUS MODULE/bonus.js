var marks = [89, 97, 88, 68, 94, 86, 79];

for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    console.log(element);
}

console.log("Outside");
console.log("Gulisthan");


function add (number1, number2) {
    var total = number1 + number2;
    return total;
}

var result1 = add (65, 89);
console.log(result1);

console.log("Not adding this time");
console.log("Not eating right now");

var result2 = add (144, 568);
console.log(result2);


function largestNumber (numbers) {
    var larger = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element > larger) {
            larger = element;
        }
    }
    return larger;
}

var numbers = [65, 45, 23, 11, 89, 91, 67, 61];
var output = largestNumber(numbers);
console.log("output", output);