// Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.

function evenFibNumber (number) {
  
  let count= 0;
  let a = 0;
  let b = 1;
  let total = 0;

  while ( (a + b) < number ) {
    
    count = a + b;
    a = b;
    b = count;

    if (count % 2 === 0) total+= count;

  }

  console.log(total)

}

evenFibNumber (4000000);