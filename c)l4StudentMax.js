// 3. Given two arrays (student names and scores), return the student name with the maximum score:

function maxScoreStudent(names, scores) {
    let maxScore = -Infinity;
    let maxStudent = "";

    // Traverse the scores array and find the student with the maximum score
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxStudent = names[i];
        }
    }

    return maxStudent;
}

let names = ["sanjay", "priya", "ramesh", "sanjana"];
let scores = [88, 45, 71, 91];
console.log(maxScoreStudent(names, scores)); // Output: sanjana

function biggboss(names,mark){
    let maxmark=-Infinity;
    let maxstudent="";
    for(let i=0;i<mark.length;i++){
        if(mark[i]>maxmark){
            maxmark=mark[i];
            maxstudent=names[i];
        }
    }
    console.log(maxstudent);
    
}
biggboss(["sanjay", "priya", "ramesh", "sanjana"],[88, 45, 71, 91])
