import React from "react";
import "./style.css";
import {useRef} from "react";

export default function App() {
  let imagen1 = "https://img.icons8.com/stickers/100/000000/denim-shorts.png";
  let imagen2 ="https://img.icons8.com/stickers/100/000000/lederhosen.png";
  const valor = 21.0;
  const refCaja = useRef();
  const incrementar=(e)=>{
    e.target.innerHTML=Number(e.target.innerHTML)+1;
    if(Number(e.target.innerHTML)>7 && Number(e.target.innerHTML)<10){   
      e.target.style.backgroundColor="red";
    }else if(Number(e.target.innerHTML)>=10 ){
      e.target.innerHTML=1;
      e.target.style.backgroundColor="white";
    }
  }
  const calcularCambio=(e)=>{
    refCaja.current.innerHTML=Number(refCaja.current.innerHTML)*valor;
  }
  const cambiaImagen=(h)=>{
    
    if(h.target.src.includes(imagen1)){
      h.target.src = imagen2;
    }else{
      h.target.src = imagen1;
    }
  }
  const cambiaTexto=(r)=>{
    refCaja.current.innerHTML=r.target.value;
  }
  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>1</div>
      <button onClick={calcularCambio}>Aceptar</button>
      <img onClick={cambiaImagen} src={imagen1} />
      <input onChange={cambiaTexto} className="campo" />
    </>
  );
}
