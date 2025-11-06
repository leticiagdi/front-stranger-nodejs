function Sujeito({ sujeito, handler }) {
    const getStatusClass = (status) => {
        if (status === "Em Coma" || status === "Fuga") {
            return "text-danger fw-bold";
        }
        return "";
    };

    return (
        <tr>
            <th scope="row">{sujeito.id}</th>
            <td>{sujeito.nome}</td>
            <td>{sujeito.idExperimento}</td>
            <td>{sujeito.nascimento}</td>
            <td>{sujeito.classificacao}</td>
            <td className={getStatusClass(sujeito.status)}>{sujeito.status}</td>
            <td>
                <button onClick={handler} className="btn btn-warning">
                    Deletar
                </button>
            </td>
        </tr>
    )
}

export default Sujeito