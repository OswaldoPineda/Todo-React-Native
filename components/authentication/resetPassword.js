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
const resetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return(
    <ScrollView contentContainerStyle={styles.resetContainer}>
      <Image
        source={require('../../assets/images/todo-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subTitle}>Please provide an email an we will sent you the reset steps</Text>
      <View style={styles.inputContainerEmail}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChange={text => setEmail(text)}
          value={email}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.backToLoginText}
            onPress={() => navigation.navigate('LogIn')}>
      Back to Log in</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 88,
    marginTop: 50,
    width: 160,
  },
  resetContainer: {
    alignItems: 'center',
    backgroundColor: '#EEF3F9',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  subTitle: {
    color: '#7A7A7A',
    fontSize: 16,
    lineHeight: 19,
    marginTop: 30,
    textAlign: 'center',
    width: 246,
  },
  inputContainerEmail: {
    width: '85%',
    marginTop: 40,
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
  backToLoginText: {
    color: '#32a6de',
    fontSize: 12,
    marginTop: 50,
  }
});

export default resetPassword;
