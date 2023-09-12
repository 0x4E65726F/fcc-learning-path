function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var changeReturn = [];
    var status = { status: "", change: changeReturn };
    var totalCid = 0;
    
    var currencyUnitValues = [
        { name: "ONE HUNDRED", val: 100.0 },
        { name: "TWENTY", val: 20.0 },
        { name: "TEN", val: 10.0 },
        { name: "FIVE", val: 5.0 },
        { name: "ONE", val: 1.0 },
        { name: "QUARTER", val: 0.25 },
        { name: "DIME", val: 0.1 },
        { name: "NICKEL", val: 0.05 },
        { name: "PENNY", val: 0.01 }
    ];
  
    cid.forEach(function(val) {
        totalCid += val[1];
    });
    totalCid = totalCid.toFixed(2);
  
    if (Number(totalCid) < Number(change)) {
        status.status = "INSUFFICIENT_FUNDS";
        return status;
    } else if (Number(totalCid) === Number(change)) {
        status.status = "CLOSED";
        status.change = cid;
        return status;
    } else {
        cid = cid.reverse();
        for (var i = 0; i < currencyUnitValues.length; i++) {
            var currentMoney = currencyUnitValues[i];
            var currentAmount = 0;
            while (cid[i][1] > 0 && change >= currentMoney.val) {
                change -= currentMoney.val;
                change = change.toFixed(2);
                cid[i][1] -= currentMoney.val;
                currentAmount += currentMoney.val;
            }
            if (currentAmount > 0) {
                changeReturn.push([currentMoney.name, currentAmount]);
            }
        }
    }
  
    if (Number(change) > 0) {
        status.status = "INSUFFICIENT_FUNDS";
        status.change = [];
        return status;
    }
  
    status.status = "OPEN";
    return status;
}
  
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));