//  function to set memory option
function updateMemoryPrice(isMemory16gb){
    const memoryCost = document.getElementById('memory-cost');
    if(isMemory16gb){
      memoryCost.innerText = 180;
    }else{
      memoryCost.innerText = 0;
    }
   }
   //  function to set storage option
   function updateStoragePrice(storage){
   const storageCost = document.getElementById('storage-cost');
   if(storage == 1){
   storageCost.innerText = 180;
   }
   else if(storage == 512){
    storageCost.innerText = 100;
   }
   else if(storage == 256){
    storageCost.innerText = 0;
   }
   }
   
   //  function to set delivery option
   function updateDelivery(isRegular){
    const deliveryCost = document.getElementById('delivery-cost');
    if(isRegular){
     deliveryCost.innerText = 0;
    }else{
     deliveryCost.innerText = 20;
    }
   }
   
   
   //  function to set total price
   function updatetotalPrice(){
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;
   
    const totalCost = parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice) + parseInt(bestPrice);
    document.getElementById('total-cost').innerText = totalCost ;
    document.getElementById('grand-total').innerText = totalCost;
   }
   
   // 8GB memory button event hadler
   document.getElementById('memory-btn-1').addEventListener('click',function(){
      updateMemoryPrice(false);
      updatetotalPrice();
      
   
   })
   
   // 16GB memory button event hadler
   document.getElementById('memory-btn-2').addEventListener('click',function(){
       updateMemoryPrice(true);
   updatetotalPrice();
      
   })
   
   // 256GB storage button event handler
   document.getElementById('storage-btn-1').addEventListener('click',function(){
   
       updateStoragePrice(256);
       updatetotalPrice();
   })
   
   
   // 512GB storage button event handler
   document.getElementById('storage-btn-2').addEventListener('click',function(){
       updateStoragePrice(512);
       updatetotalPrice();
   })
   
   
   // 1TB storage button event handler
   document.getElementById('storage-btn-3').addEventListener('click',function(){
       updateStoragePrice(1);
       updatetotalPrice();
   })
   
   // free delivery button event handler 
   document.getElementById('delivery-btn-1').addEventListener('click',function(){
       updateDelivery(true);
       updatetotalPrice();
   
   })
   
   // premium delivery button event handler 
   document.getElementById('delivery-btn-2').addEventListener('click',function(){
       updateDelivery(false);
       updatetotalPrice();
   
   })
   
   // promo code event handler on apply button
   document.getElementById("apply-btn").addEventListener("click", function () {
     const promoInputField = document.getElementById('promo-input');
     const grandTotal = document.getElementById('grand-total');
     const totalCost = document.getElementById('total-cost').innerText;
     const totalPrice = parseInt(totalCost);
     if(promoInputField.value == 'stevekaku'){
      grandTotal.innerText = (totalPrice - (totalPrice*20)/100);
        
     }
     
     else{
         alert('Enter Valid Promo Code');
      grandTotal.innerText = totalPrice;
     }
     promoInputField.value ="";
   });