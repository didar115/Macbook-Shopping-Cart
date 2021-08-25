// memory part
document
	.getElementById("memory-option-one")
	.addEventListener("click", function () {
		const memoryPrice = document.getElementById("extra-memory-cost");
        memoryPrice.innerText = 0;
        updateTotal(0);
	});
document
	.getElementById("memory-option-two")
	.addEventListener("click", function () {
		const memoryPrice = document.getElementById("extra-memory-cost");
        memoryPrice.innerText = 100;
        updateTotal(100);
		
	});

// storage part

// 1st button
document
	.getElementById("storage-option-one")
	.addEventListener("click", function () {
		const slotPrice = document.getElementById("extra-slot-cost");
        slotPrice.innerText = 0;
        updateTotal(0);
	});

// 2nd button

document
	.getElementById("storage-option-two")
	.addEventListener("click", function () {
		const slotPrice = document.getElementById("extra-slot-cost");
        slotPrice.innerText = 100;
        updateTotal(100);
	});

// 3rd button

document
	.getElementById("storage-option-three")
	.addEventListener("click", function () {
		const slotPrice = document.getElementById("extra-slot-cost");
        slotPrice.innerText = 180;
        updateTotal(180);
	});

// delivery part

// 1st delivey button

document
	.getElementById("delivery-option-one")
	.addEventListener("click", function () {
		const deliveryCharge = document.getElementById("extra-delivery-cost");
        deliveryCharge.innerText = 0;
        updateTotal(0);
	});

// 2nd delivery  button

document
	.getElementById("delivery-option-two")
	.addEventListener("click", function () {
		const deliveryCharge = document.getElementById("extra-delivery-cost");
        deliveryCharge.innerText = 20;
        updateTotal(20);
	});

// total pricing part

// const balance = document.getElementById("total-mac-price");
// const memory = document.getElementById("extra-memory-cost").innerText;
// const memoryPrice = parseInt(memory);

// const slot = document.getElementById("extra-slot-cost").innerText;
// const slotPrice = parseInt(slot);

// const delivery = document.getElementById("extra-delivery-cost").innerText;
// const deliveryPrice = parseInt(delivery);

// const balaceFinal = memoryPrice + slotPrice + deliveryPrice;

// balance.innerText(balaceFinal);

function updateTotal(num){

    const balanceText = document.getElementById("total-mac-price");
    const updateBalance = 1299 + num;
    balanceText.innerText = updateBalance;
    console.log(updateBalance);
    
};
