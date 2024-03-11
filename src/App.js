import "./App.css";
import { Button, TextField, Typography } from "@mui/material";
import InputDatePicker from "./Components/DatePicker";
import DisplayCalendar from "./Components/Calendar";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "30px", justifyContent:"center", alignItems:"center",backgroundColor:"lightblue", height:"100vh"}}>
      <div style={{backgroundColor:"lightgray", padding:"20px",borderRadius:"20px"}}>
        <DisplayCalendar/>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent:"center"  }}>
      
        
        <Typography fontSize="small">Enter Name</Typography>
        <TextField label="Enter your name"/>
        <Typography fontSize="small">Enter Note</Typography>
        <TextField label="Enter note"/>
        <Typography fontSize="small">Pick Date</Typography>
        <InputDatePicker />
        <Button fullWidth variant="standard">Add Note</Button>
      </div>
    </div>
  );
}

export default App;
