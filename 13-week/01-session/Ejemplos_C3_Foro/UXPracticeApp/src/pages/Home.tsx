import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonText,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonToast,
  IonAlert
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [autenticado, setAutenticado] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState('');
  const [mostrarToast, setMostrarToast] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const manejarModoOscuro = (checked: boolean) => {
    setDarkMode(checked);
    document.body.classList.toggle('dark', checked);
  };

  const manejarLogin = () => {
    if (usuario.trim() === '' || clave.trim() === '') {
      setError('Por favor, completa todos los campos.');
      setMostrarAlerta(true);
      return;
    }

    if (usuario === 'admin' && clave === '1234') {
      setAutenticado(true);
      setError('');
      setMostrarToast(true);
      setTimeout(() => setAutenticado(false), 3000);
    } else {
      setError('Credenciales incorrectas. Intenta de nuevo.');
      setMostrarAlerta(true);
    }

    setClave('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar-azul">
          <IonTitle>UXPracticeApp</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        className={`ion-padding transition-bg ${darkMode ? 'modo-oscuro' : 'modo-claro'}`}
      >
        <IonItem lines="none">
          <IonLabel>Modo oscuro</IonLabel>
          <IonToggle
            checked={darkMode}
            onIonChange={(e) => manejarModoOscuro(e.detail.checked)}
            aria-label="Cambiar modo oscuro"
          />
        </IonItem>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <IonItem>
            <IonLabel position="floating">Usuario</IonLabel>
            <IonInput
              value={usuario}
              onIonChange={(e) => setUsuario(e.detail.value!)}
              type="text"
              placeholder="Ingresa tu usuario"
              aria-label="Campo de usuario"
              required
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput
              value={clave}
              onIonChange={(e) => setClave(e.detail.value!)}
              type="password"
              placeholder="Ingresa tu contraseña"
              aria-label="Campo de contraseña"
              required
            />
          </IonItem>

          <IonButton
            expand="block"
            onClick={manejarLogin}
            color={autenticado ? 'success' : 'primary'}
            style={{ marginTop: '20px' }}
          >
            {autenticado ? '🔐 Acceso concedido' : 'Iniciar sesión'}
          </IonButton>

          {autenticado && (
            <IonText color="success">
              <p>Bienvenido a UXPracticeApp, {usuario} 👋</p>
            </IonText>
          )}
        </div>

        {/* Retroalimentación visual inmediata */}
        <IonToast
          isOpen={mostrarToast}
          onDidDismiss={() => setMostrarToast(false)}
          message="Inicio de sesión exitoso 🎉"
          duration={2000}
          color="success"
        />

        <IonAlert
          isOpen={mostrarAlerta}
          onDidDismiss={() => setMostrarAlerta(false)}
          header="Atención"
          message={error}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
