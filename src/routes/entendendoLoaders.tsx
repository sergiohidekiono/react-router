import { Route } from "react-router-dom";
import Produtos, { pegaProdutos } from "../pages/entendendoLoaders/Produtos";
import VisualizarProduto, { pegaProduto } from "../pages/entendendoLoaders/visualizarProduto";

const rotas = (
    <Route path="entendendoLoaders">
        <Route index element={<Produtos />} loader={pegaProdutos} />
        <Route
            path=":id"
            element={<VisualizarProduto />}
            loader={pegaProduto}
        />
    </Route>
);

export default rotas;
