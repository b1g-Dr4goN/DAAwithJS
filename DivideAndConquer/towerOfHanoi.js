// Tower of Hanoi Problem [Overall Time Complexity: O(2^n)]

function towerOfHanoi(numDisk, from, to, aux) {
    if (numDisk === 1) {
        console.log(`Move disk 1 from ${from} to ${to}`);
        return;
    }
    towerOfHanoi(numDisk - 1, from, aux, to);
    console.log(`Move disk ${numDisk} from ${from} to ${to}`);
    towerOfHanoi(numDisk - 1, aux, to, from);
}

var dnc4 = () => {
    var n = prompt('Input the number of disks:');

    towerOfHanoi(n, 'A', 'C', 'B');

    alert('Disks moved from A to C. See the result in the console (F12 / Inspect)');
}