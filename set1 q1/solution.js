function findMaximumElement(arr) {
    if (arr.length === 0) {
        return null;
    }

    // if inbuilt functions can be used
    // return Math.max(...arr);

    // without using inbuilt functions
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}



const array = [3, 5, 1, 8, 4];
console.log("The maximum element is:", findMaximumElement(array));

// out put is The maximum element is: 8 which is correct