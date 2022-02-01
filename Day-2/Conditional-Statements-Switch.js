function getLetter(s) {
    let letter;
    // Write your code here
    // girilen parametredeki değerin sıfırıncı indexinin durumuna göre dönen değeri gösterir.
    switch (s[0]) {
        case ('a' || 'e' || 'i' || 'o' || 'u'):
            letter = 'A';
            break;
        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = 'B';
            break;

        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = 'C';
            break;

        case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y'):
            letter = 'D';
    }
    
    return letter;
}

//Second Method

let getLetter = (s) => {

    /*

        includes(s[0]) fonksiyonu bir değerin içinde istedğimiz parametrenin sorgusunu yapar
        ilk durumda girilen s parametresinin 0. indexinde, 'aeiou' nun olup olmadığını kontrol eder,
        eğer paremetrenin ilk indexi koşuldaki hangi değerde bulunuyorsa true değerini döndürür
        ve letter daki değerini yazdırır.  

    */

    switch(true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A'
            break
    
        case 'bcdfg'.includes(s[0]):
            letter = 'B'
            break
        
        case 'hjklm'.includes(s[0]):
            letter = 'C'
            break
        
        case 'znpqrstvwxy'.includes(s[0]):
            letter = 'D'
            break
        
    }

    return letter

}

