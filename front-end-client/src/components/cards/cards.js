import React from "react";
import "../cards/card.css";
import FormDialog from "../dialog/dialog";

function Card(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true);
    };

    return (
        <>
            <FormDialog open={ open } setOpen={ setOpen }
                nome={ props.nome }
                email={ props.email }
                data={ props.data }
                cidade={ props.cidade }
                endereco={ props.endereco }
                telefone={ props.telefone }
                listCard={ props.listCard }
                setListCard={ props.setListCard }
                id={ props.id }
            />
            <div className="card--container" onClick={ () => handleClickCard() }>
                <div className="container--confirm">
                    <h1 className="title"> Confirmação dos <span>Dados</span></h1>
                    <p className='container--paragrafh'>Confira os dados referentes</p>
                    <p className="card">Nome completo:  { props.nome }</p>
                    <p className="card"> Email:  { props.email }</p>
                    <p className="card">Data de Nascimento:  { props.data }</p>
                    <p className="card">  Cidade:  { props.cidade }</p>
                    <p className="card"> Endereço: { props.endereco }</p>
                    <p className="card">Telefone:  { props.telefone }</p>
                </div>
            </div >
        </>
    )
}

export default Card;