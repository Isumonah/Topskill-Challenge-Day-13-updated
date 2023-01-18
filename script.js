
let input = document.getElementById("input")
let submit = document.getElementById("submit")
let numbers = document.getElementById("numbers")
let getProduct = document.getElementById("get-product")
let product = document.getElementById("product")

let myArray = []


submit.addEventListener("click", function(){
  if(myArray.length === 5){
    alert("You can only choose 5 numbers")
  }
  else if(myArray.length === 4){
    myArray.push(input.value)
  numbers.innerHTML += input.value
   input.value = "" ;
  }
  else{
  myArray.push(input.value)
  numbers.innerHTML += input.value + ", "
    input.value = "";
  }
})

  getProduct.addEventListener("click", function(){
  let myProduct = 1;
   let myOutput = [];
    for(let i = 0; i < myArray.length; i++){
      for(let j = 0; j < myArray.length; j++){
        if(i != j){
        myProduct *= myArray[j]
        }
      }
      myOutput.push(myProduct) 
    myProduct = 1;
     
    }
    product.innerHTML += myOutput 
    
})



