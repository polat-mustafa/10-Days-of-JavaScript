function factorial(n){
    
    // Bu metod da fonksiyona verilen örn:4! değerinin 0 olmadığı koşulda yapılacak olan koşulunu tanımlar.

    if (n===0){
        return 1
    } else {
       return n * factorial(n-1) 
       /*

        4 parametresi girildiğinde ilk olarak fonksiyon 4 * 3! değerinin görür, 
        sonra tekrar döngüye girer ve 4 * 3 * 2! değerine gelir,
        En son 1! değerinde n=== 0 değerinde 1 değerinin döndürür ve değer hesaplanır.

        */
       
    }
}

// Second method

function factorial(n) {

    let nFactorial = 1;

    for(let i = n; i > 1; i--) { // Sayı her seferinde 1 eksilerek nFactorial değerine çarpım halinde tanımlanır.

        nFactorial *= i;
    
    }
        return nFactorial; // Fonksiyon nFactorial değerini döndürür.

} 
