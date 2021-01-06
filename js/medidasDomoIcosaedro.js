

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
		]
	}		
];