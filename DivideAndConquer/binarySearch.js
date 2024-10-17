// Binary Search [Overall Time Complexity: O(log(n))]

function binarySearch(array, val, l, r) {
    var mid = Math.floor(l + r / 2);
    if (l > r) {
        return -1;
    }
    if (val === array[mid]) {
        return mid;
    }
    if (val < array[mid]) {
        binarySearch(array, val, l, mid - 1);
    }
    binarySearch(array, val, mid + 1, r);
}

var dnc2 = () => {
    var array = [];

    var n = prompt("Input the length of array:");

    for (var i = 1; i <= n; i++) {
        var tmp = prompt(`Input the element with index = ${i}`);
        array.push(parseInt(tmp));
    }

    var valueToFind = prompt("Input the value to find:");

    var ans = binarySearch(array, valueToFind, 0, n - 1);

    if (ans !== -1) {
        alert(`${valueToFind} is found in the array!`);
    }
    else {
        alert(`${valueToFind} is not found in the array!`);
    }
}