import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/header";
import ImgWebHelena from "./assets/images/Helena_LOGO.png"
import ImgWebConsorcio from "./assets/images/circulo-logo-horizontal.png"

interface Project {
  title: string;
  description: string;
  url: string;
  tech: string[];
  image: any;
}

const projects: Project[] = [
  {
    title: "Helena",
    description:
      "App tipo Tinder para citas, con chat en tiempo real y sistema de matches.",
    url: "https://helena-app-beta.vercel.app/",
    tech: ["React", "Firebase", "Swiper", "Bootstrap"],
    image: ImgWebHelena,
  },
  {
    title: "Consorcio",
    description:
      "Aplicación web de autenticación biométrica para gestión de consorcios.",
    url: "https://app.consorcio-dicio.com:1003/login",
    tech: ["React", "Vite", "Bootstrap", "Facetec"],
    image: ImgWebConsorcio,
  },
  {
    title: "Dicio - Apertura Remota",
    description:
      "Aplicación de apertura de cuentas con validación facial en tiempo real.",
    url: "https://web-celd-1-1.vercel.app/inicio",
    tech: ["React", "Node.js", "Microblink", "Facetec"],
    image: "https://dco-bucket-assets-prod.obs.na-mexico-1.myhuaweicloud.com/eb97bcad-b465-49f2-b5e0-d2ed1751f0b1/logo.png",
  },
  {
    title: "TAG Airlines",
    description: "Sitio oficial de aerolínea para compra de boletos.",
    url: "https://tagairlines.com/es-gt/",
    tech: ["Angular", "JavaScript", "SCSS"],
    image: "https://tagairlines.com/img/navbar/logo_TAG.svg",
  },
  {
    title: "Los Eme",
    description: "Landing page de marca de ropa mexicana.",
    url: "https://www.loseme.com.mx/",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "https://www.loseme.com.mx/assets/img/home/los-eme-logo-white.svg",
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <Header />

      <main className="min-h-screen bg-gray-100 p-8">
        <div className=" container-about-me grid grid-cols-6 flex-wrap gap-4">
          <h1 className="col-start-1 md:col-end-3 text-4xl font-bold mb-6 text-center text-indigo-700 text_right d-flex align-items-anchor ">
            All{" "}
            <span style={{ fontSize: "1.5rem" }}>
              about <br /> me
            </span>
          </h1>
          <p className="col-span-2 md:col-end-7 text-start mb-12 text-gray-700 max-w-2xl mx-auto">
            I’m a Front-End Developer with over 7 years of experience in web
            application development. I’ve worked on e-commerce platforms,
            real-time facial recognition systems, informational campaigns,
            freelance projects, and internal solutions for internationally
            recognized companies. I specialize in building modern, functional
            interfaces using up-to-date technologies, and I’m always open to
            learning new tools. I work with fluency, commitment, and a passion
            for what I do.
            {/* Soy desarrollador Front End con más de 7 años de experiencia en el
            desarrollo de aplicaciones web. He trabajado en proyectos de
            e-commerce, reconocimiento facial en tiempo real, campañas
            informativas, proyectos freelance y soluciones internas para empresas
            de alcance internacional. Me especializo en crear interfaces modernas
            y funcionales, utilizando tecnologías actuales y manteniéndome siempre
            abierto a aprender nuevas herramientas. Trabajo con fluidez,
            compromiso y pasión por lo que hago.{" "} */}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-personal rounded-xl shadow-md overflow-hidden"
            >
              <div className="img-web-site-container">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="img-web-site"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-indigo-600 subtitle-card">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Tecnologías:</strong> {project.tech.join(", ")}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline text-link"
                >
                  Ver proyecto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
