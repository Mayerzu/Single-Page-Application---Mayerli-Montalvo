Kodigo Music

App React para login/registro, explorar canciones (pop, rock, salsa) y gestionar perfil con tema claro/oscuro.

Despliegue

URL: https://single-page-application-mayerli-mon-lovat.vercel.app

Características

Login/Registro: Validación con react-hook-form, datos en localStorage.

Home: 10 canciones reales por categoría con filtro.

Perfil: Email, ícono Font Awesome, cambio tema, logout.

Diseño: Moderno, sin navbar en login/registro.

Tech: React, react-router-dom, react-hook-form, Font Awesome, Vercel.

Instalación Local

Clonar: git clone https://github.com/Mayerzu/Single-Page-Application---Mayerli-Montalvo.git

Navega: cd Single-Page-Application---Mayerli-Montalvo/kodigo-music

Instala: npm install && npm install @fortawesome/fontawesome-free

Ejecuta: npm run dev (http://localhost:3000)

Despliegue Vercel

Conecta repo GitHub en Vercel.
Configura: Root Directory: kodigo-music, Framework: Create React App.
Despliega: Accede a la URL.

Notas

Instala @fortawesome/fontawesome-free para el ícono de perfil.

Usa localStorage (sin backend).

Si hay errores: Remove-Item -Recurse -Force node_modules; Remove-Item -Force package-lock.json; npm install