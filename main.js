var checkout = [];

function setupShop() {
    document.getElementById("b1").onclick = function() {
        buyItem(0);
        document.getElementById("checkout").innerHTML = getLength() + " items in cart";
    }

    document.getElementById("b2").onclick = function() {
        buyItem(1);
        document.getElementById("checkout").innerHTML = getLength() + " items in cart";
    }

    document.getElementById("proceed").onclick = continu;

    document.getElementById("buy").onclick = function() {
        if (getLength() != 0) {
            window.location = "store/checkout.html";
        }
    }
}

function buyItem(itemIndex) {
    var found = false;

    for (let i = 0; i < checkout.length; i++) {
        const element = checkout[i];
        
        if (element[0] == itemIndex) {
            element[1]++;
            found = true;
            break;
        }
    }

    if (!found) {
        if (itemIndex == 0)
            checkout.push([itemIndex, 1]);
        if (itemIndex == 1)
            checkout.push([itemIndex, 1]);
    }
}

function getLength() {
    var total = 0;
    for (let i = 0; i < checkout.length; i++) {
        const element = checkout[i];
        total += element[1];
    }

    return total;
}

var itemData = '<div class="purchaseItem">' +
               '<img id="purchaseImg" src="&">' +
               '<p id="purchaseName">¤</p>' +
               '<p id="purchasePrice">Total cost: %$</p>' +
               '<p id="purchaseCount">Total count: #x</p>' +
               '<button class="remove" id="£">Remove one</button>' +
               '</div><br>';

function continu() {
    document.getElementById("shop").style.visibility = "hidden";
    document.getElementById("proceed").innerHTML = "Return to shopping";
    document.getElementById("final").style.visibility = "visible";

    document.getElementById("proceed").onclick = function() {
        document.getElementById("shop").style.visibility = "visible";
        document.getElementById("proceed").innerHTML = "Procced to checkout";
        document.getElementById("final").style.visibility = "hidden";
        document.getElementById("proceed").onclick = continu;
    }

    document.getElementById("purchaseModel").innerHTML = "";

    for (let i = 0; i < checkout.length; i++) {
        const element = checkout[i];
        var data = itemData;
        
        data = data.replace("#", element[1]);
        data = data.replace("£", element[0]);
        
        if (element[0] == 0) {
            data = data.replace("%", 1 * element[1]);
            data = data.replace("&", "assets/GoldenApple.png");
            data = data.replace("¤", "Golden Apple");
        }
        if (element[0] == 1) {
            data = data.replace("%", 2 * element[1]);
            data = data.replace("&", "assets/Diamond.png");
            data = data.replace("¤", "Diamond");
        }

        document.getElementById("purchaseModel").innerHTML += data;

        document.getElementById(element[0]).onclick = function() {
            removeItem(element[0]);
            document.getElementById("checkout").innerHTML = getLength() + " items in cart";
            continu();
        }
    }
}

function removeItem(itemIndex) {
    console.log("removing item " + itemIndex);

    for (let i = 0; i < checkout.length; i++) {
        const element = checkout[i];
        
        if (element[0] == itemIndex) {
            element[1]--;
            if (element[1] == 0)
                checkout.splice(i, 1);
            break;
        }
    }
}

function rickroll() {
    window.open("../lololololololoololololololololol/ricked.html", "_blank");
    window.open("../lololololololoololololololololol/ricked.html", "_blank");
    window.open("../lololololololoololololololololol/ricked.html", "_blank");
    window.open("../lololololololoololololololololol/ricked.html", "_blank");
    window.open("../lololololololoololololololololol/ricked.html", "_blank");
    window.open("../lololololololoololololololololol/ricked.html", "_blank");
    window.open("../lololololololoololololololololol/ricked.html", "_blank");
    window.open("../lololololololoololololololololol/ricked.html", "_blank");
    window.open("../lololololololoololololololololol/ricked.html", "_blank");
    window.open("../lololololololoololololololololol/ricked.html", "_blank").focus();
}