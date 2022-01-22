import { Banner } from '../components/Banner';
import { Route, Routes } from "react-router-dom";
import { EntryPage } from "./EntryPage";
import { StudentProfile } from "./StudentProfile";
import { HomePage } from "./HomePage";
import { SignUpPage } from "./SignUpPage";
import { LoginPage } from "./LoginPage";

function App() {
  return (
    <div style={{height:"100vh", backgroundColor: "azure"}}>
      <Banner></Banner>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/student/:student_id" element={<StudentProfile />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
