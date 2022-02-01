function reverseString(s) {
    try {
         s = s.split('').reverse().join(''); 
         // parametre string ifade oldugundan onu diziye(split()) çevirip, reverse() ile ters döndürüp  aradaki virgülleri(join()) kaldırdık.
    } catch (e) {
         console.log('s.split is not a function');
    }

    console.log(s);
}