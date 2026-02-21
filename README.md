# 🚀 Nimble Gravity - Frontend Challenge

Aplicación desarrollada como parte del proceso de selección para el rol de Junior Fullstack Developer en Nimble Gravity. 

El proyecto es una SPA (Single Page Application) construida en React que interactúa con una API REST para validar datos de candidato, consultar posiciones abiertas y enviar una postulación formal a un puesto específico.

## 🛠 Tecnologías Utilizadas

* **React 18** (Vite)
* **TypeScript** (Tipado estricto para modelos de dominio y respuestas de API)
* **CSS Puro / Inline Styles** (Mantenido simple por requerimientos del challenge)

## 🏗 Arquitectura y Decisiones de Diseño

El código fue estructurado siguiendo principios de **Clean Architecture** y separación de responsabilidades para garantizar escalabilidad y fácil mantenimiento:

1. **Domain (`/src/domain`)**: Contiene las interfaces e identidades de negocio puras (`Candidate`, `Job`), agnósticas a la UI o la red.
2. **Infrastructure/Repository (`/src/repository` y `/src/utils`)**: Centraliza y abstrae las llamadas a la API (`fetch`). Los repositorios se encargan de orquestar los endpoints, mientras que los helpers compartidos manejan el parseo de datos y errores HTTP de forma declarativa.
3. **Application (`/src/application` o `/src/hooks`)**: Custom Hooks (`useCandidate`, `useJobs`) que actúan como casos de uso, manejando el estado de la petición (loading, error, data) e inyectando los datos limpios a la vista.
4. **Presentation (`/src/components` y `/src/sections`)**: Componentes de React altamente declarativos. Se utilizó un patrón *Smart/Container Component* (`App.tsx`) para manejar el estado global y *Dumb/Presentational Components* (`CandidateSection`, `JobsSection`) enfocados únicamente en renderizar la UI.

## 🚀 Instalación y Uso Local

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/tu-repo.git](https://github.com/tu-usuario/tu-repo.git)
   cd tu-repo

2. Instalar dependencias:
   ```bash
   npm install

4. Iniciar aplicación:
   ```bash
   npm run dev

## ⚠️ Nota sobre Variables de Entorno (.env)
Para este challenge, el archivo .env se ha incluido deliberadamente en el control de versiones para facilitar la revisión y prueba del código en entorno local por parte de los evaluadores de Nimble Gravity.

En un escenario real de producción o si la aplicación estuviese desplegada, este archivo estaría estrictamente en el .gitignore y estas variables (VITE_API_BASE_URL, VITE_CANDIDATE_EMAIL) se configurarían de forma segura en los Environment Variables del servidor o plataforma de hosting
