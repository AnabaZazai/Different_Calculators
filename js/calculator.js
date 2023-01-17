
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

    function sqruer(){
     ScreenOutput.value=Math.sqrt(ScreenOutput.value);
    }
    
    function e(){
     ScreenOutput.value=Math.E;
    }

    function pi(){
     ScreenOutput.value=Math.PI;
    }


    function round(){
     ScreenOutput.value=Math.round(ScreenOutput.value);
    }

    function sin(){    
     ScreenOutput.value=Math.round(Math.sin(ScreenOutput.value)); 
      }    
   
    function cos(){    
     ScreenOutput.value=Math.round(Math.cos(ScreenOutput.value));     
    }

     function tang(){    
     ScreenOutput.value=Math.round(Math.tan(ScreenOutput.value));     
    }

    function power(){
     ScreenOutput.value=Math.pow(ScreenOutput.value,2);
    }