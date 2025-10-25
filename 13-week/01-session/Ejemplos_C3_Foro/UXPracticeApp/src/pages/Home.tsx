import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonText,
  IonToggle,
  IonItem,
  IonLabel
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [enviado, setEnviado] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const manejarEnvio = () => {
    setEnviado(true);
    setTimeout(() => setEnviado(false), 2000);
  };

  const manejarModoOscuro = (checked: boolean) => {
    setDarkMode(checked);
    document.body.classList.toggle('dark', checked);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar-azul">
          <IonTitle>UXPracticeApp</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        className={`ion-padding transition-bg ${
          darkMode ? 'modo-oscuro' : 'modo-claro'
        }`}
      >
        <IonItem lines="none">
          <IonLabel>Modo oscuro</IonLabel>
          <IonToggle
            checked={darkMode}
            onIonChange={(e) => manejarModoOscuro(e.detail.checked)}
          />
        </IonItem>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <IonButton onClick={manejarEnvio} color={enviado ? 'success' : 'primary'}>
            {enviado ? '✅ ¡Enviado!' : '📩 Enviar mensaje'}
          </IonButton>

          {enviado && (
            <IonText color="success">
              <p>Tu acción fue completada exitosamente.</p>
            </IonText>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
