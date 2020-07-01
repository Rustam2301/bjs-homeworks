function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    'use strict'
    let numPercent = Number.parseInt(percent);
    let numContribution = Number.parseInt(contribution);
    let numAmount = Number.parseInt(amount);
    let s = numAmount - numContribution;
    let today = new Date();
    let n = (date.getFullYear() - today.getFullYear()) * 12 + date.getMonth() - today.getMonth();
    let p = numPercent / 1200;
    let payInMonth = s * (p + p / ((Math.pow((1 + p), n)-1)));
    let totalAmount = payInMonth * n;
    console.log(totalAmount.toFixed(2));
    
    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;
    switch(name) {
    	case "":
    	case "null":
    	case "undefined":
    	return greeting = `Привет, мир! Меня зовут Аноним.`;
    	break;
    	default:
    	return greeting = `Привет, мир! Меня зовут ${name}.`
    }		
}