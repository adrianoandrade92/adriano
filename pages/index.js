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
        <h1>Adriano Andrade Marques</h1>
        <div>
            <h1>Bruna, você é a esposa mais linda do mundo</h1>
            <h3>ASS: Adriano Andrade</h3>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" 
            alt="Python logo" 
            width="20" 
            height="20"/>
            <p><a href="Curriculo_html.html" target="_blank" rel="noopener noreferrer"  style="color:white">Curriculo</a></p> 
        </div>
    </div>
}
//Aqui acaba front end//



// Função criada para contar
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
