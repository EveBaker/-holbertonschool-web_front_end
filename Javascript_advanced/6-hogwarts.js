function studentHogworts(){
    var privateScore = (0);
    var name = null;

    function changeScoreBy(points) {
        privateScore += points;
    }

    return {
        setName:
        function (newName) {
            name = newName;
        },
        rewardStudent:
        function() {
            changeScoreBy(1);
        },
        penalizeStudent:
        function() {
        changeScoreBy(-1)
        },
        getScore:
        function() {
            return name + ":" + privateScore
        }
    };
}

//Harry Instance
var harry = studentHogworts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); //should be Harry:4

//Draco Instance
var draco = studentHogworts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // should be Draco:-2

