import { useState, useContext } from "react";
import { ResponseContext } from "../../../../../../context/response.context";
import { addTableQuality } from "../../../../../../api/table.api";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { TableQuality } from "../../../../../../types";

type Props = {
  userId: string | undefined;
};

export const NewTableQuality = ({ userId }: Props) => {
  const { setAndClearResponse } = useContext(ResponseContext);

  const [inputFields, setInputFields] = useState<Omit<TableQuality, "id">>({
    text: "",
    type: "pros",
  });

  const [showForm, setShowForm] = useState<boolean>(false);

  const createNewQuality = async () => {
    if (inputFields.text.length < 5) {
      setAndClearResponse({
        text: "Length should be minimun 5 letters",
        severity: "error",
      });
      return;
    }

    if (userId === undefined) return;

    try {
      await addTableQuality(
        inputFields.text,
        inputFields.type,
        parseInt(userId)
      );
      setAndClearResponse({ text: "Quality is added", severity: "success" });
      setShowForm(false);
    } catch (error: any) {
      setAndClearResponse({ text: error.message, severity: "error" });
    }
  };

  const handleCheckboxes = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "pros" || event.target.value === "cons") {
      setInputFields({ ...inputFields, type: event.target.value });
    }
  };

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({ ...inputFields, text: event.target.value });
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
          <TextField
            type="text"
            onChange={handleText}
            placeholder="Add new quality"
          />
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            row
            value={inputFields.type}
            onChange={handleCheckboxes}
          >
            <FormControlLabel value="pros" control={<Radio />} label="Pros" />
            <FormControlLabel value="cons" control={<Radio />} label="Cons" />
          </RadioGroup>
          <Button variant="contained" onClick={() => createNewQuality()}>
            Create new quality
          </Button>
        </FormControl>
      )}
    </div>
  );
};
