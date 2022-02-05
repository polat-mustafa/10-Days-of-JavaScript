function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/
    
    /*
     * Do not remove the return statement
     */
    return re;
}


/*

^ ilk satırda olmasını istediğimiz ifadeyi seçer. bu ifadeler ise (Mr|Mrs|Ms|Dr|Er) dir. 

\.  bir karakterin yanına yazılırsa, karakterin yanındaki karakteri alır.

([a-zA-Z]) aralık içinde olmasını istediğimiz ifadeyi seçer. a dan z ye kadar olan harfleri alır.

+ karaktleri yineleme sayısını belirtir. 1 veya daha fazla olabilir.

$ bitiş karakterini seçer. $ koymasaydık, eşleşen ikinci değere kadar alacaktı ve son harfe bakmayacaktı.

*/