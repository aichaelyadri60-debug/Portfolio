import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", name: "Accueil" },
    { id: "about", name: "À propos" },
    { id: "skills", name: "Compétences" },
    { id: "experience", name: "Expérience" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <>
      <nav style={styles.nav}>
        <h2 style={styles.logo}>Aicha El Yadri</h2>

        <ul style={styles.menu}>
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              style={{
                ...styles.item,
                color: active === item.id ? "blue" : "black",
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <button style={styles.button}>Me contacter</button>
      </nav>
    </>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#f5f5f5",
  },
  logo: {
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    gap: "15px",
    listStyle: "none",
  },
  item: {
    cursor: "pointer",
  },
  button: {
    padding: "8px 12px",
    background: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};