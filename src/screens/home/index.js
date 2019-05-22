import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, Button } from 'react-native';
import HomeBackground from '../../../assets/homesrc.jpg'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    static navigationOptions = {
        // title: 'Welcome',
        header: null
    };
    _Create = () => {
        console.log("function run")
        this.props.navigation.navigate('Create')
    }
    _Read = () => {
        console.log("function run")
        this.props.navigation.navigate('Create')
    }
    render() {

        return (
            <View style={styles.main}>
                <StatusBar hidden={true} />
                <ImageBackground source={HomeBackground} style={{ height: "100%", width: "100%" }}>
                    <View style={styles.innerDiv} style={{ flex: 1, }}>
                        <View style={styles.div1} >
                            <Text style={styles.titleText}>
                                AppCars
                              </Text>
                        </View>
                        <View style={styles.div2}>
                            <View style={styles.buttonRow1}>
                                <TouchableOpacity style={styles.buttondiv1} onPress={this._Create}>
                                    <Text style={styles.buttonTittle}>
                                        Create
                              </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttondiv2} onPress={this._Read}>
                                    <Text style={styles.buttonTittle}>
                                        Read
                                         </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonRow2}>
                                <TouchableOpacity style={styles.buttondiv3} onPress={this._Read}>
                                    <Text style={styles.buttonTittle}>
                                        Update
                              </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttondiv4} onPress={this._Read}>
                                    <Text style={styles.buttonTittle}>
                                        Delete
                              </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    titleText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
    },
    innerDiv: {
        height: "100%", width: "100%",
        flexDirection: 'column',
    },
    div1: {
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',

    }, div2: {
        height: '60%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    buttonRow1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '23%',

    }, buttonRow2: {
        flexDirection: 'row',
        justifyContent: "space-around",
        height: '23%',
    },
    buttondiv1: {
        backgroundColor: 'white',
        width: '30%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 100, height: 100, },
        shadowColor: 'red',
        // shadowOpacity: 1.0,
        shadowRadius: 2
    },
    buttondiv2: {
        backgroundColor: 'white',
        width: '30%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    }, buttondiv3: {
        backgroundColor: 'white',
        width: '30%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    }, buttondiv4: {
        backgroundColor: 'white',
        width: '30%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    }, buttonTittle: {
        fontSize: 13,
    }
});

export default Home;

