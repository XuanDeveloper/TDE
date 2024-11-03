import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Globe } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type WeatherScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Weather'>;
};

const CityCard: React.FC<{ onClear: () => void }> = ({ onClear }) => (
  <View style={styles.cityCard}>
    <View style={styles.cityCardContent}>
      <Text style={styles.labelText}>País</Text>
      <Text style={styles.cityText}>Cidade</Text>
      <View style={styles.bottomRow}>
        <TouchableOpacity onPress={onClear}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
        <Text style={styles.temperatureText}>x°C</Text>
      </View>
    </View>
  </View>
);

const WeatherApp: React.FC<WeatherScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.headerTitle}>Olá User,</Text>
            <Text style={styles.headerSubtitle}>Descubra o clima</Text>
          </View>
          <TouchableOpacity style={styles.globeButton}>
            <Globe stroke="#000" width={24} height={24} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Pesquise por uma cidade</Text>
        </TouchableOpacity>

        <View style={styles.worldSection}>
          <Text style={styles.worldTitle}>Ao redor do mundo</Text>
          <View style={styles.cardsContainer}>
            <CityCard onClear={() => {}} />
            <CityCard onClear={() => {}} />
            <CityCard onClear={() => {}} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
    paddingTop: 8,
  },
  globeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  searchButton: {
    backgroundColor: '#6151C3',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchButtonText: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  worldSection: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  worldTitle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    marginBottom: 16,
  },
  cardsContainer: {
    gap: 12,
    marginBottom: 16,
  },
  cityCard: {
    backgroundColor: '#6151C3',
    borderRadius: 32,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cityCardContent: {
    gap: 4,
  },
  labelText: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
  cityText: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  clearText: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
  temperatureText: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default WeatherApp;