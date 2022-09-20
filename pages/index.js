//comandos do git//
//git status
//git add -A
//git commit -m 'primeira página' 
//git push origin main , empurra p o github
//npm run dev desenvolver localmente

import React, { useState } from "react"

//Aqui começa front end//
function Home() {

    return <div>
        <Contador />
        <Curriculo_html>Aqui</Curriculo_html>
             
        <h1>Adriano Andrade Marques</h1>
                     
        <div>
            <h1>Bruna, você é a esposa mais linda do mundo</h1>
            <h3>ASS: Adriano Andrade</h3>
            <link href="Curriculo_html.html"></link> 
        </div>


    </div>
}
//Aqui acaba front end//

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>)
}
export default Home
