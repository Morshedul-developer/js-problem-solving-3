//* Problem 2: Student Marks Analyzer
//? Function name: analyzeMarks(marksObj)
//? Statement:
//?  Return total marks, average marks, highest scoring subject, and lowest scoring subject.

//? Test case 1
//? Input: { math: 78, english: 65, physics: 88, bangla: 55 }

//? Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

//? Test case 2
//? Input: { ict: 90, biology: 90, chemistry: 70 }
//? Output: { total: 250, average: 83.33, highest: "ict", lowest: "chemistry" }

// solution

function analyzeMarks(marksObj) {
    let total = 0;
    let highestMark = -Infinity;
    let lowestMark = Infinity;

    let highest = null;
    let lowest = null;

    for(const key in marksObj) {
        let mark = marksObj[key];
        total+=mark;
        if(highestMark < mark) {
            highestMark = mark;
            highest = key;
        }
        if(lowestMark > mark) {
            lowestMark = mark;
            lowest = key;
        }
    }
    const totalSub = Object.keys(marksObj).length;
    const average = total / totalSub;
    return {
        total,
        average,
        highest,
        lowest
    }
}

// const result = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
const result = analyzeMarks({ ict: 90, biology: 90, chemistry: 70 });
console.log(result);