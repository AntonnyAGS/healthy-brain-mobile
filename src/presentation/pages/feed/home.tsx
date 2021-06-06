import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

import { FlatList, View } from 'react-native';
import { font } from '../../theme/text';
import { blue } from '../../theme/colors';
import { Doctor } from '../../usecases/doctor';
import DoctorCard from '../../components/doctor-card/doctor-card';

const Container = styled.View`
  padding: 24px;
  flex: 1;
`;

const Title = styled.Text`
  font-family: ${font.bold};
  font-size: 20px;
  margin-top: 16px;
`;

interface FeedProps {
  useNavigation: () => {
    toggleDrawer: () => void;
  };
}

const DATA: Doctor[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Dr. Marcos',
    category: 'Neuro',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Dra. Camila',
    category: 'Neuro',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Dr. Sérgio',
    category: 'Neuro',
  },
];

export default function FeedHome({ useNavigation }: FeedProps): JSX.Element {
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    navigation.toggleDrawer();
  };

  const renderItem = ({ item }: { item: Doctor }) => (
    <DoctorCard doctor={item} containerStyle={{ marginTop: 16 }} />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Container>
        <Icon name="menu" size={26} onPress={handleOpenDrawer} />
        <Title>Procure um médico para sua consulta online...</Title>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </Container>
    </SafeAreaView>
  );
}
