import Navbar from "./components/navbar";
import './App.css';
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="bg-black pattern  h-screen w-full">
      {/* <h1 className="text-3xl text-white font-bold underline">
        Hello Adamantium!
      </h1> */}
      <Navbar />
      <Hero />
    </div>

  )
}
