import React, { useState } from "react"

function Home() {
    return <div>^
        <h1>Home - Pagina 1</h1>
        <Contador />
        <div>
            <h1>Bruna</h1>
            <h2>Adriano</h2>
        </div>
    </div>
}

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
