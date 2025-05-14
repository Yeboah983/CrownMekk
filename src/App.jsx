import { BrowserRouter, Route, Routes } from "react-router";
import { HelmetProvider } from "react-helmet";
import "./App.css";

import RootLayout from "./layouts/RootLayout";
import Landing from "./pages/user/Landing";
import Shop from "./pages/user/Shop";
import Singlead from "./pages/user/Singlead";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Blog from "./pages/auth/Blog";
import Contact from "./pages/auth/Contact";
import About from "./pages/auth/About";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import CreateAd from "./pages/dashboard/CreateAd";
import EditAd from "./pages/dashboard/EditAd";
import VendorAds from "./pages/dashboard/VendorAds";
import BlogDetail from "./pages/auth/BlogDetail";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index={true} element={<Landing />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<Singlead />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index={true} element={<Overview />} />
            <Route path="create-ad" element={<CreateAd />} />
            <Route path="edit-ad" element={<EditAd />} />
            <Route path="ads" element={<VendorAds />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
