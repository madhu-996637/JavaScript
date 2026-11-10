function cartTotal(N, price, quantity) {
  let total=0
  for(let i=0;i<N;i++){
    total+=price[i]*quantity[i]
  }
  console.log(total)
}
cartTotal(3,[100,200,300],[1,2,3]);