const express = require('express');
const app = express();
var cors = require('cors');
const port = 3000;



app.use(cors());

const projects = [
  {
    id: 1,
    title: "EcoTrack Dashboard",
    description: "A real-time carbon footprint monitoring tool with interactive data visualizations.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ["React", "D3.js", "Firebase", "Tailwind CSS"],
    category: "Data Visualization",
    links: {
      live: "https://ecotrack.demo",
      github: "https://github.com/user/ecotrack"
    },
    featured: true
  },
  {
    id: 2,
    title: "Nova Commerce",
    description: "Full-stack e-commerce solution featuring headless CMS integration and Stripe payments.",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Next.js", "Stripe", "Sanity.io", "TypeScript"],
    category: "E-Commerce",
    links: {
      live: "https://nova-store.shop",
      github: "https://github.com/user/nova-commerce"
    },
    featured: true
  },
  {
    id: 3,
    title: "Pulse Social API",
    description: "A RESTful API backend supporting high-concurrency social media interactions.",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
    category: "Backend",
    links: {
      live: null,
      github: "https://github.com/user/pulse-api"
    },
    featured: false
  }
];

app.get('/projects', (req, res) => {
  res.send(projects)
});




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});