// Preguntas de la solicitud (versión de Samara, 29-sep-2026).
// tipo: texto | correo | parrafo | opcion | casillas | acepto
export const secciones = [
  {
    titulo: "Identificación",
    descripcion: "Estos datos se utilizan para la emisión de su constancia y para el proceso de verificación descrito en el aviso de privacidad.",
    preguntas: [
      { id: "p1_nombre", texto: "Nombre completo", ayuda: "Tal como aparece en su identificación oficial.", tipo: "texto", req: true, max: 150 },
      { id: "p2_correo", texto: "Correo electrónico institucional", ayuda: "A esta dirección enviaremos la resolución de su solicitud.", tipo: "correo", req: true, max: 150 },
      { id: "p3_whatsapp", texto: "Teléfono de contacto con WhatsApp", ayuda: "Incluya la clave del país. Lo usamos únicamente para el grupo de coordinación del Laboratorio.", tipo: "texto", req: true, max: 30 },
      { id: "p4_ubicacion", texto: "País y ciudad donde reside", tipo: "texto", req: true, max: 120 },
      { id: "p5_institucion", texto: "Institución o empresa donde labora", ayuda: "Indique la razón social completa.", tipo: "texto", req: true, max: 200 },
      { id: "p6_cargo", texto: "Cargo actual", tipo: "texto", req: true, max: 120 },
    ],
  },
  {
    titulo: "Perfil profesional",
    preguntas: [
      { id: "p7_sector", texto: "Sector de su institución", ayuda: "Elija la opción que mejor describa su actividad principal.", tipo: "opcion", req: true, otro: true, opciones: [
        "Entidad financiera (banco, casa de bolsa, SOFIPO, SOFOM, unión de crédito)",
        "Fintech, institución de tecnología financiera o activos virtuales",
        "Centro cambiario, transmisor de dinero o casa de cambio",
        "Actividad vulnerable — inmobiliaria o desarrollo",
        "Actividad vulnerable — notaría o fe pública",
        "Actividad vulnerable — metales, joyas u obras de arte",
        "Actividad vulnerable — servicios profesionales (contables o jurídicos)",
        "Actividad vulnerable — otra",
        "Consultoría o despacho especializado",
        "Sector público o autoridad",
      ]},
      { id: "p8_funcion", texto: "¿Qué función desempeña actualmente?", ayuda: "Puede elegir más de una.", tipo: "casillas", req: true, otro: true, opciones: [
        "Oficial de cumplimiento", "Administración de riesgos", "Auditoría interna", "Inteligencia financiera o análisis",
        "Investigaciones internas", "Prevención de fraude", "Área jurídica", "Dirección general o consejo",
      ]},
      { id: "p9_experiencia", texto: "Años de experiencia en prevención de lavado de dinero, cumplimiento, riesgos o auditoría", tipo: "opcion", req: true, opciones: [
        "Menos de 3 años", "De 3 a 5 años", "De 6 a 10 años", "Más de 10 años",
      ]},
      { id: "p10_area", texto: "¿Cuántas personas integran el área de cumplimiento de su institución?", tipo: "opcion", req: true, opciones: [
        "Soy la única persona", "De 2 a 5", "De 6 a 15", "Más de 15",
      ]},
    ],
  },
  {
    titulo: "Experiencia técnica",
    descripcion: "No hay respuestas correctas. Estas preguntas nos permiten calibrar el nivel del grupo y formar los equipos de trabajo.",
    preguntas: [
      { id: "p11_metodologia", texto: "¿Su institución cuenta con una metodología de evaluación de riesgos documentada?", tipo: "opcion", req: true, opciones: [
        "Sí, documentada y vigente", "En desarrollo", "No", "No lo sé",
      ]},
      { id: "p12_matriz", texto: "¿Ha participado directamente en la elaboración o actualización de una matriz de riesgos?", tipo: "opcion", req: true, opciones: [
        "Sí, la he elaborado", "Sí, he participado en su actualización", "No, pero la utilizo en mi operación", "No",
      ]},
      { id: "p13_ft", texto: "¿Su matriz contempla hoy el financiamiento al terrorismo como un factor diferenciado del lavado de dinero?", tipo: "opcion", req: true, opciones: [
        "Sí, con factores y señales propias", "Parcialmente: se menciona, pero no se evalúa por separado",
        "No: se atiende únicamente mediante consulta de listas", "No lo sé",
      ]},
      { id: "p14_reportes", texto: "¿Ha generado o analizado reportes de operaciones inusuales?", tipo: "opcion", req: true, opciones: [
        "Sí, de forma regular", "Ocasionalmente", "No",
      ]},
      { id: "p15_herramientas", texto: "¿Qué herramientas utiliza hoy en su operación?", ayuda: "Opcional. Puede elegir más de una.", tipo: "casillas", req: false, otro: true, opciones: [
        "Consulta de listas de personas bloqueadas y sanciones", "Monitoreo transaccional automatizado",
        "Análisis de vínculos o redes", "Fuentes abiertas (OSINT)", "Hojas de cálculo y revisión manual",
      ]},
    ],
  },
  {
    titulo: "Motivación",
    preguntas: [
      { id: "p16_motivo", texto: "¿Por qué desea participar en el Laboratorio?", ayuda: "Máximo 150 palabras aproximadamente.", tipo: "parrafo", req: true, max: 1000 },
      { id: "p17_problema", texto: "Describa un problema concreto de detección que enfrente hoy en su operación y que quisiera resolver", ayuda: "Entre más específico, mejor. Máximo 100 palabras aproximadamente.", tipo: "parrafo", req: true, max: 700 },
      { id: "p18_medio", texto: "¿Cómo se enteró del Laboratorio?", tipo: "opcion", req: true, otro: true, opciones: [
        "Jornada del 30 de septiembre", "Correo de GMC 360", "Redes sociales", "Invitación directa del CNT", "Recomendación de un colega",
      ]},
    ],
  },
  {
    titulo: "Compromisos",
    descripcion: "Las siguientes confirmaciones son necesarias para procesar su solicitud.",
    preguntas: [
      { id: "p19_asistencia", texto: "El Laboratorio se desarrolla en tres sesiones en vivo con trabajo en equipo. ¿Puede comprometerse a asistir a las tres de forma completa?", tipo: "opcion", req: true, opciones: [
        "Sí, a las tres", "Sí, aunque podría faltar a una", "No puedo comprometerme a las tres",
      ]},
      { id: "p20_seleccion", texto: "Entiendo que esta es una solicitud sujeta a un proceso de selección y que enviarla no garantiza un lugar.", tipo: "acepto", etiqueta: "Entiendo y acepto" },
      { id: "p21_cuota", texto: "Entiendo que, de ser aceptado, la cuota de participación es de $12,500 M.N., IVA incluido, y que debo cubrirla dentro de los {plazoPago} días naturales siguientes a la notificación para conservar mi lugar.", tipo: "acepto", etiqueta: "Entiendo y acepto" },
      { id: "p22_confidencialidad", texto: "Me comprometo a mantener la confidencialidad de los casos, materiales y discusiones del Laboratorio, y a no reproducirlos ni difundirlos.", tipo: "acepto", etiqueta: "Me comprometo" },
      { id: "p23_camara", texto: "Entiendo que las sesiones no se graban y que se trabaja con cámara encendida.", tipo: "acepto", etiqueta: "Entiendo y acepto" },
      { id: "p24_privacidad", texto: "He leído y acepto el aviso de privacidad, incluida la verificación de mis datos y su tratamiento conjunto por GMC 360 y el CNT.", tipo: "acepto", etiqueta: "He leído y acepto", liga: true },
    ],
  },
];
