// ============================================================
// CONFIGURACIÓN · lo único que se edita antes de publicar
// ============================================================

// 1) Pega aquí la configuración de tu proyecto de Firebase
//    (Consola de Firebase → Configuración del proyecto → Tus apps → App web).
//    Mientras diga "PEGAR_AQUI", el formulario funciona en MODO DE PRUEBA:
//    no guarda nada y lo avisa en pantalla.
export const firebaseConfig = {
  apiKey: "AIzaSyCU-dLglgogZTpZkpFaxGRkmkbDJ_vNrBg",
  authDomain: "laboratorio-casos.firebaseapp.com",
  projectId: "laboratorio-casos",
  storageBucket: "laboratorio-casos.firebasestorage.app",
  messagingSenderId: "647419795777",
  appId: "1:647419795777:web:b7ec7975f957351d9969c0",
};

// 2) Datos del Laboratorio que aparecen en la página.
export const datos = {
  fechas: "Noviembre 2026 a enero 2027 · fechas por confirmar",
  horario: "Por confirmar",
  cuota: "$12,500 M.N., IVA incluido, por el ciclo completo",
  cuotaPreferente: "$11,250 M.N. para solicitudes recibidas antes del 15 de octubre",
  plazoPago: "5",                       // días naturales tras la notificación
  plazoRespuesta: "5 días hábiles",     // en cuánto se responde cada solicitud
  correoDudas: "capacitacion@gmc360.com.mx",
  avisoPrivacidad: "aviso-privacidad.html", // sustituir por la liga definitiva cuando LEX-GMC la valide
};

// 3) Correos autorizados para entrar al panel y descargar el Excel.
//    Deben coincidir con los que se ponen en firestore.rules.
export const administradores = [
  "mvazquez@gmc360.com.mx",
  "samara@gmc360.com.mx",
  "amanda@gmc360.com.mx",
  "arely@gmc360.com.mx",
];
