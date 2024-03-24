import { View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  inputField: {
    height: 60,
    marginVertical: 6,
    paddingHorizontal: 12,
    borderColor: "#dadada",
    borderWidth: 2,
    borderRadius: 6,
  },
  borderRed: {
    borderColor: "red",
  },
  errorText: {
    color: "red"
  }
});

const SignInView = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.inputField, errors.username && styles.borderRed]}
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username && <Text style={styles.errorText}>Username is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 127,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry
            style={styles.inputField}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.errorText}>Password is required</Text>}

      <Button title="Sign in" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default SignInView;
