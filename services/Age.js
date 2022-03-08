module.exports = class Age{
    /**
     * yearCalc Takes the users current age and estimates how many years they have left by subtracting that age off of a random number from 70-105
     */
    yearCalc({currentAge, doesSmoke, doesWorkout}) {
        let finalAge = Math.random() * (105 - 70) + 70;
        finalAge = finalAge.toFixed(0);
        finalAge -= currentAge;
        if(doesSmoke){
            finalAge -= 10;
        }
        if(doesWorkout){
            finalAge += 10;
        }
        return finalAge
    }
}