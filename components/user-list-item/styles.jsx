import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
    },

    imageContainer:{
        height: 60,
        width: 60,
        backgroundColor: '#eee',
        borderRadius: 50,
    },

    content:{
        marginLeft: 20,
        flex: 1,
    },

    name:{
        fontSize: 18,
        fontWeight: 'bold',
    },

    email:{
        fontSize: 14,
    },

  });
