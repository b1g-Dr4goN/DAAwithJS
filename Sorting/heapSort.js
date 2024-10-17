// Heap Sort Algorithm [Overall Time Complexity: O(nlog(n))]

class MaxHeap {
    constructor(array) {
        this.heap = array;
        this.size = array.length;
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    heapifyDown(index) {
        let largest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if (left < this.size && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < this.size && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    buildMaxHeap() {
        for (var i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    sort() {
        this.buildMaxHeap();

        for (var i = this.size - 1; i > 0; i--) {
            this.swap(0, i);
            this.size--;
            this.heapifyDown(0);
        }

        return this.heap;
    }
}

var sort5 = () => {
    var array = [];

    var n = prompt("Input the length of array:");

    for (var i = 1; i <= n; i++) {
        var tmp = prompt(`Input the element with index = ${i}`);
        array.push(parseInt(tmp));
    }

    var heap = new MaxHeap(array);

    alert(`The Sorted Array: ${JSON.stringify(heap.sort())}`);
}