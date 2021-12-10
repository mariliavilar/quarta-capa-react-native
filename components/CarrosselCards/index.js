import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarrosselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../CarrosselCardItem'
import CarrosselDestaque, { SLIDER_WIDTH_DESTAQUE, ITEM_WIDTH_DESTAQUE } from '../../CarrosselDestaque'
import axios from 'axios';
import { useEffect, useState } from 'react';

const CarrosselCards = ({ urlApi }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!data.length) {
      getAnuncios()
    }
  });

  const getAnuncios = async () => {
    try {
      const resp = await axios.get(urlApi);
      setData(resp.data)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <View>
      <Carousel
        data={data}
        renderItem={CarrosselDestaque}
        sliderWidth={SLIDER_WIDTH_DESTAQUE}
        itemWidth={ITEM_WIDTH_DESTAQUE}
        useScrollView={true}
      />
      <Text style={styles.title}>Próximos a você</Text>
      <Carousel
        data={data}
        renderItem={CarrosselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
      />
      <Text style={styles.title}>Doações</Text>
      <Carousel
        data={data}
        renderItem={CarrosselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
      />
      <Text style={styles.title}>Últimos adicionados</Text>
      <Carousel
        data={data}
        renderItem={CarrosselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
      />
      <Text style={styles.title}>Em alta</Text>
      <Carousel
        data={data}
        renderItem={CarrosselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
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