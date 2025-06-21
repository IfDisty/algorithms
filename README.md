# Алгоритмы на JavaScript
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Коллекция базовых алгоритмов с реализацией на JavaScript. Каждый алгоритм содержит:
- Четкое описание функциональности
- Анализ вычислительной сложности
- Примеры использования
- Тестовые случаи

## Структура репозитория

### Основные алгоритмы
| Файл | Алгоритм | Сложность | Описание |
|------|----------|-----------|----------|
| [`alg1.js`](alg1.js) | `getArrayLength` | **O(1)** | Возвращает длину массива |
| [`alg2.js`](alg2.js) | `binarySearch` | **O(log n)** | Бинарный поиск в отсортированном массиве |
| [`alg3.js`](alg3.js) | `findMax` | **O(n)** | Поиск максимального элемента |
| [`alg4.js`](alg4.js) | `mergeSort` | **O(n log n)** | Сортировка слиянием |
| [`alg5.js`](alg5.js) | `sumOfPairs` | **O(n²)** | Сумма всех пар элементов |
| [`alg6.js`](alg6.js) | `fibonacci` | **O(2ⁿ)** | Вычисление чисел Фибоначчи |
| [`alg7.js`](alg7.js) | `permute` | **O(n!)** | Генерация перестановок |

### Характеристики алгоритмов
graph TD
- A[O(1)] -->|Константное время| alg1
  
- B[O(log n)] -->|Логарифмическое| alg2
  
- C[O(n)] -->|Линейное| alg3
  
- D[O(n log n)] -->|Квазилинейное| alg4
  
- E[O(n²)] -->|Квадратичное| alg5
  
- F[O(2ⁿ)] -->|Экспоненциальное| alg6
  
- G[O(n!)] -->|Факториальное| alg7

Использование

Клонируйте репозиторий:
    git clone https://github.com/IfDisty/algorithms.git

Запустите любой алгоритм:
    node alg4.js
Тестирование

Все алгоритмы содержат встроенные тестовые примеры:
javascript

// Пример теста в alg2.js
const sortedArray = [1, 3, 5, 7, 9];
console.log(binarySearch(sortedArray, 5)); // 2 (индекс элемента)

 Дополнительная информация

    Сложность алгоритмов: Для каждого алгоритма указана временная сложность в нотации Big O

    Чистота кода: Соответствие стандартам JavaScript (ES6+)

    Оптимизация: Все реализации оптимизированы для читаемости и производительности


https://github.com/user-attachments/assets/6ed5ce58-3cdf-4f1e-b996-0c9680041b8f



https://github.com/user-attachments/assets/08deefe2-aeb6-46fe-9a79-eb22d02c8cc9



https://github.com/user-attachments/assets/9e3d27f0-7790-434a-b6d9-726a52abb6dd



https://github.com/user-attachments/assets/05a7f99d-fad1-4573-befe-aebb4142868d



https://github.com/user-attachments/assets/6ebd897b-80bd-44b8-a275-8215c45cc468



https://github.com/user-attachments/assets/d593ca55-a4dd-4c77-80e2-15685471b004



https://github.com/user-attachments/assets/8a0cd1a4-4bf5-4187-99a9-4430bb602b8b

