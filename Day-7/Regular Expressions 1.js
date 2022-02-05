// first index and last index if vowels and match returns true

function Regex() {


    let re = /^(a|e|o|u).+\1$/
    
    return re

}


/*

regex ifadeler "//" arasına yazılılır. Bulmak istediğimiz ifadeyi iki slash arasına yazıyoruz. 
eğer sadece bir harf örn "o" yazarsak ve arasmasını istersek bulduğu ilk o ifadesini alır. yanına + yazdığımızda sıralı olarak alır.

/ merhaba / ifadesiyle arama yaptığımızda 
cümledeki merabayı almaz, ama h nin yanına ? eklersek, h harfinin olmadığı durumuda seçer.

^ başlangıç karakterini seçer, $ bitiş karakterini seçer. $ koymasaydık, eşleşen ikinci değere kadar alacaktı ve son harfe bakmayacaktı.

(a|e|o|u) ile başlangıçta ve sonda bu ifadelerden biri olursa alır.

\1 ile karakterleri birbirine eşit olanları alır.

. bir karakterin yanına yazılırsa, karakterin yanındaki karakteri alır. 
+ karaktleri yineleme sayısını belirtir. 1 veya daha fazla olabilir. 
 
*/
