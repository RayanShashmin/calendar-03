import React, { useState } from "react";
import "./App.css";
import { Button, TextField, Typography } from "@mui/material";
import InputDatePicker from "./Components/DatePicker";
import DisplayCalendar from "./Components/Calendar";
import DropDown from "./Components/dropdown";

function App() {
  const [formData, setFormData] = useState({
    topic: "",
    date: "",
    responsibleSection: "",
    note: ""
  });
  const [notes, setNotes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddNote = () => {
    const newNote = { ...formData };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    // Clear form data after adding note
    setFormData({
      topic: "",
      date: "",
      responsibleSection: "",
      note: ""
    });
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", bottom: "10px", height: "100vh", boxShadow: "" }}>
        <div style={{ border: "1px solid #ccc", borderRadius: "20px", boxShadow: "", padding: "20px", display: "flex", flexDirection: "row", gap: "90px", justifyContent: "center", alignItems: "center", backgroundColor: "white", height: "70vh", width: "90vh" }}>
          <div style={{ backgroundColor: "#F4F6FF", padding: "20px", borderRadius: "20px" }}>
            <DisplayCalendar />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }}>
            <Typography fontSize="small">Topic</Typography>
            <TextField name="topic" value={formData.topic} onChange={handleChange} label="Topic" />

            <Typography fontSize="small">Date</Typography>
            <InputDatePicker name="date" value={formData.date} onChange={handleChange} />

            <Typography fontSize="small">Responsible section</Typography>
            <DropDown name="responsibleSection" value={formData.responsibleSection} onChange={handleChange} />

            <Typography fontSize="small">Add Note</Typography>
            <TextField name="note" value={formData.note} onChange={handleChange} id="outlined-multiline-static" label="Add Note" multiline rows={3} variant="outlined" />

            <Button variant="contained" onClick={handleAddNote}>Add Note</Button>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", bottom: "1px", height: "10vh", boxShadow: ""}}>
          <div style={{  border: "1px solid #ccc", borderRadius: "20px", boxShadow: "", padding: "20px", display: "flex", flexDirection: "row", gap: "90px", justifyContent: "center", alignItems: "center", backgroundColor: "white", height: "70vh", width: "90vh"}}>
          <Typography variant="h5">Notes:</Typography>
         
          {notes.map((note, index) => (
            <div style={{backgroundColor:"#9195F6", padding:"20px", borderRadius:"20px" ,boxShadow:"0px 0px 25px 0 rgba(0,0,0, .25)"}}>
            <div key={index}>
              <Typography><b>Topic:</b> {note.topic}</Typography>
              <Typography><b>Date:</b> {note.date}</Typography>
              <Typography><b>Responsible section:</b> {note.responsibleSection}</Typography>
              <Typography><b>Note:</b> {note.note}</Typography>
              <hr />
            </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
