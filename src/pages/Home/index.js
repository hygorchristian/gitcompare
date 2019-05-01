import React, { Component } from "react";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";
import axios from "axios";

import logo from "../../assets/img/logo.png";

export default class Home extends Component {
  state = {
    repositories: []
  };

  handleSubmit = e => {
    e.preventDefault();
    const repo = e.target.busca.value;
    this.buscarLinks(repo);
  };

  buscarLinks = async q => {
    this.setState({ repositories: [] });
    const google = axios.create({
      baseURL: "https://www.googleapis.com/customsearch/v1?"
    });
    const resposta = await google.get("", {
      params: {
        key: "AIzaSyBjF1EqgrOenlx0IXtwzPSfC2YMB6ibbpg", //api key
        q, //querue de busca
        cx: "012457673457585422072:mxkrwu-8eis", //contexto de busca - está configurado para buscar apenas no github
        num: 6 // quantidade de itens por busca
      }
    });
    const urls = resposta.data.items.map(item => {
      const arr = item.formattedUrl
        .replace("https://github.com/", "")
        .split("/");
      if (arr.length === 2) {
        const [owner, repo] = arr;
        this.buscarRepo(owner, repo);
      }
    });

    console.log(urls);
  };

  buscarRepo = async (owner, repo) => {
    const baseURL = `https://api.github.com/repos/${owner}/${repo}`;
    const api = axios.create({ baseURL });
    const resposta = await api.get();
    this.setState(state => ({
      repositories: [...state.repositories, resposta.data]
    }));
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
