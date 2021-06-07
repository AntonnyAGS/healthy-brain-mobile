import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

import { FlatList, View } from 'react-native';
import { useNavigation as useStackNavigation } from '@react-navigation/native';
import { font } from '../../theme/text';
import { blue } from '../../theme/colors';
import { Doctor } from '../../usecases/doctor';
import DoctorCard from '../../components/doctor-card/doctor-card';
import { GetDoctors } from '../../../domain/usecases/get-doctors';

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
  doctors: GetDoctors.Model[];
}

export default function FeedHome({
  useNavigation,
  doctors,
}: FeedProps): JSX.Element {
  const navigation = useNavigation();

  const stackNavigation = useStackNavigation();

  const handleOpenDrawer = () => {
    navigation.toggleDrawer();
  };

  const handleNavigateToDoctorPage = (doctor: Doctor) => {
    stackNavigation.navigate('Doctor', { doctor });
  };

  const renderItem = ({ item }: { item: GetDoctors.Model }) => (
    <DoctorCard
      onPress={handleNavigateToDoctorPage}
      doctor={item}
      containerStyle={{ marginTop: 16 }}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Container>
        <Icon name="menu" size={26} onPress={handleOpenDrawer} />
        <Title>Procure um médico para sua consulta online...</Title>
        <FlatList
          data={doctors}
          renderItem={renderItem}
          // eslint-disable-next-line no-underscore-dangle
          keyExtractor={item => item._id}
        />
      </Container>
    </SafeAreaView>
  );
}
