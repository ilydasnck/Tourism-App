import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {David, SearchPlace, Filter, Category, Menu} from '../../components';
import RoutesNames from '../../config/RoutesNames';

const home = ({navigation}) => {
  return (
    <View>
      <David />
      <SearchPlace />
      <Filter />
      <ScrollView horizontal>
        <Category navigation={navigation} />
        <Category navigation={navigation} />
        <Category navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default home;
