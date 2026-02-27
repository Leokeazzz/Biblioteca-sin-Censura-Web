/**
 * Biblioteca sin Censura - Aplicación Principal
 * Si estás leyendo esto, no tienes nada mejor que hacer?
 */

let datosGlobales = null;

const ICONOS = {
    'ciberseguridad': '🔒',
    'telegram': '📱',
    'tienda-netflix': '📺',
    'tienda-hbo-max': '🎬',
    'tienda-auricular-bluetooth': '🎧'
};

/**
 * Obtiene el icono correspondiente al tipo
 * @param {string} tipo - Tipo de curso o producto
 * @returns {string} Emoji del icono
 */
function getIcono(tipo) {
    return ICONOS[tipo] || ICONOS['default'];
}

/**
 * @returns {Promise} Se resuelve cuando los datos se cargan
 */
async function cargarDatosJSON() {
    try {
        const respuesta = await fetch('data.json');
        if (!respuesta.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        datosGlobales = await respuesta.json();
        
        actualizarEnlacesWhatsApp();
        
        return datosGlobales;
    } catch (error) {
        console.error('Error al cargar datos:', error);
        throw error;
    }
}

/**
 * Actualiza los enlaces de WhatsApp con el número configurado
 * Usa el número y mensaje del archivo de configuración
 */
function actualizarEnlacesWhatsApp() {
    if (!datosGlobales || !datosGlobales.configuracion) return;
    
    const numero = datosGlobales.configuracion.whatsapp_numero;
    const mensajeDefault = datosGlobales.configuracion.mensaje_default || 'Hola, estoy interesado en';
    
    // Actualizar enlace del header
    const btnHeader = document.getElementById('btnWhatsappHeader');
    if (btnHeader) {
        const mensaje = encodeURIComponent(mensajeDefault + ' los cursos');
        btnHeader.href = `https://wa.me/${numero}?text=${mensaje}`;
    }
    
    // Actualizar enlace del footer
    const footerLink = document.getElementById('footerWhatsappLink');
    if (footerLink) {
        const mensaje = encodeURIComponent(mensajeDefault + ' los cursos y productos');
        footerLink.href = `https://wa.me/${numero}?text=${mensaje}`;
    }
}

/**
 * Genera el enlace de WhatsApp para un producto o curso específico
 * @param {Object} item - Objeto con los datos del curso o producto
 * @returns {string} URL de WhatsApp con el mensaje
 */
function generarEnlaceWhatsApp(item) {
    if (!datosGlobales || !datosGlobales.configuracion) {
        return '#';
    }
    
    const numero = datosGlobales.configuracion.whatsapp_numero;
    // Usar mensaje personalizado del producto o mensaje default
    const mensaje = item.mensaje_whatsapp || datosGlobales.configuracion.mensaje_default + ' ' + item.titulo;
    
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

/**
 * Inicializa la aplicación
 * Carga los datos JSON y muestra el contenido
 */
async function initApp() {
    try {
        // Cargar datos desde JSON
        await cargarDatosJSON();
        
        // Verificar en qué página estamos
        const path = window.location.pathname;
        
        if (path.includes('curso.html')) {
            // Página de detalles del curso
            console.log('Página de curso detectada');
        } else if (path.includes('tienda.html')) {
            // Página de detalles de tienda
            console.log('Página de tienda detectada');
        } else {
            // Página principal - cargar cursos y tienda
            await cargarCursos();
            await cargarTienda();
        }
        
        console.log('Aplicación inicializada correctamente');
    } catch (error) {
        console.error('Error al inicializar la aplicación:', error);
        document.body.innerHTML = `
            <div style="padding: 40px; text-align: center; font-family: sans-serif; background: #f5f5f5; min-height: 100vh;">
                <h1 style="color: rgb(0, 51, 102);">Error al cargar la aplicación</h1>
                <p>Por favor, asegúrate de que el archivo data.json esté presente.</p>
                <p style="color: red;">Error: ${error.message}</p>
            </div>
        `;
    }
}

/**
 * Carga los cursos desde el JSON y los muestra en el DOM
 */
async function cargarCursos() {
    try {
        const cursosGrid = document.getElementById('cursos-grid');
        
        if (!cursosGrid) {
            console.warn('No se encontró el contenedor de cursos');
            return;
        }
        
        if (!datosGlobales || !datosGlobales.cursos) {
            cursosGrid.innerHTML = '<div class="loading">No hay cursos disponibles</div>';
            return;
        }
        
        // Generar HTML para cada curso
        const cursosHTML = datosGlobales.cursos.map(curso => crearTarjetaCurso(curso)).join('');
        cursosGrid.innerHTML = cursosHTML;
        
    } catch (error) {
        console.error('Error al cargar cursos:', error);
        document.getElementById('cursos-grid').innerHTML = 
            '<div class="error">Error al cargar los cursos</div>';
    }
}

/**
 * Crea el HTML de una tarjeta de curso
 * @param {Object} curso - Objeto con los datos del curso
 * @returns {string} HTML de la tarjeta
 */
function crearTarjetaCurso(curso) {
    const icono = getIcono(curso.imagen);
    const enlaceWhatsApp = generarEnlaceWhatsApp(curso);
    
    return `
        <div class="curso-card">
            <div class="curso-imagen">
                <span>${icono}</span>
            </div>
            <div class="curso-info">
                <h3 class="curso-titulo">${curso.titulo}</h3>
                <p class="curso-resumen">${curso.resumen}</p>
                <div class="curso-precio">S/ ${curso.precio.toFixed(2)} <span>soles</span></div>
                <a href="${enlaceWhatsApp}" class="btn-acceder" target="_blank">Acceder</a>
            </div>
        </div>
    `;
}

/**
 * Carga los productos de la tienda desde el JSON y los muestra en el DOM
 */
async function cargarTienda() {
    try {
        const tiendaGrid = document.getElementById('tienda-grid');
        
        if (!tiendaGrid) {
            console.warn('No se encontró el contenedor de tienda');
            return;
        }
        
        if (!datosGlobales || !datosGlobales.tienda) {
            tiendaGrid.innerHTML = '<div class="loading">No hay productos disponibles</div>';
            return;
        }
        
        // Generar HTML para cada producto
        const tiendaHTML = datosGlobales.tienda.map(producto => crearTarjetaTienda(producto)).join('');
        tiendaGrid.innerHTML = tiendaHTML;
        
    } catch (error) {
        console.error('Error al cargar tienda:', error);
        document.getElementById('tienda-grid').innerHTML = 
            '<div class="error">Error al cargar los productos</div>';
    }
}

/**
 * Crea el HTML de una tarjeta de producto de tienda
 * @param {Object} producto - Objeto con los datos del producto
 * @returns {string} HTML de la tarjeta
 */
function crearTarjetaTienda(producto) {
    const icono = getIcono(producto.imagen);
    const enlaceWhatsApp = generarEnlaceWhatsApp(producto);
    const precioOriginal = producto.precio_original || producto.precio * 3;
    
    return `
        <div class="tienda-card">
            <div class="tienda-imagen">
                <span>${icono}</span>
            </div>
            <div class="tienda-info">
                <h3 class="tienda-titulo">${producto.titulo}</h3>
                <p class="tienda-descripcion">${producto.descripcion}</p>
                <div class="tienda-precio">
                    <span class="precio-original">S/ ${precioOriginal.toFixed(2)}</span>
                    <span class="precio-oferta">S/ ${producto.precio.toFixed(2)}</span>
                </div>
                <a href="${enlaceWhatsApp}" class="btn-comprar" target="_blank">Comprar</a>
            </div>
        </div>
    `;
}

/**
 * Carga los detalles de un curso específico desde el JSON
 * @param {number} id - ID del curso a cargar
 */
function cargarDetallesCurso(id) {
    if (!datosGlobales || !datosGlobales.cursos) {
        return null;
    }
    
    return datosGlobales.cursos.find(curso => curso.id === parseInt(id));
}

/**
 * Carga los detalles de un producto de tienda específico desde el JSON
 * @param {number} id - ID del producto a cargar
 */
function cargarDetallesTienda(id) {
    if (!datosGlobales || !datosGlobales.tienda) {
        return null;
    }
    
    return datosGlobales.tienda.find(producto => producto.id === parseInt(id));
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);

// Exportar funciones para uso global en otras páginas
window.cargarDatosJSON = cargarDatosJSON;
window.getIcono = getIcono;
window.generarEnlaceWhatsApp = generarEnlaceWhatsApp;
window.crearTarjetaCurso = crearTarjetaCurso;
window.cargarDetallesCursoFn = cargarDetallesCurso;
window.cargarDetallesTiendaFn = cargarDetallesTienda;
