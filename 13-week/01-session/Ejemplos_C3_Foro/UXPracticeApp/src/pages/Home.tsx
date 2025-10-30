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
  IonToggle
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [autenticado, setAutenticado] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState('');

  const manejarModoOscuro = (checked: boolean) => {
    setDarkMode(checked);
    document.body.classList.toggle('dark', checked);
  };

  const manejarLogin = () => {
    // Validación simple simulada
    if (usuario === 'admin' && clave === '1234') {
      setAutenticado(true);
      setError('');
      setTimeout(() => setAutenticado(false), 3000);
    } else {
      setError('Credenciales incorrectas. Intenta de nuevo.');
    }
    // Buenas prácticas: limpiar campos después de intentar autenticación
    setClave('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar-azul">
          <IonTitle>UXSecureApp</IonTitle>
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
          />
        </IonItem>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <IonItem>
            <IonLabel position="floating">Usuario</IonLabel>
            <IonInput
              value={usuario}
              onIonChange={(e) => setUsuario(e.detail.value!)}
              type="text"
              required
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput
              value={clave}
              onIonChange={(e) => setClave(e.detail.value!)}
              type="password"
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

          {error && (
            <IonText color="danger">
              <p>{error}</p>
            </IonText>
          )}

          {autenticado && (
            <IonText color="success">
              <p>Inicio de sesión exitoso. Bienvenido, {usuario}.</p>
            </IonText>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
