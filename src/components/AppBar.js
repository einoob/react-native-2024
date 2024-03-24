import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

import AppBarTap from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 8,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    paddingBottom: 6,
    alignItems: "center",
  },
  text: {
    color: theme.colors.textWhite,
    fontWeight: "bold",
    fontSize: 16,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTap style={styles.text} to="/">
          Repositories
        </AppBarTap>
        <AppBarTap style={styles.text} to="/signin">
          Sign in
        </AppBarTap>
      </ScrollView>
    </View>
  );
};

export default AppBar;
