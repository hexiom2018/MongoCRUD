import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet, ActivityIndicator, ImageBackground, StatusBar, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import HomeBackground from '../../../assets/homesrc.jpg';
import imageicon from '../../../assets/imageicon.png'
import { Dropdown } from 'react-native-material-dropdown';
import { Header, Input } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { Constants, Location, Permissions, Contacts } from 'expo';
import uuid from 'uuid';
import firebase from '../../config/Firebase';
import car1 from '../../../assets/civic2006.jpg'
import car2 from '../../../assets/civic2015.jpg'
import car3 from '../../../assets/ccc.jpg'

const url =
    'https://firebasestorage.googleapis.com/v0/b/blobtest-36ff6.appspot.com/o/Obsidian.jar?alt=media&token=93154b97-8bd9-46e3-a51f-67be47a4628a';

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        const { navigation, } = this.props;
        const item = navigation.getParam('i')
        console.log(item, "h")
        this.setState({
            Car: item.Car,
            Fuel: item.Fuel,
            Gearbox: item.Gearbox,
            price: item.Price,
            color: item.color,
            id: item.id,
            image: item.image,
        })
    }

    //naviagtion default header null
    static navigationOptions = {
        header: null
    };

    //image pickUp function
    _pickImage = async () => {
        this.setState({ loading: true });
        console.log('heelooo')
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            // aspect: 0.1,
        });
        this._handleImagePicked(pickerResult);
    };

    //imgae in to base64 function 
    _handleImagePicked = async (pickerResult) => {
        try {
            this.setState({ uploading: true });

            if (!pickerResult.cancelled) {
                uploadUrl = await uploadImageAsync(pickerResult.uri);
                console.log(uploadUrl, 'url>>>>>>>>>>>>>')
                this.setState({ image: uploadUrl, loading: false });
            }
        } catch (e) {
            this.setState({ loading: false });
            console.log(e);
            alert('Upload failed, sorry :(');
        } finally {
            // this.setState({ uploading: false });
            console.log('finally');
        }
    };

    //form submit function
    submit() {
        const { name, color, Bid, image, Gearbox, Fuel } = this.state
        if (!name) {
            alert('Please add name')
        } else if (!color && color.length < 3) {
            alert('Describe color briefly ')
        }
        else if (!Bid) {
            alert('Please Add  Price')
        }
        else if (!image) {
            alert('Please Select Image')
        }
        else if (!Gearbox) {
            alert('Please Select Gearbox type')
        } else if (!Fuel) {
            alert('Please Select Fuel type')
        }
        else {
            alert('Submitted')
            const obj = {
                name,
                color,
                Bid,
                image,
                Gearbox,
                Fuel
            }
            // this.props.navigation.navigate('Home')
            console.log(obj)
        }
    }
    render() {
        const { image, price,  loading ,Car,Fuel,Gearbox,Price,color} = this.state
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
                        centerComponent={{ text: "Update", style: { color: 'white', fontSize: 25, fontWeight: 'bold' } }}
                    />
                    <ScrollView>
                        <KeyboardAvoidingView enabled>
                            <View style={styles.MainDiv}>
                                <View>
                                    <View style={styles.headings}><Text style={styles.HeadingText}>Manufacturer</Text></View>
                                    <View style={styles.InputDiv}>
                                        <TextInput
                                            style={styles.InputFields}
                                            onChangeText={(name) => this.setState({ name })}
                                            placeholder={'Car & modal'}
                                            value={this.state.Car}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.headings}><Text style={styles.HeadingText}>Car Color</Text></View>
                                    <View style={styles.InputDiv}>
                                        <TextInput
                                            style={styles.InputFields}
                                            multiline={true}
                                            onChangeText={(color) => this.setState({ color })}
                                            placeholder='Car Color'
                                            value={this.state.color}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.headings}><Text style={styles.HeadingText}>Price</Text></View>
                                    <View style={styles.InputDiv}>
                                        <TextInput
                                            style={styles.InputFields}
                                            onChangeText={(e) => this.setState({ price: e })}
                                            value={price}
                                            placeholder={'Price'}
                                            keyboardType='numeric'
                                        />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.headings}><Text style={styles.HeadingText}>Gearbox</Text></View>
                                    <View style={styles.InputDiv}>
                                        <Dropdown
                                            label='type'
                                            data={Category}
                                            baseColor={'#ffff'}
                                            textColor={'#ffff'}
                                            itemColor={'#005c99'}
                                            selectedItemColor={'#005c99'}
                                            onChangeText={e => this.setState({ Gearbox: e })}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.headings}><Text style={styles.HeadingText}>Fuel</Text></View>
                                    <View style={styles.InputDiv}>
                                        <Dropdown
                                            label='type'
                                            data={fuel}
                                            baseColor={'#ffff'}
                                            textColor={'#ffff'}
                                            itemColor={'#005c99'}
                                            selectedItemColor={'#005c99'}
                                            onChangeText={e => this.setState({ Fuel: e })}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.headings}>
                                        <Text style={styles.HeadingText}>Product Image</Text>
                                    </View>
                                    <View style={{ alignItems: "center" }}>
                                        {image && !loading &&
                                            <Image source={image} style={{ width: 270, height: 230 }} />
                                        }
                                        {!image && !loading && <Image source={imageicon} style={{ width: 200, height: 200 }} />
                                        }
                                        {!image && loading && <ActivityIndicator size="large" color="#0000ff" />}
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30, marginBottom: 30 }}>
                                        <Button
                                            title="Pick an image from camera roll"
                                            onPress={() => this._pickImage()
                                            }
                                            color="#9999ff"
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                                <Button
                                    onPress={() => this.submit()}
                                    title="Submit"
                                // color="#ffff"
                                />
                            </View>
                            <View style={{ height: 20 }}></View>

                        </KeyboardAvoidingView>
                    </ScrollView>
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
    InputFields: {
        minHeight: 30,
        maxHeight: 100,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        fontSize: 15,
        color: "white"
    },
    InputDiv: {
        margin: 5,
        padding: 5,
    },
    MainDiv: {
        margin: 5,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'space-around'
    },
    headings: {
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    HeadingText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: "white",
    },
    inputPrice: {
        backgroundColor: 'rgba(99, 172, 221,0.5)',
        color: '#ffffff',
        height: 34,
        width: 70,
        paddingHorizontal: 10,
        justifyContent: 'center',
        fontSize: 18,
        borderRadius: 10,
        overflow: 'hidden'
    },
    dateTime: {
        padding: 10,
        color: '#fff',
        height: 40,
        fontSize: 18,
    },
    buttondiv4: {
        backgroundColor: 'white',
        width: '30%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//Async function to cionver image into baase64
async function uploadImageAsync(uri) {
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
    });
    const ref = firebase
        .storage()
        .ref()
        .child(uuid.v4());
    const snapshot = await ref.put(blob);
    // We're done with the blob, close and release it
    blob.close();
    return await snapshot.ref.getDownloadURL();
}
export default Update;

