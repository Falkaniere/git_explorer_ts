import React from 'react';
import { FiChevronRight }  from 'react-icons/fi'

import logoImage from '../../assets/logo.svg';
import {Title, Form, Repositories} from './style'

const Dashboard: React.FC = () => {
  return (
    <>
       <img src={logoImage} alt="Github explorer" />
      <Title>Explore repositorios no Github</Title>

      <Form action="" >
        <input placeholder="Digite aqui o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
           src="https://avatars0.githubusercontent.com/u/39073602?s=460&u=f705940c1955c045b09f57c3779f3eb8a80441c3&v=4"
           alt="Jonatas"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição de um repositorio dasda asdansdasd. asf aslknd as</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
           src="https://avatars0.githubusercontent.com/u/39073602?s=460&u=f705940c1955c045b09f57c3779f3eb8a80441c3&v=4"
           alt="Jonatas"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição de um repositorio dasda asdansdasd. asf aslknd as</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
           src="https://avatars0.githubusercontent.com/u/39073602?s=460&u=f705940c1955c045b09f57c3779f3eb8a80441c3&v=4"
           alt="Jonatas"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição de um repositorio dasda asdansdasd. asf aslknd as</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );

};

export default Dashboard;
