import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();

  const [categorias, setCategorias] = useState([]);
  const titulosCategorias = categorias.map((categoria) => categoria.titulo);

  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=4W55nFDyIrc',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((response) => {
        setCategorias(response);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const categoriaEscolhida = categorias.find((categoria) => {
      return categoria.titulo === values.categoria;
    });

    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaEscolhida.id,
    })
      .then(() => {
        console.log('Cadastrado com sucesso!');
        history.push('/');
      });
  }

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={handleSubmit} action="">
        <FormField
          label="Título do vídeo"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="URL"
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          name="categoria"
          type="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={titulosCategorias}
        />

        <Button type="submit"> Cadastrar </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;
