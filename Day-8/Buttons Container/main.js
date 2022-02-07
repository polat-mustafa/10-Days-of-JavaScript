document.addEventListener("DOMContentLoaded",()=>{ // DOMContentLoaded event'ının çalışması için bir fonksiyon tanımlıyoruz.

  let btn_ids=[1,2,3,6,9,8,7,4]; // Butonların id'lerini tutan bir dizi tanımlıyoruz.
  let btn_ref=[1,2,3,6,9,8,7,4]; // Butonların referanslarını tutan bir dizi tanımlıyoruz.

  const btn5=document.getElementById("btn5"); // btn5'in referansını alıyoruz. 

  btn5.addEventListener("click",()=>{   // btn5 e basılınca çalışacak fonksiyonu tanımlıyoruz. 

      btn_ref.unshift(btn_ref.pop()); // btn_ref dizisindeki son elemanı ilk elemanına ekliyoruz.

      for(let i=0;i<btn_ids.length;i++) // btn_ids dizisindeki elemanların sayısına kadar döngümüzü oluşturuyoruz.

      document.getElementById("btn"+btn_ids[i]).innerHTML=btn_ref[i]; // btn_ids dizisindeki elemanların id'lerini btn_ref dizisindeki elemanların referanslarına göre değiştiriyoruz.

  });

});