import React from 'react'
import { View, Text, StyleSheet, FlatList } from "react-native"
import AnunciosCardItem from '../../AnunciosCardItem'
import axios from 'axios';
import { useEffect, useState } from 'react';

const AnunciosCard = ({ urlApi }) => {
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
          <FlatList
            data={data}
            renderItem={AnunciosCardItem}
        />
        </View>
  )
}

export default AnunciosCard