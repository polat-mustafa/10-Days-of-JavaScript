const words = ["a","e","i","o","u"]

function vowelsAndConsonants(s) {

    /* girilen parametrede sonrasında 
    ilk for döngüsünde words değişkenindeki sayıların parametre içerisinde olması durumunda console a yazdırmasını,
    İkinci for döngüsünde olmaması durumda console a yazdırması durumunu gösterir.
    */

    for (let i = 0; i < s.length; i++){
        if (words.includes(s[i])){
            console.log(s[i])
        }
    }
    for (let i = 0; i < s.length; i++){
        if (!words.includes(s[i])){
            console.log(s[i])
        }
    }
    
    
}