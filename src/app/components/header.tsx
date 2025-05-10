import Image from "next/image";
import ImgProfile from "../assets/images/fred_espinosa_profile.jpeg";
import styles from "@/app/assets/css/Header/header.module.scss";


export default function Header() {
  return (
    <header className={styles.header}>
      {/* Fondo animado */}
      <div className={styles.white}>
        <div className={styles.squares}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={styles.square}></div>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className={styles.content}>
        <div className={styles.wrapimg}>
          <Image
            src={ImgProfile}
            alt="Foto de perfil"
            className={styles.avatar}
          />
        </div>
        <div className={styles.textBlock}>
          <p className={styles.title}>Port Folio</p>
          <p className={styles.subtitle}>Alfredo Espinosa</p>
          <p className={styles.description}>Front-End Developer</p>
        </div>
      </div>
    </header>
  );
}
