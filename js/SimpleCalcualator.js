
 let ScreenOutput = document.getElementById("ScreenResult");
      
      function display(num) {
      	ScreenOutput.value+=num;
      }

      function calculate() {
      	// body...
      	try{
      		ScreenOutput.value=eval(ScreenOutput.value);
      	}catch(err){
      		alert("invalide request");
      	}
      }

     function Clear(){
     	ScreenOutput.value= "";
     }

    function del(){
    	ScreenOutput.value=ScreenOutput.value.slice(0,-1);
    }

