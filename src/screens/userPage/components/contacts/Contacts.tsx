import { useContext, useState, useEffect } from "react";
import { ResponseContext } from "../../../../context/response.context";
import * as ContactAPI from "../../../../api/contact.api";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Contact } from "../../../../types";
import "./contacts.css";

type Props = {
  userId: string | undefined;
};

export const Contacts = ({ userId }: Props) => {
  const { setAndClearResponse } = useContext(ResponseContext);

  const [contacts, setContacts] = useState<Contact[]>([]);

  type InputContact = {
    name: string;
    number: string;
  };

  const [newContact, setNewContact] = useState<InputContact>({
    name: "",
    number: "",
  });

  const getAllContacts = async (userId: string | undefined) => {
    if (userId === undefined) return;
    try {
      const all = await ContactAPI.allUserContacts(parseInt(userId));
      setContacts(all);
    } catch (error: any) {
      setAndClearResponse({ text: error.message, severity: "error" });
    }
  };

  const deleteContact = async (id: number) => {
    try {
      const result = await ContactAPI.deleteContactById(id);
      setAndClearResponse({ text: result, severity: "success" });
    } catch (error: any) {
      setAndClearResponse({ text: error.message, severity: "error" });
    }
  };

  const addContact = async (
    object: InputContact,
    userId: string | undefined
  ) => {
    if (userId === undefined) return;

    if (newContact.number.length < 3) {
      setAndClearResponse({
        text: "Number should be longer than 2",
        severity: "error",
      });
      return;
    }

    if (newContact.name.length < 1) {
      setAndClearResponse({
        text: "Number should be longer than 1",
        severity: "error",
      });
      return;
    }

    try {
      await ContactAPI.addContact(
        newContact.name,
        parseInt(newContact.number),
        parseInt(userId)
      );
      setAndClearResponse({ text: "Contact is added", severity: "success" });
      setNewContact({ name: "", number: "" });
    } catch (error: any) {
      setAndClearResponse({ text: error.message, severity: "error" });
    }
  };

  useEffect(() => {
    getAllContacts(userId);
  }, [contacts]);

  return (
    <div className="user-page-contacts">
      <div className="user-page-contacts-items">
        {contacts.length < 1 ? (
          "No contacts are found"
        ) : (
          <div>
            {contacts.map((contact) => (
              <div key={contact.id} className="user-page-contacts-item">
                {contact.name} | {contact.number}
                <CloseIcon
                  color="error"
                  onClick={() => deleteContact(contact.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="user-page-contacts-new">
        <TextField
          type="name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewContact({ ...newContact, name: event.target.value })
          }
          value={newContact.name}
          placeholder="Name"
        />
        <TextField
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewContact({
              ...newContact,
              number: event.target.value,
            })
          }
          value={newContact.number}
          placeholder="Number"
        />
        <Button
          variant="contained"
          onClick={() => addContact(newContact, userId)}
        >
          Add
        </Button>
      </div>
    </div>
  );
};
