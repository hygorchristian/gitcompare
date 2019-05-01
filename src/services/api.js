import axios from "axios";

export const buscarLinks = async (q, itensPorBusca) => {
  const google = axios.create({
    baseURL: "https://www.googleapis.com/customsearch/v1?"
  });
  const resposta = await google.get("", {
    params: {
      key: "AIzaSyBjF1EqgrOenlx0IXtwzPSfC2YMB6ibbpg", //api key
      q, //query de busca
      cx: "012457673457585422072:mxkrwu-8eis", //contexto de busca - está configurado para buscar apenas no github
      num: itensPorBusca // quantidade de itens por busca
    }
  });

  const items = resposta.data.items;

  if (items) {
    const urls = items.map(item => {
      const arr = item.formattedUrl
        .replace("https://github.com/", "")
        .split("/");
      if (arr.length === 2) {
        return arr;
      }
    });

    return Promise.resolve(urls.filter(item => item));
  } else {
    return Promise.reject("Não há itens!");
  }
};

export const buscarRepo = async (owner, repo) => {
  const baseURL = `https://api.github.com/repos/${owner}/${repo}`;
  const api = axios.create({ baseURL });
  const resposta = await api.get();

  return Promise.resolve(resposta.data);
};
