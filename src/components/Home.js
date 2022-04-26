import React, {useEffect} from 'react';





  
  export default function Home (){
   
 
 

    useEffect(() => {
      console.log(localStorage.getItem("token"));
      },[]);
    
  
  return (<div>Welcome to Home Page of Lock box </div>
  
   )};
    
