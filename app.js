const questions = [
  {
    topic: "Vitivinicultura",
    question:
      "¿Cuál es la cepa de uva tinta más emblemática y plantada de Mendoza, que le ha dado fama mundial?",
    possibleAnswers: ["Cabernet Sauvignon", "Malbec", "Syrah", "Tannat"],
    correctAnswer: "Malbec",
  },
  {
    topic: "Vitivinicultura",
    question:
      "¿Cómo se llama la fiesta popular más importante de Mendoza, que celebra el fin de la cosecha de la uva?",
    possibleAnswers: [
      "Fiesta del Sol",
      "Fiesta Nacional de la Vendimia",
      "Festival de Cosquín",
      "Fiesta de la Cerveza",
    ],
    correctAnswer: "Fiesta Nacional de la Vendimia",
  },
  {
    topic: "Vitivinicultura",
    question:
      "¿Cuál de estas regiones es considerada la 'Primera Zona' vitivinícola de Mendoza y cuna del Malbec?",
    possibleAnswers: ["Valle de Uco", "San Rafael", "Luján de Cuyo", "Maipú"],
    correctAnswer: "Luján de Cuyo",
  },
  {
    topic: "Vitivinicultura",
    question:
      "¿Cómo se llama el sistema de canales de riego que distribuye el agua del deshielo por toda la provincia, vital para los viñedos?",
    possibleAnswers: ["Acueductos", "Acequias", "Diques", "Vertientes"],
    correctAnswer: "Acequias",
  },
  {
    topic: "Vitivinicultura",
    question:
      "Además del Malbec, ¿cuál es la uva blanca más característica de la región cuyana, conocida por su perfil aromático?",
    possibleAnswers: [
      "Chardonnay",
      "Sauvignon Blanc",
      "Torrontés",
      "Pinot Grigio",
    ],
    correctAnswer: "Torrontés",
  },
  {
    topic: "Geografía y Naturaleza",
    question:
      "¿Cómo se llama el pico más alto de América, ubicado en la Cordillera de los Andes dentro del territorio mendocino?",
    possibleAnswers: [
      "Cerro Fitz Roy",
      "Cerro Torre",
      "Volcán Lanín",
      "Cerro Aconcagua",
    ],
    correctAnswer: "Cerro Aconcagua",
  },
  {
    topic: "Geografía y Naturaleza",
    question:
      "¿Qué famoso monumento natural es una formación rocosa que crea un puente sobre el río Las Cuevas?",
    possibleAnswers: [
      "Puente del Inca",
      "Garganta del Diablo",
      "Cañón del Atuel",
      "El Infiernillo",
    ],
    correctAnswer: "Puente del Inca",
  },
  {
    topic: "Geografía y Naturaleza",
    question:
      "El principal río que provee de agua a la ciudad de Mendoza y sus alrededores es el:",
    possibleAnswers: [
      "Río Diamante",
      "Río Atuel",
      "Río Mendoza",
      "Río Colorado",
    ],
    correctAnswer: "Río Mendoza",
  },
  {
    topic: "Geografía y Naturaleza",
    question:
      "¿Cuál es el embalse más importante y turístico cerca de la ciudad de Mendoza, ideal para deportes acuáticos?",
    possibleAnswers: [
      "Embalse El Chocón",
      "Embalse de Salto Grande",
      "Dique Potrerillos",
      "Lago Nahuel Huapi",
    ],
    correctAnswer: "Dique Potrerillos",
  },
  {
    topic: "Geografía y Naturaleza",
    question:
      "El gran pulmón verde de la Ciudad de Mendoza, diseñado por el paisajista Carlos Thays, es el:",
    possibleAnswers: [
      "Parque Nacional Talampaya",
      "Parque Lezama",
      "Parque General San Martín",
      "Bosques de Palermo",
    ],
    correctAnswer: "Parque General San Martín",
  },
  {
    topic: "Historia y Cultura",
    question:
      "¿Qué prócer argentino fue Gobernador de Cuyo y organizó desde Mendoza el Cruce de los Andes?",
    possibleAnswers: [
      "Manuel Belgrano",
      "Domingo F. Sarmiento",
      "Juan Manuel de Rosas",
      "José de San Martín",
    ],
    correctAnswer: "José de San Martín",
  },
  {
    topic: "Historia y Cultura",
    question:
      "¿Qué desastre natural destruyó por completo la ciudad de Mendoza en 1861, obligando a su reconstrucción en una nueva ubicación?",
    possibleAnswers: [
      "Una inundación",
      "Un terremoto",
      "Una erupción volcánica",
      "Un alud",
    ],
    correctAnswer: "Un terremoto",
  },
  {
    topic: "Historia y Cultura",
    question: "¿Quién fue el fundador de la ciudad de Mendoza en 1561?",
    possibleAnswers: [
      "Jerónimo Luis de Cabrera",
      "Juan de Garay",
      "Pedro del Castillo",
      "Pedro de Mendoza",
    ],
    correctAnswer: "Pedro del Castillo",
  },
  {
    topic: "Historia y Cultura",
    question:
      "El principal pueblo originario que habitó el territorio de lo que hoy es Mendoza fueron los:",
    possibleAnswers: ["Guaraníes", "Diaguitas", "Tehuelches", "Huarpes"],
    correctAnswer: "Huarpes",
  },
  {
    topic: "Historia y Cultura",
    question: "El 'Área Fundacional' de Mendoza alberga las ruinas de:",
    possibleAnswers: [
      "Un fuerte militar español",
      "La primera bodega de la provincia",
      "La ciudad previa al terremoto de 1861",
      "Un asentamiento incaico",
    ],
    correctAnswer: "La ciudad previa al terremoto de 1861",
  },
  {
    topic: "Turismo y Gastronomía",
    question:
      "¿Cuál es el centro de esquí más famoso y grande de Mendoza, reconocido a nivel internacional?",
    possibleAnswers: [
      "Cerro Catedral",
      "Cerro Castor",
      "Las Leñas",
      "Chapelco",
    ],
    correctAnswer: "Las Leñas",
  },
  {
    topic: "Turismo y Gastronomía",
    question:
      "Un plato típico de la gastronomía mendocina es la carne cocida lentamente dentro de una masa de pan. Se llama:",
    possibleAnswers: [
      "Locro",
      "Carne a la olla",
      "Empanada gigante",
      "Carne a la masa",
    ],
    correctAnswer: "Carne a la masa",
  },
  {
    topic: "Turismo y Gastronomía",
    question:
      "¿Qué actividad de aventura es muy popular en los rápidos del Río Mendoza?",
    possibleAnswers: [
      "Esquí acuático",
      "Navegación a vela",
      "Rafting",
      "Buceo",
    ],
    correctAnswer: "Rafting",
  },
  {
    topic: "Turismo y Gastronomía",
    question:
      "Además de bodegas, ¿qué tipo de establecimiento es muy común en las zonas rurales de Mendoza para la producción de aceite de oliva?",
    possibleAnswers: [
      "Fábricas de chocolate",
      "Granjas de arándanos",
      "Olivícolas",
      "Ingenios azucareros",
    ],
    correctAnswer: "Olivícolas",
  },
  {
    topic: "Turismo y Gastronomía",
    question:
      "Un destino turístico muy conocido por sus aguas termales naturales en la precordillera es:",
    possibleAnswers: [
      "Termas de Río Hondo",
      "Termas de Fiambalá",
      "Termas de Cacheuta",
      "Termas de Copahue",
    ],
    correctAnswer: "Termas de Cacheuta",
  },
];

//Elementos del DOM
const quizContainer = document.getElementById("quizContainer");
const resultsContainer = document.getElementById("resultsContainer");
const quizProgress = document.getElementById("quizProgress");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
const restartButton = document.getElementById("restartButton");

//Variables y estados del quiz
let currentQuestionIndex = 0;
let score = 0;

function handleQuestion(index) {
  //Ocultar resultados y mostrar quiz
  quizContainer.style.display = "block";
  resultsContainer.classList.remove("show");

  // Manejar barra de progreso
  quizProgress.innerHTML = "";
  questions.forEach(() => {
    quizProgress.innerHTML += "<span></span>";
  });
  const spans = document.querySelectorAll("#quizProgress span");
  for (let i = 0; i <= index; i++) {
    spans[i].classList.add("seen");
  }

  const currentQuestion = questions[index];
  questionContainer.innerHTML = `<p>${currentQuestion.topic}</p><p>${currentQuestion.question}</p>`;

  answerContainer.innerHTML = "";
  currentQuestion.possibleAnswers.forEach((answer) => {
    answerContainer.innerHTML += `<button>${answer}</button>`;
  });

  const answerButtons = document.querySelectorAll("#answerContainer button");

  answerButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const selectedButton = e.target;
      const isCorrect =
        selectedButton.textContent === currentQuestion.correctAnswer;

      answerButtons.forEach((btn) => (btn.disabled = true));

      if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
      } else {
        selectedButton.classList.add("incorrect");
        answerButtons.forEach((btn) => {
          if (btn.textContent === currentQuestion.correctAnswer) {
            btn.classList.add("correct");
          }
        });
      }

      setTimeout(() => {
        // === AQUÍ ESTABA EL ERROR ===
        if (currentQuestionIndex < questions.length - 1) {
          currentQuestionIndex++;
          handleQuestion(currentQuestionIndex);
        } else {
          showResults();
        }
        // LA LÍNEA ERRÓNEA `handleQuestion(currentQuestionIndex);` FUE ELIMINADA DE AQUÍ
      }, 1500);
    });
  });
}

function showResults() {
  quizContainer.style.display = "none";
  resultsContainer.classList.add("show");

  const resultEmoji = document.getElementById("resultEmoji");
  const resultText = document.getElementById("resultText");
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  let emoji = "";
  if (percentage >= 80) {
    emoji = "🏆";
    resultText.innerHTML = `¡Excelente! Acertaste <b>${score}</b> de <b>${totalQuestions}</b> preguntas.`;
  } else if (percentage >= 50) {
    emoji = "🎉";
    resultText.innerHTML = `¡Buen trabajo! Acertaste <b>${score}</b> de <b>${totalQuestions}</b> preguntas.`;
  } else {
    emoji = "🤔";
    resultText.innerHTML = `Puedes mejorar. Acertaste <b>${score}</b> de <b>${totalQuestions}</b> preguntas.`;
  }
  resultEmoji.textContent = emoji;
}

restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  handleQuestion(currentQuestionIndex);
});

// Iniciar el quiz
handleQuestion(currentQuestionIndex);
