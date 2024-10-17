// Bubble Sort Algorithm [Worst Case: O(n^2)]

function bubbleSort(array) {
    var n = array.length;
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
            console.log(array);
        }
    }
}

var sort1 = () => {
    var array = [];

    var n = prompt("Input the length of array:");

    for (var i = 1; i <= n; i++) {
        var tmp = prompt(`Input the element with index = ${i}`);
        array.push(parseInt(tmp));
    }

    bubbleSort(array);

    alert(`The Sorted Array: ${JSON.stringify(array)}`);
}