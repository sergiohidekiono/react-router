import { Route } from "react-router-dom";
import Produtos from "../pages/parametrosDeRota/Produto";
import Produto from "../components/parametrosDeRota/Produto";


const rotas = (
    <Route path="parametrosDeRota" element={<Produtos />}>
        <Route path=":nome/:preco" element={<Produto />} />
    </Route>
);

export default rotas;
