import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarrosselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../CarrosselCardItem'
import CarrosselDestaque, { SLIDER_WIDTH_DESTAQUE, ITEM_WIDTH_DESTAQUE } from '../../CarrosselDestaque'
import axios from 'axios';
import { useEffect, useState } from 'react';

const CarrosselCards = ({ urlApi }) => {
  const [dataAnuncios, setDataAnuncios] = useState([]);
  const [dataDoacoes, setDataDoacoes] = useState([]);
  const [dataUltimosAdicionados, setDataUltimosAdicionados] = useState([]);
  const [dataProximos, setDataProximos] = useState([]);
  const [dataDestaques, setDataDestaques] = useState([]);

  useEffect(() => {
    if (!dataAnuncios.length) {
      getAnuncios();
    }
  });

  const getAnuncios = async () => {
    try {
      const resp = await axios.get(urlApi);
      setDataAnuncios(resp.data)
      if (resp.data) {
        getDoacoes(resp.data);
        getProximos(resp.data);
        getUltimosAdicionados(resp.data);
        getDestaques(resp.data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const getDoacoes = (data) => {
    const filtroDoacoes = data.filter(item => item.valor === 0);
    setDataDoacoes(filtroDoacoes);
  }

  const getUltimosAdicionados = (data) => {
    const filterUltimosAdicionados = data.filter(item => item.ano === 2017);
    setDataUltimosAdicionados(filterUltimosAdicionados);
  }

  const getDestaques = (data) => {
    const filterDestaques = data.filter(item => item.destaque === true);
    setDataDestaques(filterDestaques);
  }

  const getProximos = (data) => {
    const filterProximos = data.filter(item => item.instituicao === "UNICAP");
    setDataProximos(filterProximos);
  }

  return (
    <View>
      <Carousel
        data={dataDestaques}
        renderItem={CarrosselDestaque}
        sliderWidth={SLIDER_WIDTH_DESTAQUE}
        itemWidth={ITEM_WIDTH_DESTAQUE}
        useScrollView={true}
        loop={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplayInterval={5000}
      />
      <Text style={styles.title}>Próximos a você</Text>
      <Carousel
        data={dataProximos}
        renderItem={CarrosselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        loop={true}
      />
      <Text style={styles.title}>Doações</Text>
      <Carousel
        data={dataDoacoes}
        renderItem={CarrosselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        loop={true}
      />
      <Text style={styles.title}>Últimos adicionados</Text>
      <Carousel
        data={dataUltimosAdicionados}
        renderItem={CarrosselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        loop={true}
      />
      <Text style={styles.title}>Em alta</Text>
      <Carousel
        data={dataAnuncios}
        renderItem={CarrosselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        loop={true}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20
  }
});

export default CarrosselCards