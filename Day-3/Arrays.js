function getSecondLargest(nums) {
    // Complete the function input-param: 2 3 6 6 5
    // nums parametresini new Set ile her değerin bir kez kullanılmasını sağlar
    
    nums = new Set(nums)        // 2, 3, 6, 5
    nums = Array.from(nums)     // [2, 3, 6, 5]

   nums.sort(
       (x,y) => {               // [2, 3, 5, 6]
           return x-y           // sort() sıralama yapar x-y yerine, y-x olsaydı büyükten küçüğe sıralardı.
       }
   )
   
   return nums[nums.length-2]

        // nums[2] = [2, 3, 5, 6]
        // 5
}



