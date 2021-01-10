

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
		]
	},	
	{
		nombre: "V6", 
		descripcion: "Domo Geodésico Frecuencia V6 basado en el icosaedro",
		cantidadTriangulos: 360,
		imagenDiagramaConstruccion: "imagenes/domo_icosaedro/domoV6/domoV6_diagrama_construccion.png",
		imagenResultado: "imagenes/domo_icosaedro/domoV6/domoV6.png",
		medidas: [
			{letra: "A", factorCoordenada: 0.16257 },  // a = radio * 0.16256722 
			{letra: "B", factorCoordenada: 0.18191 },  // c = radio * 0.18190825
			{letra: "C", factorCoordenada: 0.18738 },  // e = radio * 0.1873834
			{letra: "D", factorCoordenada: 0.19048 },  // b = radio * 0.19047686
			{letra: "E", factorCoordenada: 0.19801 },  // f = radio * 0.19801258
			{letra: "F", factorCoordenada: 0.20282 },  // d = radio * 0.20281969
			{letra: "G", factorCoordenada: 0.20591 },  // g = radio * 0.20590774
			{letra: "H", factorCoordenada: 0.21535 },  // h = radio * 0.21535373
			{letra: "I", factorCoordenada: 0.21663 }   // i = radio * 0.21662821
		],
		tiposTriangulos: [
			{identificador: "A-A-D", cantidad: 30, datosAngulos: "54.14°, 54.14°, 71.72°"},
			{identificador: "B-B-D", cantidad: 30, datosAngulos: "58.42°, 58.42°, 63.15°"},
			{identificador: "B-C-F", cantidad: 60, datosAngulos: "55.40°, 58.00°, 66.60°"},
			{identificador: "E-F-G", cantidad: 120, datosAngulos: "57.95°, 60.24°, 61.81°"},
			{identificador: "G-G-H", cantidad: 60, datosAngulos: "58.46°, 58.46°, 63.08°"},
			{identificador: "H-I-I", cantidad: 60, datosAngulos: "59.63°, 60.18°, 60.18°"}
		]
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
		]
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