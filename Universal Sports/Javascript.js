function check()
{
    var Q1 = document.quiz.Q1.value;
    var Q2 = document.quiz.Q2.value;
    var Q3 = document.quiz.Q3.value;
    var Q4 = document.quiz.Q4.value;
    var Q5 = document.quiz.Q5.value;
    var Q6 = document.quiz.Q6.value;
    var Q7 = document.quiz.Q7.value;
    var Q8 = document.quiz.Q8.value;
    var Q9 = document.quiz.Q9.value;
    var Q10 = document.quiz.Q10.value;
    var correct_answers = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var f = 0;
    var g = 0;
    var h = 0;
    var i = 0;
    var j = 0;

        if (Q1 == "11")
        {
           a=2;   
        }

        else
        {
            a=-1;
        }
        
        if ( Q2 == "Sanath Jayasuriya")
        {
            b=2;    
        }

        else
        {
            b=-1;
        }

        if (Q3 == "West Indies")
        {
           c=2;   
        }

        else
        {
            c=-1;
        }

        if (Q4 == "11")
        {
            d=2;    
        }

        else
        {
            d=-1;
        }

        if (Q5 == "1863")
        {
            e=2;   
        }

        else
        {
            e=-1;
        }

        if (Q6 == "15")
        {
            f=2;  
        }

        else
        {
            f=-1;
        }

        if (Q7 == "1938")
        {
            g=2;  
        }

        else
        {
            g=-1;
        }

        if (Q8 == "20.12m")
        {
            h=2;           
        }

        else
        {
            h=-1;
        }

        if (Q9 == "100m*70m")
        {
            i=2;   
        }

        else
        {
            i=-1;
        }

        if (Q10 == "Shoaib Akhtar")
        {
            j=2;   
        }

        else
        {
            j=-1;
        }

        correct_answers = a + b + c + d + e + f + g + h + i + j ;


        
    document.getElementById("submitted").style.visibility = "visible" ;
    document.getElementById("corrected").innerHTML =  "You got "+ correct_answers 
   
    if (Q1=="11"){
        document.getElementsByID("section1").style.background="#19ed0e";
    }
    else{
        document.getElementById("section1").style.background="red";
    }

    if (Q2=="Sanath Jayasuriya"){
        document.getElementById("section2").style.background="#19ed0e";
    }
    else{
        document.getElementById("section2").style.background="red";
    }

    if (Q3=="West Indies"){
        document.getElementById("section3").style.background="#19ed0e";
    }
    else{
        document.getElementById("section3").style.background="red";
    }

    if (Q4=="11"){
        document.getElementById("section4").style.background="#19ed0e";
    }
    else{
        document.getElementById("section4").style.background="red";
    }

    if (Q5=="1863"){
        document.getElementById("section5").style.background="#19ed0e";
    }
    else{
        document.getElementById("section5").style.background="red";
    }

    if (Q6=="15"){
        document.getElementById("section6").style.background="#19ed0e";
    }
    else{
        document.getElementById("section6").style.background="red";
    }

    if (Q7=="1938"){
        document.getElementById("section7").style.background="#19ed0e";
    }
    else{
        document.getElementById("section7").style.background="red";
    }

    if (Q8=="20.12m"){
        document.getElementById("section8").style.background="#19ed0e";
    }
    else{
        document.getElementById("section8").style.background="red";
    }

    if (Q9=="100m*70m"){
        document.getElementById("section9").style.background="#19ed0e";
    }
    else{
        document.getElementById("section9").style.background="red";
    }

    if (Q10=="Shoaib Akhtar"){
        document.getElementById("section10").style.background="#19ed0e";
    }
    else{
        document.getElementById("section10").style.background="red";
    }

    if(correct_answers<0){
        document.body.style.background="purple";
    }

    if(correct_answers>0){
        document.body.style.background="#ceb1fa";
    }

    


}