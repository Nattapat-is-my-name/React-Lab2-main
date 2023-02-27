import * as React from 'react';
import {  Checkbox } from "@mui/material";
import List from '@mui/material/List';import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';


function CardList({ todo, setState, state }) {
  function handleCheck(e) {
    if (e.target.checked) {
      const result = state.filter((item) => item !== todo);
      setState(result);
    }
  }
  return (
    
    <List sx={{width:'100%', backgroundColor: "#fefffe" , borderRadius: "10px",mt:3}}>
      <ListItem>
        <Checkbox onChange={(e) => handleCheck(e)} />
        <Box sx={{ fontSize: "25px" ,color: "#7b7b7b"}}>{todo}</Box>
      </ListItem>
      
    </List>
  );
}
export default CardList;
