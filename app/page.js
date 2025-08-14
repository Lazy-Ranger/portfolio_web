"use client";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services"
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Work />
    </div>
  );
}
