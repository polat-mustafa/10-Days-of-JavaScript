let res = document.getElementById('res');
let resultValue = 0;            // Butonların Eventleri 

//  clicked button after show res value

let Zero = () => {              // 0 butonu
    res.innerHTML += "0"
}

let One = () => {               // 1 butonu
    res.innerHTML += "1"
}

let Clear = () => {             // C butonu
    res.innerHTML = ""
}

let Sum = () => {               // + butonu
    resultValue = parseInt(res.innerHTML)
    
    res.innerHTML += "+"
}

let Sub = () => {               // - butonu
    resultValue = parseInt(res.innerHTML)
 
    res.innerHTML += "-"    
}

let Mul = () => {               // * butonu
    resultValue = parseInt(res.innerHTML)
    
    res.innerHTML += "*"     
}

let Div = () => {               // / butonu
    resultValue = parseInt(res.innerHTML)
    
    res.innerHTML += "/"  
}

let Eql = () => {               // = butonu, sonucu göster

    res.innerHTML = eval(res.innerHTML)                 // eval() fonksiyonu js tanımlı bir fonksiyondur. bu HTML içerisindeki ifadeleri js gibi düşünerek yorumlanır. yani res içerisinde örn 11 + 11 varsa 22 çıktısını verir string ifadeleri js olarak yorumlar. 

    res.innerHTML = parseInt(res.innerHTML).toString(2) // parseInt() fonksiyonu js tanımlı bir fonksiyondur. bu fonksiyonu kullanarak sayıyı binary'e çevirir. Az önceki örnekteki 22 ifadesini toString(2) ile binary'e çevirdi ve sonnuç 10110 olarak gösterdi.
}
