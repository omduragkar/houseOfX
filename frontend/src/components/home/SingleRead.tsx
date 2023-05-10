
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton, Stack } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
type ListAccordianType={
  todo: any; 
  deleteFunctionality: (data: any) => void; 
  updateFunctionality: (data: any) => void;
}

export default function ListAccordian({todo, deleteFunctionality, updateFunctionality}:ListAccordianType) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{w:"100%"}}
      >
          <Typography>{todo.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
          <Stack direction={"row"} justifyContent={"flex-end"} gap={3}>
            <IconButton onClick={()=>{updateFunctionality(todo)}}><ModeEditIcon/> </IconButton>
            <IconButton onClick={()=>deleteFunctionality(todo._id)}><DeleteIcon/></IconButton>
          </Stack>
        <Typography>
          {todo.content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}