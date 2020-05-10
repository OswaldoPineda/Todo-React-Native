import React, { useState } from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return(
    <ScrollView contentContainerStyle={styles.logInContainer}>
      <Image
        source={require('../../assets/images/todo-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Create an account</Text>
      <View style={styles.inputContainerEmail}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChange={text => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputContainerPassword}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChange={text => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.inputContainerPassword}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChange={text => setPasswordConfirmation(text)}
          value={passwordConfirmation}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.logInTextContainer}>
        <Text style={styles.logInText}>Already have an account</Text>
        <Text style={[styles.logIn, styles.link]}
              onPress={() => navigation.navigate('LogIn')}> Log in</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 88,
    marginTop: 50,
    width: 160,
  },
  logInContainer: {
    alignItems: 'center',
    backgroundColor: '#EEF3F9',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  inputContainerEmail: {
    marginTop: 50,
    width: '85%',
  },
  inputContainerPassword: {
    marginTop: 10,
    width: '85%',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#E7E7E7',
    borderRadius: 10,
    borderWidth: 1,
    borderWidth: 2,
    height: 50,
    width: '100%',
  },
  label: {
    color: '#7A7A7A',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#32A6DE',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: '36.5%',
    paddingVertical: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#32a6de',
    fontSize: 12,
    fontWeight: '500',
  },
  logInText: {
    color: '#7A7A7A',
    fontSize: 12,
    fontWeight: '500',
  },
  logInTextContainer: {
    flexDirection: 'row',
    marginTop: 40,
  }
});

export default LogIn;
