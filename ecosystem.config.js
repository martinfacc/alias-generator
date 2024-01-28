export default {
  apps: [
    {
      name: "alias-generator", // Un nombre para tu aplicación
      script: "serve",
      env: {
        PM2_SERVE_PATH: "./dist", // El directorio de los archivos construidos por Vite
        PM2_SERVE_PORT: 3609, // El puerto en el que tu aplicación será accesible
        PM2_SERVE_SPA: "true", // Servir la aplicación como una Single Page Application
        PM2_SERVE_HOMEPAGE: "/index.html", // Página principal para SPA
      },
    },
  ],
};
