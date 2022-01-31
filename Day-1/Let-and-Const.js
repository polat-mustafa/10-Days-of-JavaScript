function main() {

    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    const PI = Math.PI
    
    // Print the area of the circle:
    
    let r = Number(readLine()) //r değişkenini Number türüne çevirdik.
    
    console.log( PI * Math.pow(r, 2)) // ilk parametre taban ikincisi üs olarak kullanılır.
    
    // Print the perimeter of the circle:
    
    console.log(2 * PI * r)

}