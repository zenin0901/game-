import LandingPage from "./pages/LandingPage";
import WalletPage from "./pages/WalletPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WalletProvider } from "./Context/WalletContext";

import "./App.css";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/wallet/:wallet" element={<WalletPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;
