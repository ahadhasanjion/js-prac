//PROBLEM NUMBER 1 START
function radianToDegree(radian) {
    if (typeof radian == 'number') {
        let radiantodegree = (radian * 180 / Math.PI);
        let degree = radiantodegree.toFixed(2);
        return parseFloat(degree);
    } else {
        return 'Please Enter Radian Number';
    }
}
console.log(radianToDegree(10));

//PROBLEM NUMBER 1 END
//PROBLEM NUMBER 2 START
function isJavaScriptFile(File) {
    if (typeof File !== 'string') {
        return 'Please Type Valid File Nime'
    } else if (File.toLowerCase().endsWith('.js')) {
        return true;
    } else {
        return false;
    }
}
console.log(isJavaScriptFile('my.js'));

//PROBLEM NUMBER 2 END
//PROBLEM NUMBER 3 START
function oilPrice(dissel, petrol, octane) {
    if (typeof dissel !== 'number' && typeof petrol !== 'number' && typeof octane !== 'number') {
        return 'Please Enter Dissel, petrol, Octane Liter';
    } else {
        let disselPerLiter = 114;
        let petrolPerLiter = 130;
        let octanePerLiter = 135;
        let disselPrice = disselPerLiter * dissel;
        let petrolPrice = petrolPerLiter * petrol;
        let octanePrice = octanePerLiter * octane;
        let totaloilPrice = disselPrice + petrolPrice + octanePrice;
        return totaloilPrice;
    }
}console.log(oilPrice(1, 1, 1,));
//PROBLEM NUMBER 3 END
//PROBLEM NUMBER 4 START
function publicBusFare(TotalPublic) {
    if (typeof TotalPublic !== 'number') {
        return 'Please Enter Total Public Number'
    } else {
        let BusCap = 50;
        let MicroBusCap = 11;
        let PublicBusPrice = 250;
        let Bus = TotalPublic % BusCap;
        let MicroBus = Bus % MicroBusCap;
        let totalCost = MicroBus * PublicBusPrice;
        return totalCost;
    }
}
console.log(publicBusFare(365));

//PROBLEM NUMBER 4 END
//PROBLEM NUMBER 5 START
let FriendOne = {
    name: 'Jion',
    friend: 'Niall'
}
let FriendTwo = {
    name: 'Niall',
    friend: 'Jion'
}

function isBestFriend(FriendOne, FriendTwo) {
    if (typeof FriendOne.name !== 'string' && typeof FriendTwo.friend !== 'string' && FriendOne.friend !== 'string' && FriendTwo.name !== 'string') {
        return 'Please Enter Valid Object';
    } else if (FriendOne.name == FriendTwo.friend && FriendTwo.name == FriendOne.friend) {
        return true;
    } else {
        return false;
    }
}
console.log(isBestFriend(FriendOne, FriendTwo));
//PROBLEM NUMBER 5 END