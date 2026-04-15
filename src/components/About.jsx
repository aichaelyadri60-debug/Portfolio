import aboutImg from "../assets/about.png";

export default function About() {
  const highlights = [
    { title: "Formation", value: "YouCode Youssoufia" },
    { title: "Diplôme", value: "TS Développement digital" },
    { title: "Ville", value: "Taza, Maroc" },
  ];



  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      
      <h2 className="text-3xl font-bold text-center mb-4">
        À propos
      </h2>

      <p className="text-center text-gray-600 mb-8">
        Développeuse en formation spécialisée en React, Node.js et Laravel.
      </p>

      <div className="flex justify-center mb-8">
        <img
          src={aboutImg}
          alt="about"
          className="w-72 rounded-xl shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="border rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className="font-semibold">{item.value}</p>
          </div>
        ))}
      </div>





    </section>
  );
}