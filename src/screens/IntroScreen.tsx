import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type IntroScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Intro'>;
};

const IntroScreen: React.FC<IntroScreenProps> = ({ navigation }) => {
    const handleNavigateToWeather = () => {
      navigation.navigate('Weather');
    };
  
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.dot} />
          <Text style={styles.title}>
            Veja como está o tempo ao redor do mundo{' '}
            <Text style={styles.emoji}>🌎</Text>
          </Text>
          <Text style={styles.subtitle}>
            Comece agora gratuitamente
          </Text>
          <TouchableOpacity 
          style={styles.button}
          onPress={handleNavigateToWeather}
          >
            <Text style={styles.buttonText}>Vamos lá</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Já tem uma conta? </Text>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6151C3',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#6151C3',
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 32,
  },
  emoji: {
    fontSize: 24,
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#6151C3',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#6151C3',
    fontWeight: '500',
  },
});

export default IntroScreen;