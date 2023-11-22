import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text, Image } from 'react-native';


const ContactListItem = ({ name, avatar, phone, onPress }) => {
    return (
        <TouchableHighlight underlayColor="grey"
            styles={styles.container}
            onPress={onPress}>
            <View style={styles.contactInfo}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
                <View style={styles.details}>
                    <Text style={styles.title}>
                        {name}
                    </Text >
                    <Text style={styles.subtitle}>
                        {phone}|
                    </Text >
                </View >
            </View >
        </TouchableHighlight >
    );
}
    const styles = StyleSheet.create({
        container: {
            paddingLeft: 50,
            marginTop: 0,
        },
        contactInfo: {
            flex: 1,
            flexDirection: 'row',
            paddingTop: 24,
            paddingBottom: 24,
            borderBottomColor: "grey",
            borderBottomidth: StyleSheet.hairlineWidth,
        },
        avatar: {
            borderRadius: 50,
            width: 50,
            height: 50,
        },
        details: {
            justifyContent: 'center',
            flex: 1,
            marginLeft: 25
        },
        title: {
            color: 'black',
            fontweight: 'bold',
            fontSize: 16,
        },
        subtitle: {
            color: "blue",
            fontSize: 14,
            marginTop: 4
        },
    })
    export default ContactListItem;