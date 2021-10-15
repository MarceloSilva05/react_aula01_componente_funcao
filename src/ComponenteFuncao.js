import React,{useState} from 'react';
export default function ComponenteFuncao(){
    const [contador,setContador]=useState(0);
    return (
      <>
        <p>Contador {contador}</p>
        <div>
            <button onClick={() => setContador(contador+1)}>Incremento</button>
            <button onClick={() => setContador(contador-1)}>Incremento</button>
        </div>
      </>
    );
}