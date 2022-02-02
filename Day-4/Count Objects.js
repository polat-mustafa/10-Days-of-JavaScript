function getCount(objects) { 
    
    let counter = 0
    
    for ( let i = 0; i< objects.length; i++) {
        
        if (objects[i].x == objects[i].y) {     //bulunduğu indexin x deki karşılığını gösterir
            
            counter++
        }
        
    }
    
    return counter
}