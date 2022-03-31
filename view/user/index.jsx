// import React from 'react';
import React, { useState, useEffect } from "react";
// import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from "react-redux";
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { UserListItem } from "../../components/user-list-item";
import { getUsers } from "../../redux/user/actions";

import { styles } from "./styles";

export default function Users(){

    const dispatch = useDispatch();
    const store = useSelector((state) => state.user);

    useEffect(() => {

        dispatch(getUsers())
        
      }, []);


    return (
        <View style={styles.container}>
            
          <Text style={styles.title} >Users List</Text>
          
          <View >

            {

                    <FlatList 
                        refreshing={store.isProcessing}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        data={store.users}
                        renderItem={({ item: item }) => (
                        <TouchableOpacity key = {item.id} >
                            <UserListItem user={item} />
                        </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                        
                    />

            }

          </View>

        </View>
      );
}
  