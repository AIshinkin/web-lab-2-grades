import assert from "node:assert/strict";
import { grades } from "./grades.js";
import {
  calculateAverage, findTopStudent,
  filterFailed, addLetterGrade
} from "./analysis.js";

const before = JSON.stringify(grades);
assert.equal(calculateAverage(grades), 77.6);
assert.equal(findTopStudent(grades), "Денис");
assert.deepEqual(filterFailed(grades, 60), ["Студент_X"]);
assert.deepEqual(addLetterGrade(grades).map(s => s.letter),
  ["B", "A", "B", "B", "C"]);
assert.equal(calculateAverage([]), null);
assert.equal(findTopStudent([]), null);
assert.deepEqual(filterFailed([], 60), []);
assert.deepEqual(addLetterGrade([]), []);
const bounds = [59, 60, 74, 75, 89, 90].map(score => ({
  name: String(score), score
}));
assert.deepEqual(filterFailed(bounds, 60), ["59"]);
assert.deepEqual(addLetterGrade(bounds).map(s => s.letter),
  ["C", "C", "C", "B", "B", "A"]);
assert.equal(findTopStudent([
  { name: "Первый", score: 90 },
  { name: "Второй", score: 90 }
]), "Первый");
assert.equal(JSON.stringify(grades), before);
assert.notEqual(addLetterGrade(grades)[0], grades[0]);
console.log("Все 13 проверок пройдены.");
