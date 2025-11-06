import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import Sujeito from "./components/Sujeito";
import Select from "./components/Select";

function App() {
  const [sujeitos, setSujeitos] = useState([]);
  const [nomeSujeito, setNomeSujeito] = useState('');
  const [idExperimentoSujeito, setIdExperimentoSujeito] = useState('');
  const [nascimentoSujeito, setNascimentoSujeito] = useState('');
  const [classificacaoSujeito, setClassificacaoSujeito] = useState('');
  const [statusSujeito, setStatusSujeito] = useState('');

  const addSujeito = (event) => {
    event.preventDefault();

    if (nomeSujeito === '' || idExperimentoSujeito === '' || nascimentoSujeito === '') return;

    if (sujeitos.some((s) => s.idExperimento === idExperimentoSujeito)) {
      alert('Esse ID-Experimento já foi cadastrado');
      limparCampos();
      return;
    }

    const ids = sujeitos.map(s => s.id);
    const novoId = ids.length > 0 ? Math.max(...ids) + 1 : 1;

    const novoSujeito = {
      id: novoId,
      nome: nomeSujeito,
      idExperimento: idExperimentoSujeito,
      nascimento: nascimentoSujeito,
      classificacao: classificacaoSujeito,
      status: statusSujeito
    };

    setSujeitos([...sujeitos, novoSujeito]);
    limparCampos();
    console.log(novoSujeito);
  };

  const deletarSujeito = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este sujeito?")) {
      setSujeitos(sujeitos.filter((s) => s.id !== id));
    }
  }

  const limparCampos = () => {
    setNomeSujeito('');
    setIdExperimentoSujeito('');
    setNascimentoSujeito('');
  };

  return (
    <div className="App container my-2">
      <Header />

      {/* Seção de Sujeitos Cadastrados */}
      {sujeitos.length > 0 && (
        <div className="card shadow rounded-0 border-0 mb-4">
          <div className="card-body">
            <h5 className="card-title mb-4">
              📊 Sujeitos Cadastrados ({sujeitos.length})
            </h5>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">ID-Experimento</th>
                    <th scope="col">Data de Nascimento</th>
                    <th scope="col">Classificação</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {sujeitos.map((s) => (
                    <Sujeito key={s.id} sujeito={s} handler={() => deletarSujeito(s.id)} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Seção de Cadastro */}
      <div className="card shadow rounded-0 border-0">
        <div className="card-body">
          <h5 className="card-title mb-4">➕ Cadastro de Novos Sujeitos</h5>

          <form onSubmit={addSujeito}>
            <Input
              label="Nome Completo"
              placeholder="Digite o nome do sujeito"
              type="text"
              name="nome"
              value={nomeSujeito}
              onChange={(e) => setNomeSujeito(e.target.value)}
            />
            <Input
              label="ID-Experimento"
              placeholder="001, 011, 008..."
              type="text"
              name="idExperimento"
              value={idExperimentoSujeito}
              onChange={(e) => setIdExperimentoSujeito(e.target.value)}
            />
            <Input
              label="Data de Nascimento"
              placeholder=""
              type="date"
              name="data_nasc"
              value={nascimentoSujeito}
              onChange={(e) => setNascimentoSujeito(e.target.value)}
            />

            <Select
              label="Classificação"
              name="classificacao"
              value={classificacaoSujeito}
              onChange={(e) => setClassificacaoSujeito(e.target.value)}
              options={["Classe I - Telecinese Básica", "Classe II - Telecinese Avançada", "Classe III - Poderes Múltiplos", "Classe IV - Poder Psíquico Extremo", "Sem Habilidades", "Classificação Pendente"]}
            />

            <Select
              label="Status"
              name="status"
              value={statusSujeito}
              onChange={(e) => setStatusSujeito(e.target.value)}
              options={["Em Isolamento", "Sob Teste", "Treinamento Telecinético", "Observação", "Fuga", "Em Coma", "Liberado"]}
            />

            <button type="submit" className="btn btn-primary mt-3">
              Adicionar
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
