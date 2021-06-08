import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

import { FlatList } from 'react-native';
import { font } from '../../theme/text';
import { blue } from '../../theme/colors';
import { GetConsults } from '../../../domain/usecases/get-consults';

import ConsultCard from '../../components/consult-card/consult-card';

const Container = styled.View`
  padding: 24px;
  flex: 1;
`;

const Title = styled.Text`
  font-family: ${font.bold};
  font-size: 20px;
  margin-top: 16px;
`;

export default function Consults({
  useNavigation,
  loadConsults,
}: ConsultsProps): JSX.Element {
  const navigation = useNavigation();

  const [consults, setConsults] = useState<GetConsults.Model[]>([]);

  const [refetch, setRefetch] = useState(false);

  const handleLoadConsults = useCallback(async () => {
    try {
      const result = await loadConsults.getAll();
      setConsults(result);
    } catch (err) {
      console.error(err);
    }
  }, [loadConsults]);

  useEffect(() => {
    handleLoadConsults();
  }, [handleLoadConsults, refetch]);

  const handleOpenDrawer = () => {
    navigation.toggleDrawer();
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: GetConsults.Model;
    index: number;
  }) => (
    <ConsultCard
      consult={item}
      name={`#${index + 1} - Minha Consulta`}
      containerStyle={{ marginTop: 16 }}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Container>
        <Icon name="menu" size={26} onPress={handleOpenDrawer} />
        <Title>Minhas consultas</Title>
        <FlatList
          data={consults}
          renderItem={renderItem}
          // eslint-disable-next-line no-underscore-dangle
          keyExtractor={item => item._id}
        />
      </Container>
    </SafeAreaView>
  );
}

interface ConsultsProps {
  useNavigation: () => {
    toggleDrawer: () => void;
  };
  loadConsults: GetConsults;
}
