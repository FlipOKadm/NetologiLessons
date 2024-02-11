import {Calendar} from "./components/Calendar.jsx";

function App() {
  const now = new Date(2024, 2, 10);
  return (
    <>
    <Calendar date={now}/>
    </>
  )
}

export default App
