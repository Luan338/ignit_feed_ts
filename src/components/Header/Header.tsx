import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.png";

export default function Header(){
  return(
    <>
      <header>
        <div className={styles.container_header}>
          <img src={Logo} alt="logo"/>
          <h1>Ignite Feed</h1>
        </div>
      </header>
    </>
  )
}