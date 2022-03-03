export default function verifieAuth(){
   
    console.log(localStorage.getItem("token"));

    if (localStorage.getItem("token") ){
        return true ;
    }
    else {return false;}
}

