function swapOddEvenElements(N,arr){
  let str=""
  for(let i=0;i<N;i+=2){
    let temp=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=temp;
    str+=arr[i]+ " "+arr[i+1]+" ";
  }
  console.log(str)
}
swapOddEvenElements(6,[1,2,3,4,5,6]);