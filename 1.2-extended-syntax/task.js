function getResult(a,b,c){
    // код для задачи №1 писать здесь
    "use strict";
    let x = [];
    let d = b**2-4*a*c;

    if (d < 0) {
    	x = undefined;
    } else if (d === 0) {
    	x[0] = (-b + Math.sqrt(d)) / (2 * a);
    } else if (d > 0) {
    	x[0] = (-b + Math.sqrt(d)) / (2 * a);
    	x[1] = (-b - Math.sqrt(d)) / (2 * a);
    }
    
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let averageMark = 0;

    if (!marks) {
    	return 0;
    } else if (marks.length > 5) {
    	console.log(`Количество введенных оценок: ${marks.length}, среднее значение рассчитано для первых 5`);
    	marks = marks.slice(0, 5);
    }

    for (let i = 0; i < marks.length; i++) {
    	averageMark += marks[i];
    }

    averageMark /= marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let today = new Date();
    today = today.getFullYear();
    let year = dateOfBirthday.getFullYear();
    let yearsOld = (today - year);
    let result;    

    if (yearsOld >= 18) {
    	result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
    	result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
}