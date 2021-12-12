export const carregaItens = async (urlApi) =>
    await fetch(urlApi)
        .then((res) => res.json())
        .catch((e) => console.log(e));

export const carregaItensGet = (urlApi) => () =>
    fetch(urlApi, {
        method: 'GET'
    }).then((res) => res.json());