function fibonacci_iteration(num) {
  /*

    function takes a number and returns an array
    containing all fibonacci sequence items that
    add up to the arry

    example: num = 5
    -------> [0, 1, 1, 2, 3]

    */

  let arr = [0];
  let head = 1;
  let prev = 0;

  for (let i = 1; i < num; i++) {
    arr.push(head);
    const temp = head;
    head = head + prev;
    prev = temp;
  }

  console.log(arr);
}

// let arr = [];
function fibonacci_recursion(num, prev = 1, head = 0) {
  num += 1;
  if (head > num) {
    return 0;
  }

  arr.push(head);
  fibonacci_recursion(num, head, prev + head);
}

function merge_sort(arr) {
  /*

    Psuedo Code:
    1. If only one element
        Quit
    2. Else
        Sort Left Half
        Sort Right Half
        Merge

    Test Inputs:
    1. [3, 2, 1, 13, 8, 5, 0, 1] -> [0, 1, 1, 2, 3, 5, 8, 13]
    2. [105, 79, 100, 110] -> [79, 100, 105, 110]

    */

  if (arr.length <= 1) {
    return arr;
  } else {
    const midArrayIndex = Math.floor(arr.length / 2);

    const leftHalf = arr.slice(0, midArrayIndex);
    const rightHalf = arr.slice(midArrayIndex);

    return merge(merge_sort(leftHalf), merge_sort(rightHalf));
  }
}

function merge(leftArr, rightArr) {
  let sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

let f = merge_sort([4, 1, 2, 5]);
console.log(f);
