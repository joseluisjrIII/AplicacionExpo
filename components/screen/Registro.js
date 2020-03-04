import React, { Component } from 'react';
import { Container, Card, Content,  Body, Text, Button, Item, CardItem, Input, Icon} from 'native-base';
import { StyleSheet, Linking, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

class Registro extends Component {
  render(){
    const navegar = this.props.navigation;
    return (
      <Container>
      <Content padder contentContainerStyle={styles.content}>
        <Card>
          <CardItem header bordered>
            <Text style={styles.textCenter}>
              {this.props.route.params.titulo}
            </Text>
          </CardItem>
          <Item>
          </Item>
          
          <CardItem bordered>
            <Body>
              <Item inlineLabel>
                <Icon type='FontAwesome' name='user' />
                  <Input placeholder='Nombre' />
                </Item>
                <Item inlineLabel last>
                  <Icon type='FontAwesome' name='user' />
                  <Input placeholder='Apellidos' />
                </Item>
                <Item inlineLabel last>
                  <Icon type='Entypo' name='email' />
                  <Input placeholder='Correo' />
                </Item>
                <Item inlineLabel last>
                  <Icon type='FontAwesome' name='lock' />
                  <Input placeholder='Contraseña' secureTextEntry={true} />
                </Item>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Button primary style={styles.boton}
            onPress={()=> Alert.alert('¡Usuario registrado!')}><Text> Registrarse </Text></Button>
          </CardItem>
                      <Text style={styles.textCenter}>O Registrarse con...</Text>

          <Item>
            <Button primary  onPress={() => Linking.openURL('https://web.facebook.com')}>
              <Icon type='AntDesign' name='facebook-square'></Icon></Button>
            <Button info style={styles.boton_red}><Icon type='FontAwesome' name='twitter-square' onPress={() => Linking.openURL('https://twitter.com')}></Icon></Button>
          </Item>
        </Card>
      </Content>
    </Container>
      );
    }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
    width: '100%'
  },
  boton: {
    marginLeft: '32%'
  },
  
});


export default Registro;

