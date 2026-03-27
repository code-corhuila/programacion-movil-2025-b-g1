import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonInput, IonItem, IonLabel } from '@ionic/react';
import { User_Account } from '../models/user_account.model';
import './loginform.css';

const LoginForm: React.FC = () => {
    const history = useHistory();

    const [form, setForm] = useState<User_Account>({
        names: '',
        last_names: '',
        email: '',
        phone: 0,
        username: '',
        password_hash: '',
        role: '',
    });

    const handleChange = (field: keyof User_Account, value: string | number) => {
        setForm({ ...form, [field]: value });
    };

    const handleNavigate = () => {
        history.push('/nueva-pantalla');
    };

    return (
        <form className="login-container">
            <img
                src="/assets/Logo-corhuila.png"
                alt="Logo Corhuila"
                className="login-logo"
                style={{
                    width: 140,
                    marginTop: '-20px',
                    marginBottom: '24px',
                    background: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                    zIndex: 10,
                    position: 'relative',
                }}
            />
            <IonItem className="login-item">
                <IonLabel position="floating">NOMBRES</IonLabel>
                <IonInput
                    type="text"
                    autocomplete="off"
                    value={form.names}
                    onIonChange={e => handleChange('names', e.detail.value!)}
                />
            </IonItem>
            <IonItem className="login-item">
                <IonLabel position="floating">APELLIDOS</IonLabel>
                <IonInput
                    type="text"
                    autocomplete="off"
                    value={form.last_names}
                    onIonChange={e => handleChange('last_names', e.detail.value!)}
                />
            </IonItem>
            <IonItem className="login-item">
                <IonLabel position="floating">CORREO ELECTRÓNICO</IonLabel>
                <IonInput
                    type="email"
                    autocomplete="off"
                    value={form.email}
                    onIonChange={e => handleChange('email', e.detail.value!)}
                />
            </IonItem>
            <IonItem className="login-item">
                <IonLabel position="floating">TELÉFONO</IonLabel>
                <IonInput
                    type="tel"
                    autocomplete="off"
                    value={form.phone || '+57'}
                    onIonChange={e => handleChange('phone', e.detail.value || '')}
                />
            </IonItem>
            <IonItem className="login-item">
                <IonLabel position="floating">USUARIO</IonLabel>
                <IonInput
                    autocomplete="off"
                    value={form.username}
                    onIonChange={e => handleChange('username', e.detail.value!)}
                />
            </IonItem>
            <IonItem className="login-item">
                <IonLabel position="floating">CONTRASEÑA</IonLabel>
                <IonInput
                    type="password"
                    autocomplete="off"
                    value={form.password_hash}
                    onIonChange={e => handleChange('password_hash', e.detail.value!)}
                />
            </IonItem>
            <IonItem className="login-item">
                <IonLabel position="floating">ROL</IonLabel>
                <IonInput
                    autocomplete="off"
                    value={form.role}
                    onIonChange={e => handleChange('role', e.detail.value!)}
                />
            </IonItem>
            <div 
                className="boton-verde" 
                onClick={handleNavigate}
                style={{
                    width: '100%',
                    background: '#39d353',
                    color: '#ffffff',
                    borderRadius: '28px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginTop: '32px',
                    boxShadow: '0 4px 16px rgba(57, 211, 83, 0.15)',
                    letterSpacing: '1px',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    userSelect: 'none',
                }}
            >
                REGISTRAR
            </div>
        </form>
    );
};

export default LoginForm;