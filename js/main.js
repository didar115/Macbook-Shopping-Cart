// for extra memory cost
function extraMemoryCost(cost, price){
    const memoryCost = document.getElementById(cost);
    
    if(price == true){
        memoryCost.innerText = '0';
    }
    else{
        memoryCost.innerText = '180';
    }
}

//   for extra storage cost using event handle 
function extraStorage(storage, cost){
    const extraSsdCost = document.getElementById(storage);
    if(cost == true){
        extraSsdCost.innerText = '0';
    }
    else if(cost == false){
        extraSsdCost.innerText = '100';
    }
    else{
        extraSsdCost.innerText = '180';
    }
}
// for delivery charge using event handle 
function deliveryCharge(cost, price){
    const deliveryCost = document.getElementById(cost);
    
    if(price == true){
        deliveryCost.innerText = '0';
    }
    else if(price == false){
        deliveryCost.innerText = '20';
    }
}
//  for total price 
function totalCalculation(){
    const totalPrice = document.getElementById('total-price');
    const bestPrice = document.getElementById('best-price');
    const bestAmount = parseInt(bestPrice.innerText);

    const extraMemoryPrice = document.getElementById('memory-cost');
    const extraMemoryAmount = parseInt(extraMemoryPrice.innerText);

    const extraSsdPrice = document.getElementById('storage-cost');
    const extraSsdAmount = parseInt(extraSsdPrice.innerText);

    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryAmount = parseInt(deliveryCharge.innerText);

    const total =bestAmount + extraMemoryAmount + extraSsdAmount+deliveryAmount;
    totalPrice.innerText = total;

    document.getElementById('total-cost').innerText = total;
}

// for  Pomo Code handle using event handeler
function getpromoCode(){
    const totalPrice = document.getElementById('total-price');
    const bestPrice = document.getElementById('best-price');
    const bestAmount = parseInt(bestPrice.innerText);

    const extraMemoryPrice = document.getElementById('memory-cost');
    const extraMemoryAmount = parseInt(extraMemoryPrice.innerText);

    const extraSsdPrice= document.getElementById('storage-cost');
    const extraSsdAmount = parseInt(extraSsdPrice.innerText);

    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryAmount = parseInt(deliveryCharge.innerText);

    const total =bestAmount +extraMemoryAmount + extraSsdAmount +deliveryAmount;
    const promoCode = total -(total*0.2);

    document.getElementById('total-cost').innerText = promoCode;
}
//for 8gb memory button event handler
document.getElementById('8gb-memory').addEventListener('click', function(){
    extraMemoryCost('memory-cost', true);
    totalCalculation()
});
// document.getElementById('8gb-memory').addEventListener('click', function(){
//     extraMemoryCost('memory-cost', true);
//     totalCalculation()
// });
//for 16gb memory button event handler
document.getElementById('16gb-memory').addEventListener('click', function(){
    extraMemoryCost('memory-cost', false); 
    totalCalculation()
});

// document.getElementById('16gb-memory').addEventListener('click', function(){
//     extraMemoryCost('memory-cost', false); 
//     totalCalculation();
// });
//for 256gb storage button event handler
document.getElementById('256gb-storage').addEventListener('click', function(){
    extraStorage('storage-cost', true);
    totalCalculation()
});
//for 16gb storage button event handler
document.getElementById('512gb-storage').addEventListener('click', function(){
    extraStorage('storage-cost', false)
    totalCalculation()
});
//for 1Tb storage button event handle
document.getElementById('1tb-storage').addEventListener('click', function(){
    extraStorage('storage-cost')
    totalCalculation()
});
//for free-delivery button event handler
document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryCharge('delivery-charge', true);
    totalCalculation()
});
//for charge-delivery button event handler
document.getElementById('charge-delivery').addEventListener('click', function(){
    deliveryCharge('delivery-charge', false);
    totalCalculation()
});
//for promo-code button event handler
document.getElementById('promo-code').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value;
    if(promoCode == 'stevekaku'){
        getpromoCode();
    }
    promoInput.value = '';
});