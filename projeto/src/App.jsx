import { useState } from 'react';
import './App.css';
import logoVitoria from './assets/logo.png'; 

function App() {
  const [elenco, setElenco] = useState([]);
  const [formData, setFormData] = useState({
    nome: '', origem: '', atributo: '', minibio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const salvarNoElenco = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(v => v === "")) return alert("Preencha tudo, Nego!");
    
    setElenco([...elenco, { ...formData, id: Date.now() }]);
    setFormData({ nome: '', origem: '', atributo: '', minibio: '' });
  };

  const removerCraque = (id) => setElenco(elenco.filter(c => c.id !== id));

  return (
    <div className="portal-container">
      <header className="vitoria-header">
        <img src={logoVitoria} alt="Logo Vitória" className="logo-img" />
        <h1>SOU NEGO</h1>
        <p className="subtitle">GESTÃO DINÂMICA DE ELENCO</p>
      </header>

      <main className="main-content">
        <section className="cadastro-section">
          <form className="card-cadastro" onSubmit={salvarNoElenco}>
            <h2>CADASTRAR CRAQUE</h2>
            <input type="text" name="nome" placeholder="NOME E FUNÇÃO" value={formData.nome} onChange={handleChange} />
            <div className="row">
              <input type="text" name="origem" placeholder="ORIGEM" value={formData.origem} onChange={handleChange} />
              <input type="text" name="atributo" placeholder="ATRIBUTO PRINCIPAL" value={formData.atributo} onChange={handleChange} />
            </div>
            <textarea name="minibio" placeholder="MINIBIO (RESUMO DE 2 LINHAS)" value={formData.minibio} onChange={handleChange} maxLength="150" />
            <button type="submit">SALVAR NO ELENCO</button>
          </form>
        </section>

        <section className="lista-section">
          <h2 className="titulo-lista">ELENCO ATUALIZADO</h2>
          <div className="grid-elenco">
            {elenco.map(c => (
              <div key={c.id} className="craque-card">
                <div className="card-topo"><h3>{c.nome.toUpperCase()}</h3></div>
                <div className="card-corpo">
                  <p><strong>ORIGEM:</strong> {c.origem.toUpperCase()}</p>
                  <p><strong>ATRIBUTO:</strong> {c.atributo.toUpperCase()}</p>
                  <div className="bio-container">{c.minibio}</div>
                </div>
                <button className="btn-remover" onClick={() => removerCraque(c.id)}>REMOVER</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;