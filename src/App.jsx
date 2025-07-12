import React, { useEffect, useState } from "react";
import LoadingOverlay from "./LoadingOverlay";
import ContactCard from "./ContactCard";
// import './App.css';
import FINAL_IMAGE from "./assets/Vite_n_React_Base.png";

const contacts = [
  { 
    id: "sofia",
    name: "Sofia Ranta", 
    title: "UI Designer", 
    email: "info@example.com", 
    board: "+35370000000",
    extension: "2222",
    image: 'https://randomuser.me/api/portraits/women/44.jpg'  // Woman portrait
  },
  { 
    id: "bob",
    name: "Bob Johnson", 
    title: "Dev Ops Engineer", 
    email: "info@example.com", 
    board: "+35370000000",
    extension: "1111",
    image: 'https://randomuser.me/api/portraits/men/46.jpg'     // Professional man
  },
  {
    id: "charlie", 
    name: "Charlie Brown", 
    title:"Junior Developer", 
    email: "info@example.com", 
    board: "+35370000000",
    extension: "3333",
    image: '/images/Charlie_Brown.png'  // Note: This is a placeholder; replace with a valid image URL if needed
  },
];

// MAIN-APP:

function App() {
  const [phase, setPhase] = useState("loading"); // loading, cards, image
  const [imageOpacity, setImageOpacity] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => setPhase("cards"), 2000);
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (phase === "cards") {
      setCardVisible(true);
      const imageTimer = setTimeout(() => {
        setCardVisible(false);
        setTimeout(() => {
          setPhase("image");
          setTimeout(() => setImageOpacity(1), 100);
        }, 1000); // Delay before image phase starts
      }, 5000); // Show cards for 5s
      return () => clearTimeout(imageTimer);
    }
  }, [phase]);

  return (
    <>
      {phase === "loading" && <LoadingOverlay />}

      {phase === "cards" && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            position: "fixed",
            inset: 0,
            zIndex: 10,
            overflowY: "auto",
            width: "100%",
            maxWidth: "100vw",
            maxHeight: "100vh",
            boxSizing: "border-box",
            backgroundColor: "#111", // Dark background
            minHeight: "100vh",
            transition: "opacity 0.5s",
            opacity: cardVisible ? 1 : 0,
          }}
        >
          {contacts.map((person) => (
            <ContactCard key={person.id} {...person} />
          ))}
        </div>
      )}

      {phase === "image" && (
        <div
          style={{
            position: "fixed",
            inset: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
            zIndex: 20,
            opacity: imageOpacity,
            transition: "opacity 1s",
          }}
        >
          <img
            src={FINAL_IMAGE}
            alt="Final Image"
            style={{
              width: "60%",
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: 16,
              boxShadow: "0 0 32px #222",
            }}
          />
          <div
            className="text-white text-xl mt-4"
            style={{
              alignSelf: "flex-start",
              marginLeft: "20rem",
            }}
          >
            Done. There are many more tools out there, but this is a good start.
          </div>
        </div>
      )}
    </>
  );
}

export default App;
