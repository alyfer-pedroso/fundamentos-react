import React from "react";

import _if, { _else } from "./If";

export default (props) => {
    const usuario = props.usuario || {};

    return (
        <div>
            {/* <_if test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </_if>
            <_if test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Amigao</strong>!
            </_if> */}

            <_if test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <_else>
                    Seja bem vindo <strong>Amigao</strong>!
                </_else>
            </_if>
        </div>
    );
};
