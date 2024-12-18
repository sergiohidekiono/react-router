import { Route } from "react-router-dom";
import MenuNavLink from "../components/navegacaoComNavLink/Menu";
import Contato from "../pages/shared/contato";
import Inicio from "../pages/shared/inicio";
import Sobre from "../pages/shared/sobre";

const rotas = (
    <Route path="navegacaoComNavLink">
        <Route index element={<Inicio menu={<MenuNavLink />} />} />
        <Route path="sobre" element={<Sobre menu={<MenuNavLink />} />} />
        <Route path="contato" element={<Contato menu={<MenuNavLink />} />} />
    </Route>
);

export default rotas;
