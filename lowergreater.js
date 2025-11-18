
function arr(n) {
    let arr1 = [];

    for (let i = 0; i < n; i++) {
        let x = parseInt(prompt("Enter number: "));
        arr1.push(x);
    }

    console.log(arr1[1]);      // second element
    console.log(arr1[n - 2]);  // secondlast element
}

arr(5);
