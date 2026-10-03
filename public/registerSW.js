// FisioGuia Service Worker Registration Helper
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Registra o Service Worker
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((registration) => {
        console.log('[FisioGuia PWA] Service Worker registrado com sucesso:', registration.scope);
      })
      .catch((error) => {
        console.warn('[FisioGuia PWA] Falha ao registrar Service Worker:', error);
      });
  });
}
