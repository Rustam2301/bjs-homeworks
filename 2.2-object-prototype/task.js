//String.prototype.isPalindrome - для задачи №1

function getAnimalSound(animal) {

	if (animal === undefined) {
		return null;
	}
	
	let sound = animal.sound;
	return sound;
	
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
    // код для задачи №3 писать здесь
    let now = new Date();
    let birthday = Date.parse(birthday);
    let diff = now - birthday;    
    const msInYear = Number(3.154e+10 + 2.16e+7);
    let age = Math.floor(diff/msInYear);

    if (age >= 18) {return 'Совершеннолетний'};
    return 'Нет';
    // return verdict
}