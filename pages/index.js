//comandos do git//
//git status
//git add -A
//git commit -m 'primeira página' 
//git push origin main , empurra p o github

import React, { useState } from "react"

//Aqui começa front end//
function Home() {
    return <div> 
        <h1>Home - Adriano Andrade Marques</h1>
        <Contador />
        <div>
            <h1>Bruna</h1>
            <h2>Adriano</h2>
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
