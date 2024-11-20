function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        if (map.has(compliment)) {
            return [map.get(compliment), i];
        }
        map.set(nums[i], i);
    }
    return [];
}


const nums = [2, 7, 11, 15];
const target = 9;
console.log("Indices:", twoSum(nums, target));

// output Indices: [ 0, 1 ] which is correct as 2 + 7 = 9
