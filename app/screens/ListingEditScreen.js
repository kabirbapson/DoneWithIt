import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Wrapper from "../components/Wrapper";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Camera", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Clothing", value: 3, backgroundColor: "blue", icon: "lock" },
];

const ListingEditScreen = () => {
  const handleSubmit = (values) => {
    console.log({ values });
  };
  return (
    <Wrapper style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          category: null,
          description: "",
          price: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="sentences"
          autoCorrect
          placeholder="Title"
          name="title"
          maxLength={255}
        />
        <FormField
          placeholder="Price"
          name="price"
          keyboardType="numeric"
          maxLength={8}
          width={120}
        />
        <Picker
          data={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          autoCapitalize="sentences"
          autoCorrect
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
