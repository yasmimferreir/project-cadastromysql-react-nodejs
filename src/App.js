//import { useState } from 'react';
import './App.css';
import InputMask from 'react-input-mask';


function App() {
  const Input = (props) => (
    <InputMask mask="(99) 99999-9999" value={ props.value } onChange={ props.onChange } />
  );

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
        />
        <hr className='linha' />

        <p className='principal'> Email: </p>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="register--input"
        />
        <hr className='linha' />


        <p className='principal'>Data de nascimento: </p>
        <input
          type="date"
          name="data"
          className="register--input"
        />
        <hr className='linha' />

        <p className='principal'>Cidade:</p>
        <input
          type="text"
          name="cidade"
          placeholder="cidade"
          className="register--input"
        />
        <hr className='linha' />

        <p className='principal'>
          Endereço:</p>
        <input
          type="text"
          name="endereço"
          placeholder="Endereço"
          className="register--input"
        />
        <hr className='linha' />

        <p className='principal'>  Telefone:</p>
        <Input
          type="tel"
          data-js="phone"
          name="telefone"
          placeholder="Telefone"
          className="register--input"
          maxlength='13'
        />
        <hr className='linha' />

        <button className='container--button'>Cadastrar</button>
      </div>

    </div>
  );
}

export default App;
