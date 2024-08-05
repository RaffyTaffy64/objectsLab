// function add(num1, num2) {
//     console.log(num1 + num2)
// } 

// add(3, 5)

function greaterThan10(obj) {
    console.log(obj)
    for (let key in obj){

        console.log(key)

        console.log(obj[key])

        if (obj[key] >= 10){
            obj[key] = 0
        }
        console.log(`*****`)
    }console.log(obj)
  }

  greaterThan10({a: 8, b: 13, c: 27})