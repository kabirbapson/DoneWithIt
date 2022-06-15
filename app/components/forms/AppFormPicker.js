import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({
  data,
  icon,
  name,
  PickerItemComponent,
  placeholder,
  numberOfColumns,
  width,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        data={data}
        numberOfColumns={numberOfColumns}
        icon={icon}
        onItemSelect={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
