import React from 'react';
import './App.css';
//import InputMask from 'react-input-mask';
import { useState } from "react";


function App() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    console.log(values)
  };


  /* const Input = (props) => (
     <InputMask mask="(99) 99999-9999" value={ props.value } onChange={ props.onChange } />
   );*/

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

    </div >
  );
}

export default App;
