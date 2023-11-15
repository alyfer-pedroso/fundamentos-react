import React from "react";

import produtos from "../../data/produtos";

import "./ListaProdutos.css";

export default (props) => {
    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
                    <td>{produto.id}</td>
                    <td>{produto.produto}</td>
                    <td>R$ {produto.preco.toFixed(2)}</td>
                </tr>
            );
        });
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th colspan="3">Lista de Produtos</th>
                    </tr>
                </thead>
                <tbody>
                    <colgroup colspan="3"></colgroup>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    );
};
