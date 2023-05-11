import { Text, View } from 'react-native';

export default function App() {
    return (
        <View>
            <View style={{
                padding: 50,
                flexDirection: 'row',
                width: '100%',
                height: 300,
                justifyContent: 'space-around',
                alignItems: 'stretch'
            }}>
                <View style={{
                    backgroundColor: 'red',
                    // width: 100,
                    // height: 100,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text>1</Text>
                </View>
                <View style={{
                    backgroundColor: 'blue',
                    // width: 100,
                    // height: 100,
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text>2</Text>
                </View>
                <View style={{
                    backgroundColor: 'green',
                    // width: 100,
                    // height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text>3</Text>
                </View>
            </View>
        </View>
    );
}


