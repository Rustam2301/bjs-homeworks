// Задание 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;  
    	this.releaseDate = releaseDate; 
    	this.pagesCount = pagesCount;
    	this.state = 100;
    	this.type = null;
	}    


	fix () {
        let fixState = this.state * 1.5;
        
        this.state = fixState < 0 ? 0 : fixState > 100 ? 100 : fixState;
    }

		set state(state) {
        	state = state < 0 ? 0 : state > 100 ? 100 : state;
        	this._state = state;
	    	}
	
		get state() {
	        return this._state;
	    	}
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);

// Задание 2

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let zap = this.books.find(function(elem) {
            if(elem[type] == value) {
                return true;
            }
            return false;
        });

        return zap != undefined ? zap : null;
    }

    giveBookByName(bookName) {
        let book = this.books.find(function(elem) {
            return elem.name == bookName ? true : false;
        });
        
        if(book) {
            this.books = this.books.filter(item => item.name != book.name);
            return book;
        }

        return null;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// Задача 3

class StudentLog {
    constructor (name) {
        this.name = name;
        this.subjects = {
            algebra: [],
            geometry: [],
            math: []
        };
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {

        if(typeof(grade) != 'number' || grade < 1 || grade > 5 || !this.subjects[subject]) {
            return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`;
        }

        if( (grade >= 1 && grade <= 5) && this.subjects[subject] ) {
            this.subjects[subject].push(grade);
        }

        return this.subjects[subject].length;
    }

    
    getAverageBySubject(subject, result = 0) {
        if(this.subjects[subject] && this.subjects[subject].length > 0) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            result = this.subjects[subject].reduce(reducer) / this.subjects[subject].length;
        }
        return result;
    }

    getTotalAverage() {
        let avg = [];
        let result = 0;
        for (const key in this.subjects) {
            if(this.subjects[key].length > 0) {
                avg.push(
                    this.subjects[key].map(function(n) {
                        return n;
                    })
                );
            }
        }

        let countOfGrade = 0;
        for (const iterator of avg) {
            if(typeof(iterator) == 'object') {
                for (const qwe of iterator) {
                    countOfGrade += 1;
                    result += qwe;
                }
            }
        }

        return result / countOfGrade;
    }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName())
console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade('qweqwe', 'algebra'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade('fsdfsdf', 'geometry'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(25, 'geometry'));

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage());