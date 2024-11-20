def two_sum(nums, target):
    num_map = {}

    for i, num in enumerate(nums):
        complement = target - num

        if complement in num_map:
            return [num_map[complement], i]
        
        num_map[num] = i

    return []

nums = [6, 9, 3, 15]
target = 9
print("Indices:", two_sum(nums, target))

# output is Indices: [0, 2] which is correct as 6 + 3= 9