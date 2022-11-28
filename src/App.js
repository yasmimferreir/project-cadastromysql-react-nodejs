import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="register--container">
        <h1> Novo cadastro</h1>

        Nome completo:
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className="register--input"
        />

        Email:
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="register--input"
        />


        Data de nascimento:
        <input
          type="date"
          name="data"
          className="register--input"
        />

        Cidade:
        <input
          type="text"
          name="cidade"
          placeholder="cidade"
          className="register--input"
        />

        Endereço:
        <input
          type="text"
          name="endereço"
          placeholder="Endereço"
          className="register--input"
        />


        Telefone:
        <input
          type="number"
          name="endetelefoneeço"
          placeholder="Telefone"
          className="register--input"
        />










      </div>

    </div>
  );
}

export default App;
