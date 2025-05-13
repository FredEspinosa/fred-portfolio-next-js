"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/header";
import ImgWebHelena from "./assets/images/Helena_LOGO.png";
import ImgWebConsorcio from "./assets/images/circulo-logo-horizontal.png";
import ImgWebPalacio from "./assets/images/el-palacio-de-hierro.svg";
import CustomizedSwitches from "./components/switch_ios";
import SocialMenu from "./components/social_menu";

interface Project {
  title: string;
  description: string;
  url: string;
  tech: string[];
  image: any;
}

const Home: React.FC = () => {
  const [language, setLanguage] = useState<"es" | "en">("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "es" || storedLang === "en") {
      setLanguage(storedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const projects: Project[] = [
    {
      title: "Helena",
      description:
        language === "es"
          ? "Aplicación tipo Tinder para citas, con chat en tiempo real y sistema de matches."
          : "Tinder-like dating app with real-time chat and matching system.",
      url: "https://helena-app-beta.vercel.app/",
      tech: ["React", "Firebase", "Swiper", "Bootstrap"],
      image: ImgWebHelena,
    },
    {
      title: "Consorcio",
      description:
        language === "es"
          ? "Aplicación web de autenticación biométrica para gestión de consorcios."
          : "Biometric authentication web app for consortium management.",
      url: "https://app.consorcio-dicio.com:1003/login",
      tech: ["React", "Vite", "Bootstrap", "Facetec"],
      image: ImgWebConsorcio,
    },
    {
      title: "Dicio - Apertura Remota",
      description:
        language === "es"
          ? "Aplicación de apertura de cuentas con validación facial en tiempo real."
          : "Account opening application with real-time facial validation.",
      url: "https://web-celd-1-1.vercel.app/inicio",
      tech: ["React", "Node.js", "Microblink", "Facetec"],
      image:
        "https://dco-bucket-assets-prod.obs.na-mexico-1.myhuaweicloud.com/eb97bcad-b465-49f2-b5e0-d2ed1751f0b1/logo.png",
    },
    {
      title: "TAG Airlines",
      description:
        language === "es"
          ? "Sitio oficial de aerolínea para compra de boletos."
          : "Official airline website for purchasing tickets.",
      url: "https://tagairlines.com/es-gt/",
      tech: ["Angular", "JavaScript", "SCSS"],
      image: "https://tagairlines.com/img/navbar/logo_TAG.svg",
    },
    {
      title: "Los Eme",
      description:
        language === "es"
          ? "Sitio web para compra de comida mexicana."
          : "Mexican food brand website.",
      url: "https://www.loseme.com.mx/",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "https://www.loseme.com.mx/assets/img/home/los-eme-logo-white.svg",
    },
    {
      title: "Palacio de Hierro",
      description:
        language === "es"
          ? "Iframe para dinámica de respuestas aleatorias en tienda mexicana."
          : "Iframe for a Mexican clothing store used in a random response dynamic.",
      url: "https://fred-portfolio-git-main-fredespinosa-projects.vercel.app/palacio-hierro/iframe.html",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: ImgWebPalacio,
    },
    {
      title: "NRFM Finance México",
      description:
        language === "es"
          ? "Sitio web para obtener un financiamiento automotriz."
          : "Website for applying for car financing.",
      url: "https://www.nrfm.mx/",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "https://nrfm.mx/assets/img/logo-nrfm.svg",
    },
  ];

  return (
    <div>
      <Header 
        title={language === "es" ? "Porta folio" : "Port Folio"}
        subtitle={"Alfredo Espinosa"}
        description={language === "es" ? "Desarrollador Front-End" : "Front-End Developer"}
      />
      <div className="buton_fixed">      
        <CustomizedSwitches onToggle={toggleLanguage}/>
        <br />
        <SocialMenu />
      </div>
      <main className="min-h-screen bg-gray-100 p-8">
        <div id="AboutMe" className="container-about-me flex flex-row flex-wrap ">
          <h1 className="basis-3/3  md:basis-1/3 text-4xl font-bold mb-6 text-right justify-center md:justify-end text-indigo-700 text_right d-flex align-items-anchor">
            {language === "es" ? "Acerca" : "All"}{" "}
            <span style={{ fontSize: "1.5rem" }}>
              {language === "es" ? "de" : "about"}
              <br />
              {language === "es" ? "mí" : "me"}
            </span>
          </h1>
          <p className="basis-3/3 md:basis-2/3 text-start mb-12 text-gray-700 max-w-2xl mx-auto">
            {language === "es"
              ? "Soy desarrollador Front End con más de 7 años de experiencia en el desarrollo de aplicaciones web. He trabajado en proyectos de e-commerce, reconocimiento facial en tiempo real, campañas informativas, proyectos freelance y soluciones internas para empresas de alcance internacional. Me especializo en crear interfaces modernas y funcionales, utilizando tecnologías actuales y manteniéndome siempre abierto a aprender nuevas herramientas. Trabajo con fluidez, compromiso y pasión por lo que hago"
              : "I’m a Front-End Developer with over 7 years of experience in web application development. I’ve worked on e-commerce platforms, real-time facial recognition systems, informational campaigns, freelance projects, and internal solutions for internationally recognized companies. I specialize in building modern, functional interfaces using up-to-date technologies, and I’m always open to learning new tools. I work with fluency, commitment, and a passion for what I do."}
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
                  <strong>
                    {language === "es" ? "Tecnologías:" : "Technologies:"}
                  </strong>{" "}
                  {project.tech.join(", ")}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline text-link"
                >
                  {language === "es" ? "Ver proyecto" : "See project"}
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