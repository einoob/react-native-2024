import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textWhite,
    fontWeight: "bold",
  },
  pressable: {
    marginRight: 12,
  },
});

const AppBarTap = (props) => {
  return (
    <Pressable style={styles.pressable} onPress={() => console.log("pressed")}>
      <Text style={styles.text} {...props} />
    </Pressable>
  );
};

export default AppBarTap;
