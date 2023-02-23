// 1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
// function calculateArr() {
//     let ownArray = ['qwr', 'qwe', NaN, 'wqe', true, false, 'ewtr', 'fbd', 'sdv', 13, 12, 3, 5, 1, 16, 17, 18, 19, 10, 'end'];
//     let sum = 0;
//     let count = 0;
//
//     for(let i = 0; i < ownArray.length; i++){
//         if (!isNaN(ownArray[i])) {
//             count += 1;
//             sum += ownArray[i];
//         }
//         console.log(count);
//     }
// /    return  itog = sum / count;
// }
// let result = calculateArr();
// alert(result);
//просто не зрозумів чому коли добавлю true або false в мене виходить не ціле число чи це норм?
// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
// function doMath(x, znak, y) {
//     if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'Ошибка';
//     return eval(x + znak.replace('^', '**') + y)
// }
// const x = prompt('Введите x');
// const y = prompt('Введите y');
// const znak = prompt('Введите знак');
// alert(doMath(x, znak, y))
// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач
// function arrAdd() {
//     let arr = [];
//     let amount = +prompt("Enter the number of arrays in the first array");
//
//     for(let i = 0; i < amount; i++) {
//         arr.push([]);
//
//         let amount2 = prompt("Enter the number of items" + (i + 1));
//
//         for(let j = 0; j < amount2; j++) {
//             let elem = prompt("Введите текст" + (j + 1));
//             arr[i].push([elem]);
//         }
//     }
//
//     console.log(arr);
// }
//
// let functionResult = arrAdd();
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
// function replaceString(string, pattern){
//
//     const strPt = pattern.join('');
//
//     return string.replace(new RegExp(`[${strPt}]`, 'gi'), '')
//
// }
//
// console.log(replaceString('Hello Andrii', ['l', 'a']))
