import { useLoaderData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function Consulta() {
    const info = useLoaderData();
    console.log(info);
    // return <Pagina titulo="Resultado da Consulta">{info}</Pagina>;
}

export async function loaderConsulta() {
    const dados = await fetch(`https://fakestoreapi.com/products/1`);
    // const resp = new Response("ola da response", { status: 200 }); // Exemplo de criar um response
    // throw new Response('Houve um problema') // Exemplo de response de ERRO
    return dados;
}
