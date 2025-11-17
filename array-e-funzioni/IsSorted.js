function isSorted(a) {

    let bandiera = true


    for (let i = 0; i < a.length; i++) {

        if (a[i] >= a[i + 1]) {
            bandiera = false;
        }

    } return bandiera
}

console.log(isSorted([-21, -2, 0, 4, 6, 210]))

console.log(isSorted([2, 6, 8, 8, 9, 21]))

console.log(isSorted([2, 6, 8, 9, 10, -42]))


