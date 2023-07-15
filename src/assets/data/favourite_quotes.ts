type quotesPROPS = {
  id: number;
  quote_es: string;
  quote_en: string;
  author?: string;
};

const quotes: quotesPROPS[] = [
  {
    id: 1,
    quote_es: "No permitas que el internet te apure, nadie postea sus fracasos",
    quote_en:
      "Don't let the internet rush you, no one is posting their failures",
  },
  {
    id: 2,
    quote_es: "¿Por qué dejar para mañana lo que puedes hacer hoy?",
    quote_en: "Why whould you leave for tomorrow that what you can do today",
  },
  {
    id: 3,
    quote_es:
      "Cuando la vida parece que apesta para ti, recuerda que hay alguien sentado del otro lado sacándole todo el jugo",
    quote_en:
      "When life seems to suck for you, remember there's another person sitting at the other end of the stick sucking all the juice",
  },
  {
    id: 4,
    quote_es:
      "Tiempos difíciles crean hombres fuertes, hombres fuertes crean buenos tiempos, buenos tiempos crean hombres débiles y finalmente hombres débiles crean tiempos difíciles",
    quote_en:
      "Hard times makes men strong, strong men create good times, good times create weak men and finnally weak men create hard times",
  },
  {
    id: 5,
    quote_es:
      "Tu peor enemigo siempre será tu mente sino la controlas, no solo porque es quien conoce tus debilidades, sino porque es quien las crea",
    quote_en:
      "Your worst enemy will always be your mind if you don't control it, not only because he knows your weaknesess, but because it is whom creates it",
    author: "Buda",
  },
  {
    id: 6,
    quote_es: "El silencio es sabio. Observa, escucha y luego actúa.",
    quote_en: "The silence is wise. Observe, listen and then act.",
  },
  {
    id: 7,
    quote_es:
      "Perseguir el amor y la aprobación es una manera segura de perder ambos",
    quote_en:
      "Seeking love and approval is a sure way to lose the awareness of both.",
  },
  {
    id: 8,
    quote_es: "La tuerca que chilla es la que consigue la grasa",
    quote_en: "The squeaky wheel gets the grease",
    author: "Dan Pena",
  },
  {
    id: 9,
    quote_es: "Las almas se reconocen por su vibración, no por su apariencia.",
    quote_en:
      "The souls are recognized by their vibration, not by their appearence",
  },
  {
    id: 10,
    quote_es:
      "Aquellos que no recuerdan el pasado estan condenados a repetirlo",
    quote_en: "Those who do not remember the past are condemned to repeat it",
    author: "Santayana",
  },
  {
    id: 11,
    quote_es:
      "Cuando una flor no florece, arreglas el ambiente en el cual crece, no a la flor.",
    quote_en:
      "When a flower hasn't flourish, you change the environment in which she grows, not the flower.",
  },
  {
    id: 12,
    quote_es:
      "Dicen que es más oscuro antes del anochecer, y que las estrellas brillan más en las noches más oscuras.",
    quote_en:
      "They say that is darker before dawn, and that stars shine the most in the darkest of nights",
  },
  {
    id: 13,
    quote_es:
      "Nadie gana al final. Todos envejecemos tan rápido, salvamos lo que podemos en nuestro corto tiempo aquí",
    quote_en:
      "No one wins in the end. We all age and die so fast, we only salvage what we can in our short time here",
    author: "TechLead",
  },
  {
    id: 14,
    quote_es:
      "A veces tienes que dar un paso atras para dar dos pasos adelante",
    quote_en:
      "Sometimes you have to take one step back to take two step forwards",
  },
  {
    id: 15,
    quote_es:
      "Las grandes mentes discuten ideas, las mentes intermedias discuten eventos y las pequeñas mentes discuten sobre la gente",
    quote_en:
      "Great minds discuss ideas, average minds discuss events, small minds discuss people",
  },
  {
    id: 16,
    quote_es: "Si no estás fallado, entonces no lo estás intentando en serio",
    quote_en: "If you're not failing, you're not trying hard enough",
  },
  {
    id: 17,
    quote_es:
      "Ser malo en algo, es el primer paso para ser medianamente bueno en algo",
    quote_en:
      "Sucking at something, is the first step to being sort of good at something",
  },
  {
    id: 18,
    quote_es:
      "Si estás pasando por un infierno, sigue adelante. ¿Por qué pararías en el infierno?",
    quote_en:
      "If you're going through hell, keep forward. Why would you stop in hell?",
  },
  {
    id: 19,
    quote_es: "Siempre que reprimes algo, volverá a brotar una y otra vez",
    quote_en:
      "Whenever you repress something, it will srout somewhere, again and again",
  },
  {
    id: 20,
    quote_es:
      "Una vez rota la inocencia no se puede volver atrás, solo se puede ir hasta la iluminación...",
    quote_en:
      "When innocence is broken you can't go back, you can only go forwards to enlightnenment",
  },
  {
    id: 21,
    quote_es:
      "El conocimiento es como una balsa, se usa para cruzar el rio, pero no te lo podés llevar encima, llevártelo encima te va a hacer sufrir y no vas a poder hacer nada mas.",
    quote_en:
      "Knowledge is like a raft, it has to be used to cross the river, but you can't carry it with you, carrying with it will only make you suffer and it will be impossible to do anything else",
  },
  {
    id: 22,
    quote_es:
      "Vive como si fueras a morir mañana. Aprende como si fueras a vivir por siempre",
    quote_en:
      "Live like you were to die tomorrow. Learn like you will be alive forever",
    author: "Mahatma Gandhi",
  },
  {
    id: 23,
    quote_es:
      "¿Sabes por qué el mundo está así? Por gente que se cree que sabe lo que hay que decir y se esfuerzan para mentir, mientras otros enfrentan lo que es vivir, y yo siento que no tengo ni que hablar, porque cada palabra puede usarse para el mal por gente estupida mental",
    quote_en:
      "Do you know why the world is like this? Because people think they know what they have to say and they lie to make sense. While others face what it takes to live, and I don't feel like I have to say anything, because every word can be used to do wrong because of stupid people",
    author: "Eminem",
  },
  {
    id: 24,
    quote_es: "Un ejército marcha en su estómago",
    quote_en: "An army march on its stomach - Napoleon",
  },
  {
    id: 25,
    quote_es: "Aquel que compite es como si estuviera muerto",
    quote_en: "He who competes it's like he's already dead",
    author: "Buda",
  },
  {
    id: 26,
    quote_es:
      "¿Cómo no ser una persona ruin, si el sistema me está forjando ruinmente... Si haces eso arrastrarás un karma que desde luego impedirá que obtengas los resultados adecuados. Estarás creando una serie de facturas y deudas que tarde o temprano acabarás pagando. El universo funciona con el equilibrio y si tu das mal y recibes mal, el universo te va a devolver eso",
    quote_en:
      "How not to be a ruin person, if the system is forging me to be ruin. If you do that you will carry a karma that of course will make your results wrong. You will be creating a series of taxes and debts that sooner or later you will have to pay. The universe works in equilibrium and if you give bad, you will receive the same. The universe will always return what you give",
    author: "JL - Mundo desconocido",
  },
  {
    id: 27,
    quote_es:
      "Hay preguntas para las que no tendrás respuesta ni dedicándoles 10 vidas. No te pierdas entre todo lo que pasa en tu mente",
    quote_en:
      "There are questions that you will not have answers not even dedicating them 10 lives. Don't lose yourself in everything that happens in your mind",
  },
  {
    id: 28,
    quote_es:
      "Las personas más solitarias son las mas generosas, las personas más tristes tiene las sonrisas más destellantes, y la gente más dañada son las más sabias, todo porque ellos no desean que los demás no sufran de la misma manera.",
    quote_en:
      "The loneliest people are the kindest, the saddest people smile the brightest, and the most damaged people are the wisest, all because they don't wish to see others suffer like they do",
  },
  {
    id: 29,
    quote_es:
      "Cuando los barcos estaban hechos de madera, los hombres estaban hechos de acero",
    quote_en: "When ships were made of wood, men were made of steel",
  },
  {
    id: 30,
    quote_es: "Se raro, se aleatorio, se quien sea seas",
    quote_en: "Be weird, be random, be who you are",
  },
  {
    id: 31,
    quote_es: "No hay hierba mala para una vaca hambrienta",
    quote_en: "There is no bad weed for a hungry cow",
  },
  {
    id: 32,
    quote_es:
      "Cuando la pobreza entra por la puerta, el falso amor sale por la ventana.",
    quote_en:
      "When poverty arises from the door, the false love goes out from the window",
  },
  {
    id: 33,
    quote_es: "Al pobre y al feo todo se le va en deseo",
    quote_en: "For the poor and ugly all goes to wishing",
  },
  {
    id: 34,
    quote_es: "En tierra de ciegos el tuerto es rey",
    quote_en: "In the land of blindness the one-eyed man is king",
  },
  {
    id: 35,
    quote_es:
      "Ten cuidado en quien confias, la sal y el azucar se ven parecidos",
    quote_en: "Be careful with who you trust, salt and sugar look the alike",
  },
  {
    id: 36,
    quote_es:
      "Si tuviese una hora para resolver un problema y mi vida dependiese de la solución. Gastaría 55 minutos determinando la pregunta a hacer... porque cuando sepa la pregunta correcta resolveré el problema en menos de 5 minutos",
    quote_en:
      "If I had an hour to solve the problem and my life depended on the solution. I would spend the first 55 minutes determining the proper question to ask... for once I know the proper question, I could solve the problem in less than five minutes",
    author: "Einstein",
  },
  {
    id: 37,
    quote_es:
      "El fracaso es una gran oportunidad para empezar otra vez con más inteligencia",
    quote_en:
      "Failure is a great opportunity to begin again with more intelligence",
  },
  {
    id: 38,
    quote_es: "Los barcos no pueden permanecer donde el agua es poco profunda",
    quote_en: "Ships cannot remain where the water is too shallow",
  },
  {
    id: 39,
    quote_es:
      "Lo que piensas, te conviertes. Lo que sientes, lo atraes. Lo que imaginas, lo creas",
    quote_en:
      "Whatever you think, you will be. What you feel, you attract. What you imagine, you create",
    author: "Buda",
  },
  {
    id: 40,
    quote_es:
      "Una de las cosas más dificiles es darte cuenta de que pregunta hacer, una vez que te das cuenta de la pregunta correcta la respuesta es relativamente fácil",
    quote_en:
      "One of the really tough things is figuring out what question to ask, once you figure it out the question the answer is relatively easy",
    author: "Elon Musk",
  },
  {
    id: 41,
    quote_es: "Como te trata la gente es su karma, como reaccionas es el tuyo",
    quote_en: "How people treat you is their karma, how you react is yours",
  },
  {
    id: 42,
    quote_es:
      "Aquel que blande su espada con pura fuerza no es fuerte de verdad",
    quote_en: "He who wield his sword with pure strenght is not real strong",
  },
  {
    id: 43,
    quote_es:
      "Rana del pozo que no conoce el mar. Aprende lo grande que es el mundo. Conócete a ti mismo, conoce al mundo y vuélvete más fuerte",
    quote_en:
      "Frog of the well who don't the sea. Learn how big is the world. Know yourself, know your world and become stronger",
    author: "Dracula Mihawk",
  },
  {
    id: 44,
    quote_es:
      "Es de tontos tenerle miedo a lo que aún estar por ver y conocerse -Itachi",
    quote_en: "Only fools fear something that is yet to be seen and known",
  },
  {
    id: 45,
    quote_es:
      "Las personas viven atadas a lo que ven como 'correcto' o 'verdadero', a eso es lo que llaman 'realidad', sin embargo, 'correcto' y 'verdadero' no son más que términos imprecisos, su realidad podría ser una ilusión. Todos viven por sus propias suposiciones",
    quote_en:
      "People are tied to that which they consider 'correct' or 'truthy', to that which they call 'reality', however, 'correct' or 'truth' are only imprecise terms, their reality could be an illusion. Everyone lives by their own supositions",
    author: "Itachi",
  },
  {
    id: 46,
    quote_es:
      "Si nunca rendirme significa ser un tonto, entonces prefiero ser un tonto toda la vida",
    quote_en:
      "If not giving up means to be a fool, I rather be a fool for the rest of my life",
    author: "Naruto Uzumaki",
  },
  {
    id: 47,
    quote_es: "Perdón por el retraso, me perdí por el sendero de la vida",
    quote_en: "I'm sorry for the delay, I was lost in the journey of life",
    author: "Kakashi Hatake (Naruto)",
  },
  {
    id: 48,
    quote_es:
      "El poder de creer en ti mismo puede ser el poder para cambiar el destino",
    quote_en:
      "The power of believing in you can be the power to change the destiny",
    author: "Rock Lee (Naruto)",
  },
  {
    id: 49,
    quote_es:
      "Si uno quiere saber quién es en realidad, tiene que mirarse a sí mismo y aceptarse... Los que no son capaces de aceptarse tal como son, terminarán fracasando. -Itachi",
    quote_en:
      "If one wants to know who in reality is, one has to look himself and accept things the way they are... Those who can't accept that will end up failing.",
  },
  {
    id: 50,
    quote_es:
      "El fin de una persona no es cuando muere. Si no cuando pierde la fe",
    quote_en:
      "The end of a person it's not when he dies. It's when he loses faith",
    author: "Hanzo (Naruto)",
  },
  {
    id: 51,
    quote_es:
      "Hasta un diminuto insecto tiene un alma, no destruyas la vida innecesariamente",
    quote_en:
      "Even a tiny insect has a soul, don't go destroying life randomly",
    author: "Shino Aburame (Naruto)",
  },
  {
    id: 52,
    quote_es:
      "Entrenar solo tiene sus límites, solo un rival es capaz de hacer que superemos esos límites.",
    quote_en:
      "Training only has it's limits. Only a rival can make you go beyond your limits",
    author: "Neji Hyuga (Naruto)",
  },
  {
    id: 53,
    quote_es: "No hay mayor dolor que el causado por la soledad",
    quote_en: "There's no greater pain than that which is caused by solitude",
    author: "Sasuke (Naruto)",
  },
  {
    id: 54,
    quote_es:
      "Cuando un hombre aprende amar, el debe aceptar el riesgo del odio",
    quote_en: "When a man learns to love, he must bear the risk of hatred",
    author: "Madara (Naruto)",
  },
  {
    id: 55,
    quote_es: "Todas las verdades que son calladas se vuelven venenosas",
    quote_en: "All truths that are silenced become poisonous",
  },
  {
    id: 56,
    quote_es: "Sufrimos más en la imagición que en la realidad",
    quote_en: "We suffer more often in imagination than in reality",
    author: "Seneca",
  },
  {
    id: 57,
    quote_es:
      "La mayoría de la gente son otra gente. Sus pensamientos son opiniones de otra gente, su vidas una imitación, sus pasiones son una frase",
    quote_en:
      "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation",
    author: "Oscar Wilde",
  },
  {
    id: 58,
    quote_es:
      "En tiempos antiguos, tener poder significaba tener acceso a información, hoy tener poder significa saber que ignorar",
    quote_en:
      "In ancient times, having power meant having access to information, today having power means knowing what to ignore",
  },
  {
    id: 59,
    quote_es:
      "El carácter está más determinado por la falta de experiencia que por aquellas que uno ha obtenido",
    quote_en:
      "Character is more determined by the lack of experiencie than for one which one has acquired",
  },
  {
    id: 60,
    quote_es:
      "Si lo que tienes te parece insuficiente, entonces aunque poseas el mundo aún así serás miserable",
    quote_en:
      "If what you have seems insufficient to you, then though you possess the world, you will yet be miserable",
  },
  {
    id: 61,
    quote_es:
      "La humanidad no ha tejido las telarañas de la vida. Solo somos un hilo dentro de ella",
    quote_en:
      "Humankind has not woven the web of life. We are but one thread within it. Whatever we do to the web, we do to ourselves. All things are bound together. All things connect. ~ Chief Seattle",
  },
  {
    id: 62,
    quote_es:
      "El viaje es más acerca estar envuelto en la vida y más desapegado a ella",
    quote_en:
      "The journey is about being more deeply involved in life and yet less attached to it.",
  },
  {
    id: 63,
    quote_es:
      "Todo hombre debe decidir si caminará por la luz del altruismo creativo o en la oscuridad del egoismo destructivo",
    quote_en:
      "Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness",
  },
  {
    id: 64,
    quote_es:
      "Puedo aceptar fallar. Todo el mundo falla en algo. Pero no puedo aceptar no intentarlo",
    quote_en:
      "I can accept failure; everyone fails at something. But I can't accept not trying",
  },
  {
    id: 65,
    quote_es:
      "La manera más comun en que la gente abandona su poder es pensando que no tienen ninguno",
    quote_en:
      "The most common way people give up their power is by thinking they don't have any.”",
  },
  {
    id: 66,
    quote_es: "Esta es tu vida y está terminando un minuto a la vez",
    quote_en: "This is your life and it's ending one minute at a time”",
  },
  {
    id: 67,
    quote_es:
      "Hay un mito de que el tiempo es dinero. De hecho, el tiempo es más preciado que el dinero. Es un recurso no renovable. Una vez que lo gastaste mal, se perdió para siempre.",
    quote_en:
      "There's a myth that time is money. In fact, time is more precious than money. It's a nonrenewable resource. Once you’ve spent it, and if you’ve spent it badly, it’s gone forever.",
  },
  {
    id: 68,
    quote_es:
      "La procastinación es como una tarjeta de crédito, todo es diversión hasta que te llega la factura.",
    quote_en:
      "Procrastination is like a credit card, it's a lot of fun until you get the bill.",
  },
  {
    id: 69,
    quote_es:
      "Albert Einstein una vez dijo: 'Locura es hacer lo mismo una y otra vez esperando que el resultado sea diferente'",
    quote_en:
      "Albert Einstein once said, 'Insanity is doing the same thing over and over and expecting a different result.",
  },
  {
    id: 70,
    quote_es:
      "A veces la vida es un tunel oscuro, no siempre se puede ver la luz al final del tunel, pero si te mantienes en movimiento, seguramente saldrás a un lugar mejor",
    quote_en:
      "Sometimes life is like a dark tunnel, you can't always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.",
  },
  {
    id: 71,
    quote_es:
      "Los monjes solían decir que la venganza es como una serpiente de dos cabezas, mientras miras como tu enemigo cae, eres envenenado vos mismo. tienes una elección, el perdón. Es más fácil no hacer nada, pero es difícil perdonar.",
    quote_en:
      "The monks used to say that the revenge is like a 2-headed rapt viper, while you watch your enemy go down, you are being poisoned yourself. You do have a choice. Forgiveness. It’s easy to do nothing, but is hard to forgive.",
  },
  {
    id: 72,
    quote_es:
      "La verdadera mente puede soportar todas las mentiras e ilusiones sin estar perdido, el verdadero corazón puede soportar el veneno de la venganza sin ser duro. Desde el principio de los tiempos la oscuridad prevaleció en el vacío, pero siempre necesita la luz para purificar.",
    quote_en:
      "The true mind can weather all the lies and illusions without being lost, the true heart can tough the poison of hatred without being hard. Since beginning less time darkness thrived in the void, but always need to purify light.",
  },
  {
    id: 73,
    quote_es: "Si paras de aprender, mueres joven",
    quote_en: "If you stop learning, you die young",
    author: "James Clear",
  },
  {
    id: 74,
    quote_es:
      "Uno de los mejores regalos del deporte es aprender a fallar en público",
    quote_en:
      "One of the great gift of sports is learning how to fail in public",
    author: "James Clear",
  },
  {
    id: 75,
    quote_es:
      "Alguien con la mitad de tu IQ está ganando 10 veces más porque no son lo suficientemente listos para dudar de si mismos",
    quote_en:
      "Someone with half your IQ is making 10x more as you because they aren't smart enough to doubt themselves.",
  },
  {
    id: 76,
    quote_es:
      "Todo conocimiento que no lleva a nuevas preguntas termina muriendo: falla en mantener la temperatura requerida para sustentar la vida",
    quote_en:
      "Any knowledge that doesn't lead to new questions quickly dies out: it fails to maintain the temperature required for sustaining life.",
  },
  {
    id: 77,
    quote_es: "La persona observadora encuentra muchos profesores",
    quote_en: "The observant person finds many teachers",
    author: "James Clear",
  },
  {
    id: 78,
    quote_es:
      "La forma última de preparación no es planear para un escenario específico, si no una mentalidad que pueda manejar la incertidumbre",
    quote_en:
      "The ultimate form of preparation is not planning for a specific scenario, but a mindset that can handle uncertainty",
    author: "James Clear",
  },
  {
    id: 79,
    quote_es:
      "No es la carga la que te termina quebrando, si no la manera en la que la llevas",
    quote_en:
      "It's not the load that breaks you down, it's the way you carry it",
    author: "Lena Horne",
  },
  {
    id: 80,
    quote_es:
      "Entender el hambre de una persona y responder a ello es una de las herramientas más potentes que descubrirás para ir a través de cualquiera que encuentres haciendo negocios o en tu vida personal",
    quote_en:
      "Understanding a person's hunger and responding to it is one of the most potent tools you'll ever discover for getting through to anyone you meet in business or your personal life",
    author: "Mark Goulston",
  },
  {
    id: 81,
    quote_es: "The things you think about determine the quality of your mind",
    quote_en: "Las cosas cuales piensas determinan la calidad de tu mente",
  },
  {
    id: 82,
    quote_es: "You soul takes on the color of your thoughts",
    quote_en: "Tu alma toma el color de tus pensamientos",
    author: "Marcus Aurelius",
  },
  {
    id: 83,
    quote_es:
      "El precio que los hombres pagan en su indiferencia hacia los temas públicos están destinados a ser conquistados por hombres malignos",
    quote_en:
      "The price good men pay for indifference to public affairs is to be ruled by evil men",
    author: "Plato",
  },
  {
    id: 84,
    quote_es: "Lo que no se ve es mas grande que lo que si se ve",
    quote_en: "What is not seen is greater than what is seen",
  },
  {
    id: 85,
    quote_es:
      "Grandes mentes discuten ideas, mentes promedio discuten eventos y pequeñas mentes discuten sobre la gente",
    quote_en:
      "Great minds discuss ideas, average minds discuss events,s mall minds discuss people",
  },
  {
    id: 86,
    quote_es:
      "Si soy visto usualmente en el teatro, la gente dejará de notarme",
    quote_en:
      "If I am often seen at the theater, people will cease to notice me",
    author: "Napoleon",
  },
];

export type { quotesPROPS };
export default quotes;
