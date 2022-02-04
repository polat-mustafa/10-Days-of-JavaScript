// bitwise operators

/* 

örneğin n=4, k = 3 olsun
k dan küçük en büyük sayıyı döndürür


1 2
1 3
1 4
2 3
2 4
3 4



*/

function getMaxLessThanK(n, k) { // n = 4, k = 3 olsun 

    let max = 0; 

    for(let a = 1; a < n; a++) { // 1 den 4 e kadar döndürür 

        for(let b = a+1; b <= n; b++) { 

            if((Number(a & b) < k) && (Number(a & b) > max)) { 
                
                max = a & b;
            }
        }
    
    }
    
    return max;
}

