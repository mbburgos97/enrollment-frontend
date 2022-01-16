import { Banner } from '../components/Banner';
import { Route, Routes } from "react-router-dom";
import { EntryPage } from "./EntryPage";
import { StudentProfile } from "./StudentProfile";
import { HomePage } from "./HomePage";

function App() {
  return (
    <div style={{height:"100vh"}}>
      <Banner></Banner>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/student/:student_id" element={<StudentProfile />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
