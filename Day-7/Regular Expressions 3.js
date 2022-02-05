function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    let re = /\d+/g
    /*
     * Do not remove the return statement
     */
    return re;
}

/* 

\d rakamları seçer. 

+ ile rakamları birleştirdik, eğer birleştirmesek tepsini tek tek yazdırır ve döndürürdü.

g global anlamına gelir. //  ifadesi dışına yazılır ve tüm ifadeleri seçer. 

*/