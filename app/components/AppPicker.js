import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  Modal,
  View,
  FlatList,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/text";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
function AppPicker({
  icon,
  onSelectItem,
  SelectedItem,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  placeholder,
  items,
  width = "100%",
}) {
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}

          {SelectedItem ? (
            <AppText style={styles.text}> {SelectedItem.label} </AppText>
          ) : (
            <AppText style={styles.placeholder}> {placeholder} </AppText>
          )}

          {/* <AppText style={styles.text}>
            {SelectedItem ? SelectedItem.label : placeholder}
          </AppText> */}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setmodalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setmodalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
export default AppPicker;
