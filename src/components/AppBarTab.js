import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
  pressable: {
    marginRight: 12,
  },
});

const AppBarTap = (props) => {
  return (
    <Pressable style={styles.pressable}>
      <Link to={props.to}>
        <Text style={styles.text} {...props} />
      </Link>
    </Pressable>
  );
};

export default AppBarTap;
