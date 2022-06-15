import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";
import { Swipeable } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons/";
import AppText from "./AppText";
function ListItem({
  title,
  subTitle,
  image,
  ImageComponent: IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {/* //return this back to Text */}
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <Feather name="chevron-right" color={colors.medium} size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 35,
  },
  title: {
    fontWeight: "600",
  },
  subTitle: {
    color: colors.medium,
  },
});
export default ListItem;
