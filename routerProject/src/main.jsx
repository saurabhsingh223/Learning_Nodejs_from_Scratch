import React from "react";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contacts.jsx";
import Login from "./Components/Login.jsx";
import Users from "./Components/Users.jsx";
import Github from "./Components/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       },
//       {
//         path: "login",
//         element: <Login/>
//       },
//       {
//         path: "user/:userId",
//         element: <Users/>
//       }
//     ]
//   }
// ]);

// easy wayof making routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="github" element={<Github />} />

      {/* Dynamic Route */}
      <Route path="user/:userId" element={<Users />} />
      
    </Route>
  )
);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
