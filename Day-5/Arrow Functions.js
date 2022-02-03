function modifyArray(nums) {

   let value = nums => nums.map(x => x % 2 === 0 ? x * 2 : x * 3);  // value değişkeni nums değişkeni içindeki değerleri 2 veya 3 ile çarpıp döndürür. 

   return value(nums) 
}


// function modifyArray(nums) {
    
//     let value = nums => (nums % 2 == 0) ? nums*2 : nums*3
    
//     return nums.map(value)
// }