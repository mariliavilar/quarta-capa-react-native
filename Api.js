export const carregaItens = (urlApi) => () =>
fetch(urlApi).then((res) => res.json());