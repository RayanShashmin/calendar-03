import logo from './logo.svg';
import './App.css';
import BasicDateCalendar from './Components/Calendar';
import BasicForm from './Components/Form';
import BasicDatePicker from './Components/DatePicker';
import MultipleSelect from './Components/Form2';
import FloatingLabelTextarea from './Components/TextArea';
import DisableElevation from './Components/Button';




function App() {
  return (
    <div className="app-container">
    <BasicDateCalendar/>
    <BasicForm/>
    <BasicDatePicker/>
    <MultipleSelect/>
    <FloatingLabelTextarea/>
    <DisableElevation/>
  </div>
  
  );
}

export default App;
