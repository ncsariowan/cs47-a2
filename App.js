import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, ScrollView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { theme, ThemeContextProvider, withTheme } from './assets/Themes/themes';
import { Fragment } from 'react/cjs/react.production.min';

App = ({ theme }) => {
    let [fontsLoaded] = useFonts({
        Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
        'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
    });
    if (!fontsLoaded) return <AppLoading />;
    /* ^Don't mind/edit the code above, it's there to load the font for you! */
    StatusBar.setBarStyle(theme.statusBar);
    /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

    /* insert your code here */

    return (
        <ThemeContextProvider>
            <SafeAreaView style={{ flex: 0, backgroundColor: theme.bg }}>

            </SafeAreaView>
            <SafeAreaView style={styles.container}>
                <View style={styles.navBar} >
                    <View>
                        <Image style={styles.icon} source={require('./assets/Icons/menu_dark.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.logo}>ensom</Text>
                    </View>
                    <View >
                        <Image style={styles.icon} source={require('./assets/Icons/moon.png')}></Image>
                    </View>
                </View>
                <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer} >
                    <View>
                        <ImageBackground style={[styles.profile, theme.shadows]} imageStyle={styles.profileImage} source={require('./assets/Profiles/mtl.jpg')}>
                            <Text style={styles.text}>MTL</Text>
                            <Text style={styles.secondaryText}>2 miles away</Text>
                        </ImageBackground>
                    </View>
                    <View style={[styles.audioCard, theme.shadows]}>
                        <Text style={styles.text}>My Hottest Take</Text>
                        <View style={styles.player}>
                            <Image style={{height: "100%", flex: 1, resizeMode: 'contain'}} source={require('./assets/Icons/player_dark.png')}></Image>
                            <Image style={{width: "75%", marginLeft: 10, resizeMode: 'contain'}} source={require('./assets/Icons/audio_waveform_dark.png')}></Image>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.bottom} >
                    <View style={styles.bottomButton}>
                        <Image style={styles.bottomIcon} source={require('./assets/Icons/discover_dark.png')}></Image>
                        <Text style={styles.bottomText}>Discover</Text>
                    </View>
                    <View style={styles.bottomButton}>
                        <Image style={styles.bottomIcon} source={require('./assets/Icons/heart_dark.png')}></Image>
                        <Text style={styles.bottomText}>Matches</Text>
                    </View>
                    <View style={styles.bottomButton}>
                        <Image style={styles.bottomIcon} source={require('./assets/Icons/messages_dark.png')}></Image>
                        <Text style={styles.bottomText}>DMs</Text>
                    </View>
                </View>
            </SafeAreaView >
        </ThemeContextProvider>
    );
}

export default withTheme(App)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.navigation,
        justifyContent: 'space-between',
    },
    navBar: {
        backgroundColor: theme.bg,
        height: Platform.OS === 'ios' ? 41 : 54,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        color: theme.text,
        fontFamily: "Sydney-Bold",
        fontSize: 32,
    },
    icon: {
        flex: 1,
        aspectRatio: 1
    },
    content: {
        backgroundColor: theme.bg,
        flex: 1,
        width: "100%"
    },
    contentContainer: {
        flexDirection: 'column',
        padding: 20,
        marginTop: 10,
    },
    profile: {
        aspectRatio: 1/1.1,
        width: "100%",
        height: undefined,
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    profileImage: {
        borderRadius: 15,
    },
    audioCard: {
        marginTop: 20,
        padding: 20,
        borderRadius: 25,
        backgroundColor: theme.bgSecondary
    },
    player: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        height: 60,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Sydney',
        color: theme.text,
        fontSize: 32
    },
    secondaryText: {
        fontFamily: 'Sydney',
        color: theme.text,
        fontSize: 18,
    },
    bottom: {
        backgroundColor: theme.navigation,
        height: 70,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        resizeMode: 'contain',
    },
    bottomIcon: {
        flex: 1,
        aspectRatio: 1,
        resizeMode: 'contain',
        margin: 2
    },
    bottomText: {
        fontFamily: "Sydney",
        fontSize: 18,
        color: theme.textSecondary
    }
});