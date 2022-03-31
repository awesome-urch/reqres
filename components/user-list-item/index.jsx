import { Text, View, Image } from 'react-native';

import { styles } from './styles';


export function UserListItem({ user }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={{ uri: user?.avatar }} />
      <View style={styles.content}>
        <Text style={styles.name} >{user?.first_name } {user?.last_name }</Text>
        <Text style={styles.email} >{user?.email}</Text>
      </View>
    </View>
  );
}
