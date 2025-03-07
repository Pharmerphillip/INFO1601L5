//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',     //NBNBNB this is an object, not the first index of the array
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];


function getAverateGrade (student, course){
  let avg = 0;
  if(course === 'INFO 1600' || course === 'INFO 1601' || course === 'INFO 1603'){
      for(let i = 0; i < student.transcript[0].grades.length; i++){
        let temp = student.transcript[0].grades[i];
        avg = temp + avg;
      }
      return avg / student.transcript[0].grades.length;
  }
  else return -1;
}

let temp = getAverateGrade(paul,'INFO 1600');
console.log(temp);

function getAssignmentMark(student, course, num){
  if(course === 'INFO 1600' || course === 'INFO 1601' || course === 'INFO 1603'){
    return student.transcript[0].grades[num];
  }
  else return -1;
}

let temp2 = getAssignmentMark(paul, 'INFO 1600', 1);
console.log(temp2);

function averageAssessment(students, courseName, assignment){
  let total = 0;
  let counter = 0;
  for(let i = 0; i < students.length; i++){
    if (students[i] === bob){
      if(students[i].transcript[1].course === courseName){
        let temp = students[i].transcript[1].grades[assignment];
        counter++;
        total = temp + total;
      }
    }
    if(students[i].transcript[0].course === courseName){
        let temp = students[i].transcript[0].grades[assignment];
        counter++;
        total = temp + total;
      }
  }
  return total / counter;
}
let temp3 = averageAssessment(students, 'INFO 1601', 0);
console.log(temp3);