let tus = document.querySelectorAll("button");

let account = document.querySelector(".calculator-input");

let clear = document.querySelector(".clear");

let same = document.querySelector(".equal-sign");

let ThisClear = document.querySelector(".delete");

for (var i = 0; i < 20; i++) {
    if (i != 2 && i != 3) {
        tus[i].addEventListener("click", yazdir);
    }
}

function yazdir() {
    account.value = account.value + this.value;
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