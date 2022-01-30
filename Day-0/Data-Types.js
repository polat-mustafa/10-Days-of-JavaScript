function performOperation(secondInteger, secondDecimal, secondString) {

    const firstInteger = 4
    const firstDecimal = 4.0
    const firstString = 'HackerRank '
    
    const secondInteger = '12'
    const secondDecimal = '4.32'
    const secondString = 'is the best place to learn and practice coding!'
    

    // parseInt ve parseFloat fonksiyonları dönen argümanları tamsayı ve noktalı ifadelere dönüştürür.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#function_properties
    // Her iki String veri türündeki değeri Number() fonksiyonu ile yapmak da mümkündür.

    console.log(firstInteger + parseInt(secondInteger))
    
    console.log(firstDecimal + parseFloat(secondDecimal))

    console.log(firstString + secondString)
}