import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/9537486?s=460&u=536fa6bb30f246a1bfac6a847a3a562eb69461f2&v=4"
            alt="Kelwy Oliveira"
          />
          <div>
            <strong>kelwys/nlw4-moveit</strong>
            <p>Project developed with ReactJS | Never stopt Learning</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/9537486?s=460&u=536fa6bb30f246a1bfac6a847a3a562eb69461f2&v=4"
            alt="Kelwy Oliveira"
          />
          <div>
            <strong>kelwys/nlw4-moveit</strong>
            <p>Project developed with ReactJS | Never stopt Learning</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/9537486?s=460&u=536fa6bb30f246a1bfac6a847a3a562eb69461f2&v=4"
            alt="Kelwy Oliveira"
          />
          <div>
            <strong>kelwys/nlw4-moveit</strong>
            <p>Project developed with ReactJS | Never stopt Learning</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
