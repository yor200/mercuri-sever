// map-script.js - conecta el mapa 2D con el servidor Mercury

const mapSize = 10;
let mapContainer = document.getElementById("map");

// inicializamos el mapa
function crearMapa(bloques, angelPos){
    mapContainer.innerHTML = "";

    for(let y=0;y<mapSize;y++){
        for(let x=0;x<mapSize;x++){
            let tile = document.createElement("div");
            tile.classList.add("tile");
            tile.classList.add(bloques[y][x] || "madera");

            if(x===angelPos.x && y===angelPos.y) tile.classList.add("angel");
            mapContainer.appendChild(tile);
        }
    }
}

// obtener datos del servidor
async function actualizarMapa(){
    try{
        let res = await fetch("/mundo");
        let data = await res.json();

        // crear matriz de bloques
        let bloques = [];
        for(let y=0;y<mapSize;y++){
            bloques[y]=[];
            for(let x=0;x<mapSize;x++){
                bloques[y][x] = "madera"; // predeterminado
            }
        }

        // agregar casas
        data.casas.forEach(c=>{
            bloques[c.y][c.x]="casa";
        });

        // agregar arboles
        data.arboles.forEach(a=>{
            bloques[a.y][a.x]="arbol";
        });

        // dibujar mapa con Ángel
        crearMapa(bloques, data.angel);

    }catch(err){
        console.log("Error al actualizar mapa:", err);
    }
}

// actualizar mapa cada 2 segundos
setInterval(actualizarMapa,2000);
