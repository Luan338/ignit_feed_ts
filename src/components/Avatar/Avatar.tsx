import styles from "./Avatar.module.css";

interface AvatarProps{
  src: string;
  main_avatar?: boolean;
  text?: string;
}

export default function Avatar({src, text, main_avatar}: AvatarProps) {
  return (
    <img className={main_avatar ? styles.perfil_style : styles.perfil} src={src} alt={text} />
  )
}

