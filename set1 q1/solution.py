def find_maximum_element(arr):
    if not arr:
        return None
    # if inbuilt functions can be used
    # return max(arr) 

    # without using inbuilt functions
    max_element = arr[0]
    for num in arr:
        if num > max_element:
            max_element = num
    return max_element

array = [3, 5, 90, 8, 4]
print("The maximum element is:", find_maximum_element(array))

# output is The maximum element is: 90 which is correct


