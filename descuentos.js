//const  precioOriginal = 120; 
//const descuento = 18; 

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];


function calculaPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento =  100 - descuento; 
    const precioConDescuento = ( precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 

    /* const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;  */
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case "JuanDC_es_Batman":
        descuento = 15;
        break;
        case "pero_no_le_digas_a_nadie":
        descuento = 30;
        break;
        case "es_un_secreto":
        descuento = 25;
        break;
    }


    const precioConDescuento = calculaPrecioConDescuento (priceValue, descuento);

    
    const resultP = document.getElementById("ResultPrice");
    resultP.innerHTML = "El precio con descuento es: $" + precioConDescuento;

}





/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}) */