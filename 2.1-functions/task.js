"use strict";

// Задача 1

function getSolutions(a, b, c) {
	
	let result = {
		D: null,
		roots: [],
	};

	result.D = b*b - 4*a*c;	

	if (result.D == 0) {
		result.roots[0] = ((-b + Math.sqrt(result.D))/(2*a));		
	} else if (result.D > 0) {
		result.roots[0] = ((-b + Math.sqrt(result.D))/(2*a));
		result.roots[1] = ((-b - Math.sqrt(result.D))/(2*a));
	} else {
		result.D;
	}
	return result;
	}
	

function showSolutionsMessage(a,b,c) {

	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);

	if (result.roots.length == 1) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	} else if (result.roots.length == 2) {
		console.log(`Уравнение имеет два  кореня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	} else {
		console.log(`Уравнение не имеет вещественных корней`);
	}

}

showSolutionsMessage(1, 2, 3);  
showSolutionsMessage(7, 20, -3);  
showSolutionsMessage(2, 4, 2);

// Задача 2

function getAverageScore(data) {
	
	function getAverageMark(marks) {
		
		let sumMarks = 0;
		
		for (let mark of marks) {
			sumMarks += mark;
		}
		return (sumMarks / marks.length);
	}

	let average = [];

  for (let subject in data) {    
    data[subject] = getAverageMark(data[subject]);
    average.push(data[subject]);
  }
  data['average'] = getAverageMark(average);

  return data;
}

console.log(getAverageScore({
	algebra: [2, 4, 5, 2, 3, 3],
	geometry: [2, 4, 5],
	russian: [3, 3, 4],
	physics: [5, 5],
	music: [2, 2, 6],
	english: [4, 4, 3],
	poetry: [5, 3, 4],
	chemistry: [2],
	french: [4, 4]
}));

let getPersonData = secretData => {return {
     firstName: getDecodedValue(secretData.aaa), 
     lastName: getDecodedValue(secretData.bbb)
  }
}

let getDecodedValue = secret => !secret ? 'Родриго' : 'Эмильо';

console.log(getPersonData({
  aaa: 0,
  bbb: 0
}))
console.log(getPersonData({
  aaa: 1,
  bbb: 0
}))
console.log(getPersonData({
  aaa: 0,
  bbb: 1
}))
console.log(getPersonData({
  aaa: 1,
  bbb: 1
}))