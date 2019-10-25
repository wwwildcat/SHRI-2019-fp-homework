/* 
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если функции будут написаны руками (без использования библиотеки) это не является ошибкой, например:
 *
 * const greaterThenOne = x => x > 1;
 * const length = x => x.length;
 * const lengthGreaterThenOne = compose(greaterThenOne, length);
 * Это — ок.
 *
 * Вот такая запись не очень хорошая, все таки потренируйтесь составлять композиции:
 * const lengthGreaterThenOne = x => x.length > 1;
 */

import {anyPass, allPass, replace, length, compose, partial, test} from 'ramda';

const replaceNumbers = replace(/[^0-9]/g, '');

const getNumbersCount = compose(length, replaceNumbers);

const containsOnlyEng = test(/^[a-zA-Z0-9.+]+$/);

const greaterThenX = (x, y) => y > x;
const smallerThenX = (x, y) => y < x;

/**
 * Функции для проверки выполнения условий с количеством цифр в строке
 */
const greaterThenOne = partial(greaterThenX, [1]);
const greaterThenTwo = partial(greaterThenX, [2]);
const greaterThenThree = partial(greaterThenX, [3]);
const greaterThenFour = partial(greaterThenX, [4]);
const smallerThenTwo = partial(smallerThenX, [2]);
const smallerThenFive = partial(smallerThenX, [5]);

const numbersCountGreaterThenOne = compose(greaterThenOne, getNumbersCount);
const numbersCountGreaterThenTwo = compose(greaterThenTwo, getNumbersCount);
const numbersCountGreaterThenThree = compose(greaterThenThree, getNumbersCount);
const numbersCountGreaterThenFour = compose(greaterThenFour, getNumbersCount);
const numbersCountSmallerThenTwo = compose(smallerThenTwo, getNumbersCount);
const numbersCountSmallerThenFive = compose(smallerThenFive, getNumbersCount);

/**
 * Функции для проверки выполнения условий с длиной строки
 */
const greaterThenFive = partial(greaterThenX, [5]);
const greaterThenEight = partial(greaterThenX, [8]);
const smallerThenFour = partial(smallerThenX, [4]);
const smallerThenEight = partial(smallerThenX, [8]);
const smallerThenTen = partial(smallerThenX, [10]);

const lengthGreaterThenFive = compose(greaterThenFive, length);
const lengthGreaterThenEight = compose(greaterThenEight, length);
const lengthSmallerThenFour = compose(smallerThenFour, length);
const lengthSmallerThenFive = compose(smallerThenFive, length);
const lengthSmallerThenEight = compose(smallerThenEight, length);
const lengthSmallerThenTen = compose(smallerThenTen, length);

/**
 * Функции для проверки наличия конкретного символа в строке
 */
const containsFour = test(/4/);
const containsSeven = test(/7/);
const notContainsFour = test(/[^4]/);


// 1. Длина < 5 и кол-во цифр > 2 шт.
export const validateFieldN1 = allPass([lengthSmallerThenFive, numbersCountGreaterThenTwo]);

// 2. Длина < 5 и кол-во цифр < 2 шт.
export const validateFieldN2 = allPass([lengthSmallerThenFive, numbersCountSmallerThenTwo]);

// 3. Длина > 5 или кол-во цифр > 1 шт.
export const validateFieldN3 = anyPass([lengthGreaterThenFive, numbersCountGreaterThenOne]);

// 4. Длина < 10 и кол-во цифр > 2 шт. и одна из цифр равна "4"
export const validateFieldN4 = allPass([lengthSmallerThenTen, numbersCountGreaterThenTwo, containsFour]);

// 5. Длина < 10 и кол-во цифр > 1 шт. и ни одна из цифр не равна "4"
export const validateFieldN5 = allPass([lengthSmallerThenTen, numbersCountGreaterThenOne, notContainsFour]);

// 6. Длина > 5, или одна из цифр равна "7"
export const validateFieldN6 = anyPass([lengthGreaterThenFive, containsSeven]);

// 7. Длина > 8 и кол-во цифр > 3 шт. и только англ
export const validateFieldN7 = allPass([lengthGreaterThenEight, numbersCountGreaterThenThree, containsOnlyEng]);

// 8. Кол-во цифр < 5 шт. или только англ или одна из цифр равна "7"
export const validateFieldN8 = anyPass([numbersCountSmallerThenFive, containsOnlyEng, containsSeven]);

// 9. Длина < 8, кол-во цифр > 4 шт. только англ
export const validateFieldN9 = allPass([lengthSmallerThenEight, numbersCountGreaterThenFour, containsOnlyEng]);

// 10. Длина < 4 или кол-во цифр > 2 шт. или только англ
export const validateFieldN10 = anyPass([lengthSmallerThenFour, numbersCountGreaterThenTwo, containsOnlyEng]);
