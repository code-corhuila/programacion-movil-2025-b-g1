import React, { ReactNode } from 'react';
import { IonPage } from '@ionic/react';

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
    <IonPage style={{ background: '#ededed' }}>
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            background: '#ededed'
        }}>
            <div style={{
                width: '100%',
                maxWidth: 430,
                minHeight: '90vh',
                background: '#fff',
                borderRadius: 40,
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Encabezado verde compacto con curva abajo */}
                <div style={{ position: 'relative', width: '100%', height: '140px', background: 'transparent', overflow: 'visible', borderTopLeftRadius: 32, borderTopRightRadius: 32 }}>
                    {/* Fondo verde */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '140px',
                        background: '#39d353',
                        borderTopLeftRadius: 32,
                        borderTopRightRadius: 32,
                        zIndex: 0
                    }}></div>
                    {/* Curva blanca en la parte inferior del verde */}
                    <svg
                        viewBox="0 0 400 60"
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '60px',
                            zIndex: 1
                        }}
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,20 Q100,60 200,40 Q300,20 400,60 L400,60 L0,60 Z"
                            fill="#fff"
                        />
                    </svg>
                    {/* Flecha estilo Figma */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 24,
                            left: 24,
                            zIndex: 2,
                            cursor: 'pointer'
                        }}
                    >
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M30 12L18 24L30 36"
                                stroke="#fff"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    {/* Título */}
                    <div style={{ position: 'absolute', top: 32, right: 32, color: '#fff', fontWeight: 'bold', fontSize: 20, zIndex: 2 }}>
                        Registro
                    </div>
                </div>
                {/* Contenido principal */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: '0 16px', marginTop: '-40px' }}>
                    {children}
                </div>
                {/* Pie de página verde con curva arriba */}
                <div style={{ position: 'relative', width: '100%', height: '80px', background: '#39d353', overflow: 'hidden', borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}>
                    <svg
                        viewBox="0 0 400 60"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '60px',
                            zIndex: 1,
                            transform: 'rotate(180deg)'
                        }}
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,20 Q100,60 200,40 Q300,20 400,60 L400,60 L0,60 Z"
                            fill="#fff"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </IonPage>
);

export default AuthLayout;

