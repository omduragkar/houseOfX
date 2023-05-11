import { Button, Stack, TextField, Typography } from "@mui/material";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ListStateType, createNoteType } from "../home/homeType";
import { useContext } from "react";
import { CreateHomeContext } from "../home/HomeRouter";
export type textfield = {
  title: string;
  category: string;
  content: string;
};
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
  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (
      !createFields?.category ||
      !createFields?.content ||
      !createFields?.title
    )
      return;
    if (createFields?.edit) {
      editMutate?.mutate(createFields);
    } else {
      mutate?.mutate(createFields);
    }
  };
  return (
    <Stack gap={3}>
      <Typography variant="h3">Type Anything!</Typography>
      <TextField
      label={"Title"}
      variant="filled"
        value={createFields?.title}
        name={"title"}
        placeholder={"Enter Title"}
        onChange={(event) => {
          onChangeHandler(event);
        }}
      />
      <TextField
      label={"Category"}
      variant="filled"
        value={createFields?.category}
        name={"category"}
        placeholder={"Enter Category"}
        onChange={(event) => {
          onChangeHandler(event);
        }}
      />
      <TextField
      label={"Content"}
      variant="filled"
        value={createFields?.content}
        name={"content"}
        placeholder={"Enter content"}
        onChange={(event) => {
          onChangeHandler(event);
        }}
        multiline
        rows={4}
      />
      <Button
        sx={{}}
        disabled={mutate?.isLoading}
        onClick={(e) => clickHandler(e)}
        variant={"contained"}
      >
        Create!
      </Button>
    </Stack>
  );
};

export default CreateNote;
