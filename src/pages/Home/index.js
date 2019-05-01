import React, { Component } from "react";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";
import { buscarLinks, buscarRepo } from "../../services/api";

import logo from "../../assets/img/logo.png";

export default class Home extends Component {
  state = {
    repositories: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ repositories: [] }); //limpando repositorios a cada nova busca
    const termos = e.target.busca.value;
    const urls = await buscarLinks(termos, 10);

    urls.forEach(async url => {
      const [owner, repositoryName] = url;
      const repository = await buscarRepo(owner, repositoryName);
      this.setState(state => ({
        repositories: [...state.repositories, repository]
      }));
    });
  };

  render() {
    const { repositories } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form action="" onSubmit={this.handleSubmit}>
          <input type="text" name="busca" placeholder="Ex: react native maps" />
          <button type="submit">OK</button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
