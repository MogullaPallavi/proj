//vowels and consonants counter
const onClick1=()=>{
    const input=document.getElementById('input1').value;
    let vc=0;
    let cc=0;

    for(let i=0;i<input.length;i++ ){
        if (input.charAt(i) == "a" || input.charAt(i) == "e" || input.charAt(i) == "i" || input.charAt(i) == "o" || input.charAt(i) == "u") {
            vc++;
        }
    }
    document.getElementById('output1').innerHTML=`Count of vowels is ${vc} and count of consonants is ${input.length-vc} for string ${input}`;
    console.log(document.getElementById('output'));
}
const reset1=()=>{
    document.getElementById('input1').value="";
    document.getElementById('output1').innerHTML="";
}
//palindrome checker
let numbers=[];
const check=()=>{
    let output="";
    const input=document.getElementById('input2').value;
    numbers.push(input);
    for(let k=0;k<numbers.length;k++){
        let num=numbers[k];
        let i=0;
        let j=num.length-1;
        let ispalin=true;
        while(i<j){
            if(num.charAt(i)!=num.charAt(j)){
                ispalin=false;
            }
            i++;
            j--;
        }
        output+=`${num} is a ${ispalin==true?"":"not"} palindrome<br/>`;
    }
    document.getElementById('output2').innerHTML=output;
    numbers=[];
}
const reset=()=>{
    numbers=[];
    document.getElementById('output2').innerHTML="";
    document.getElementById('input2').value="";
}
const next=()=>{
    const input=document.getElementById('input2').value;
    numbers.push(input);
    document.getElementById('input2').value="";
}
//tip calculator
const onClick2=()=>{
    const subtotal=Number(document.getElementById('subtotal').value);
    const percentage=Number(document.getElementById('tip').value);
    const total=subtotal+subtotal*(percentage/100);
    document.getElementById('output3').value=total;
}
const reset2=()=>{
    document.getElementById('subtotal').value="";
    document.getElementById('tip').value="";
    document.getElementById('output3').value="";
}
