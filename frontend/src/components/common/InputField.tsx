import { TextField } from "@mui/material";

const InputField = ({ formelm, formik }) => {
  return (
    <TextField
      label={formelm?.label}
      name={formelm?.name}
      variant="filled"
      type={formelm?.type}
      placeholder={formelm?.placeholder}
      multiline={formelm?.multiline}
      rows={formelm?.rows}
      onChange={formik.handleChange}
      value={formik.values[formelm?.name]}
    />
  );
};

export default InputField;
