import { useState } from "react";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { TableQuality } from "../../../../../../types";

export const NewTableQuality = () => {
  type Type = TableQuality["type"];
  const [type, setType] = useState<Type>("pros");

  const [showForm, setShowForm] = useState<boolean>(false);

  const createNewQuality = async () => {
    // try {
    //   ///
    //   setShowForm(false)
    // } catch (error: any){
    // }
  };

  return (
    <div>
      {!showForm ? (
        <Fab color="primary" aria-label="add" onClick={() => setShowForm(true)}>
          <AddIcon />
        </Fab>
      ) : (
        <FormControl
          onChange={(event: React.FormEvent<HTMLDivElement>) =>
            event.preventDefault()
          }
        >
          <FormLabel id="demo-controlled-radio-buttons-group">
            Add new pros or cons
          </FormLabel>

          <Button variant="contained" onClick={() => createNewQuality()}>
            Contained
          </Button>
        </FormControl>
      )}
    </div>
  );
};
