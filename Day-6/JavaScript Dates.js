function getDayName(dateString) {
    
    // Write your code here
    let daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 
    let dates = new Date(dateString) 

    // parametre olarak gelen tarih string olarak geliyor, bu yüzden Date() ile Date objesi oluşturuyoruz, bu objenin getDay() methodu ile günü alıyoruz, bu günü daysName arrayinden alıyoruz, dönen değer 0 dan başlıyor.
    
    let dayName = daysName[dates.getDay()] // 0 1 2 3 4 5 6 değerlerini veriyor. daysName den karşılık gelen değerleri alıyoruz.
    
    return dayName
}



