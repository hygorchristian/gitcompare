import React, { Component } from "react";
import { Container, Form, Error } from "./styles";
import CompareList from "../../components/CompareList";
import { buscarLinks, buscarRepo } from "../../services/api";

import logo from "../../assets/img/logo.png";

export default class Home extends Component {
  state = {
    repositories: [],
    error: null,
    loading: false
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ repositories: [], error: null, loading: true }); //limpando repositorios a cada nova busca
    const termos = e.target.busca.value;

    try {
      const urls = await buscarLinks(termos, 10);

      if (urls.length > 0) {
        urls.forEach(async url => {
          const [owner, repositoryName] = url;
          const repository = await buscarRepo(owner, repositoryName);
          this.setState(state => ({
            repositories: [...state.repositories, repository]
          }));
        });
      } else {
        this.setState({ error: "Não há itens!" });
      }
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { repositories, error, loading } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form action="" onSubmit={this.handleSubmit}>
          <input type="text" name="busca" placeholder="Ex: react native maps" />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : "OK"}
          </button>
        </Form>
        {error && <Error>{error}</Error>}
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
