import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImg} alt="Github Logo" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="ae">
          <img
            src="https://avatars1.githubusercontent.com/u/37545464?s=460&u=89d123fda0fcc7f9a390a0c1015f3c002ecb181d&v=4"
            alt="teste"
          />
          <div>
            <strong> Rickson unform </strong>
            <p>Mais um projeto de listas de repositórios do github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
