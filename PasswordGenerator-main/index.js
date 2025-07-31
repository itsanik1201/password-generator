import React, {use, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function GeneratePassword(){

    const [password,setpassword]=useState("");
    const [length ,setlenght]=useState(10);
    const [cnum,setcnum]=useState(false);
    const [cchar,setchar]=useState(false);
    
    let Passwordchange=useCallback(()=>{
        let s = "abcdefghijklmnopqrstuvwxyz";
        let pass;
        if(cnum){
            s+='0123456789';
        }
        if(cchar){
            s+='@!^%$*&()_+';
        }
        for(let i=0;i<length;i++){
           let x = Math.floor(Math.random()*s.length);
           pass+=s[x];
        }
        setpassword(pass);
    },[length,cchar,cnum]);
   
    useEffect(()=>{
        Passwordchange();
    },[length,cchar,cnum])

    return (
        <div className="box">
            <h1 style={{color:"red",fontWeight:"bold",fontFamily:"arial"}}>PASSWORD GENETATOR</h1>
            <h1 style={{background:"black",color:"white",padding:"0vw 1vw",borderRadius:"1vw",marginTop:"1vw"}}>{password}</h1>
            <div className="baki">

            <input type="range" min={10} max={30} onChange={(e)=>setlenght(e.target.value)}></input>
            <label>length({length})</label>


            <input className="one" defaultChecked ={cnum} onChange={()=>setcnum(!cnum)} type="checkbox"></input>
            <label>Number</label>

            <input className="one" defaultChecked={cchar} onChange={()=>setchar(!cchar)} type="checkbox"></input>
            <label>Charctor</label>

            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<GeneratePassword/>);