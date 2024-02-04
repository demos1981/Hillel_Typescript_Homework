// Попрацюємо з числовим паліндромом.
// Числовий паліндром — це натуральне число, яке читається зліва направо і справа наліво однаково.
// Інакше кажучи, відрізняється симетрією запису (розташування цифр), причому число знаків може бути як парним, так і непарним. Але.
// Паліндром можна отримати як результат операцій над іншими числами.
// Візьмемо будь-яке натуральне число і складемо його зі зворотним числом, тобто записаним тими самими цифрами, але у зворотному порядку.
// Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти, доки не утвориться паліндром.
// Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525), але, як правило, потрібно не менше двох.
// Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці....
// Вам потрібно написати функцію, яка повертатиме об'єкт, де буде властивість result і це буде паліндром, і властивість steps — це число викликів до знаходження паліндрома.
// Для того, щоб перевірити себе використовуйте число 196. Це так зване Lychrel number — число яке немає поліндрому.

function isPalindrome(num) {
  //перевіряємо чи дане число поліндром
  return num.toString() === num.toString().split('').reverse().join('');
}

function reverseAndAdd(num) {
  //складуємо перевернуту сумму виразу в десятичній системі, для цього вказуємо другий параметр для методу parseInt(,10)
  return num + parseInt(num.toString().split('').reverse().join(''), 10);
}

function findLychrelPalindrome(startNum, maxSteps = 1000) {
  // задаємо стартові параметри та максимальну кількість ітерацій, якщо не виявлен поліндром за максимальну кількість ітерацій то повертаємо null
  let currentNum = startNum;
  let steps = 0;

  while (steps < maxSteps) {
    if (isPalindrome(currentNum)) {
      return { result: currentNum, steps: steps };
    }

    currentNum = reverseAndAdd(currentNum);
    steps++;
  }

  return { result: null, steps: steps };
}

const nullObj = findLychrelPalindrome(196);
const polindromObj = findLychrelPalindrome(69);
console.log(nullObj);
console.log(polindromObj);

// Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву.
// Використовуйте рекурсію для знаходження всіх перестановок.
// Наприклад, якщо вхідний масив [1, 2, 3], функція має повернути масив, що містить [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [2, 3, 1], [3, 1, 2] і [3, 2, 1].
function generatePermutations(arr) {
  const resultArr = []; //ініціюємо порожній массив

  function permute(currentArr, remainingArr) {
    //перевіряємо чи довжина массива прирівнює до 0 то пушемо массив
    if (remainingArr.length === 0) {
      resultArr.push([...currentArr]);
      return;
    }

    for (let i = 0; i < remainingArr.length; i++) {
      //проходимось по массиву
      const newCurrent = currentArr.concat(remainingArr[i]);
      const newRemaining = remainingArr.slice(0, i).concat(remainingArr.slice(i + 1));
      permute(newCurrent, newRemaining);
    }
  }

  permute([], arr);

  return resultArr; //повертаємо результат
}

const inputArray = [5, 2, 8];
const permutations = generatePermutations(inputArray);
console.log(permutations);
