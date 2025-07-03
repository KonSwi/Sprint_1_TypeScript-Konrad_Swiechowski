// listToDict
// map
// filter
// reduce

// Example for cars
const cars = {
  modelS: { brand: "Tesla", color: "white", price: 79999 },
  corolla: { brand: "Toyota", color: "silver", price: 20000 },
  mustang: { brand: "Ford", color: "red", price: 45000 },
  civic: { brand: "Honda", color: "blue", price: 22000 },
  model3: { brand: "Tesla", color: "black", price: 39999 },
  beetle: { brand: "Volkswagen", color: "yellow", price: 18000 },
};

// Example for students
const students = {
  alice: { age: 20, major: "Computer Science", gpa: 3.8 },
  bob: { age: 19, major: "Mathematics", gpa: 3.2 },
  charlie: { age: 21, major: "History", gpa: 3.5 },
  diana: { age: 22, major: "Biology", gpa: 3.9 },
  eric: { age: 20, major: "Psychology", gpa: 3.6 },
  fiona: { age: 19, major: "Literature", gpa: 3.4 },
};

interface Dict<T> {
  [k: string]: T;
}

// Map
function mapDict<T, U>(
  dict: Dict<T>,
  fn: (value: T, key: string) => U
): Dict<U> {
  const result: Dict<U> = {};
  for (const key in dict) {
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      result[key] = fn(dict[key], key);
    }
  }
  return result;
}

// Filter
function filterDict<T>(
  dict: Dict<T>,
  fn: (value: T, key: string) => boolean
): Dict<T> {
  const result: Dict<T> = {};
  for (const key in dict) {
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      if (fn(dict[key], key)) {
        result[key] = dict[key];
      }
    }
  }
  return result;
}

// Reduce
function reduceDict<T, U>(
  dict: Dict<T>,
  fn: (accumulator: U, value: T, key: string) => U,
  initialValue: U
): U {
  let result = initialValue;
  for (const key in dict) {
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      result = fn(result, dict[key], key);
    }
  }
  return result;
}

// Przykłady użycia

// 1. filterDict — znajdź tylko samochody droższe niż 30 000
const expensiveCars = filterDict(cars, (car) => car.price > 30000);
console.log("Expensive Cars:", expensiveCars);

// 2. reduceDict — zsumuj wszystkie gpa studentów
const totalGpa = reduceDict(students, (sum, student) => sum + student.gpa, 0);
console.log("Total GPA:", totalGpa);

// 3. mapDict — przekształć dane studentów w komunikaty tekstowe
const studentMessages = mapDict(
  students,
  (s, name) => `${name} has GPA ${s.gpa}`
);
console.log("Student Messages:", studentMessages);

// 4. filterDict — znajdź studentów z GPA powyżej 3.5
const topStudents = filterDict(students, (s) => s.gpa > 3.5);
console.log("Top Students:", topStudents);
