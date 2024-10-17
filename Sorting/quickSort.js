// Quick Sort Algorithm [Worst Case: O(n^2); Average: O(nlog(n))]

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    var pivot = array[array.length - 1];

    var left = [], right = [];

    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

var sort6 = () => {
    var array = [];

    var n = prompt("Input the length of array:");

    for (var i = 1; i <= n; i++) {
        var tmp = prompt(`Input the element with index = ${i}`);
        array.push(parseInt(tmp));
    }

    array = quickSort(array);

    alert(`The Sorted Array: ${JSON.stringify(array)}`);
}