import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };
  