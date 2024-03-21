import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

import AppBarTap from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: theme.colors.textWhite,
    fontWeight: "bold",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTap>Repositories</AppBarTap>
      <AppBarTap>jotain</AppBarTap>
    </View>
  );
};

export default AppBar;
