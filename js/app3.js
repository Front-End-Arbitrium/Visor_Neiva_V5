
var municipios = {
    neiva: {
        nombre: "Neiva",
        center: [2.93, -75.28],
        marcador: [2.950645316162555, -75.28866189361457],
        zoom: 4
    }
};


const param = new URLSearchParams(window.location.search);
let nombreMunicipio = param.get('mapa') || 'neiva'; // valor por defecto
let configMunicipio = municipios[nombreMunicipio];

if (!configMunicipio) {
  nombreMunicipio = 'neiva';
  configMunicipio = municipios[nombreMunicipio];
}

const layerVial = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Tiles © Esri',
    subdomains: 'abcd',
    opacity: 0.8,  // Más transparente para destacar tu GeoJSON
});

const mapita = L.map('mapa2', {
  renderer: L.canvas(),
  center: configMunicipio.center,
  zoom: configMunicipio.zoom,
  layers: [layerVial],
  zoomControl: false, // Oculta el control de zoom
  dragging: false, // Bloquea el arrastre
  scrollWheelZoom: false, // Bloquea zoom con rueda
  doubleClickZoom: false, // Bloquea zoom con doble clic
  boxZoom: false, // Bloquea zoom con caja
  keyboard: false, // Bloquea navegación con teclado
  touchZoom: false
});

 mapita.flyTo(configMunicipio.marcador, configMunicipio.zoom + 7, {
   animate: true,
   duration: 2 // duración en segundos
 });

// Marcador con el logotipo de arbitrium
 var Icono = L.icon({
     iconUrl: 'assets/img/Group 24.png'
 });

 var marcador = L.marker(configMunicipio.marcador, { icon: Icono }).addTo(mapita);


//  actualizar dinámica mente la ubicación debajo del mapita
 document.getElementById('ubicacion-municipio').innerHTML =
  `<i class="bi bi-crosshair mx-2"></i>Ubicación: ${configMunicipio.nombre} - Huila`;

// Actualizar dinámicamente el título de la ubicación
  document.getElementById('ubicacion-municipioTitulo').innerHTML =
  `Visor de: ${configMunicipio.nombre}`
