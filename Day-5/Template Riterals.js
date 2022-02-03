function sides(literals, ...expressions) { 
    
    let [area, perimeter] = expressions // area ve perimeter expressions a atanacak değerlerdir. expressions içinde 2 değer var. area ve perimeter değerleri içinde. 

    let shorten = Math.sqrt(pow(perimeter, 2) - (16 * area)) 

    let s1 = (perimeter + shorten)/4 
    let s2 = (perimeter - shorten)/4

    return [s2, s1] // s1 ve s2 değerleri döndürülür. küçükten büyüğe sıralanır. 

}
    

