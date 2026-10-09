import { grades } from "./grades.js";
import {
  calculateAverage, findTopStudent,
  filterFailed, addLetterGrade
} from "./analysis.js";

console.log("Средний балл:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Должники:", filterFailed(grades, 60));
console.log("Буквенные оценки:");
for (const student of addLetterGrade(grades)) {
  console.log(`${student.name}: ${student.score} — ${student.letter}`);
}
console.log("Итоговый массив:", addLetterGrade(grades));
