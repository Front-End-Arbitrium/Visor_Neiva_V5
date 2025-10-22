// Función para mostrar el loader-terreno como modal Bootstrap
function mostrarLoaderTerreno() {
  var loaderModalEl = document.getElementById('loader-Terreno');
  if (loaderModalEl) {
    var loaderModal = bootstrap.Modal.getOrCreateInstance(loaderModalEl);
    loaderModal.show();
    // Fix accesibilidad: quitar aria-hidden cuando el modal está visible
    setTimeout(function () {
      loaderModalEl.removeAttribute('aria-hidden');
    }, 1000);
    setTimeout(function () {
      loaderModal.hide();
    }, 5000); // o el tiempo que desees
  }
}

// // Mostrar loader-terreno al iniciar la aplicación
document.addEventListener('DOMContentLoaded', function () {
  mostrarLoaderTerreno();
});

// ==========================
// CONFIGURACIÓN DE VISORES
// ==========================
const visores = {

  neiva: {
    nombre: "Visor Neiva",
    center: [2.93, -75.28],
    zoom: 12,
    capas: {
      // --------------------------Capas Urbanas----------------------------------------
      Terreno: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV5/TerrenoUrbano.geojson", estilo: { color: 'red', weight: 0.6, fillOpacity: 0.2 }, minZoom: 17, maxZoom: 22 },
      Barrios: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV4/Barrios.geojson", estilo: { color: 'green', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 22 },
      Construccion: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV5/ConstruccionUrbana.geojson", estilo: { color: 'blue', weight: 0.6, fillOpacity: 0.2 }, minZoom: 18, maxZoom: 22 },
      Unidades: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV5/UnidadesUrbano.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 17, maxZoom: 24 },
      Manzanas: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV4/Manzanas.geojson", estilo: { color: 'black', fillColor: 'orange', weight: 0.8, fillOpacity: 0.2, dashArray: '2' }, minZoom: 0, maxZoom: 20 },
      ZonaHomogeneaFisicaUrbana: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV5/zona_HomogeneafisicaUrbano.geojson", estilo: { color: 'grey', fillColor: 'orange', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 22 },
      ZonaHomogeneaGeoeconomicaUrbana: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV5/zona_HomogeneoEconomicaUrbana.geojson", estilo: { color: 'blue', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 22 },
      Comunas: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/comunas.geojson", estilo: { color: 'black', fillColor: 'orange', weight: 0.8, fillOpacity: 0.2, dashArray: '2' }, minZoom: 0, maxZoom: 20 },
      Comuna1: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/manzanas_Comuna_1.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
      Comuna2: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/manzanas_Comuna_2.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
      Comuna3: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/manzanas_Comuna_3.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
      Comuna4: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/manzanas_Comuna_4.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
      Comuna5: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/manzanas_Comuna_5.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
      Comuna6: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/manzanas_Comuna_6.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
      Comuna7: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/manzanas_Comuna_7.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
      Comuna8: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/manzanas_Comuna_8.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
      Comuna9: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/manzanas_Comuna_9.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
      Comuna10: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/manzanas_Comuna_10.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },

      // ------------------------------------Capas Rurales----------------------------------------

      ZonaHomogeneaFisicaRural: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV5/zona_HomogeneoFisicaRural.geojson", estilo: { color: 'orange', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 22 },
      ZonaHomogeneaGeoeconomicaRural: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV5/zona_HomogenenaEconomicaRural.geojson", estilo: { color: 'blue', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 22 },
      Vereda: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV4/Veredas.geojson", estilo: { color: 'red', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 22 },
      ConstruccionRural: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV5/ConstruccionRural.geojson", estilo: { color: 'blue', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 22 },
      TerrenoRural: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV5/TerrenoRural.geojson", estilo: { color: 'red', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 22 },
      UnidadesRural: { archivo: "https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/DataNeivaV5/UnidadesRural.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 22 }
    }
    // capas: {
    //   Terreno: { archivo: "/data/TerrenoFinal.geojson", estilo: { color: 'red', weight: 0.6, fillOpacity: 0.2 }, minZoom: 17, maxZoom: 22 },
    //   Barrios: { archivo: "/data/barrios.geojson", estilo: { color: 'green', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 22 },
    //   Construccion: { archivo: "/data/ConstruccionFinal.geojson", estilo: { color: 'blue', weight: 0.6, fillOpacity: 0.2 }, minZoom: 18, maxZoom: 22 },
    //   Unidades: { archivo: "/data/UnidadesFinal.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 17, maxZoom: 22 },
    //   Comunas: { archivo: "/data/comunas.geojson", estilo: { color: 'black', fillColor: 'orange', weight: 0.8, fillOpacity: 0.2, dashArray: '2' }, minZoom: 0, maxZoom: 20 },
    //   Comuna1: { archivo: "/data/manzanas_Comuna_1.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
    //   Comuna2: { archivo: "/data/manzanas_Comuna_2.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
    //   Comuna3: { archivo: "/data/manzanas_Comuna_3.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
    //   Comuna4: { archivo: "/data/manzanas_Comuna_4.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
    //   Comuna5: { archivo: "/data/manzanas_Comuna_5.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
    //   Comuna6: { archivo: "/data/manzanas_Comuna_6.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
    //   Comuna7: { archivo: "/data/manzanas_Comuna_7.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
    //   Comuna8: { archivo: "/data/manzanas_Comuna_8.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
    //   Comuna9: { archivo: "/data/manzanas_Comuna_9.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 },
    //   Comuna10: { archivo: "/data/manzanas_Comuna_10.geojson", estilo: { color: 'black', weight: 0.6, fillOpacity: 0.2 }, minZoom: 0, maxZoom: 15 }

    // }
  },
};

// ==========================
// SELECCIÓN DE VISOR POR URL
// ==========================
const params = new URLSearchParams(window.location.search);
let nombreVisor = params.get('mapa') || 'neiva'; // valor por defecto
let configVisor = visores[nombreVisor];

if (!configVisor) {
  mostrarAlertaFiltro("Visor no encontrado, usando Neiva por defecto");
  nombreVisor = 'neiva';
  configVisor = visores[nombreVisor];
}

// ==========================
// INICIALIZAR MAPA
// ==========================
const vial = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  minZoom: 9,
  attribution: '&copy; OpenStreetMap contributors',
});

const satelital = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 18,
  minZoom: 9,
  attribution: '&copy; Esri &mdash; Maxar &mdash; Earthstar Geographics'
});

const hibrido = L.layerGroup([
  satelital,
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, minZoom: 9, opacity: 0.3 })
]);

const map = L.map('map', {
  renderer: L.canvas(),
  center: configVisor.center,
  zoom: configVisor.zoom,
  layers: [vial]
});

// ===============
// PATRONES RAYADOS PARA CAPAS
// ===============
// const patronUnidades = new L.StripePattern({
//   weight: 4,
//   spaceWeight: 6,
//   color: '#ff6600', // naranja llamativo
//   opacity: 0.7,
//   angle: 45
// }).addTo(map);

// const patronConstruccion = new L.StripePattern({
//   weight: 4,
//   spaceWeight: 6,
//   color: '#0066ff', // azul llamativo
//   opacity: 0.7,
//   angle: 135
// }).addTo(map);


// Habilitar/deshabilitar checkboxes de capas según el zoom
function actualizarCheckboxesPorZoom() {
  const zoom = map.getZoom();
  for (const nombre in configVisor.capas) {
    const capa = configVisor.capas[nombre];
    const checkbox = document.getElementById('capa' + nombre);
    if (checkbox) {
      if (zoom >= capa.minZoom && zoom <= capa.maxZoom) {
        checkbox.disabled = false;
      } else {
        checkbox.disabled = true;
        // Opcional: desactiva la capa si está fuera de rango
        if (checkbox.checked) {
          checkbox.checked = false;
          toggleCapa(nombre);
        }
      }
    }
  }
}

map.on('zoomend', actualizarCheckboxesPorZoom);
// Llamar una vez al cargar el mapa
document.addEventListener('DOMContentLoaded', actualizarCheckboxesPorZoom);


L.control.scale({ position: 'bottomleft' }).addTo(map);

let capasVisibles = {};
let geojsonOriginal = {};


// ==========================
// CARGA DE CAPAS GEOJSON
// ==========================
// for (const nombre in configVisor.capas) {
//   const { archivo } = configVisor.capas[nombre];
//   fetch(archivo)
//     .then(res => res.json())
//     .then(data => geojsonOriginal[nombre] = data);
// }

// Nueva forma: cargar todas las capas y mostrar Barrios por defecto

const cargarCapas = [];
for (const nombre in configVisor.capas) {
  const { archivo } = configVisor.capas[nombre];
  cargarCapas.push(
    fetch(archivo)
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar el archivo: ' + archivo);
        return res.json();
      })
      .then(data => geojsonOriginal[nombre] = data)
      .catch(err => mostrarAlertaFiltro(err.message))
  );
}

Promise.all(cargarCapas).then(() => {
  // Marcar el checkbox de Barrios 
  const checkboxBarrios = document.getElementById('capaBarrios');
  if (checkboxBarrios) checkboxBarrios.checked = true;
  // Mostrar la capa de Barrios
  toggleCapa('Barrios');
});



// ==========================
// FUNCIÓN POPUP
// ==========================
// function generarPopup(feature, nombreCapa) {
//   let popup = "";
//   for (let key in feature.properties) {
//     popup += `<strong>${key}:</strong> ${feature.properties[key]}<br>`;
//   }
//   return popup || "Sin información";
// }


function generarPopup(feature, nombreCapa) {
  if (nombreCapa === 'Terreno') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Terreno</strong></h6>
             <strong>Identificador:</strong> ${feature.properties.PREDIOS_id_operaci}<br>
            <strong>Área de terreno:</strong> ${feature.properties.area_terre} m² <br>
            <strong>Número predial:</strong> ${feature.properties.name} <br>
            <strong>Matrícula Inmobiliaria:</strong> ${feature.properties.PREDIOS_matricula_} <br>
            <strong>Tipo de Predio:</strong> ${feature.properties.PREDIOS_tipopredio} <br>
            <strong>Destinación Económica:</strong> ${feature.properties.PREDIOS_destinacio} <br>
            <strong>Dirección:</strong> ${feature.properties.Direccion} <br>
            <strong>Condición del predio:</strong> ${feature.properties.PREDIOS_condicion_}`;
  } else if (nombreCapa === 'Unidades') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Unidades de contrucción</strong></h6>
            <strong>Identificador:</strong> ${feature.properties.id_operacion}<br>
            <strong>Área construida:</strong> ${feature.properties.area_const} m² <br>
            <strong>Planta de ubicación:</strong> ${feature.properties.planta_ubi} <br>
            <strong>Altura:</strong> ${feature.properties.altura} <br>
            <strong>Número predial:</strong> ${feature.properties.name} <br>`;
  } else if (nombreCapa === 'Barrios') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Barrios</strong></h6>
            <strong>Identificador:</strong> ${feature.properties.objectid}<br>
            <strong>Codigo:</strong> ${feature.properties.codigo}<br>        
            <strong>Código Sector:</strong> ${feature.properties.codigo_sector}`;
  } else if (nombreCapa === 'Construccion') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Construcción</strong></h6>
            <strong>Identificador :</strong> ${feature.properties.PREDIOS_id_operaci}<br>
            <strong>Numero Predial:</strong> ${feature.properties.name} <br>
            <strong>Área de construcción:</strong> ${feature.properties.area_const} m² <br>
            <strong>Tipo de construcción:</strong> ${feature.properties.tipo_const} <br>
            <strong>Altura:</strong> ${feature.properties.altura} <br>`;
  } else if (nombreCapa === 'Manzanas') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Manzanas</strong></h6>
            <strong>Codigo:</strong> ${feature.properties.codigo}<br>
            <strong>Código del barrio:</strong> ${feature.properties.codigo_barrio}<br>
            `;
  } else if (nombreCapa === 'Comunas') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Comunas</strong></h6>
            <strong>Nombre :</strong> ${feature.properties.NOMBRE_COM}<br>
            <strong>Nombre UPZ :</strong> ${feature.properties.NOMBRE_UPZ}<br>
            <strong>Comuna Número:</strong> ${feature.properties.COMUNA} <br>
            <strong>Área:</strong> ${feature.properties.AREA__HAS_} Has <br>
            <strong>N° Personas:</strong> ${feature.properties.No_Persona} <br>`;
  } else if (nombreCapa === 'ZonaHomogeneaFisicaUrbana') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Zona Homogenea Fisica Urbana</strong></h6>
            <strong>Codigo:</strong> ${feature.properties.codigo}<br>
            <strong>Servicios Públicos:</strong> ${feature.properties.servicio_p}<br>
            <strong>Uso actual del suelo:</strong> ${feature.properties.uso_actual}<br>
            <strong>Uso por norma:</strong> ${feature.properties.norma_uso_}<br>
            <strong>Influencia:</strong> ${feature.properties.influencia}<br>
            `;
  } else if (nombreCapa === 'ZonaHomogeneaGeoeconomicaUrbana') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Zona Homogenea Geoeconómica Urbana</strong></h6>
            <strong>Codigo:</strong> ${feature.properties.codigo}<br>
            <strong>Valor metro:</strong> ${feature.properties.valor_metr}<br>
            <strong>Codigo zona geoeconómica:</strong> ${feature.properties.codigo_zon}<br>
            `;
  } else if (["Comuna_1", "Comuna_2", "Comuna_3", "Comuna_4", "Comuna_5", "Comuna_6", "Comuna_7", "Comuna_8", "Comuna_9", "Comuna_10"].includes(nombreCapa)) {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Comunas</strong></h6>
            <strong>Nombre :</strong> ${feature.properties.NOMBRE_COM}<br>
            <strong>Nombre UPZ :</strong> ${feature.properties.NOMBRE_UPZ}<br>
            <strong>Comuna Número:</strong> ${feature.properties.COMUNA} <br>
            <strong>Área:</strong> ${feature.properties.AREA__HAS_} Has <br>
            <strong>N° Personas:</strong> ${feature.properties.No_Persona} <br>`;
  } else if (nombreCapa === 'TerrenoRural') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Terreno</strong></h6>
            <strong>Identificador:</strong> ${feature.properties.PREDIOS_id_operaci}<br>
            <strong>Área de terreno:</strong> ${feature.properties.area_terre} m² <br>
            <strong>Número predial:</strong> ${feature.properties.name} <br>
            <strong>Matrícula Inmobiliaria:</strong> ${feature.properties.PREDIOS_matricula_} <br>
            <strong>Tipo de Predio:</strong> ${feature.properties.PREDIOS_tipopredio} <br>
            <strong>Destinación Económica:</strong> ${feature.properties.PREDIOS_destinacio} <br>
            <strong>Dirección:</strong> ${feature.properties.Direccion} <br>
            <strong>Condición del predio:</strong> ${feature.properties.PREDIOS_condicion_}`;
  } else if (nombreCapa === 'ConstruccionRural') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Construcción</strong></h6>
            <strong>Identificador :</strong> ${feature.properties.PREDIOS_id_operaci}<br>
            <strong>Numero Predial:</strong> ${feature.properties.name} <br>
            <strong>Área de construcción:</strong> ${feature.properties.area_const} m² <br>
            <strong>Tipo de construcción:</strong> ${feature.properties.tipo_const} <br>
            <strong>Número de pisos:</strong> ${feature.properties.numero_pis} <br>
            <strong>Tipo de dominio:</strong> ${feature.properties.tipo_domin} <br>`;
  } else if (nombreCapa === 'ZonaHomogeneaFisicaRural') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Zona Homogenea Fisica Rural</strong></h6>
            <strong>Codigo:</strong> ${feature.properties.codigo}<br>
            <strong>Disponibilidad de agua:</strong> ${feature.properties.disponibil}<br>
            <strong>Uso actual del suelo:</strong> ${feature.properties.uso_actual}<br>
            <strong>Influencia Víal:</strong> ${feature.properties.influencia}<br>
            <strong>Norma de uso de suelo:</strong> ${feature.properties.norma_uso_}<br>
            `;
  } else if (nombreCapa === 'ZonaHomogeneaGeoeconomicaRural') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Zona Homogenea Geoeconómica Rural</strong></h6>
            <strong>Codigo:</strong> ${feature.properties.codigo}<br>
            <strong>Valor Hectárea:</strong> ${feature.properties.valor_hect}<br>
            <strong>Codigo zona geoeconómica:</strong> ${feature.properties.codigo_zon}<br>
            `;
  } else if (nombreCapa === 'Vereda') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Veredas </strong></h6>
            <strong>Codigo:</strong> ${feature.properties.codigo}<br>
            <strong>Nombre:</strong> ${feature.properties.nombre}<br>
            <strong>Codigo Sector:</strong> ${feature.properties.codigo_sector}<br>
            `;
  } else if (nombreCapa === 'UnidadesRural') {
    return `<h6 style="border-bottom: 1px solid grey; padding-bottom: 5px;"><strong>Info. Unidades de contrucción</strong></h6>
            <strong>Identificador:</strong> ${feature.properties.id_operacion}<br>
            <strong>Área construida:</strong> ${feature.properties.area_const} m² <br>
            <strong>Planta ubicación:</strong> ${feature.properties.planta_ubi} <br>
            <strong>Altura:</strong> ${feature.properties.altura} <br>
            <strong>Número predial:</strong> ${feature.properties.name} <br>
        `;
  } else {
    // Popup genérico para otras capas
    return Object.entries(feature.properties)
      .map(([key, value]) => `<strong>${key}:</strong>${value}`)
      .join('<br>')

  }
}

// ==========================
// TOGGLE DE CAPAS
// ==========================

let Seleccion = null;
let layerSeleccionado = null;
let estiloOriginalSeleccionado = null;
let modoSeleccionActivo = false;

// activar o desactivar el botón para selección
document.getElementById('btn-seleccionar').addEventListener('click', function () {
  mostrarAlertaFiltro(` <strong> Modo selección ${modoSeleccionActivo ? 'desactivado' : 'activado:</strong> <br> Puedes seleccionar elementos en el mapa'}`);
  modoSeleccionActivo = !modoSeleccionActivo;
  this.classList.toggle('active', modoSeleccionActivo);

  // Cambia el ícono según el estado del modo selección
  const icono = this.querySelector('i');
  //Si el modo selección está activo
  if (modoSeleccionActivo) {
    icono.classList.remove('bi bi-cursor-fill');
    icono.classList.add('bi bi-cursor');
    //si el modo de selección está apagado
  } else {
    map.removeLayer(window.capaSeleccion); //quitar capa de selección al apagar la opción de selección
    window.capaSeleccion = null; //Limpiar la variable que contiene el elemento seleccionado
    icono.classList.remove('bi bi-cursor-fill'); // quitar manita con dedo pulgar negro
    icono.classList.add('bi bi-cursor'); // agregar mano con dedo índice
  }

});



function toggleCapa(nombre) {
  const checkbox = document.getElementById('capa' + nombre);
  const config = configVisor.capas[nombre];
  const geojson = geojsonOriginal[nombre];
  if (!config || !geojson) return;

  if (checkbox.checked) {
    if (!capasVisibles[nombre]) {
      capasVisibles[nombre] = L.geoJSON(geojson, {

        style: (feature) => {
          if (nombre === 'Barrios') {
            // Asigna un color según el fid 
            const colores = ['#4F9DFF', '#67C587', '#F9C74F', '#F8965D',
              '#E36464', '#9B6BDB', '#4CCED9', '#A3B84F', '#F28FB2', '#bcbddc',
              '#756bb1', '#3B7D84', '#B48A78', '#7E9AA6', '#E31A1C'];
            // Por ejemplo, usa el módulo para rotar colores
            const color = colores[feature.properties.objectid % colores.length];
            return { color: 'Black', fillColor: color, weight: 0.8, fillOpacity: 0.5, dashArray: '2' };
          } else {
            return config.estilo;
          }
        },

        onEachFeature: (feature, layer) => {

          if (!modoSeleccionActivo) {
            layer.bindPopup(generarPopup(feature, nombre));
          }

          //--------- Sección para seleccionar un elemento al hacer clic  -------------------------

          layer.on('click', function (e) {
            if (modoSeleccionActivo) {
              // --- Selección ---
              if (layerSeleccionado && estiloOriginalSeleccionado) {
                layerSeleccionado.setStyle(estiloOriginalSeleccionado);
              }

              //forzar el mouseout cuando se cambia de selección
              if (layerSeleccionado && layerSeleccionado !== this) {
                layerSeleccionado.fire('mouseout');
              }

              Seleccion = feature;
              //mostrarAlertaFiltro(`Has seleccionado: ${feature.properties.nombre || feature.properties.etiqueta || feature.properties.npn || feature.properties.fid || 'Elemento sin nombre'}`);
              //console.log(Seleccion);
              estiloOriginalSeleccionado = Object.assign({}, this.options);
              layerSeleccionado = this;
              this.setStyle({ color: 'yellow', weight: 2, fillOpacity: 0.6 });

              if (window.capaSeleccion) {
                map.removeLayer(window.capaSeleccion);
              }
              window.capaSeleccion = L.geoJSON({ type: 'FeatureCollection', features: [Seleccion] }, {
                style: { fillColor: 'yellow', color: 'black', weight: 1, fillOpacity: 0.6 }
              }).addTo(map);
            }
          });

          //--------- Sección para resaltar un elemento cuando se pasa el mouse por encima-------------------------

          // Guardar una copia del estilo original
          const estiloOriginal = Object.assign({}, layer.options);
          // mostrarAlertaFiltro(estiloOriginal)

          // Evento mouseover: resalta el feature
          layer.on('mouseover', function (e) {
            this.setStyle({
              weight: 2,
              color: '#002F55',
              fillOpacity: 0.3
            });
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
              ;
            }
          });

          // Restaura el estilo original
          layer.on('mouseout', function (e) {
            this.setStyle(estiloOriginal);
          });

        }
      }).addTo(map);
    }
  } else {
    if (capasVisibles[nombre]) {
      map.removeLayer(capasVisibles[nombre]);
      capasVisibles[nombre] = null;
    }
  }
}

// ==========================
// FILTRO SIMPLE
// ==========================
// function filtrarCapa() {
//   const capaNombre = document.getElementById('filtro-capa').value;
//   const campo = document.getElementById('filtro-campo').value;
//   const valor = document.getElementById('filtro-valor').value.toLowerCase();
//   if (!capaNombre || !campo || !valor) return;

//   const base = geojsonOriginal[capaNombre]?.features || [];
//   const filtradas = base.filter(f => (f.properties?.[campo] || '').toString().toLowerCase() === valor);

//   if (window.capaFiltrada) map.removeLayer(window.capaFiltrada);

//   window.capaFiltrada = L.geoJSON({ type: 'FeatureCollection', features: filtradas }, {
//     style: { color: 'yellow', weight: 2, fillOpacity: 0.6 },
//     onEachFeature: (feature, layer) => {
//       layer.bindPopup(generarPopup(feature, capaNombre));
//     }
//   }).addTo(map);

//   if (filtradas.length > 0) map.fitBounds(window.capaFiltrada.getBounds());
// }


const baseMaps = {
  "vial": vial,
  "satelital": satelital,
  "hibrido": hibrido
};

let capaBaseActual = satelital;

function cambiarMapaBase(tipoMapa) {
  // Validación y cambio de capa
  const nuevaCapa = baseMaps[tipoMapa];
  if (!nuevaCapa) {
    console.warn(`La capa "${tipoMapa}" no está definida en baseMaps.`);
    return;
  }
  if (capaBaseActual) {
    map.removeLayer(capaBaseActual);
  }
  capaBaseActual = nuevaCapa;
  map.addLayer(capaBaseActual);
  actualizarEstadoVisualCapas(tipoMapa);
  //console.log(`Capa base cambiada a: ${tipoMapa}`);
}



// función para regresar al punto de inicio de vista

function resetView() {
  map.setView(configVisor.center, configVisor.zoom);
}


// ==========================
// MODAL DE ALERTA PARA FILTROS
// ==========================
function mostrarAlertaFiltro(mensaje) {
  document.getElementById('modalAlertaFiltroBody').innerHTML = mensaje;
  const modalEl = document.getElementById('modalAlertaFiltro');
  // Usar objeto de opciones vacío para evitar parámetros obsoletos
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl, {});
  modal.show();
}

// --------------------------------------------------------------------------------------------------------------------
// selección de id de boton de exportar sección seleccionada. ejecuta una función específica dependendiendo del estado del botón
// Si el botón está en modo selección, se ejecuta la función exportarCapaSeleccionada, de lo contrario, se ejecuta exportarCapaFiltrada.
// ---------------------------------------------------------------------------------------------------------------------

document.getElementById('btn-exportar-seleccion').addEventListener('click', function () {
  if (!modoSeleccionActivo) {
    exportarCapaFiltrada();  // si el modo selección activo es false: Se ejecuta la función exportar capa filtrada.
    console.log('Capa filtrada exportada.');
  } else {
    exportarCapaSeleccionada(); // si el modo selección activo es true: Se ejecuta la función exportar capa seleccionada.
    console.log('Capa seleccionada exportada.');
  }
});


// -----------------------------------------------------------
//     // función para exportar la capa filtrada desktop
// ------------------------------------------------------------

function exportarCapaFiltrada() {
  if (!window.capaFiltrada) {
    mostrarAlertaFiltro('No hay capa filtrada para exportar.');
    return;
  }
  const datos = capaFiltrada.toGeoJSON();
  // Obtener el número predial del primer feature filtrado
  let numeroPredial = 'sin_numero_predial';
  if (datos.features.length > 0) {
    numeroPredial = datos.features[0].properties.name || datos.features[0].properties.GC_PredioCatastro_numero_predial || datos.features[0].properties.LC_Predio_numero_predial || datos.features[0].properties.GC_PredioCatastro_numero_predial || 'sin_numero_predial';
  }
  const blob = new Blob([JSON.stringify(datos)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${numeroPredial}.geojson`;
  a.click();
  URL.revokeObjectURL(url);
}

//------------------------------------------------------------------------------
// función para exportar elemento seleccionado
//-----------------------------------------------------------------------------

function exportarCapaSeleccionada() {
  if (!window.capaSeleccion) {
    mostrarAlertaFiltro('No hay capa seleccionada para exportar.');
    return;
  }
  const datos = capaSeleccion.toGeoJSON();
  let numeroPredial = 'sin_numero_predial';
  if (datos.features.length > 0) {
    numeroPredial = datos.features[0].properties.name || datos.features[0].properties.GC_PredioCatastro_numero_predial || datos.features[0].properties.LC_Predio_numero_predial || datos.features[0].properties.GC_PredioCatastro_numero_predial || 'sin_numero_predial';
  }
  mostrarAlertaFiltro('Selección exportada en formato GeoJson');
  const blob = new Blob([JSON.stringify(datos)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${numeroPredial}.geojson`;
  a.click();
  URL.revokeObjectURL(url);
}


//  -----------------------------------------------------------
//     // función para exportar la capa filtrada para móvil
//  -----------------------------------------------------------

function exportarCapaFiltradaMovil() {
  if (!window.capaFiltradaMovil) {
    mostrarAlertaFiltro('No hay capa movil filtrada para exportar.');
    return;
  }

  const datosMovil = capaFiltradaMovil.toGeoJSON();
  let numeroPredialM = 'sin_numero_predial';
  if (datosMovil.features.length > 0) {
    numeroPredialM = datosMovil.features[0].properties.name || datosMovil.features[0].properties["Numero Predial"] || 'sin_numero_predial';
  }

  mostrarAlertaFiltro('Selección exportada en formato GeoJson');
  const blob = new Blob([JSON.stringify(datosMovil)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${numeroPredialM}.geojson`;
  a.click();
  URL.revokeObjectURL(url);
}


// =========================================================================
// FILTRO  PARA MÓVIL
// ========================================================================

function actualizarCamposMovil() {
  const capa = document.getElementById('filtro-capa-movil').value;
  const campoSelect = document.getElementById('filtro-campo-movil');
  campoSelect.innerHTML = '';
  if (!geojsonOriginal[capa]) {
    setTimeout(actualizarCamposMovil, 200);
    return;
  }
  completarCamposMovil(capa);
  actualizarValoresMovil();
}

function completarCamposMovil(capa) {
  const campoSelect = document.getElementById('filtro-campo-movil');
  campoSelect.innerHTML = '';
  (camposPorCapa[capa] || []).forEach(campo => {
    const opt = document.createElement('option');
    opt.value = campo;
    opt.textContent = aliasCampos[campo] || campo;
    campoSelect.appendChild(opt);
  });
  if (campoSelect.options.length > 0) {
    campoSelect.selectedIndex = 0;
  }
}

function actualizarValoresMovil() {
  const capa = document.getElementById('filtro-capa-movil').value;
  const campo = document.getElementById('filtro-campo-movil').value;
  const lista = document.getElementById('lista-valores-movil');
  lista.innerHTML = '';
  const valores = new Set();
  const datos = geojsonOriginal[capa]?.features || [];
  datos.forEach(f => {
    if (f.properties && Object.prototype.hasOwnProperty.call(f.properties, campo)) {
      const valor = f.properties[campo];
      if (valor !== undefined && valor !== null && valor !== "") valores.add(valor);
    }
  });
  [...valores].sort().forEach(valor => {
    const opt = document.createElement('option');
    opt.value = valor;
    lista.appendChild(opt);
  });
}

function filtrarCapaMovil() {
  const capaNombre = document.getElementById('filtro-capa-movil').value;
  const campo = document.getElementById('filtro-campo-movil').value;
  const valor = document.getElementById('filtro-valor-movil').value.toLowerCase();
  if (!capaNombre || !campo || !valor) {
    mostrarAlertaFiltro('Por favor selecciona capa, campo y valor para filtrar.');
    return;
  }
  // Activar la capa correspondiente si no está activa
  const checkbox = document.getElementById('capa' + capaNombre);
  if (checkbox && !checkbox.checked) {
    checkbox.checked = true;
    toggleCapa(capaNombre);
  }

  const base = geojsonOriginal[capaNombre]?.features || [];
  const filtradas = base.filter(f => (f.properties?.[campo] || '').toString().toLowerCase() === valor);
  if (window.capaFiltradaMovil) map.removeLayer(window.capaFiltradaMovil);
  window.capaFiltradaMovil = L.geoJSON({ type: 'FeatureCollection', features: filtradas }, {
    style: { color: 'yellow', weight: 2, fillOpacity: 0.6 },
    onEachFeature: (feature, layer) => {
      layer.bindPopup(generarPopup(feature, capaNombre));
    }
  }).addTo(map);
  if (filtradas.length > 0) map.fitBounds(window.capaFiltradaMovil.getBounds());
  else mostrarAlertaFiltro('No se encontraron resultados para el filtro.');
}

function limpiarFiltroMovil() {
  document.getElementById('filtro-valor-movil').value = '';
  // Eliminar todas las capas activas excepto Comunas
  for (const nombre in capasVisibles) {
    if (nombre !== 'Comunas' && capasVisibles[nombre]) {
      map.removeLayer(capasVisibles[nombre]);
      capasVisibles[nombre] = null;
      // Desmarcar el checkbox si existe
      const checkbox = document.getElementById('capa' + nombre);
      if (checkbox) checkbox.checked = false;
    }
  }
  // Mantener solo Comunas activa
  if (!capasVisibles['Comunas']) {
    toggleCapa('Comunas');
    const checkboxComunas = document.getElementById('capaComunas');
    if (checkboxComunas) checkboxComunas.checked = true;
  }
  if (window.capaFiltradaMovil) map.removeLayer(window.capaFiltradaMovil);
  window.capaFiltradaMovil = null;
  map.setView(configVisor.center, configVisor.zoom);
}

// ===================================================================================================
// FILTRO DE CAPAS Desktop
// ==================================================================================================
const camposPorCapa = {
  "Terreno": ["PREDIOS_id_operaci", "name", "PREDIOS_matricula_"],
  "Unidades": ["id_operacion", "area_const", "name"],
  "Barrios": ["objectid", "codigo"],
  "Construccion": ["PREDIOS_id_operaci", "name", "tipo_const"],
  "ZonaHomogeneaFisicaUrbana": ["codigo", "uso_actual"],
  "ZonaHomogeneaGeoeconomicaUrbana": ["codigo", "codigo_zon"],
  "TerrenoRural": ["PREDIOS_id_operaci", "PREDIOS_matricula_", "name", "PREDIOS_destinacio"],
  "UnidadesRural": ["id_operacion", "area_const", "name"],
  "ConstruccionRural": ["PREDIOS_id_operaci", "name"],
  "Vereda": ["codigo", "nombre", "codigo_sector"],
  "ZonaHomogeneaFisicaRural": ["codigo", "uso_actual"],
  "ZonaHomogeneaGeoeconomicaRural": ["codigo", "codigo_zon"],
  // "Comunas": ["NOMBRE_COM", "NOMBRE_UPZ", "COMUNA"]
};

const aliasCampos = {

  "PREDIOS_id_operaci": "Identificador",
  "nombre": "Nombre",
  "tipo_const": "Tipo de Construcción",
  "PREDIOS_matricula_": "Matricula Inmobiliaria",
  "LC_Predio_numero_predial": "Número Predial",
  "GC_PredioCatastro_numero_predial": "Número predial",
  "Planta de ubicación": "Planta de Ubicación",
  "altura": "Altura",
  "etiqueta": "Etiqueta",
  "total_pisos": "Total de pisos",
  "PREDIOS_destinacio": "Destinación Económica",
  "CORREGIMIENTO": "Código del corregimiento",
  "PK_BARRIO": "Código del barrio",
  "area_total_construccion": "Área Total Construcción",
  "NOMBRE_COM": "Nombre de la Comuna",
  "NOMBRE_UPZ": "Nombre de la UPZ",
  "COMUNA": "N° de comuna",
  "name": "Numero Predial",
  "area_const": "Área de construcción",
  "numero_pis": "Pisos",
  "area_const": "Area Construida",
  "objectid": "Identificador",
  "codigo": "Codigo",
  "numero_pisos": "Número de pisos",
  "uso_actual": "Uso actual del suelo",
  "codigo_zon": "Cod. Zona Geoeconómica",
  "codigo_sector": "Código Sector",
  "id_operacion": "Identificador"
};

function actualizarCampos() {
  const capa = document.getElementById('filtro-capa').value;
  const campoSelect = document.getElementById('filtro-campo');
  campoSelect.innerHTML = '';
  if (!geojsonOriginal[capa]) {
    // Esperar a que los datos estén cargados
    setTimeout(actualizarCampos, 200);
    return;
  }
  completarCampos(capa);
  actualizarValores();
}

function completarCampos(capa) {
  const campoSelect = document.getElementById('filtro-campo');
  campoSelect.innerHTML = '';
  (camposPorCapa[capa] || []).forEach(campo => {
    const opt = document.createElement('option');
    opt.value = campo;
    opt.textContent = aliasCampos[campo] || campo;
    campoSelect.appendChild(opt);
  });
  // Selecciona el primer campo por defecto
  if (campoSelect.options.length > 0) {
    campoSelect.selectedIndex = 0;
  }
}

function actualizarValores() {
  const capa = document.getElementById('filtro-capa').value;
  const campo = document.getElementById('filtro-campo').value;
  const lista = document.getElementById('lista-valores');
  lista.innerHTML = '';
  const valores = new Set();
  const datos = geojsonOriginal[capa]?.features || [];
  datos.forEach(f => {
    const valor = f.properties?.[campo];
    if (valor !== undefined && valor !== null && valor !== "") valores.add(valor);
  });
  [...valores].sort().forEach(valor => {
    const opt = document.createElement('option');
    opt.value = valor;
    lista.appendChild(opt);
  });
}

function filtrarCapa() {
  const capaNombre = document.getElementById('filtro-capa').value;
  const campo = document.getElementById('filtro-campo').value;
  const valor = document.getElementById('filtro-valor').value.toLowerCase();
  if (!capaNombre || !campo || !valor) {
    mostrarAlertaFiltro('Por favor selecciona capa, campo y valor para filtrar.');
    return;
  }

  // Activar la capa correspondiente si no está activa
  const checkbox = document.getElementById('capa' + capaNombre);
  if (checkbox && !checkbox.checked) {
    checkbox.checked = true;
    toggleCapa(capaNombre);
  }

  const base = geojsonOriginal[capaNombre]?.features || [];
  const filtradas = base.filter(f => (f.properties?.[campo] || '').toString().toLowerCase() === valor);

  if (window.capaFiltrada) map.removeLayer(window.capaFiltrada);
  mostrarAlertaFiltro(`Se encontraron ${filtradas.length} resultado(s).`)

  window.capaFiltrada = L.geoJSON({ type: 'FeatureCollection', features: filtradas }, {
    style: { color: 'yellow', weight: 2, fillOpacity: 0.6 },
    onEachFeature: (feature, layer) => {
      layer.bindPopup(generarPopup(feature, capaNombre));
    }
  }).addTo(map);

  if (filtradas.length > 0) map.fitBounds(window.capaFiltrada.getBounds());
  else mostrarAlertaFiltro('No se encontraron resultados para el filtro.');
}

function limpiarFiltro() {
  document.getElementById('filtro-valor').value = '';
  // Eliminar todas las capas activas excepto Barrios
  for (const nombre in capasVisibles) {
    if (nombre !== 'Barrios' && capasVisibles[nombre]) {
      map.removeLayer(capasVisibles[nombre]);
      capasVisibles[nombre] = null;
      // Desmarcar el checkbox si existe
      const checkbox = document.getElementById('capa' + nombre);
      if (checkbox) checkbox.checked = false;
    }
  }
  // Mantener solo Barrios activa
  if (!capasVisibles['Barrios']) {
    toggleCapa('Barrios');
    const checkboxBarrios = document.getElementById('capaBarrios');
    if (checkboxBarrios) checkboxBarrios.checked = true;
  }
  if (window.capaFiltrada) map.removeLayer(window.capaFiltrada);
  window.capaFiltrada = null;
  // Centrar el mapa en la vista inicial
  map.setView(configVisor.center, configVisor.zoom);
}



let capaZonaActual = null;

function cargarZona() {
  const zona = document.getElementById('zona').value;
  if (!zona) return;
  if (capaZonaActual) map.removeLayer(capaZonaActual);
  fetch(`https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/manzanas_${zona}.geojson`)
    .then(res => res.json())
    .then(data => {
      capaZonaActual = L.geoJSON(data, {
        style: { color: '#ff3333ff', weight: 1, fillOpacity: 0.4 },
        onEachFeature: (f, l) => {
          l.bindPopup(generarPopup(f, zona));
        }
      }).addTo(map);
      console.log(`Zona cargada: ${zona}`);
      map.fitBounds(capaZonaActual.getBounds());
    });
}

function limpiarZona() {
  if (capaZonaActual) map.removeLayer(capaZonaActual);
  document.getElementById('zona').value = '';
}

// Cargar opciones de zonas desde JSON
fetch('https://pub-5aa38eced5964a798d34f7f21717fc5f.r2.dev/data/zonas.json')
  .then(res => res.json())
  .then(zonas => {
    const select = document.getElementById('zona');
    zonas.forEach(z => {
      const opt = document.createElement('option');
      opt.value = z;
      opt.textContent = z.replace(/_/g, ' ');
      select.appendChild(opt);
    });
  });
