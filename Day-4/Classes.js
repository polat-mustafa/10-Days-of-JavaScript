class Polygon {                         // bizden girilen değerlerin toplamını veren class istendiği için constructor ekledik.
    
    constructor (param) {               // constructor fonksiyonu için class tanımlamasıyla nesneyi oluşturduk ve parametrek ekledik.
        this.param = param
    }
    
    perimeter = () => {                 // bu girilen değerlerin yapacağı işlemi tanımladık, 
        
        let sum = 0                     // her bir sayıyı toplayıp, for döngüsünü girilen değerin büyüklüğü kadar tanımladık.
        
        for(let i = 0; i < this.param.length; i++) {
            
            sum = sum + this.param[i]
        }
        
        return sum
    }
    
}