// listToDict
// map
// filter
// reduce
// Example for cars
var cars = {
    modelS: { brand: "Tesla", color: "white", price: 79999 },
    corolla: { brand: "Toyota", color: "silver", price: 20000 },
    mustang: { brand: "Ford", color: "red", price: 45000 },
    civic: { brand: "Honda", color: "blue", price: 22000 },
    model3: { brand: "Tesla", color: "black", price: 39999 },
    beetle: { brand: "Volkswagen", color: "yellow", price: 18000 },
};
// Example for students
var students = {
    alice: { age: 20, major: "Computer Science", gpa: 3.8 },
    bob: { age: 19, major: "Mathematics", gpa: 3.2 },
    charlie: { age: 21, major: "History", gpa: 3.5 },
    diana: { age: 22, major: "Biology", gpa: 3.9 },
    eric: { age: 20, major: "Psychology", gpa: 3.6 },
    fiona: { age: 19, major: "Literature", gpa: 3.4 },
};
// Map
function mapDict(dict, fn) {
    var result = {};
    for (var key in dict) {
        if (Object.prototype.hasOwnProperty.call(dict, key)) {
            result[key] = fn(dict[key], key);
        }
    }
    return result;
}
// Filter
function filterDict(dict, fn) {
    var result = {};
    for (var key in dict) {
        if (Object.prototype.hasOwnProperty.call(dict, key)) {
            if (fn(dict[key], key)) {
                result[key] = dict[key];
            }
        }
    }
    return result;
}
// Reduce
function reduceDict(dict, fn, initialValue) {
    var result = initialValue;
    for (var key in dict) {
        if (Object.prototype.hasOwnProperty.call(dict, key)) {
            result = fn(result, dict[key], key);
        }
    }
    return result;
}
// Przykłady użycia
// 1. filterDict — znajdź tylko samochody droższe niż 30 000
var expensiveCars = filterDict(cars, function (car) { return car.price > 30000; });
console.log("Expensive Cars:", expensiveCars);
// 2. reduceDict — zsumuj wszystkie gpa studentów
var totalGpa = reduceDict(students, function (sum, student) { return sum + student.gpa; }, 0);
console.log("Total GPA:", totalGpa);
// 3. mapDict — przekształć dane studentów w komunikaty tekstowe
var studentMessages = mapDict(students, function (s, name) { return "".concat(name, " has GPA ").concat(s.gpa); });
console.log("Student Messages:", studentMessages);
// 4. filterDict — znajdź studentów z GPA powyżej 3.5
var topStudents = filterDict(students, function (s) { return s.gpa > 3.5; });
console.log("Top Students:", topStudents);
