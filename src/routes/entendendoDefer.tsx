import { Route } from "react-router";
import Produtos, { pegaProdutos } from "../pages/entendendoDefer/produtosDefer";

const rotas = (
    <Route
        path="entendendoDefer"
        element={<Produtos />}
        loader={pegaProdutos}
    ></Route>
);

export default rotas;
