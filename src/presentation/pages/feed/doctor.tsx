import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useMemo, useState } from 'react';
import { ImageBackground, Platform, SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';

import styled from 'styled-components/native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

import { Button, Spacer } from '../../components';
import BottomDialog from '../../components/bottom-dialog/bottom-dialog';
import { blue, grey } from '../../theme/colors';
import { font } from '../../theme/text';
import { Doctor } from '../../usecases/doctor';
import { CreateConsult } from '../../../domain/usecases/create-consult';
import Dialog from '../../components/dialog/dialog';
import BottomCard from '../../components/bottom-card/bottom-card';

const Container = styled.View`
  flex: 1;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  margin-top: -40px;
  background-color: white;

  padding: 16px;
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
  padding: 16px;

  background-color: ${grey['300']};

  border-radius: 5px;

  margin-top: 16px;
`;

const SelectDateText = styled.Text`
  font-family: ${font.medium};
  font-size: 16px;
`;

const SelectTime = styled.Pressable`
  padding: 16px;

  justify-content: center;
  align-items: center;

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

type DatePickerProps = {
  visible: boolean;
  value: Date;
  maximumDate?: Date;
  minimumDate?: Date;
  mode?: 'time' | 'datetime';
  onChange: (event: Event, date?: Date) => void;
  onRequestClose: () => void;
};

const DatePicker: React.FC<DatePickerProps> = ({
  visible,
  value,
  maximumDate,
  minimumDate,
  onChange,
  mode,
  onRequestClose,
}) => {
  if (!visible) {
    return null;
  }

  return Platform.OS === 'ios' ? (
    <BottomDialog visible={visible} transparent onRequestClose={onRequestClose}>
      <DateTimePicker
        value={value}
        display="spinner"
        mode={mode}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        testID="dateTimePicker"
        onChange={onChange}
      />
    </BottomDialog>
  ) : (
    <DateTimePicker
      display="spinner"
      value={value}
      mode={mode}
      maximumDate={maximumDate}
      minimumDate={minimumDate}
      testID="dateTimePicker"
      onChange={onChange}
    />
  );
};

export default function DoctorScreen({
  createConsult,
}: DoctorProps): JSX.Element {
  const navigation = useNavigation();
  const { params } = useRoute();

  const { doctor } = params as DoctorParams;

  const [showDialog, setShowDialog] = useState(false);

  const [showPicker, setShowPicker] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const [showBeginPicker, setShowBeginPicker] = useState(false);
  const [begin, setBegin] = useState<Date>(
    dayjs().set('hour', 8).set('minute', 0).toDate(),
  );

  const [showEndPicker, setShowEndPicker] = useState(false);
  const [end, setEnd] = useState<Date>(
    dayjs().set('hour', 9).set('minute', 0).toDate(),
  );

  const handleBack = () => {
    navigation.goBack();
  };

  const handleOpenDatePicker = () => {
    if (Platform.OS === 'ios') {
      setShowDialog(false);
    }
    setShowPicker(true);
  };

  const handleOpenBeginPicker = () => {
    if (Platform.OS === 'ios') {
      setShowDialog(false);
    }
    setShowBeginPicker(true);
  };

  const handleOpenEndPicker = () => {
    if (Platform.OS === 'ios') {
      setShowDialog(false);
    }
    setShowEndPicker(true);
  };

  const onChange = (_: unknown, selectedDate: Date | undefined) => {
    if (!selectedDate) {
      return;
    }
    setShowPicker(Platform.OS === 'ios');
    setCurrentDate(selectedDate);
  };

  const requestDateClose = () => {
    if (Platform.OS === 'ios') {
      setShowDialog(true);
    }
    setShowPicker(false);
  };

  const requestBeginClose = () => {
    if (Platform.OS === 'ios') {
      setShowDialog(true);
    }
    setShowBeginPicker(false);
  };

  const requestEndClose = () => {
    if (Platform.OS === 'ios') {
      setShowDialog(true);
    }
    setShowEndPicker(false);
  };

  const onChangeBegin = (_: unknown, selectedDate: Date | undefined) => {
    if (!selectedDate) {
      return;
    }
    setShowBeginPicker(Platform.OS === 'ios');
    setBegin(selectedDate);
  };

  const onChangeEnd = (_: unknown, selectedDate: Date | undefined) => {
    if (!selectedDate) {
      return;
    }
    setShowEndPicker(Platform.OS === 'ios');
    setEnd(selectedDate);
  };

  const onCloseModal = () => {
    setCurrentDate(new Date());
    setBegin(dayjs().set('hour', 8).set('minute', 0).toDate());
    setEnd(dayjs().set('hour', 9).set('minute', 0).toDate());
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
    if (!begin || !end || !currentDate) {
      return;
    }

    setLoading(true);
    try {
      const beginHours = dayjs(begin).get('hours');
      const beginMinutes = dayjs(begin).get('minutes');

      const beginDate = dayjs(currentDate)
        .set('hours', beginHours)
        .set('minutes', beginMinutes)
        .toDate();

      const endHours = dayjs(end).get('hours');
      const endMinutes = dayjs(end).get('minutes');

      const endDate = dayjs(currentDate)
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
            <SelectDate onPress={handleOpenDatePicker}>
              <SelectDateText>
                {currentDate
                  ? dayjs(currentDate).format('DD/MM/YYYY')
                  : 'Selecione o dia'}
              </SelectDateText>
            </SelectDate>
            <TimeContainer>
              <SelectTime
                style={{ marginRight: 16 }}
                onPress={handleOpenBeginPicker}
              >
                <SelectTimeText>
                  {begin ? dayjs(begin).format('HH:mm') : 'Inicio'}
                </SelectTimeText>
              </SelectTime>
              <SelectTime onPress={handleOpenEndPicker}>
                <SelectTimeText>{dayjs(end).format('HH:mm')}</SelectTimeText>
              </SelectTime>
            </TimeContainer>
            <Button
              onPress={handleCreateConsult}
              style={{ marginTop: 16 }}
              disabled={!currentDate || !isValidTime || loading}
            >
              <ButtonTitle>Solicitar</ButtonTitle>
            </Button>
          </>
        </BottomDialog>
        <DatePicker
          visible={showPicker}
          value={currentDate || new Date()}
          onChange={onChange}
          onRequestClose={requestDateClose}
        />
        <DatePicker
          visible={showBeginPicker}
          value={begin || new Date()}
          mode="time"
          onChange={onChangeBegin}
          onRequestClose={requestBeginClose}
        />
        <DatePicker
          visible={showEndPicker}
          value={end || new Date()}
          mode="time"
          onChange={onChangeEnd}
          onRequestClose={requestEndClose}
        />
        {/* {showBeginPicker && (
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
        )} */}
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
