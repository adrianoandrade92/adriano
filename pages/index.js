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
        
        <div class='perfil'>
            <h1>Adriano Andrade Marques</h1>
            <h1>Bruna, você é a esposa mais linda do mundo</h1>
            <h3>ASS: Adriano Andrade</h3>
            <div>
                <img
                src="http://github.com/adrianoandrade92.png" 
                alt="Adriano Andrade Marques" 
                width="150" 
                height="150"/>            
            </div>  
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
