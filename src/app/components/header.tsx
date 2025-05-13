import Image from "next/image";
import ImgProfile from "../assets/images/fred_espinosa_profile.jpeg";
import styles from "../assets/css/header/header.module.scss";

type HeaderProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function Header({ title, subtitle, description }: HeaderProps) {
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
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </header>
  );
}
