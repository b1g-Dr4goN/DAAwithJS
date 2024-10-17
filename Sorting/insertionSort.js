// Insertion Sort Algorithm [Worst Case: O(n^2)]

function insertionSort(array) {
    var key;
    for (var i = 1; i < array.length; i++) {
        key = array[i];
        var j = i - 1;
        while (array[j] > key && j >= 0) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
        console.log(array);
    }
}


var sort3 = () => {
    var array = [];

    var n = prompt("Input the length of array:");

    for (var i = 1; i <= n; i++) {
        var tmp = prompt(`Input the element with index = ${i}`);
        array.push(parseInt(tmp));
    }

    insertionSort(array);

    alert(`The Sorted Array: ${JSON.stringify(array)}`);
}