import React from "react";
import "../cards/card.css";

function Card(props) {
    return (
        <div className="card--container">
            <div className="container--confirm">
                <h1 className="title"> Confirmação dos <span>Dados</span></h1>
                <p className='container--paragrafh'>Confira os dados referentes</p>
                <p className="card">Nome completo:  { nome }</p>
                <p className="card"> Email:  { email }</p>
                <p className="card">Data de Nascimento:  { data }</p>
                <p className="card">  Cidade:  { cidade }</p>
                <p className="card"> Endereço: { endereco }</p>
                <p className="card">Telefone:  { telefone }</p>
            </div>
        </div >
    )
}

export default Card;