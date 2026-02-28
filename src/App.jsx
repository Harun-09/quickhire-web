import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/index";
import CompaniesPage from "./pages/companies";
import JobDetailsPage from "./pages/jobs/[id]";
import AdminPage from "./pages/admin/index";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="/jobs/:id" element={<JobDetailsPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
