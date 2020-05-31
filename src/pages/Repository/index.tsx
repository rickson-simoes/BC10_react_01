import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import LogoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_cout: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState(null);
  const [issues, setIssues] = useState([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      console.log(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      console.log(response.data);
    });
  }, [params.repository]);

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
