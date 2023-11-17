import React from "react";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

import "./App.css";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards-Container">
            <Card titulo="#13 - Mega" color="#b9006e">
                <Mega qtd={8}></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#e45f56">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8bad39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59232c">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: "Fernando" }} />
                <UsuarioInfo usuario={{}} />
                <UsuarioInfo />
            </Card>

            <Card titulo="#07 - Repetição Desafio" color="#3a9ad9">
                <ListaProdutos></ListaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#ff4c65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00c8f8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={5} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametros" color="#E8B71A">
                <ComParametro titulo={"Situação do Aluno"} aluno={"Pedro"} nota={9.3} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);
