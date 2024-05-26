import React from "react";
import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonMenuButton,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Page from "./pages/Page";
import Login from "./components/Login";
import Usuario from "./components/Usuario";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";

import "./theme/variables.css";
import About from "./components/About";
import Home from "./components/Home";
import "./style/app.css";
import { AuthProvider } from "./components/UserContext";

setupIonicReact();

const App: React.FC = () => {
  return (
    <AuthProvider>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonPage id="main-content">
              <IonHeader>
                <IonToolbar>
                  <IonTitle>SGI</IonTitle>
                  <IonButtons slot="end">
                    <IonMenuButton></IonMenuButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding no-scroll" style={{width:'100%', heigth:'100%'}}>
                <IonRouterOutlet id="main">
                  <Route path="/login" component={Login} />
                  <Route path="/home"  component={Home} />
                  <Route path="/about"  component={About} />
                  <Route path="/usuarios" component={Usuario} />
                  <Redirect exact from="/" to="/login" />
                  <Route render={() => <Redirect to="/login" />} />
                </IonRouterOutlet>
              </IonContent>
            </IonPage>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </AuthProvider>
  );
};

export default App;
