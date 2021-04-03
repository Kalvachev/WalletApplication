export function combineCategories(type, bills) {
    let combined = new Set(bills.filter(data => data.type == type).map(data => data.categorie));

    let newArr = Array.from(combined);
    return newArr;
}

export function sumExpense(bills) {
    let foodSum = 0;
    let shoppingSum = 0;
    let housingSum = 0;
    let vehicleSum = 0;
    let communicationSum = 0;
    let entertanmentSum = 0;
    let investmentsSum = 0;

    let finalArr = [];

    let combined = new Set(bills.filter(data => data.type == "expense"))

    let newArr = Array.from(combined)

    newArr.forEach((item) => {
        if (item.categorie === 'foodAndDrinks') {
            if (foodSum === 0) {
                foodSum += Number(item.amount);
                finalArr.push({
                    name: 'foodAndDrinks',
                    value: foodSum
                });
            } else {
                foodSum += Number(item.amount);
                let index = finalArr.findIndex(x => x.name === 'foodAndDrinks');

                finalArr[index].value = foodSum;
            }
        } else if (item.categorie === 'shopping') {
            if (shoppingSum === 0) {
                shoppingSum += Number(item.amount);
                finalArr.push({
                    name: 'shopping',
                    value: shoppingSum
                });
            } else {
                shoppingSum += Number(item.amount);
                let index = finalArr.findIndex(x => x.name === 'shopping');

                finalArr[index].value = shoppingSum;
            }
        } else if (item.categorie === 'housingAndUtilities') {
            if (housingSum === 0) {
                housingSum += Number(item.amount);
                finalArr.push({
                    name: 'housingAndUtilities',
                    value: housingSum
                });
            } else {
                housingSum += Number(item.amount);
                let index = finalArr.findIndex(x => x.name === 'housingAndUtilities');

                finalArr[index].value = housingSum;
            }
        } else if (item.categorie === 'vehicleAndTransportation') {
            if (vehicleSum === 0) {
                vehicleSum += Number(item.amount);
                finalArr.push({
                    name: 'vehicleAndTransportation',
                    value: vehicleSum
                });
            } else {
                vehicleSum += Number(item.amount);
                let index = finalArr.findIndex(x => x.name === 'vehicleAndTransportation');

                finalArr[index].value = vehicleSum;
            }
        } else if (item.categorie === 'communicationAndPC') {
            if (communicationSum === 0) {
                communicationSum += Number(item.amount);
                finalArr.push({
                    name: 'communicationAndPC',
                    value: communicationSum
                });
            } else {
                communicationSum += Number(item.amount);
                let index = finalArr.findIndex(x => x.name === 'communicationAndPC');

                finalArr[index].value = communicationSum;
            }
        } else if (item.categorie === 'entertainementAndLife') {
            if (entertanmentSum === 0) {
                entertanmentSum += Number(item.amount);
                finalArr.push({
                    name: 'entertainementAndLife',
                    value: entertanmentSum
                });
            } else {
                entertanmentSum += Number(item.amount);
                let index = finalArr.findIndex(x => x.name === 'entertainementAndLife');

                finalArr[index].value = entertanmentSum;
            }
        } else if (item.categorie === 'investments') {
            if (investmentsSum === 0) {
                investmentsSum += Number(item.amount);
                finalArr.push({
                    name: 'investments',
                    value: investmentsSum
                });
            } else {
                investmentsSum += Number(item.amount);
                let index = finalArr.findIndex(x => x.name === 'investments');

                finalArr[index].value = investmentsSum;
            }
        }
    })

    let result = [];

    finalArr.forEach(x => {
        result.push(x.value);
    });

    return result;
}

export function sumIncome(bills) {
    let salarySum = 0;
    let lotterySum = 0;
    let interestsSum = 0;
    let rentingSum = 0;

    let finalArr = [];

    let combined = new Set(bills.filter(data => data.type == "income"))

    let newArr = Array.from(combined)

    newArr.forEach((item) => {
        if (item.categorie === 'salary') {
            if (salarySum === 0) {
                salarySum += Number(item.amount);
                finalArr.push({
                    name: 'salary',
                    value: salarySum
                });
            } else {
                salarySum += Number(item.amount);
                let index = finalArr.findIndex(x => x.name === 'salary');

                finalArr[index].value = salarySum;
            }
        } else if (item.categorie === 'lotteryAndGambling') {
            if (lotterySum === 0) {
                lotterySum += Number(item.amount);
                finalArr.push({
                    name: 'lotteryAndGambling',
                    value: lotterySum
                });
            } else {
                lotterySum += Number(item.amount);
                let index = finalArr.findIndex(x => x.name === 'lotteryAndGambling');

                finalArr[index].value = lotterySum;
            }
        } else if (item.categorie === 'interestsAndDividents') {
            if (interestsSum === 0) {
                interestsSum += Number(item.amount);
                finalArr.push({
                    name: 'interestsAndDividents',
                    value: interestsSum
                });
            } else {
                interestsSum += Number(item.amount);
                let index = finalArr.findIndex(x => x.name === 'interestsAndDividents');

                finalArr[index].value = interestsSum;
            }
        } else if (item.categorie === 'lendingAndRenting') {
            if (rentingSum === 0) {
                rentingSum += Number(item.amount);
                finalArr.push({
                    name: 'lendingAndRenting',
                    value: rentingSum
                });
            } else {
                rentingSum += Number(item.amount);
                let index = finalArr.findIndex(x => x.name === 'lendingAndRenting');

                finalArr[index].value = rentingSum;
            }
        }
    })

    let result = [];

    finalArr.forEach(x => {
        result.push(x.value);
    });

    return result;
}
