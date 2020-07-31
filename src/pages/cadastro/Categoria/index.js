import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form action="">
                <label htmlFor="">Nome da categoria
                    <input type="text"/></label>
            </form>

            <Link to="/">
                Ir para home
            </Link>

        </PageDefault>
    )
}

export default CadastroCategoria;