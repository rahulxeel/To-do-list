//###################################################################################################################################
//                                     P L U S
//###################################################################################################################################

function plus1() {  
       
       
                  
 //###################################################################################################################################                 
               
                
                  if( 
                       
                       document.getElementById("t1").style.display == "block" &&
                       document.getElementById("t2").style.display == "block" &&
                       document.getElementById("t3").style.display == "block" &&
                       document.getElementById("t4").style.display == "block" &&
                       document.getElementById("t5").style.display == "block" &&
                       document.getElementById("t6").style.display == "block" &&
                       document.getElementById("t7").style.display == "none" 
                       )
                       
                       { document.getElementById("t7").style.display = "block";
                         document.getElementById("h7").style.display = "block";
                         document.getElementById("cross7").style.display ="block"; 
                         document.getElementById("plus1").style.display ="none";
                         
                        }
  
  


 //###################################################################################################################################                 
                   
                   else if( 
                       
                       document.getElementById("t1").style.display == "block" &&
                       document.getElementById("t2").style.display == "block" &&
                       document.getElementById("t3").style.display == "block" &&
                       document.getElementById("t4").style.display == "block" &&
                       document.getElementById("t5").style.display == "block" &&
                       document.getElementById("t6").style.display == "none" &&
                       document.getElementById("t7").style.display == "none" 

                       )
                       
                       { document.getElementById("t6").style.display = "block";
                         document.getElementById("h6").style.display = "block";
                         document.getElementById("cross6").style.display ="block"; 
                         
                        }
  
  


 //###################################################################################################################################                 
 
                
                
                
                  else if( 
                       
                       document.getElementById("t1").style.display == "block" &&
                       document.getElementById("t2").style.display == "block" &&
                       document.getElementById("t3").style.display == "block" &&
                       document.getElementById("t4").style.display == "block" &&
                       document.getElementById("t5").style.display == "none" &&
                       document.getElementById("t6").style.display == "none" &&
                       document.getElementById("t7").style.display == "none" 
                     )
                       
                       
                       { document.getElementById("t5").style.display = "block";
                         document.getElementById("h5").style.display = "block";
                         document.getElementById("cross5").style.display ="block"; 
                         
                        }
  
  

 //###################################################################################################################################                 
 
                
                
                  else if( 
                       
                       document.getElementById("t1").style.display == "block" &&
                       document.getElementById("t2").style.display == "block" &&
                       document.getElementById("t3").style.display == "block" &&
                       document.getElementById("t4").style.display == "none" &&
                       document.getElementById("t5").style.display == "none" &&
                       document.getElementById("t6").style.display == "none" &&
                       document.getElementById("t7").style.display == "none" 

                       )
                       
                       { document.getElementById("t4").style.display = "block";
                         document.getElementById("h4").style.display = "block";
                         document.getElementById("cross4").style.display ="block"; 
                         
                        }
  
  


 //###################################################################################################################################                 

                
                
                 else if( 
                       
                       document.getElementById("t1").style.display == "block" &&
                       document.getElementById("t2").style.display == "block" &&
                       document.getElementById("t3").style.display == "none" &&
                       document.getElementById("t4").style.display == "none" &&
                       document.getElementById("t5").style.display == "none" &&
                       document.getElementById("t6").style.display == "none" &&
                       document.getElementById("t7").style.display == "none" 

                       )
                       
                       { document.getElementById("t3").style.display = "block";
                         document.getElementById("h3").style.display = "block";
                         document.getElementById("cross3").style.display ="block"; 
                         
                        }
  
  


 //###################################################################################################################################                 



                  else if( 
                       
                       document.getElementById("t1").style.display == "block" &&
                       document.getElementById("t2").style.display == "none" &&
                       document.getElementById("t3").style.display == "none" &&
                       document.getElementById("t4").style.display == "none" &&
                       document.getElementById("t5").style.display == "none" &&
                       document.getElementById("t6").style.display == "none" &&
                       document.getElementById("t7").style.display == "none" 

                       )
                       
                       { document.getElementById("t2").style.display = "block";
                         document.getElementById("h2").style.display = "block";
                         document.getElementById("cross2").style.display ="block"; 
                         
                        }
  
  
  
                  
                  
 //###################################################################################################################################                 
                  
                else if( 
                       document.getElementById("t1").style.display == "none" &&
                       document.getElementById("t2").style.display == "none" &&
                       document.getElementById("t3").style.display == "none" &&
                       document.getElementById("t4").style.display == "none" &&
                       document.getElementById("t5").style.display == "none" &&
                       document.getElementById("t6").style.display == "none" &&
                       document.getElementById("t7").style.display == "none" 

                       )
                     
                     
                        {
                        document.getElementById("t1").style.display = "block";
                        document.getElementById("h1").style.display = "block";
                        document.getElementById("cross1").style.display ="block";
                           }
  
                           
                           
//###################################################################################################################################                                                 
                           
                           
                 }
                 
                 
                 
                 
                 
//###################################################################################################################################
//                                     C R O S S
//###################################################################################################################################


                 
function cross1() { document.getElementById("t1").style.display = "none";
                   document.getElementById("h1").style.display = "none";
                   document.getElementById("cross1").style.display ="none";
                 
                  
                 }
                 

               
function cross2() { document.getElementById("t2").style.display = "none";
                   document.getElementById("h2").style.display = "none";
                   document.getElementById("cross2").style.display ="none";
                 
                  
                 }
                 
function cross3() { document.getElementById("t3").style.display = "none";
                   document.getElementById("h3").style.display = "none";
                   document.getElementById("cross3").style.display ="none";
                 
                  
                 }
                 

               
function cross4() { document.getElementById("t4").style.display = "none";
                   document.getElementById("h4").style.display = "none";
                   document.getElementById("cross4").style.display ="none";
                 
                  
                 }        
                 
function cross5() { document.getElementById("t5").style.display = "none";
                   document.getElementById("h5").style.display = "none";
                   document.getElementById("cross5").style.display ="none";
                 
                  
                 }
                 

               
function cross6() { document.getElementById("t6").style.display = "none";
                   document.getElementById("h6").style.display = "none";
                   document.getElementById("cross6").style.display ="none";
                 
                  
                 }
                 
function cross7() { document.getElementById("t7").style.display = "none";
                   document.getElementById("h7").style.display = "none";
                   document.getElementById("cross7").style.display ="none";
                 
                  
                 }
                 

               
function cross8() { document.getElementById("t8").style.display = "none";
                   document.getElementById("h8").style.display = "none";
                   document.getElementById("cross8").style.display ="none";
                 
                  
                 }                   
                
//###################################################################################################################################
//                                    if Condition 
//###################################################################################################################################



