import { Banner } from '../components/Banner';
import { Route, Routes } from "react-router-dom";
import { EntryPage } from "./EntryPage";
import { Profile } from "./Profile";
import { HomePage } from "./HomePage";
import { SignUpPage } from "./SignUpPage";
import { LoginPage } from "./LoginPage";
import { NotFoundPage } from "./NotFoundPage"

function App() {
  return (
    <div style={{height:"100vh", backgroundColor: "azure"}}>
      <Banner></Banner>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/student/:id" element={<Profile type="student" />} />
        <Route path="/teacher/:id" element={<Profile type="teacher" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
