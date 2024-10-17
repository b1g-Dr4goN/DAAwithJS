// Max-Min Problem with Divide and Conquer Strategy [Overall Time Complexity: O(n)]

function findMaxMin(array, l, r) {
    if (l === r) {
        return [array[l], array[l]];
    }
    else if (r === l + 1) {
        if (array[l] > array[r]) {
            return [array[l], array[r]];
        }
        else {
            return [array[r], array[l]];
        }
    }
    else {
        var mid = Math.floor(l + r / 2);
        
        var left = findMaxMin(array, l, mid);
        var right = findMaxMin(array, mid + 1, r);

        var lMax = left[0], lMin = left[1];
        var rMax = right[0], rMin = right[1];

        var maxVal = Math.max(lMax, rMax);
        var minVal = Math.min(lMin, rMin);

        return [maxVal, minVal];
    }
}

var dnc1 = () => {
    var array = [];

    var n = prompt("Input the length of array:");

    for (var i = 1; i <= n; i++) {
        var tmp = prompt(`Input the element with index = ${i}`);
        array.push(parseInt(tmp));
    }

    selectionSort(array);

    var ans = findMaxMin(array, 0, n - 1);

    alert(`Array: ${JSON.stringify(array)} - Max Value: ${ans[0]} - Min Value: ${ans[1]}`);
}