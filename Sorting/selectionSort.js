// Selection Sort Algorithm [Worst Case: O(n^2)]

function selectionSort(array) {
    var minIdx;
    for (var i = 0; i < array.length - 1; i++) {
        minIdx = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        var tmp = array[i];
        array[i] = array[minIdx];
        array[minIdx] = tmp;
        console.log(array);
    }
}

var sort2 = () => {
    var array = [];

    var n = prompt("Input the length of array:");

    for (var i = 1; i <= n; i++) {
        var tmp = prompt(`Input the element with index = ${i}`);
        array.push(parseInt(tmp));
    }

    selectionSort(array);

    alert(`The Sorted Array: ${JSON.stringify(array)}`);
}