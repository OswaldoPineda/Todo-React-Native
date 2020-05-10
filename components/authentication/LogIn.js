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

  return(
    <ScrollView contentContainerStyle={styles.logInContainer}>
      <Image
        source={require('../../assets/images/todo-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>To-do list</Text>
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
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </View>
      </TouchableOpacity>
      <Text style={[styles.forgotPasswordText, styles.link]}
            onPress={() => navigation.navigate('resetPassword')}>
      I forgot my password</Text>
      <Text style={styles.signUpText}>don't have an account yet?</Text>
      <Text style={[styles.signUpLink, styles.link]}
            onPress={() => navigation.navigate('SignUp')}>
      Sign Up</Text>
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
  forgotPasswordText: {
    marginTop: 15,
  },
  link: {
    color: '#32a6de',
    fontSize: 12,
    fontWeight: '500',
  },
  signUpText: {
    color: '#7A7A7A',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 50,
  },
  signUpLink: {
    marginTop: 10,
  },
});

export default LogIn;
