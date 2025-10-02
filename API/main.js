
let z=document.getElementById('b1').addEventListener('click',function(){
     let x=document.getElementById('i1').value;
     let y=document.getElementById('i2').value;


    let result = div(Number(x),Number(y));
    document.getElementById('re').innerHTML=result

})


function div(num1,num2){
    return num1/num2;
    
}
