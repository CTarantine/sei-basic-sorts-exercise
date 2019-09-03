function bubbleSort(array) {
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn

    for (let i = 0; i < array.length; i++) {

        if (array[i] > array[i + 1]) {
            i++;
            // reset swapHappened to false each time so we can detect if a swap
            // happened in this specific iteration.
            swapHappened = false;
        }
        // Make another loop (inside the first one) to go through one 
        // round of swapping from the start of the list to the end
        for (let j = 0; j < array.length; j++) {
            // Inside inner loop:
            // compare each pair of elements near each other
            // swap them if the bigger one was at a lower index.
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapHappened= true;
            }
        }
    }

    // Make sure to keep track of whether a swap happened!

    // After both loops have exited, remember to return the array
    return array;
}

module.exports = bubbleSort;

console.log(bubbleSort([8, 22, 16, 5, 30]))