import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Animated,
  FlatList,
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { ExpandingDot } from 'react-native-animated-pagination-dots';
import styled from 'styled-components/native';

import HomeCover from '../home-cover/home-cover';

import GirlSittingOnBookSvg from '../svg/girl-sitting-on-book';
import GirlSittingOnChairSvg from '../svg/girl-sitting-on-chair';
import GirlWithBooksSvg from '../svg/girl-stand-with-books';
import GirlWithNotebookSvg from '../svg/girl-with-notebook';

type HomeStepperItem = {
  key: string;
  description: string;
};

const Container = styled.View`
  flex: 1;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  text: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  flatList: {
    flex: 1,
    backgroundColor: 'red',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 70,
  },
});

export default function HomeStepper(): JSX.Element {
  const navigation = useNavigation();

  const keySvgMap: Record<string, JSX.Element> = {
    '1': <GirlSittingOnBookSvg />,
    '2': <GirlSittingOnChairSvg />,
    '3': <GirlWithBooksSvg />,
    '4': <GirlWithNotebookSvg />,
  };

  const sliderData: HomeStepperItem[] = [
    {
      key: '1',
      description:
        'Conectamos os pacientes aos seus psicólogos, promovendo controle completo em todo tratamento proporcionando saúde e bem-estar para todos.',
    },
    {
      key: '2',
      description:
        'Saiba lidar com os ataques de pânico, crises e a ansiedade no momento em que elas surgem.',
    },
    {
      key: '3',
      description:
        'com exercícios, vídeos, matérias e consultas emergênciais. Cuidar da saúde física e mental é de grande importancia.',
    },
    {
      key: '4',
      description:
        'Estudos comprovam que melhoram as noites de sono e o desempenho tanto nos estudos quanto na vida profissional.',
    },
  ];

  const handleToSelector = () => {
    navigation.navigate('HomeSelector');
  };

  const { width } = useWindowDimensions();

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const keyExtractor = (item: HomeStepperItem) => item.key;

  const renderItem = ({ item }: { item: HomeStepperItem }) => {
    return (
      <View style={[styles.itemContainer, { width }]}>
        <HomeCover
          text={item.description}
          showNextButton={item.key === '4'}
          onPressButton={handleToSelector}
        >
          {keySvgMap[item.key]}
        </HomeCover>
      </View>
    );
  };

  return (
    <Container>
      <FlatList
        data={sliderData}
        keyExtractor={keyExtractor}
        horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          },
        )}
        pagingEnabled
        decelerationRate="normal"
        scrollEventThrottle={16}
      />
      <View>
        <ExpandingDot
          data={sliderData}
          expandingDotWidth={30}
          scrollX={scrollX}
          inActiveDotColor="#347af0"
          activeDotColor="#347af0"
          inActiveDotOpacity={0.5}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 3,
          }}
          containerStyle={{
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            width: '100%',
            left: 32,
          }}
        />
      </View>
    </Container>
  );
}
