import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useMemo, useState } from 'react';
import { ImageBackground, Platform, SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';

import styled from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

import { Button, Spacer } from '../../components';
import BottomDialog from '../../components/bottom-dialog/bottom-dialog';
import { blue, grey } from '../../theme/colors';
import { font } from '../../theme/text';
import { Doctor } from '../../usecases/doctor';
import { CreateConsult } from '../../../domain/usecases/create-consult';

const Container = styled.View`
  flex: 1;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  margin-top: -40px;
  background-color: white;

  padding: 24px;
`;

const Title = styled.Text`
  font-size: 26px;
  font-family: ${font.bold};
`;

const ButtonTitle = styled.Text`
  font-family: ${font.bold};
  font-size: 18px;

  color: white;
`;

const About = styled.Text`
  font-family: ${font.bold};
  font-size: 18px;

  margin-top: 32px;
`;

const AboutText = styled.Text`
  font-family: ${font.medium};
  font-size: 18px;

  margin-top: 8px;
`;

const Category = styled.Text`
  font-family: ${font.medium};
  font-size: 18px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ConsultTitle = styled.Text`
  font-size: 18px;
  font-family: ${font.medium};
`;

const SelectDate = styled.Pressable`
  padding: 8px 24px;

  background-color: ${grey['300']};

  border-radius: 5px;

  margin-top: 16px;
`;

const SelectDateText = styled.Text`
  font-family: ${font.medium};
  font-size: 16px;
`;

const SelectTime = styled.Pressable`
  padding: 8px 24px;

  background-color: ${grey['300']};

  border-radius: 5px;

  margin-top: 16px;

  flex: 1;
`;

const SelectTimeText = styled.Text`
  font-family: ${font.medium};
  font-size: 16px;
`;

const TimeContainer = styled.View`
  flex-direction: row;

  width: 100%;
`;

export default function DoctorScreen({
  createConsult,
}: DoctorProps): JSX.Element {
  const navigation = useNavigation();
  const { params } = useRoute();

  const { doctor } = params as DoctorParams;

  const [showDialog, setShowDialog] = useState(false);

  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState<null | Date>(null);

  const [showBeginPicker, setShowBeginPicker] = useState(false);
  const [begin, setBegin] = useState<null | Date>(null);

  const [showEndPicker, setShowEndPicker] = useState(false);
  const [end, setEnd] = useState<null | Date>(null);

  const handleBack = () => {
    navigation.goBack();
  };

  const onChange = (_: unknown, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onChangeBegin = (_: unknown, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowBeginPicker(Platform.OS === 'ios');
    setBegin(currentDate);
  };

  const onChangeEnd = (_: unknown, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowEndPicker(Platform.OS === 'ios');
    setEnd(currentDate);
  };

  const onCloseModal = () => {
    setDate(null);
    setBegin(null);
    setEnd(null);
    setShowDialog(false);
  };

  const isValidTime = useMemo(() => {
    if (!end || !begin) {
      return false;
    }

    const isAfter = dayjs(end).isAfter(begin);

    return isAfter;
  }, [begin, end]);

  const [loading, setLoading] = useState(false);

  const handleCreateConsult = async () => {
    if (!begin || !end || !date) {
      return;
    }

    setLoading(true);
    try {
      const beginHours = dayjs(begin).get('hours');
      const beginMinutes = dayjs(begin).get('minutes');

      const beginDate = dayjs(date)
        .set('hours', beginHours)
        .set('minutes', beginMinutes)
        .toDate();

      const endHours = dayjs(end).get('hours');
      const endMinutes = dayjs(end).get('minutes');

      const endDate = dayjs(date)
        .set('hours', endHours)
        .set('minutes', endMinutes)
        .toDate();

      await createConsult.create({
        consultDateTime: beginDate,
        endDateTime: endDate,
        // eslint-disable-next-line no-underscore-dangle
        healthProfessionalId: doctor._id,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: blue['450'] }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ImageBackground
          // eslint-disable-next-line global-require
          source={require('../../../../public/images/doctors-in-room.png')}
          resizeMode="cover"
          style={{ height: 200 }}
        />
        <Container>
          <Header>
            <Icon
              name="arrow-left"
              size={26}
              onPress={handleBack}
              style={{ marginRight: 16 }}
            />
            <View>
              <Title>{doctor.name}</Title>
              <Category>{doctor.healthArea}</Category>
            </View>
          </Header>
          <About>Sobre o doutor</About>
          <AboutText>{doctor.description}</AboutText>

          <Button onPress={() => setShowDialog(true)} style={{ marginTop: 32 }}>
            <ButtonTitle>Solicitar consulta</ButtonTitle>
          </Button>
          <Spacer />
        </Container>
        <BottomDialog
          transparent
          visible={showDialog}
          animationType="fade"
          onRequestClose={onCloseModal}
        >
          <>
            <ConsultTitle>Marcar consulta</ConsultTitle>
            <SelectDate onPress={() => setShowPicker(true)}>
              <SelectDateText>
                {date ? dayjs(date).format('DD/MM/YYYY') : 'Selecione o dia'}
              </SelectDateText>
            </SelectDate>
            <TimeContainer>
              <SelectTime
                style={{ marginRight: 16 }}
                onPress={() => setShowBeginPicker(true)}
              >
                <SelectTimeText>
                  {begin ? dayjs(begin).format('HH:mm') : 'Selecione o inicio'}
                </SelectTimeText>
              </SelectTime>
              <SelectTime onPress={() => setShowEndPicker(true)}>
                <SelectTimeText>
                  {end ? dayjs(end).format('HH:mm') : 'Selecione o fim'}
                </SelectTimeText>
              </SelectTime>
            </TimeContainer>
            <Button
              onPress={() => console.log('oi')}
              style={{ marginTop: 16 }}
              disabled={!date || !isValidTime}
            >
              <ButtonTitle>Solicitar</ButtonTitle>
            </Button>
          </>
        </BottomDialog>
        {showPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour
            display="default"
            onChange={onChange}
          />
        )}
        {showBeginPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={
              begin ||
              dayjs(date || new Date())
                .set('hour', 8)
                .set('minutes', 0)
                .toDate()
            }
            mode="time"
            is24Hour
            display="default"
            onChange={onChangeBegin}
          />
        )}
        {showEndPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={
              end ||
              dayjs(date || new Date())
                .set('hour', 9)
                .set('minutes', 0)
                .toDate()
            }
            mode="time"
            is24Hour
            display="default"
            onChange={onChangeEnd}
          />
        )}
      </SafeAreaView>
    </>
  );
}

interface DoctorProps {
  createConsult: CreateConsult;
}

interface DoctorParams {
  doctor: Doctor;
}
