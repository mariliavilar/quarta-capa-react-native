import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../CarouselCardItem'
import CarouselDestaque, { SLIDER_WIDTH_DESTAQUE, ITEM_WIDTH_DESTAQUE } from '../../CarrosselDestaque'
import { carregaItens } from "../../Api";
import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect } from 'react';

const CarouselCards = ({ urlApi }) => {

  useEffect(() => {
    console.log('teste')
    getData()
  });

  const getData = async () => {
    try {
      const resp = await axios.get(urlApi);
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <View>
      {/* <Carousel
        data={data}
        renderItem={CarouselDestaque}
        sliderWidth={SLIDER_WIDTH_DESTAQUE}
        itemWidth={ITEM_WIDTH_DESTAQUE}
        useScrollView={true}
      />
      <Text style={styles.title}>Próximos a você</Text>
      <Carousel
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
      />
      <Text style={styles.title}>Doações</Text>
      <Carousel
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
      />
      <Text style={styles.title}>Últimos adicionados</Text>
      <Carousel
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
      />
      <Text style={styles.title}>Em alta</Text>
      <Carousel
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
      /> */}
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

export default CarouselCards