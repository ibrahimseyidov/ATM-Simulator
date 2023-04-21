var enterCardBtn = document.querySelector("#enterCardBtn");
var welcomePage = document.querySelector("#welcomePage");
var pinCode = document.querySelector("#pinCode");
var pinInput = document.querySelector("#pinInput");
var pinCheckBtn = document.querySelector("#pinCheckBtn");
var chooseCurrency = document.querySelector("#chooseCurrency");
var pinCodeArea = document.querySelector("#pinCodeArea");
var chooseAzn = document.querySelector("#chooseAzn");
var chooseUsd = document.querySelector("#chooseUsd");
var moneySection = document.querySelector("#moneySection");
var moneySectionAzn = document.querySelector("#moneySectionAzn")
var goBack = document.querySelector("#goBack");
var otherQuantity = document.querySelector("#otherQuantity");
var otherQuantityUsd = document.querySelector("#otherQuantityUsd");
var moneyInputAzn = document.querySelector("#moneyInputAzn");
var moneyInputUsd = document.querySelector("#moneyInputUsd");
var amountError = document.querySelector("#amountError");
var carryOnBtn = document.querySelector("#carryOnBtn");
var carryOnBtnUsd = document.querySelector("#carryOnBtnUsd");
var second = document.querySelector("#second");
var showBalance = document.querySelector("#showBalance");
var backBtn = document.querySelector("#backBtn");
var showBalancePage = document.querySelector("#showBalancePage");
var myBalance = document.querySelector("#myBalance");
var withdrawPage = document.querySelector("#withdrawPage");
var myBalanceUsd = document.querySelector("#myBalanceUsd");

enterCardBtn.addEventListener("click", changePage);
pinCheckBtn.addEventListener("click", pinCheck);
chooseAzn.addEventListener("click", showAzn);
chooseUsd.addEventListener("click", showUsd);
goBack.addEventListener("click", goBackAzn);
carryOnBtn.addEventListener("click", checkMoneyAzn);
carryOnBtnUsd.addEventListener("click", checkMoneyUsd);
showBalance.addEventListener("click", showBalanceFunc);
backBtn.addEventListener("click", backBtnPage);
moneySection.addEventListener("click", withdrawMoney);
moneySectionAzn.addEventListener("click", withdrawMoneyAzn)


function BankAccount(name, surName, myPinCode, chooseCurrency, pinCode, totalAmountAzn, totalAmountUsd) {
    this.name = name;
    this.surName = surName;
    this.myPinCode = myPinCode;
    this.chooseCurrency = chooseCurrency;
    this.pinCode = pinCode
    this.totalAmountAzn = totalAmountAzn;
    this.totalAmountUsd = totalAmountUsd;




    this.pinCheck = function (pinValue) {
        if (pinValue == this.myPinCode) {
            myBalance.textContent = this.totalAmountAzn;
            myBalanceUsd.textContent = this.totalAmountUsd;
            this.chooseCurrency.style.display = "block"
            this.pinCode.style.display = "none"
        }
        showError()

    }



    this.checkMoneyAzn = function (moneyValueAzn) {
        if (moneyValueAzn <= this.totalAmountAzn) {
            this.totalAmountAzn -= moneyValueAzn
            myBalance.textContent = this.totalAmountAzn
            withdrawPage.style.display = "block";
            otherQuantity.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else {
            showAmountError()
        }

    }


    this.checkMoneyUsd = function (moneyValueUsd) {
        if (moneyValueUsd <= this.totalAmountUsd) {
            this.totalAmountUsd -= moneyValueUsd
            myBalanceUsd.textContent = this.totalAmountUsd
            withdrawPage.style.display = "block";
            otherQuantityUsd.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else {
            showAmountUsdError()
        }
    }

    this.withdrawMoney = function (tenUsd, fiftyUsd, hundredUsd, twoHundredUsd, fiveHundredUsd, thousandUsd, fiveThousandUsd) {
        if (tenUsd == "10 USD" && 10 <= this.totalAmountUsd) {
            this.totalAmountUsd -= 10
            myBalanceUsd.textContent = this.totalAmountUsd
            withdrawPage.style.display = "block";
            moneySection.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (fiftyUsd == "50 USD" && 50 <= this.totalAmountUsd) {
            this.totalAmountUsd -= 50
            myBalanceUsd.textContent = this.totalAmountUsd
            withdrawPage.style.display = "block";
            moneySection.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (hundredUsd == "100 USD" && 100 <= this.totalAmountUsd) {
            this.totalAmountUsd -= 100
            myBalanceUsd.textContent = this.totalAmountUsd
            withdrawPage.style.display = "block";
            moneySection.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (twoHundredUsd == "200 USD" && 200 <= this.totalAmountUsd) {
            this.totalAmountUsd -= 200
            myBalanceUsd.textContent = this.totalAmountUsd
            withdrawPage.style.display = "block";
            moneySection.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (fiveHundredUsd == "500 USD" && 500 <= this.totalAmountUsd) {
            this.totalAmountUsd -= 500
            myBalanceUsd.textContent = this.totalAmountUsd
            withdrawPage.style.display = "block";
            moneySection.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (thousandUsd == "1000 USD" && 1000 <= this.totalAmountUsd) {
            this.totalAmountUsd -= 1000
            myBalanceUsd.textContent = this.totalAmountUsd
            withdrawPage.style.display = "block";
            moneySection.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (fiveThousandUsd == "5000 USD" && 5000 <= this.totalAmountUsd) {
            this.totalAmountUsd -= 5000
            myBalanceUsd.textContent = this.totalAmountUsd
            withdrawPage.style.display = "block";
            moneySection.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (fiveThousandUsd == "5000 USD" && 5000 > this.totalAmountUsd ||
            thousandUsd == "1000 USD" && 1000 > this.totalAmountUsd ||
            fiveHundredUsd == "500 USD" && 500 > this.totalAmountUsd ||
            twoHundredUsd == "200 USD" && 200 > this.totalAmountUsd ||
            hundredUsd == "100 USD" && 100 > this.totalAmountUsd ||
            fiftyUsd == "50 USD" && 50 > this.totalAmountUsd ||
            tenUsd == "10 USD" && 10 > this.totalAmountUsd
        ) {
            showAmountErrorUsd()
        }
    }

    this.withdrawMoneyAzn = function (tenAZN, fiftyAZN, hundredAZN, twoHundredAZN, fiveHundredAZN, thousandAZN, fiveThousandAZN) {
        if (tenAZN == "10 AZN" && 10 <= this.totalAmountAzn) {
            this.totalAmountAZN -= 10
            myBalance.textContent = this.totalAmountAzn
            withdrawPage.style.display = "block";
            moneySectionAzn.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (fiftyAZN == "50 AZN" && 50 <= this.totalAmountAzn) {
            this.totalAmountAzn -= 50
            myBalance.textContent = this.totalAmountAzn
            withdrawPage.style.display = "block";
            moneySectionAzn.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (hundredAZN == "100 AZN" && 100 <= this.totalAmountAzn) {
            this.totalAmountAzn -= 100
            myBalance.textContent = this.totalAmountAzn
            withdrawPage.style.display = "block";
            moneySectionAzn.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (twoHundredAZN == "200 AZN" && 200 <= this.totalAmountAzn) {
            this.totalAmountAzn -= 200
            myBalance.textContent = this.totalAmountAzn;
            withdrawPage.style.display = "block";
            moneySectionAzn.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (fiveHundredAZN == "500 AZN" && 500 <= this.totalAmountAzn) {
            this.totalAmountAzn -= 500
            myBalance.textContent = this.totalAmountAzn
            withdrawPage.style.display = "block";
            moneySectionAzn.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (thousandAZN == "1000 AZN" && 1000 <= this.totalAmountAzn) {
            this.totalAmountAzn -= 1000
            myBalance.textContent = this.totalAmountAzn
            withdrawPage.style.display = "block";
            moneySectionAzn.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (fiveThousandAZN == "5000 AZN" && 5000 <= this.totalAmountAzn) {
            this.totalAmountAzn -= 5000
            myBalance.textContent = this.totalAmountAzn
            withdrawPage.style.display = "block";
            moneySectionAzn.style.display = "none";
            setTimeout(() => {
                withdrawPage.style.display = "none";
                welcomePage.style.display = "block";
            }, 10000);
        } else if (fiveThousandAZN == "5000 AZN" && 5000 > this.totalAmountAzn ||
            thousandAZN == "1000 AZN" && 1000 > this.totalAmountAzn ||
            fiveHundredAZN == "500 AZN" && 500 > this.totalAmountAzn ||
            twoHundredAZN == "200 AZN" && 200 > this.totalAmountAzn ||
            hundredAZN == "100 AZN" && 100 > this.totalAmountAzn ||
            fiftyAZN == "50 AZN" && 50 > this.totalAmountAzn ||
            tenAZN == "10 AZN" && 10 > this.totalAmountAzn
        ) {
            showAmountErrorAzn()
        }
    }
}



const bankAccount = new BankAccount("Ibrahim", "Seyidov", 1111, chooseCurrency, pinCode, 3000, 2000);

function changePage() {
    welcomePage.style.display = "none"
    pinCode.style.display = "block"
}

console.log(pinValue);

function pinCheck() {
    var pinValue = pinInput.value.trim()
    bankAccount.pinCheck(pinValue)
}

function checkMoneyAzn() {
    var moneyValueAzn = moneyInputAzn.value
    bankAccount.checkMoneyAzn(moneyValueAzn);
}

function checkMoneyUsd() {
    var moneyValueUsd = moneyInputUsd.value;
    bankAccount.checkMoneyUsd(moneyValueUsd);
}

function withdrawMoney(e) {
    var tenUsd;
    var fiftyUsd;
    var hundredUsd;
    var twoHundredUsd;
    var fiveHundredUsd;
    var thousandUsd;
    var fiveThousandUsd;

    if (e.target.textContent === "10 USD") {
        tenUsd = e.target.textContent
    } else if (e.target.textContent === "50 USD") {
        fiftyUsd = e.target.textContent
    } else if (e.target.textContent === "100 USD") {
        hundredUsd = e.target.textContent
    } else if (e.target.textContent === "200 USD") {
        twoHundredUsd = e.target.textContent
    } else if (e.target.textContent === "500 USD") {
        fiveHundredUsd = e.target.textContent
    } else if (e.target.textContent === "1000 USD") {
        thousandUsd = e.target.textContent
    } else if (e.target.textContent === "5000 USD") {
        fiveThousandUsd = e.target.textContent
    }

    bankAccount.withdrawMoney(tenUsd, fiftyUsd, hundredUsd, twoHundredUsd, fiveHundredUsd, thousandUsd, fiveThousandUsd)
}

function withdrawMoneyAzn(e) {

    var tenAZN;
    var fiftyAZN;
    var hundredAZN;
    var twoHundredAZN;
    var fiveHundredAZN;
    var thousandAZN;
    var fiveThousandAZN;



    if (e.target.textContent == "10 AZN") {
        tenAZN = e.target.textContent
    } else if (e.target.textContent == "50 AZN") {
        fiftyAZN = e.target.textContent
        console.log(fiftyAZN);
    } else if (e.target.textContent == "100 AZN") {
        hundredAZN = e.target.textContent
    } else if (e.target.textContent == "200 AZN") {
        twoHundredAZN = e.target.textContent
    } else if (e.target.textContent == "500 AZN") {
        fiveHundredAZN = e.target.textContent
    } else if (e.target.textContent == "1000 AZN") {
        thousandAZN = e.target.textContent
    } else if (e.target.textContent == "5000 AZN") {
        fiveThousandAZN = e.target.textContent
    }

    bankAccount.withdrawMoneyAzn(tenAZN, fiftyAZN, hundredAZN, twoHundredAZN, fiveHundredAZN, thousandAZN, fiveThousandAZN)
}

function showError() {

    var errorMessage = document.createElement("div")
    errorMessage.className = "alert alert-danger w-50 mx-auto"
    errorMessage.textContent = "Girdiyiniz PIN Kod Yanlışdır!!!"
    pinCodeArea.appendChild(errorMessage)
    setTimeout(() => {
        pinCodeArea.lastChild.remove()
    }, 3000);
}

function showAmountError() {

    var count = 10;
    var interval;

    otherQuantity.style.display = "none";
    amountError.style.display = "block";

    interval = setInterval(() => {
        count--
        second.textContent = count;
        if (count <= 0) {
            count = 10
            clearInterval(interval)
        }

    }, 1000);

    setTimeout(() => {
        welcomePage.style.display = "block";
        amountError.style.display = "none";
    }, 10000);


}

function showAmountUsdError() {

    var count = 10;
    var interval;


    otherQuantityUsd.style.display = "none";
    amountError.style.display = "block";

    interval = setInterval(() => {
        count--
        second.textContent = count;
        if (count <= 0) {
            count = 10
            clearInterval(interval)
        }

    }, 1000);

    setTimeout(() => {
        welcomePage.style.display = "block";
        amountError.style.display = "none";
    }, 10000);


}

function showAmountErrorUsd() {
    var count = 10;
    var interval;

    moneySection.style.display = "none";
    amountError.style.display = "block";

    interval = setInterval(() => {
        count--
        second.textContent = count;
        if (count <= 0) {
            count = 10
            clearInterval(interval)
        }

    }, 1000);

    setTimeout(() => {
        welcomePage.style.display = "block";
        amountError.style.display = "none";
    }, 10000);
}

function showAmountErrorAzn() {
    var count = 10;
    var interval;

    moneySectionAzn.style.display = "none";
    amountError.style.display = "block";

    interval = setInterval(() => {
        count--
        second.textContent = count;
        if (count <= 0) {
            count = 10
            clearInterval(interval)
        }

    }, 1000);

    setTimeout(() => {
        welcomePage.style.display = "block";
        amountError.style.display = "none";
    }, 10000);
}


function showAzn() {
    createAznSection()
    moneySectionAzn.style.display = "block"
    chooseCurrency.style.display = "none"
}

function goBackAzn() {
    moneySectionAzn.style.display = "none";
    chooseCurrency.style.display = "block";
}


function showUsd() {
    createUsdSection()
    moneySection.style.display = "block"
    chooseCurrency.style.display = "none"
}

function showBalanceFunc() {
    chooseCurrency.style.display = "none";
    showBalancePage.style.display = "block"
}

function backBtnPage() {
    chooseCurrency.style.display = "block";
    showBalancePage.style.display = "none"
}

function createUsdSection() {

    moneySection.innerHTML = `<div class="atm-background d-flex flex-row align-items-start justify-content-between px-5">
    <div class="d-flex flex-column">
        <button class="display-4 fw-bold m-5">10 USD</button>
        <button class="display-4 fw-bold m-5">50 USD</button>
        <button class="display-4 fw-bold m-5">100 USD</button>
        <button class="display-4 fw-bold m-5">200 USD</button>
    </div>

    <div class="d-flex flex-column">
        <button class="display-4 fw-bold m-5">500 USD</button>
        <button class="display-4 fw-bold m-5">1000 USD</button>
        <button class="display-4 fw-bold m-5">5000 USD</button>
        <button class="btn btn-danger w-75 ms-5 mt-4 fs-1" id="otherAmountUsd">Digər Məbləğ</button>
        <button class="btn btn-success w-75 ms-5 mt-4 fs-1" id="goBackUsd">Geriyə Get</button> 
    </div>
</div>
    `

    var otherAmountUsd = moneySection.querySelector("#otherAmountUsd");
    otherAmountUsd.addEventListener("click", otherAmountUsdFunc);

    function otherAmountUsdFunc() {
        otherQuantityUsd.style.display = "block";
        moneySection.style.display = "none";
    }

    var goBackUsd = moneySection.querySelector("#goBackUsd")
    goBackUsd.addEventListener("click", goBackUsdFunc);

    function goBackUsdFunc() {
        moneySection.style.display = "none";
        chooseCurrency.style.display = "block";
    }

}

function createAznSection() {
    moneySectionAzn.innerHTML = `<div class="atm-background d-flex flex-row align-items-start justify-content-between px-5">
    <div class="d-flex flex-column">
        <button class="display-4 fw-bold m-5">10 AZN</button>
        <button class="display-4 fw-bold m-5">50 AZN</button>
        <button class="display-4 fw-bold m-5">100 AZN</button>
        <button class="display-4 fw-bold m-5">200 AZN</button>
    </div>

    <div class="d-flex flex-column">
        <button class="display-4 fw-bold m-5">500 AZN</button>
        <button class="display-4 fw-bold m-5">1000 AZN</button>
        <button class="display-4 fw-bold m-5">5000 AZN</button>
        <button class="btn btn-danger w-75 ms-5 mt-4 fs-1" id="otherAmount">Digər Məbləğ</button>
        <button class="btn btn-success w-75 ms-5 mt-4 fs-1" id="goBackAzn">Geriyə Get</button> 
    </div>
</div>
    `

    var otherAmount = moneySectionAzn.querySelector("#otherAmount");
    otherAmount.addEventListener("click", otherAmountFunc);

    function otherAmountFunc() {
        otherQuantity.style.display = "block";
        moneySectionAzn.style.display = "none";
    }

    var goBackAzn = moneySectionAzn.querySelector("#goBackAzn")
    goBackAzn.addEventListener("click", goBackAznFunc);

    function goBackAznFunc() {
        moneySectionAzn.style.display = "none";
        chooseCurrency.style.display = "block";
    }

}

