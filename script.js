let tus = document.querySelectorAll("button");

let account = document.querySelector(".calculator-input");

let clear = document.querySelector(".clear");

let same = document.querySelector(".equal-sign");


for (var i = 0; i < 20; i++) {
    if (i != 3 && i != 18) {
        tus[i].addEventListener("click", yazdir);
    }
}

function yazdir() {
    account.value = account.value + this.value;
    let sonuc = account.value;
}

clear.addEventListener("click", sil)
function sil() {
    if (account.value == "") {
        alert("Silincek bir değer yok.")
    }
    else {
        account.value = "";
    }
}

same.addEventListener("click", hesapla)
function hesapla() {
    if (account.value == "") {
        alert("Lütfen değer giriniz.")

    }
    else {
        account.value = eval(account.value);
    }
}
