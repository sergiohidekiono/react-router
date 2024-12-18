import { Route } from "react-router-dom";
import Inicio from "../pages/shared/inicio";
import Sobre from "../pages/shared/sobre";
import ErroDoLoader from "../pages/lidandoComErrosDoLoader/erroDoLoader";

const links = [
    { url: "/lidandoComErrosDoLoader", text: "Início" },
    { url: "/lidandoComErrosDoLoader/sobre", text: "Sobre" },
];

const rotas = (
    <Route
        path="lidandoComerrosDoLoader"
        errorElement={
            <ErroDoLoader texto="Algo de errado não está certo" links={links} />
        }
    >
        <Route
            index
            element={<Inicio links={links} />}
            // errorElement={
            //     <ErroDoLoader
            //         texto="Não foi possível acessar Início"
            //         links={links}
            //     />
            // }
            loader={() => {
                throw new Error();
            }}
        />
        <Route
            path="sobre"
            element={<Sobre links={links} />}
            errorElement={
                <ErroDoLoader
                    texto="Não foi possível acessar Sobre"
                    links={links}
                />
            }
            loader={() => {
                throw new Error();
            }}
        />
    </Route>
);

export default rotas;
