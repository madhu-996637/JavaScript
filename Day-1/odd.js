function dotsAndDashes(N) {

  for(let i=1;i<=N;i++){
     let temp="";
    if(i%2!=0){
      temp+="_"
    }else{
      for(let j=1;j<=N;j++){
        temp+="*"
      }
    }
      console.log(temp)
    }
}
dotsAndDashes(5);
