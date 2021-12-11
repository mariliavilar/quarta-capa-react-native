export const carregaItens = async (urlApi) =>
    await fetch(urlApi)
        .then((res) => res.json())
        .catch((e) => console.log(e));

