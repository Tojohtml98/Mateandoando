# Mateandoando - Tienda de Productos Materos

## 🧉 Descripción

Mateandoando es una tienda online especializada en productos materos de alta calidad. Ofrecemos una experiencia de compra moderna y funcional con un diseño atractivo y responsive.

## ✨ Características Implementadas

### 🎨 Diseño y UX
- **Diseño moderno y atractivo** con gradientes y efectos visuales
- **Completamente responsive** - se adapta a todos los dispositivos
- **Navegación móvil** con menú hamburguesa funcional
- **Animaciones suaves** con AOS (Animate On Scroll)
- **Hero section mejorado** con estadísticas y efectos de fondo

### 🛒 Funcionalidades E-commerce
- **Carrito de compras funcional** con contador dinámico
- **Modal de productos** para vista rápida
- **Lista de deseos** (wishlist) para productos favoritos
- **Sistema de calificaciones** con estrellas
- **Precios con descuentos** mostrados visualmente
- **Notificaciones toast** para acciones del usuario

### 🎯 Interactividad
- **Botones con efectos hover** y animaciones
- **Formularios mejorados** con validación
- **Navegación suave** entre secciones
- **Botón de WhatsApp** flotante
- **Botón "volver arriba"** con scroll suave

### 📱 Responsive Design
- **Mobile-first approach**
- **Navegación adaptativa** para móviles
- **Grids flexibles** que se adaptan al contenido
- **Tipografía escalable** para diferentes pantallas

## 🚀 Cómo ejecutar el proyecto

### Opción 1: Servidor local simple
1. Abre el archivo `index.html` directamente en tu navegador
2. O usa un servidor local como Live Server en VS Code

### Opción 2: Con Node.js (recomendado)
1. Asegúrate de tener Node.js instalado
2. Abre una terminal en la carpeta del proyecto
3. Ejecuta los siguientes comandos:

```bash
# Instalar dependencias
npm install

# Compilar estilos SASS
npm run build

# Iniciar servidor de desarrollo
npm start
```

### Opción 3: Solo compilar SASS
```bash
# Compilar estilos una vez
npm run build

# O compilar en modo watch (automático)
npm run dev
```

## 📁 Estructura del proyecto

```
Mateandoando/
├── index.html              # Página principal
├── css/
│   └── custom-styles.css   # Estilos personalizados
├── SASS/
│   ├── estilos.scss        # Archivo principal SASS
│   └── partials/           # Componentes SASS modulares
├── pages/                  # Páginas adicionales
├── medios/                 # Imágenes y recursos
├── package.json            # Configuración del proyecto
└── README.md              # Este archivo
```

## 🎨 Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS
- **SASS/SCSS** - Preprocesador CSS modular
- **Bootstrap 5** - Framework CSS responsive
- **JavaScript ES6+** - Interactividad moderna
- **AOS Library** - Animaciones on scroll
- **Font Awesome** - Iconografía
- **Google Fonts** - Tipografías (Montserrat, Poppins)

## 🔧 Características técnicas

### CSS
- Variables CSS personalizadas para colores y espaciados
- Flexbox y Grid para layouts modernos
- Transiciones y animaciones suaves
- Media queries para responsive design
- Efectos de sombra y gradientes

### JavaScript
- Carrito de compras con localStorage (opcional)
- Validación de formularios
- Navegación suave
- Modal de productos dinámico
- Sistema de notificaciones

### Optimizaciones
- Carga lazy de imágenes
- CSS minificado para producción
- Código JavaScript optimizado
- Estructura semántica para SEO

## 🎯 Funcionalidades del carrito

- ✅ Agregar productos al carrito
- ✅ Contador dinámico de items
- ✅ Notificaciones de éxito
- ✅ Persistencia de datos (localStorage)
- ✅ Vista rápida de productos
- ✅ Lista de deseos
- ✅ Responsive en móviles

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móviles iOS/Android

## 🚀 Próximas mejoras sugeridas

- [ ] Integración con backend real
- [ ] Sistema de pagos
- [ ] Gestión de usuarios
- [ ] Panel de administración
- [ ] SEO optimizado
- [ ] PWA (Progressive Web App)
- [ ] Tests automatizados

## 👨‍💻 Desarrollo

Este proyecto fue mejorado con:
- Diseño moderno y atractivo
- Funcionalidades de e-commerce
- Experiencia de usuario optimizada
- Código limpio y mantenible
- Responsive design completo

¡Disfruta explorando la nueva experiencia de Mateandoando! 🧉✨
