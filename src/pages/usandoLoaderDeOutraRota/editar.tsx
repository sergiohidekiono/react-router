import { Link, useRouteLoaderData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";
import { useState } from "react";

export default function Editar() {
    const dados: any = useRouteLoaderData("loaderRotaPai");
    const [nome, setNome] = useState(dados.nome);
    const [idade, setIdade] = useState(dados.idade);
    return (
        <Pagina titulo="Editar">
            <input
                type="text"
                value={nome}
                onInput={(e) => setNome(e.target.value)}
                className="p-2 m-2 text-black"
            />
            <input
                type="number"
                value={idade}
                onInput={(e) => setIdade(e.target.value)}
                className="p-2 m-2 text-black"
            />
            <Link
                to=".."
                className="hover:underline hover:text-orange-500"
            ></Link>
        </Pagina>
    );
}
