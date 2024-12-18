import { useRouteError } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function ErroDeRota(props) {
    const erro: any = useRouteError();
    // erro.data acessa a mensagem se foi lançado uma resposta
    // erro.message acessa a mensagem se foi lançado uma resposta
    const mensagem = erro.message ? erro.message : erro.data;
    return (
        <Pagina
            titulo="Houve um problema"
            descricao={mensagem}
            links={props.links}
        ></Pagina>
    );
}
