let a=9
let flag=false
for(let i=1;i<=a;i++){
    if(a%i!=0){
    flag=true
    }
}
console.log(flag)
if(flag==false){
    console.log("not prime");
}
else{
    console.log("prime");
}


