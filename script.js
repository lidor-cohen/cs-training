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

fibonacci_iteration(10);
