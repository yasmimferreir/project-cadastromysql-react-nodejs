import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import Card from './components/cards/cards';
import Axios from "axios";


function App() {
  const [values, setValues] = useState();
  const [listCadastro, setListCadastro] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      nome: values.nome,
      email: values.email,
      data: values.data,
      cidade: values.cidade,
      endereço: values.endereço,
      telefone: values.telefone
    }).then((response) => {
      console.log(response);
    })
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListCadastro(response.data);
    });
  }, []);

  return (
    <div className="app-container">
      <div className="register--container">
        <h1 className='title'> Novo cadastro <span>Cliente</span></h1>
        <p className='paragrafh'>Preencha os dados do cadastro para acessar</p>

        <p className='principal'>Nome completo: </p>

        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          className="register--input"
          onChange={ handleChangeValues }
        />
        <hr className='linha' />

        <p className='principal'> Email: </p>

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="register--input"
          onChange={ handleChangeValues }
        />
        <hr className='linha' />


        <p className='principal'>Data de nascimento: </p>
        <input
          type="date"
          name="data"
          className="register--input"
          onChange={ handleChangeValues }
        />
        <hr className='linha' />

        <p className='principal'>Cidade:</p>
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          className="register--input"
          onChange={ handleChangeValues }
        />
        <hr className='linha' />

        <p className='principal'>
          Endereço:</p>
        <input
          type="text"
          name="endereço"
          placeholder="Endereço"
          className="register--input"
          onChange={ handleChangeValues }
        />
        <hr className='linha' />

        <p className='principal'>  Telefone:</p>
        <input
          type="tel"
          data-js="phone"
          name="telefone"
          placeholder="Telefone"
          className="register--input"
          maxLength='13'
          onChange={ handleChangeValues }
        />
        <hr className='linha' />

        <button className="container--button" onClick={ handleClickButton }>Cadastrar</button>
      </div>

      { typeof listCadastro !== "undefined" &&
        listCadastro.map((value) => {
          return <Card />
        }) }

    </div >
  );
}

export default App;
