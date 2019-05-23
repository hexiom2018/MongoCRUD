import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet, ActivityIndicator, ImageBackground, StatusBar, Button, TouchableOpacity } from 'react-native';
import HomeBackground from '../../../assets/homesrc.jpg';
import imageicon from '../../../assets/imageicon.png'
import { Header, Input } from 'react-native-elements';
import firebase from '../../config/Firebase';
import Swiper from 'react-native-swiper';
import car1 from '../../../assets/civic2006.jpg'
import car2 from '../../../assets/civic2015.jpg'
import car3 from '../../../assets/ccc.jpg'


class Read extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                Car: 'Honda Civic 2006',
                color: "Sliver",
                Fuel: "deseil",
                Price: 2056,
                Gearbox: 'manual',
                id: 1,
                image: car1
            }, {
                Car: 'Honda Civic 2015',
                color: "White",
                Fuel: "Petrol",
                Price: 2056,
                Gearbox: 'manual',
                id: 2,
                image: car2
            }, {
                Car: 'honda civic panama  2015 ',
                color: "Grey",
                Fuel: "Petrol",
                Price: 2056,
                Gearbox: 'manual',
                id: 3,
                image: car3
            }]
        };
    }

    //naviagtion default header null
    static navigationOptions = {
        header: null
    };

    //updtePage
    Update=(i) =>{
        this.props.navigation.navigate('Update', { i }) 
    }
    Delete=(i)=>{
        console.log(i)
    }


    render() {
        const { data } = this.state
        // object's for dropdown
        let Category = [{ value: 'Automatic' }, { value: 'Manual' }];
        let fuel = [{ value: 'Diesel' }, { value: 'Petrol' }];
        return (
            <View style={styles.main}>
                <StatusBar hidden={true} />
                <ImageBackground source={HomeBackground} style={{ height: "100%", width: "100%", }}>
                    <Header
                        containerStyle={{
                            backgroundColor: null,
                            borderBottomWidth: 0
                        }}
                        leftComponent={{ icon: 'arrow-back', color: 'white', onPress: () => this.props.navigation.navigate('Home') }}
                        centerComponent={{ text: "Read", style: { color: 'white', fontSize: 25, fontWeight: 'bold' } }}
                    />
                    <View style={styles.MainDiv}>

                        <Swiper style={styles.wrapper} showsButtons={false}>
                            {data && data.map((item => {
                                return (
                                    <View style={styles.slide3} id={item.id}>
                                        <View style={styles.div1} >
                                            {
                                                <Image source={item.image} style={{ width: '100%', height: '100%' }} />
                                            }
                                        </View>
                                        <View style={styles.div2}>
                                            <View style={styles.Detail}>
                                                <View style={styles.textH1}>
                                                    <Text style={styles.titleText}>
                                                        Details:
                                            </Text>
                                                </View>

                                            </View>
                                            <View style={styles.textRow}>
                                                <View style={styles.textH1}>
                                                    <Text style={styles.titleText}>
                                                        Car:
                                            </Text>
                                                </View>
                                                <View style={styles.textH2}>
                                                    <Text style={styles.detailText}>
                                                        {item.Car}
                                                    </Text>
                                                </View>
                                            </View>

                                            <View style={styles.textRow}>
                                                <View style={styles.textH1}>
                                                    <Text style={styles.titleText}>
                                                        color:
                                            </Text>
                                                </View>
                                                <View style={styles.textH2}>
                                                    <Text style={styles.detailText}>
                                                        {item.color}
                                                    </Text>
                                                </View>
                                            </View>

                                            <View style={styles.textRow}>
                                                <View style={styles.textH1}>
                                                    <Text style={styles.titleText}>
                                                        Fuel:
                                            </Text>
                                                </View>
                                                <View style={styles.textH2}>
                                                    <Text style={styles.detailText}>
                                                        {item.Fuel}
                                                    </Text>
                                                </View>
                                            </View>

                                            <View style={styles.textRow}>
                                                <View style={styles.textH1}>
                                                    <Text style={styles.titleText}>
                                                        Gearbox:
                                            </Text>
                                                </View>
                                                <View style={styles.textH2}>
                                                    <Text style={styles.detailText}>
                                                        {item.Gearbox}
                                                    </Text>
                                                </View>
                                            </View>

                                            <View style={styles.textRow}>
                                                <View style={styles.textH1}>
                                                    <Text style={styles.titleText}>
                                                        Price:
                                            </Text>
                                                </View>
                                                <View style={styles.textH2}>
                                                    <Text style={styles.detailText}>
                                                        {item.Price}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.div3}>
                                            <View style={styles.buttonRow2}>
                                                <TouchableOpacity style={styles.buttondiv3} onPress={ this.Update(item)}>
                                                    <Text style={styles.buttonTittle}>
                                                        Update
                                              </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.buttondiv4} onPress={this.Delete(item)}>
                                                    <Text style={styles.buttonTittle}>
                                                        Delete
                                             </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }))}
                        </Swiper>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
//styleSheet
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-around'
    },
    MainDiv: {
        margin: 5,
        flex: 1,

    },
    wrapper: {
    },

    slide3: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#e0ebeb',
        flexDirection: 'column',
        // borderWidth: 2

    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    innerDiv: {
        height: "100%", width: "100%",
        flexDirection: 'column',
    },
    div1: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2


    }, div2: {
        height: '35%',
        flexDirection: 'column',
        // justifyContent: 'flex-end',
        // borderWidth: 2
    },
    div3: {
        height: '15%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        // borderWidth: 2
    },
    buttonRow1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '23%',

    }, buttonRow2: {
        flexDirection: 'row',
        justifyContent: "space-around",
        height: '100%',
        // borderWidth: 2,
        alignItems: 'center',

    },
    buttondiv3: {
        backgroundColor: 'white',
        width: '30%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    }, buttondiv4: {
        backgroundColor: 'white',
        width: '30%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    }, buttonTittle: {
        fontSize: 13,
    },
    textRow: {
        flexDirection: 'row',
        width: '100%',
        // borderWidth: 2,
        justifyContent: 'space-evenly',
        minHeight: '5.9%'

    },
    textH1: {
        width: '30%',
        justifyContent: 'center',
        // borderWidth: 2,
        alignItems: 'center'

    },
    textH2: {
        width: '70%',
        justifyContent: 'center',
        // borderWidth: 2,

    },
    titleText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    }, detailText: {
        fontSize: 17,
        // fontWeight: 'bold',
        color: 'white'
    },
    Detail: {
        width: '100%',
        // borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }

});


export default Read;

