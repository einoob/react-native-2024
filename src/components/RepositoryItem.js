import { StyleSheet, View, Image } from "react-native";

import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
  columnContainer: {
    display: "flex",
    padding: 10,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  repositoryName: {
    fontSize: 18,
  },
  descriptionText: {
    marginVertical: 6,
    flex: 1,
  },
  chipContainer: {
    padding: 6,
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    alignSelf: "flex-start",
    color: theme.colors.textWhite,
    marginBottom: 12,
  },
  imageThumbnail: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 12,
  },
});

const formatNumber = (number) => {
  if (number > 1000) {
    return ((number / 10000) * 10).toFixed(1) + "k";
  }
  return number;
};

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.columnContainer}>
      <View style={styles.rowContainer}>
        <Image style={styles.imageThumbnail} source={{ uri: repository.ownerAvatarUrl }} />
        <View style={{ flex: 1, flexWrap: "wrap" }}>
          <Text fontWeight="bold" style={styles.repositoryName}>
            {repository.fullName}
          </Text>
          <View>
            <Text color="secondary" style={styles.descriptionText}>
              {repository.description}
            </Text>
          </View>
          <View style={styles.chipContainer}>
            <Text color="white">{repository.language}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rowContainer, { justifyContent: "space-around" }]}>
        <View style={{ alignItems: "center" }}>
          <Text fontWeight="bold">{formatNumber(repository.stargazersCount)}</Text>
          <Text color="secondary">stars</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text fontWeight="bold">{formatNumber(repository.forksCount)}</Text>
          <Text color="secondary">Forks</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text fontWeight="bold">{formatNumber(repository.reviewCount)}</Text>
          <Text color="secondary">Reviews</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text fontWeight="bold">{repository.ratingAverage}</Text>
          <Text color="secondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
