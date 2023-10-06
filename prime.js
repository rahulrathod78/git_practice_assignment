let a=9
let flag=true
for(let i=2;i<a;i++){
    if(a%i==0){
    flag=false
    }
}

if(flag==false){
    console.log("not prime");
}
else{
    console.log("prime");
}