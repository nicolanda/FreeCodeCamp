import React from "react";
import { Main } from "./components/Main";
import {Navbar} from "./components/Navbar";

export const App = () => (
  <div className="card-container">
    <Navbar />
    <Main />
  </div>
)