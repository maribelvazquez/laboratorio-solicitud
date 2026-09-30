# Solicitud de participación · Laboratorio de Casos

Página de solicitud con las 24 preguntas del formulario, base de datos en Firebase y panel del comité con descarga a Excel.

## Qué hay aquí

| Archivo | Para qué |
|---|---|
| `index.html` | La página pública de solicitud (5 secciones, barra de avance, confirmación). |
| `admin.html` | Panel del comité: entrar con Google, ver solicitudes, cambiar estatus y **Descargar Excel**. |
| `config.js` | **Lo único que se edita:** configuración de Firebase, datos del Laboratorio y correos del comité. |
| `preguntas.js` | Las preguntas. Para cambiar un texto u opción, se edita aquí. |
| `firestore.rules` | Seguridad: el público sólo puede crear solicitudes; sólo el comité las lee. |
| `aviso-privacidad.html` | Lugar reservado para el aviso de privacidad (lo prepara LEX-GMC). |

## Puesta en marcha (30–40 minutos, una sola vez)

1. **Crear el proyecto de Firebase.** En https://console.firebase.google.com, «Agregar proyecto», por ejemplo `laboratorio-casos`. Google Analytics no hace falta.
2. **Crear la base.** En el menú, *Firestore Database* → *Crear base de datos* → modo producción → ubicación `nam5` (Estados Unidos) o la más cercana disponible.
3. **Activar el acceso con Google para el comité.** *Authentication* → *Comenzar* → *Google* → habilitar.
4. **Registrar la app web.** *Configuración del proyecto* (engrane) → *Tus apps* → ícono `</>` → nombre `solicitud`. Copia el bloque `firebaseConfig` y pégalo en `config.js`, reemplazando los `PEGAR_AQUI`.
5. **Correos del comité.** Agrega los correos (con cuenta de Google) en `config.js` → `administradores` **y** en `firestore.rules` → `esComite`. Deben ser los mismos en los dos archivos.
6. **Publicar las reglas.** *Firestore Database* → *Reglas*: pega el contenido de `firestore.rules` y *Publicar*.
7. **Subir la página**, con una de estas dos opciones:
   - **GitHub Pages:** crea un repositorio, sube todos los archivos, *Settings* → *Pages* → rama `main`, carpeta raíz. La liga queda como `https://<usuario>.github.io/<repo>/`. Luego, en Firebase, *Authentication* → *Settings* → *Dominios autorizados*, agrega `<usuario>.github.io`.
   - **Firebase Hosting:** con la herramienta de Firebase instalada, `firebase login`, `firebase use <proyecto>` y `firebase deploy`. La liga queda como `https://<proyecto>.web.app`.
8. **Probar.** Envía una solicitud de prueba, entra a `admin.html`, revisa que aparezca, descarga el Excel y cambia el estatus de la prueba a «no seleccionada».

Mientras `config.js` tenga `PEGAR_AQUI`, la página muestra «Modo de prueba» y no guarda nada.

## Operación

- **Excel:** en `admin.html`, botón *Descargar Excel*. Trae una fila por solicitud, todas las respuestas, la fecha de recepción, el estatus y si aplica la cuota preferente (recibida antes del 15-oct-2026).
- **Estatus:** recibida → en revisión → aceptada / lista de espera / no seleccionada → pagada.
- Si hay coincidencia en listas, el estatus es «no seleccionada» y al solicitante sólo se le dice que el cupo se llenó.

## Pendientes antes de publicar

- Aviso de privacidad definitivo (LEX-GMC) en `aviso-privacidad.html`.
- Fechas y horario en `config.js` cuando Amanda los confirme.
- Opcional: dominio propio (p. ej. `laboratorio.gmc360.com.mx`) apuntando a GitHub Pages o a Firebase Hosting.
