import React from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Login from "./Login";
import Header from "./Header";
import { Link } from "react-router-dom";
import '../style/app.css'

function Menu() {
  return (
    <>
      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Modulos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding no-scroll" >
          <IonList>
            <IonItem >
            <Link
                to="/home"
                style={{ textDecoration: "none", color: "gray" }}
              >Home</Link>
            </IonItem>
            <IonItem>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "gray" }}
              >
                About
              </Link>
            </IonItem>
            <IonItem>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Login
              </Link>
            </IonItem>

            <IonItem>
              <Link
                to="/usuarios"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Usuarios
              </Link>
            </IonItem>

            <IonItem onClick={()=>{console.log("cerrando sesion")}} style={{ textDecoration: "none", color: "gray" }}>
                Cerrar Sesion
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
}
export default Menu;
