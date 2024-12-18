import { defer, useLoaderData } from "react-router-dom";
import { Suspense, Await } from "react";
import Pagina from "../../components/template/Pagina";

export default function Produtos() {
    const dadosLoader: any = useLoaderData();

    const produtosEmItens = (produtos: any[]) => {
        console.log("PRODUTOS: ", produtos);
        const produtosFormatados = produtos.map((produto) => {
            <li
                className={`text-gray-300 text-center
            border-gray-300 border-solid border-2
            rounded-md p-3 m-2
            hover:text-orange-500 hover:border-orange-500`}
                key={produto.id}
            >
                O produto {produto.id} de nome {produto.title} custa R$
                {produto.price}
            </li>;
        });
        return produtosFormatados;
    };

    return (
        <Pagina titulo="Produtos Disponíveis">
            <ul className="p-0 overflow-clip">
                <Suspense>
                    <Await resolve={dadosLoader.produtos}>
                        {(produtos) => {
                            console.log("PRODUTOS: ", produtos);
                            return produtosEmItens(produtos);
                        }}
                    </Await>
                </Suspense>
            </ul>
        </Pagina>
    );
}

async function prepararProdutos() {
    const dados = await fetch("https://fakestoreapi.com/products?limit=10");
    const dadosJSON = await dados.json();
    return dadosJSON;
}

export async function pegaProdutos() {
    return defer({ produtos: prepararProdutos() });
}
