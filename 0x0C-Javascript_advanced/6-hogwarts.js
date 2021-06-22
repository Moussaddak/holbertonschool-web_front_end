let studentHogwarts = (() => {
    let privateScore = 0;
    let name = null;

    let changeScoreBy = (points) => {
        privateScore += points;
    }

    let setName = (newName) => {
        name = newName;
    }

    let rewardStudent = () => {
        changeScoreBy(1);
    }

    let penalizeStudent = () => {
        changeScoreBy(-1);
    }

    let getScore = () => {
        return `${name}: ${privateScore}`;
    }

    return {
        setName: setName,
        rewardStudent: rewardStudent,
        penalizeStudent: penalizeStudent,
        getScore: getScore
    }
});


let harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
