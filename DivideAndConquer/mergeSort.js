// Merge Sort Algorithm [Overall Time Complexity: O(nlog(n))]

function merge(array, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
    
    var leftArr = [], rightArr = [];

    for (var i = 0; i < n1; i++) {
        leftArr.push(array[l + i]);
    }
    for (var i = 0; i < n2; i++) {
        rightArr.push(array[m + 1 + i]);
    }

    var i = 0, j = 0, k = l;
    
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            array[k] = leftArr[i];
            i++;
        }
        else {
            array[k] = rightArr[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        array[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < n2) {
        array[k] = rightArr[j];
        j++;
        k++;
    }
}

function mergeSort(array, left, right) {
    if (left < right) {
        var mid = left + Math.floor((right - left) / 2);
        mergeSort(array, left, mid);
        mergeSort(array, mid + 1, right);
        merge(array, left, mid, right);
    }
}

var dnc3 = () => {
    var array = [];

    var n = prompt("Input the length of array:");

    for (var i = 1; i <= n; i++) {
        var tmp = prompt(`Input the element with index = ${i}`);
        array.push(parseInt(tmp));
    }

    mergeSort(array, 0, n - 1);

    alert(`The Sorted Array: ${JSON.stringify(array)}`);
}