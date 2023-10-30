import { Routes, Route } from "react-router-dom";

import "./globals.css";

const App = () => {
  return (
    <main>
      <Routes>
        {/* public route */}
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />

        {/* private routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
