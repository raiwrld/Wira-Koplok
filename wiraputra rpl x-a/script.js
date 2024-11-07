document.getElementById("orderbutton").onclick = function () 
 {
    let foodprice = parseInt(document.getElementById("food").value);
    let drinkprice = parseInt(document.getElementById("drink").value);

    let totalprice = foodprice + drinkprice;

    let discon = 0;

    if (totalprice > 130) {
        alert('ok');

    }
    
}