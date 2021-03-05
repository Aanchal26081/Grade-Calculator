const calcy = () =>{
    let s1 = document.getElementById('s1').value;
    let s2 = document.getElementById('s2').value;
    let s3 = document.getElementById('s3').value;
    let s4 = document.getElementById('s4').value;
    let s5 = document.getElementById('s5').value;
    let grades = "";
  
  
    let totalGrades = parseFloat(s1) + parseFloat(s2) + parseFloat(s3) + parseFloat(s4) + parseFloat(s5);
    // alert(totalGrades);
  
    let perc = (totalGrades/500) * 100;
    // alert(perc);
  
    debugger; 
  
    if(perc <= 100  && perc >= 80){
      grades = 'A';
    }
    else if(perc <= 79  && perc >= 60){
       grades = 'B';
    }
    else if(perc <= 59  && perc >= 40){
       grades = 'C';
    }
    else{
       grades = 'F';
    }
  
    if(perc >= 39.5){
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
    }
    else{
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    }
  
    
  }
  