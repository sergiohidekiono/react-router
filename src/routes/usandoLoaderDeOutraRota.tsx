import { json, Route } from "react-router-dom";
import Exibir from "../pages/usandoLoaderDeOutraRota/exibir";
import Editar from "../pages/usandoLoaderDeOutraRota/editar";

function dadosLoader() {
    return json({ nome: "Marcos", idade: 12 } as any, {
        status: 200,
    });
}

const rotas = (
    <Route path="usandoLoaderDeOutraRota" id="loaderRotaPai"loader={dadosLoader}>
        <Route index element={<Exibir />}></Route>
        <Route path="editar" element={<Editar />}></Route>
    </Route>
);

export default rotas;
