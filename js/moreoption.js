
 var input1 = document.getElementById("input1");
 var input2 = document.getElementById("input2");
 var result = document.getElementById("result");
      
//  function display(num) {
//      if(input1){
//          input1.value+=num;
//      }
//     else if(input2){
//       input2.value+=num;  
//     }
     
//     //  ScreenOut.value+=num;
//  }

 function calculate() {
     // body...
     try{
         result.value=eval(result.value);
     }catch(err){
         alert("invalide request");
     }
 }

function Clear(){
    input1.value= "";
    input2.value= "";
    result.value= "";
}

function del(){
   input1.value=input1.value.slice(0,-1);
   input2.value=input2.value.slice(0,-1);
}

function sqruer(){
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var result = document.getElementById("result");
// ScreenOutput.value=Math.sqrt(ScreenOutput.value);
    var Sqrof=Math.pow(input1,1/input2);
    result.value=Sqrof;

}

function powerof(){
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var result = document.getElementById("result");
    var Power=Math.pow(input1,input2);
    result.value=Power;
}


