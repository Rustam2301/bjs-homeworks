'use strict';

//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function(){
    let newString = this.toLowerCase().split(' ').join('');
    for(let i = newString.length - 1, a = 0; i >= 0 ; i--){
        if(newString[i] !== newString[a]){
            return false;
        }
        a++;
    }
    return true;
}


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let average = 0;

    for (let i = 0; i < marks.length; i++) {
    	average += marks[i];
    }

    average /= marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now  = Date.now();
    birthday = new Date(birthday).getTime();
    let timestampOneYear = 1000 * 60 * 60 * 24 * (365 * 4 + 1) / 4;
    // let timestampOneYear2 = 1000 * 60 * 60 * 24 * (365 * 4 + 1);
    let diff = now - birthday;
    let age = diff / timestampOneYear;

    if ( age > 18 ) {
        return true;
    }
    
    return false;
}