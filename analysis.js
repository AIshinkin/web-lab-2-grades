export function calculateAverage(data) {
  if (data.length === 0) return null;
  let sum = 0;
  for (const student of data) {
    sum += student.score;
  }
  return sum / data.length;
}

export function findTopStudent(data) {
  if (data.length === 0) return null;
  let top = data[0];
  for (const student of data) {
    if (student.score > top.score) top = student;
  }
  return top.name;
}

export function filterFailed(data, passScore) {
  return data
    .filter(student => student.score < passScore)
    .map(student => student.name);
}

export function addLetterGrade(data) {
  return data.map(student => ({
    ...student,
    letter: student.score >= 90 ? "A"
      : student.score >= 75 ? "B" : "C"
  }));
}
