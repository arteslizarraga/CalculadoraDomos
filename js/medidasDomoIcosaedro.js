

var medidasDomoIcosaedro = [
	{
		nombre: "V4", 
		descripcion: "Domo Geodésico Frecuencia V4 basado en el icosaedro",
		cantidadTriangulos: 160,
		imagenDiagramaConstruccion: "imagenes/domo_icosaedro/domoV4/domoV4_diagrama_construccion.png",
		imagenResultado: "imagenes/domo_icosaedro/domoV4/domoV4.png",
		medidas: [
			{ letra: "A", factorCoordenada: 0.25318 }, // a
			{ letra: "B", factorCoordenada: 0.29453 }, // c
			{ letra: "C", factorCoordenada: 0.29524 }, // b
			{ letra: "D", factorCoordenada: 0.29859 }, // f
			{ letra: "E", factorCoordenada: 0.31287 }, // d
			{ letra: "F", factorCoordenada: 0.32492 }  // e
		],
		tiposTriangulos: [
			{identificador: "A-A-C", cantidad: 30, datosAngulos: "54.34°, 54.34°, 71.32°"},
			{identificador: "B-B-C", cantidad: 30, datosAngulos: "59.92°, 59.92°, 60.16°"},
			{identificador: "B-D-E", cantidad: 60, datosAngulos: "57.52°, 58.80°, 63.68°"},
			{identificador: "E-E-F", cantidad: 30, datosAngulos: "58.72°, 58.72°, 62.55°"},
			{identificador: "F-F-F", cantidad: 10, datosAngulos: "60.00°, 60.00°, 60.00°"}
		],
		porcentajeAlturaDiametro: 50.00
	},	
	{
		nombre: "V6", 
		descripcion: "Domo Geodésico Frecuencia V6 basado en el icosaedro",
		cantidadTriangulos: 360,
		imagenDiagramaConstruccion: "imagenes/domo_icosaedro/domoV6/domoV6_diagrama_construccion.png",
		//imagenResultado: "imagenes/domo_icosaedro/domoV6/domoV6_simplydifferently.png",
		imagenResultado: "imagenes/domo_icosaedro/domoV6/domoV6_teselacion.png",
		medidas: [
			// Fuente:  https://www.ziptiedomes.com/geodesic-dome-calculators/5v-geodesic-dome-calculator.htm
			{ color: "Red", letra: "A", factorCoordenada: 0.16256722 },           // Correcto
			{ color: "Yellow", letra: "B", factorCoordenada: 0.19047686 },        // Lo cambie de         0.1904769  a   0.19047686
			{ color: "Brown", letra: "C", factorCoordenada: 0.18190825 },         // Lo cambie de      0.1819083     a   0.18190825
			{ color: "Green", letra: "D", factorCoordenada: 0.20281969 },         // Lo cambie de      0.2028197   a    0.20281969
			{ color: "Orange", letra: "E", factorCoordenada: 0.1873834 },         // Correcto
			{ color: "Black", letra: "F", factorCoordenada: 0.19801258 },         // Lo cambie de       0.1980126   a    0.19801258
			{ color: "Gray", letra: "G", factorCoordenada: 0.20590774 },          // Correcto
			{ color: "Purple", letra: "H", factorCoordenada: 0.21535373 },        // Correcto
			{ color: "Blue", letra: "I", factorCoordenada: 0.21662821 },          // Correcto
		
			/*
			// SimplyDifferently
			{letra: "A", factorCoordenada: 0.16257 },  
			{letra: "B", factorCoordenada: 0.18191 },  
			{letra: "C", factorCoordenada: 0.18738 }, 
			{letra: "D", factorCoordenada: 0.19048 },  
			{letra: "E", factorCoordenada: 0.19801 },  
			{letra: "F", factorCoordenada: 0.20282 },  
			{letra: "G", factorCoordenada: 0.20591 },  
			{letra: "H", factorCoordenada: 0.21535 },  
			{letra: "I", factorCoordenada: 0.21663 }   
			*/
		],
		tiposTriangulos: [
			{identificador: "A-B-A", cantidad: 30, datosAngulos: ""},  	//   Isosceles Triangles
			{identificador: "C-B-C", cantidad: 30, datosAngulos: ""},   //  Isosceles Triangles
			{identificador: "C-D-E", cantidad: 60, datosAngulos: ""},   //   Scalene Triangles
			{identificador: "D-F-G", cantidad: 120, datosAngulos: ""},  //   Scalene Triangles
			{identificador: "G-H-G", cantidad: 60, datosAngulos: ""},   //   Isosceles Triangles
			{identificador: "I-H-I", cantidad: 60, datosAngulos: ""},   //   Isosceles Triangles

			/*
			// SimplyDifferently
			{identificador: "A-A-D", cantidad: 30, datosAngulos: "54.14°, 54.14°, 71.72°"},
			{identificador: "B-B-D", cantidad: 30, datosAngulos: "58.42°, 58.42°, 63.15°"},
			{identificador: "B-C-F", cantidad: 60, datosAngulos: "55.40°, 58.00°, 66.60°"},
			{identificador: "E-F-G", cantidad: 120, datosAngulos: "57.95°, 60.24°, 61.81°"},
			{identificador: "G-G-H", cantidad: 60, datosAngulos: "58.46°, 58.46°, 63.08°"},
			{identificador: "H-I-I", cantidad: 60, datosAngulos: "59.63°, 60.18°, 60.18°"}
			*/
		],
		porcentajeAlturaDiametro: 50.00
	},
	{
		nombre: "V7 10/21", 
		descripcion: "Domo Geodésico Frecuencia 7V tipo 10/21 basado en el icosaedro",
		cantidadTriangulos: 455,
		imagenDiagramaConstruccion: "imagenes/domo_icosaedro/domoV7_10-21/domoV7_10-21_diagrama_construccion.png",
		imagenResultado: "imagenes/domo_icosaedro/domoV7_10-21/domoV7_10-21.png",
		medidas: [
			{letra: "A", factorCoordenada: 0.13774 },
			{letra: "B", factorCoordenada: 0.15197 },
			{letra: "C", factorCoordenada: 0.15664 },
			{letra: "D", factorCoordenada: 0.16154 },
			{letra: "E", factorCoordenada: 0.16480 },
			{letra: "F", factorCoordenada: 0.17066 },
			{letra: "G", factorCoordenada: 0.17098 },
			{letra: "H", factorCoordenada: 0.17132 },
			{letra: "I", factorCoordenada: 0.17353 },
			{letra: "J", factorCoordenada: 0.17585 },
			{letra: "K", factorCoordenada: 0.18155 },
			{letra: "L", factorCoordenada: 0.18161 },
			{letra: "M", factorCoordenada: 0.18237 },
			{letra: "N", factorCoordenada: 0.18548 },
			{letra: "O", factorCoordenada: 0.18791 }
		],
		tiposTriangulos: [
			{identificador: "A-A-D", cantidad: 30, datosAngulos: "54.10°, 54.10°, 71.81°"},
			{identificador: "B-B-D", cantidad: 30, datosAngulos: "57.91°, 57.91°, 64.18°"},
			{identificador: "B-C-H", cantidad: 60, datosAngulos: "55.01°, 57.57°, 67.41°"},
			{identificador: "E-F-J", cantidad: 60, datosAngulos: "56.76°, 60.03°, 63.21°"},
			{identificador: "E-G-H", cantidad: 60, datosAngulos: "57.56°, 61.13°, 61.31°"},
			{identificador: "G-G-L", cantidad: 30, datosAngulos: "57.93°, 57.93°, 64.15°"},
			{identificador: "I-I-J", cantidad: 20, datosAngulos: "59.54°, 59.54°, 60.92°"},
			{identificador: "I-J-M", cantidad: 50, datosAngulos: "57.89°, 59.18°, 62.93°"},
			{identificador: "K-K-L", cantidad: 25, datosAngulos: "59.98°, 59.98°, 60.04°"},
			{identificador: "K-M-N", cantidad: 50, datosAngulos: "59.11°, 59.59°, 61.29°"},
			{identificador: "N-N-O", cantidad: 30, datosAngulos: "59.57°, 59.57°, 60.86°"},
			{identificador: "O-O-O", cantidad: 10, datosAngulos: "60.00°, 60.00°, 60.00°"} 
		],
		porcentajeAlturaDiametro: 46.26
	},	
	{
		nombre: "V7 11/21", 
		descripcion: "Domo Geodésico Frecuencia 7V tipo 11/21 basado en el icosaedro",
		cantidadTriangulos: 525,
		imagenDiagramaConstruccion: "imagenes/domo_icosaedro/domoV7_11-21/domoV7_11-21_diagrama_construccion.png",
		imagenResultado: "imagenes/domo_icosaedro/domoV7_11-21/domoV7_11-21.png",
		medidas: [
			{letra: "A", factorCoordenada: 0.13774 },
			{letra: "B", factorCoordenada: 0.15197 },
			{letra: "C", factorCoordenada: 0.15664 },
			{letra: "D", factorCoordenada: 0.16154 },
			{letra: "E", factorCoordenada: 0.16480 },
			{letra: "F", factorCoordenada: 0.17066 },
			{letra: "G", factorCoordenada: 0.17098 },
			{letra: "H", factorCoordenada: 0.17132 },
			{letra: "I", factorCoordenada: 0.17353 },
			{letra: "J", factorCoordenada: 0.17585 },
			{letra: "K", factorCoordenada: 0.18155 },
			{letra: "L", factorCoordenada: 0.18161 },
			{letra: "M", factorCoordenada: 0.18237 },
			{letra: "N", factorCoordenada: 0.18548 },
			{letra: "O", factorCoordenada: 0.18791 }
			
		],
		tiposTriangulos: [
			{identificador: "A-A-D", cantidad: 30, datosAngulos: "54.10°, 54.10°, 71.81°"},
			{identificador: "B-B-D", cantidad: 30, datosAngulos: "57.91°, 57.91°, 64.18°"},
			{identificador: "B-C-H", cantidad: 60, datosAngulos: "55.01°, 57.57°, 67.41°"},
			{identificador: "E-F-J", cantidad: 60, datosAngulos: "56.76°, 60.03°, 63.21°"},
			{identificador: "E-G-H", cantidad: 60, datosAngulos: "57.56°, 61.13°, 61.31°"},
			{identificador: "G-G-L", cantidad: 30, datosAngulos: "57.93°, 57.93°, 64.15°"},
			{identificador: "I-I-J", cantidad: 40, datosAngulos: "59.54°, 59.54°, 60.92°"},
			{identificador: "I-J-M", cantidad: 70, datosAngulos: "57.89°, 59.18°, 62.93°"},
			{identificador: "K-K-L", cantidad: 35, datosAngulos: "59.98°, 59.98°, 60.04°"},
			{identificador: "K-M-N", cantidad: 70, datosAngulos: "59.11°, 59.59°, 61.29°"},
			{identificador: "N-N-O", cantidad: 30, datosAngulos: "59.57°, 59.57°, 60.86°"},
			{identificador: "O-O-O", cantidad: 10, datosAngulos: "60.00°, 60.00°, 60.00°"}
		],
		porcentajeAlturaDiametro: 54.00  
	},	
	{
		nombre: "V8", 
		descripcion: "Domo Geodésico Frecuencia V8 basado en el icosaedro",
		cantidadTriangulos: 640,
		imagenDiagramaConstruccion: "imagenes/domo_icosaedro/domoV8/domoV8_diagrama_construccion.png",
		imagenResultado: "imagenes/domo_icosaedro/domoV8/domoV8.png",
		medidas: [
			/*
			// Ejemplo v8 propio ANTIGUO
			{ letra: "A", factorCoordenada: 0.11946 },   
			{ letra: "L", factorCoordenada: 0.13033 },   
			{ letra: "K", factorCoordenada: 0.13424 }, // Da una pequeña diferencia 
			{ letra: "P", factorCoordenada: 0.14018 },   
			{ letra: "G", factorCoordenada: 0.14056 }, // Da una pequeña diferencia 
			{ letra: "I", factorCoordenada: 0.14548 }, // Da una pequeña diferencia
			{ letra: "Q", factorCoordenada: 0.14628 }, // Da una pequeña diferencia 
			{ letra: "J", factorCoordenada: 0.14803 },   
			{ letra: "B", factorCoordenada: 0.14862 },   
			{ letra: "D", factorCoordenada: 0.15267 },   
			{ letra: "O", factorCoordenada: 0.15296 },   
			{ letra: "C", factorCoordenada: 0.15315 },   
			{ letra: "E", factorCoordenada: 0.15477 },   
			{ letra: "M", factorCoordenada: 0.15636 },   
			{ letra: "R", factorCoordenada: 0.16033 },   
			{ letra: "N", factorCoordenada: 0.16036 },   
			{ letra: "F", factorCoordenada: 0.16088 }, // Da una pequeña diferencia
			{ letra: "S", factorCoordenada: 0.16300 }, // Da una pequeña diferencia 
			{ letra: "T", factorCoordenada: 0.16465 },   
			{ letra: "H", factorCoordenada: 0.15636 }  // Agregado para rellenar el vacio. Da una pequeña diferencia
			*/
		
			{ letra: "A", factorCoordenada: 0.11946, letraAntigua: "A" },  
			{ letra: "B", factorCoordenada: 0.13033, letraAntigua: "L" },  
			{ letra: "C", factorCoordenada: 0.13424, letraAntigua: "K" },  
			{ letra: "D", factorCoordenada: 0.14018, letraAntigua: "P" },  
			{ letra: "E", factorCoordenada: 0.14056, letraAntigua: "G" },  
			{ letra: "F", factorCoordenada: 0.14548, letraAntigua: "I" },  
			{ letra: "G", factorCoordenada: 0.14628, letraAntigua: "Q" },  
			{ letra: "H", factorCoordenada: 0.14803, letraAntigua: "J" },  
			{ letra: "I", factorCoordenada: 0.14862, letraAntigua: "B" },  
			{ letra: "J", factorCoordenada: 0.15267, letraAntigua: "D" },  
			{ letra: "K", factorCoordenada: 0.15296, letraAntigua: "O" },  
			{ letra: "L", factorCoordenada: 0.15315, letraAntigua: "C" },  
			{ letra: "M", factorCoordenada: 0.15477, letraAntigua: "E" },  
			{ letra: "N", factorCoordenada: 0.15636, letraAntigua: "M" },  
			{ letra: "O", factorCoordenada: 0.16033, letraAntigua: "R" },  
			{ letra: "P", factorCoordenada: 0.16036, letraAntigua: "N" },  
			{ letra: "Q", factorCoordenada: 0.16088, letraAntigua: "F" },  
			{ letra: "R", factorCoordenada: 0.16300, letraAntigua: "S" },  
			{ letra: "S", factorCoordenada: 0.16465, letraAntigua: "T" }   	
		],
		tiposTriangulos: [
			{identificador: "A-A-D", cantidad: 30, datosAngulos: "54.08°, 54.08°, 71.83°"},
			{identificador: "B-B-D", cantidad: 30, datosAngulos: "57.45°, 57.45°, 65.09°"},
			{identificador: "B-C-H", cantidad: 60, datosAngulos: "54.73°, 57.24°, 68.03°"},
			{identificador: "E-F-H", cantidad: 60, datosAngulos: "57.24°, 60.49°, 62.28°"},
			{identificador: "E-G-J", cantidad: 60, datosAngulos: "56.05°, 59.67°, 64.28°"},
			{identificador: "F-F-N", cantidad: 30, datosAngulos: "57.49°, 57.49°, 65.02°"},
			{identificador: "I-J-N", cantidad: 60, datosAngulos: "57.45°, 60.02°, 62.52°"},
			{identificador: "I-K-L", cantidad: 60, datosAngulos: "58.06°, 60.90°, 61.04°"},
			{identificador: "K-K-P", cantidad: 30, datosAngulos: "58.39°, 58.39°, 63.23°"},
			{identificador: "M-M-N", cantidad: 30, datosAngulos: "59.66°, 59.66°, 60.69°"},
			{identificador: "M-N-Q", cantidad: 60, datosAngulos: "58.38°, 59.36°, 62.26°"},
			{identificador: "O-O-P", cantidad: 30, datosAngulos: "59.98°, 59.98°, 60.04°"},
			{identificador: "O-Q-R", cantidad: 60, datosAngulos: "59.32°, 59.69°, 60.99°"},
			{identificador: "R-R-S", cantidad: 30, datosAngulos: "59.67°, 59.67°, 60.65°"},
			{identificador: "S-S-S", cantidad: 10, datosAngulos: "60.00°, 60.00°, 60.00°"}
		],
		porcentajeAlturaDiametro: 50.00
	}		
];

/*
Domo V8

    A-A-D x 30 (54.08°, 54.08°, 71.83°)
    B-B-D x 30 (57.45°, 57.45°, 65.09°)
    B-C-H x 60 (54.73°, 57.24°, 68.03°)
    E-F-H x 60 (57.24°, 60.49°, 62.28°)
    E-G-J x 60 (56.05°, 59.67°, 64.28°)
    F-F-N x 30 (57.49°, 57.49°, 65.02°)
    I-J-N x 60 (57.45°, 60.02°, 62.52°)
    I-K-L x 60 (58.06°, 60.90°, 61.04°)
    K-K-P x 30 (58.39°, 58.39°, 63.23°)
    M-M-N x 30 (59.66°, 59.66°, 60.69°)
    M-N-Q x 60 (58.38°, 59.36°, 62.26°)
    O-O-P x 30 (59.98°, 59.98°, 60.04°)
    O-Q-R x 60 (59.32°, 59.69°, 60.99°)
    R-R-S x 30 (59.67°, 59.67°, 60.65°)
    S-S-S x 10 (60.00°, 60.00°, 60.00°)
    15 kinds of faces2) 
*/