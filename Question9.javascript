9.// Solution


The code will output the following to the console:

array 1: length=5 last=j,o,n,e,s
array 2: length=5 last=j,o,n,e,s

Explanation:

1. `var arr1 = "john".split('');` - This creates an array `arr1` with elements ['j', 'o', 'h', 'n'] by splitting the string "john" using an empty string as the separator.

2. `var arr2 = arr1.reverse();` - This reverses the order of elements in `arr1` in place and assigns the reversed array back to `arr2`. Both `arr1` and `arr2` now refer to the same reversed array. So, `arr2` is ['n', 'h', 'o', 'j'], and `arr1` is also ['n', 'h', 'o', 'j'].

3. `var arr3 = "jones".split('');` - This creates an array `arr3` with elements ['j', 'o', 'n', 'e', 's'] by splitting the string "jones" using an empty string as the separator.

4. `arr2.push(arr3);` - This pushes the entire array `arr3` as a single element to the end of `arr2`. Now, `arr2` becomes ['n', 'h', 'o', 'j', ['j', 'o', 'n', 'e', 's']].

5. `console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));` - This logs the length of `arr1`, which is 5, and the last element of `arr1`, which is 's', using the `slice` method with a negative index to access the last element.

6. `console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));` - This logs the length of `arr2`, which is 5, and the last element of `arr2`, which is the array `arr3`, using the `slice` method with a negative index to access the last element.

Since `arr2` contains the reference to `arr3` as its last element, when logged, it appears as "array 2: length=5 last=j,o,n,e,s". Note that `arr2.slice(-1)` returns the array `arr3`, not the last element of `arr3`.