import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={LogoImg} alt="Github Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/277032?s=200&v=4"
            alt="Img Perfil Github"
          />

          <div>
            <strong> TReste/teste </strong>
            <p>descricao repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong> 19092 </strong>
            <span> Stars </span>
          </li>
          <li>
            <strong> 19092 </strong>
            <span> Forks </span>
          </li>
          <li>
            <strong> 19092 </strong>
            <span> Issues abertas </span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="aeaeea">
          <div>
            <strong>full name</strong>
            <p>description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
