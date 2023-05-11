import { Button, Stack, TextField, Typography } from "@mui/material";

import { createNoteType } from "../home/homeType";
import { useContext } from "react";
import { CreateHomeContext } from "../home/HomeRouter";

import { useFormik } from 'formik';
import InputField from "../common/InputField";
export type textfield = {
  title: string;
  category: string;
  content: string;
};
const data = [{
  name:"title",
  label:"Title",
  type:"text",
  multiline:false,
  rows:1,
  
},
{
  name:"category",
  label:"Category",
  type:"text",
  multiline:false,
  rows:1,
  
},
{
  name:"content",
  label:"Content",
  type:"text",
  multiline:true,
  rows:4,
  
}
]


const CreateNote = () => {
  const { todos,
    setTodos,
    mutate,
    editMutate,
    createFields,
    setCreateFields}:createNoteType = useContext(CreateHomeContext)
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    createFields &&
      setCreateFields({
        ...createFields,
        [event.target.name]: event.target.value,
      });
  };
  // For handling input Data
  const formik = useFormik({
    initialValues: {
      title: createFields?.title ?? '',
      category: createFields?.category ?? '',
      content: createFields?.content ?? '',
      id: createFields?.id ?? '',
      edit: createFields?.edit ?? '',
    },
    onSubmit: values => {
      if (values?.edit) {
        editMutate?.mutate(values);
      } else {
        mutate?.mutate(values);
      }
    },
  });
  
  return (
    <Stack gap={3}>
      <Typography variant="h3">Type Anything!</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={2} py={1}>
          {data.map(formelm=>(
            <InputField formelm={formelm} formik={formik}/>
          ))}
        </Stack>
        <Button
          sx={{}}
          disabled={mutate?.isLoading}
          type="submit"
          variant={"contained"}
        >
          Create!
        </Button>
      </form>
    </Stack>
  );
};

export default CreateNote;
