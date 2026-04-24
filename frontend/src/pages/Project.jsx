import { useEffect, useState } from "react";
import MainLayouts from "../layouts/MainLayout";

export default function Project({ changeCurrentPage }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then(res => res.json())
      .then(data => {console.log("DATA:", data);
       setProjects(data)})
      .catch(err => console.log(err));
  }, []);

  return (
    <MainLayouts changeCurrentPage={changeCurrentPage}>
      <h1>Project</h1>

      {projects.map(item => (
        <h3 key={item.id}>{item.title}</h3>
      ))}
    </MainLayouts>
  );
}