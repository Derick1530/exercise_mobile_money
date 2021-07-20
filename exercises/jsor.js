function goBack(){
    document.getElementById("divList").innerHTML = document.getElementById("divList");
}

level=0;
function userClick(){
    var divAirtel = document.getElementById("divList");
    var userInput = document.getElementById("inPut").value;
    
    if ( userInput=="" && level == 0 ){
        divAirtel.innerHTML = "you must input something to jump to the next level";
    }
    else if ( userInput == "1" && level == 0 ){
        divAirtel.innerHTML = "1. USD "+ "<br>" + "2. CDF";
        
        level += 1;
       
    }
    else if ( userInput == "1" && level == 1 ){
        divAirtel.innerHTML = "enter your password";
        level += 1;

        
        }
    else if ( userInput == "1" && level == 0 ){
        divAirtel.innerHTML = "Your balance is " + 0 ;
    }
        // i set the user to != to empty because we dont use database to store data
    else if ( userInput !="" && level == 2 ){
            divAirtel.innerHTML = "Your balance is " + 0 ;
            level += 1;
        
    }
    else if ( userInput == "2" && level == 0){
        divAirtel.innerHTML="enter the receiver's number";
    }
    // else if ( userInput !="" && level ==  ){
    //     divAirtel.innerHTML = "Your balance is " + 0 ;
    //     level += 1;
   
    // switch(userInput){
    //     case "" :
    //         divAirtel.innerHTML="you must input something to jump to the next level";
    //         break;
    //     case "1" :
    //         divAirtel.innerHTML="enter your password";
    //         break ;
            
    //     case "2" :
    //         divAirtel.innerHTML="how much do want to send ?";
    //         break ;
        

    // }
    
}
