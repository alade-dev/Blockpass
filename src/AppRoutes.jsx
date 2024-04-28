import { Routes, Route } from "react-router-dom";
import Index from "./pages/landingPage/index";


export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      

      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/help" element={<Help />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}