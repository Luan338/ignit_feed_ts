import styles from "./Sidebar.module.css";
import developer from "../../assets/developer.jpg";
import perfil from "../../assets/eupo.jpg";
import {PencilLine} from "phosphor-react";
import Avatar from "../Avatar/Avatar";


export default function Sidebar(){
  return(
    <aside className={styles.container_aside}>
        <img className={styles.background_img} src={developer} />
        <Avatar main_avatar={true} src={perfil} text="Imagem Perfil"/>
        <div className={styles.profile}>
            <strong>Luan Eric</strong>
            <span>Programador III</span>
        </div>
        <footer>
            <a className={styles.btnEdit} href="#">
              <PencilLine size={25} />
              Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}