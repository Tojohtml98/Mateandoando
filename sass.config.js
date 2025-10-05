const sass = require('sass');
const Fiber = require('fibers');
const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Configuración de rutas
const paths = {
  src: path.join(__dirname, 'SASS'),
  dist: path.join(__dirname, 'css'),
  entryFile: 'estilos.scss',
  outputFile: 'estilos.min.css',
  sourceMapFile: 'estilos.min.css.map'
};

// Configuración de SASS
const sassOptions = {
  file: path.join(paths.src, paths.entryFile),
  outFile: path.join(paths.dist, paths.outputFile),
  sourceMap: true,
  sourceMapContents: true,
  outputStyle: 'expanded',
  includePaths: [
    path.join(__dirname, 'node_modules')
  ],
  fiber: Fiber
};

// Configuración de PostCSS
const postcssPlugins = [
  autoprefixer({
    overrideBrowserslist: [
      '> 1%',
      'last 2 versions',
      'not ie <= 11',
      'not op_mini all'
    ],
    grid: 'autoplace'
  }),
  cssnano({
    preset: [
      'default',
      {
        discardComments: {
          removeAll: true
        },
        normalizeWhitespace: false,
        colormin: true,
        zindex: false
      }
    ]
  })
];

// Función para compilar SASS
async function compileSass() {
  try {
    console.log('🔨 Compilando SASS...');
    
    // Crear directorio de salida si no existe
    if (!fs.existsSync(paths.dist)) {
      fs.mkdirSync(paths.dist, { recursive: true });
      console.log(`📂 Carpeta de salida creada: ${paths.dist}`);
    }

    // Compilar SASS
    const result = sass.renderSync({
      ...sassOptions,
      outFile: path.join(paths.dist, paths.outputFile)
    });

    console.log('✅ SASS compilado exitosamente');

    // Procesar con PostCSS
    const postcssResult = await postcss(postcssPlugins).process(result.css, {
      from: undefined,
      to: path.join(paths.dist, paths.outputFile),
      map: {
        prev: result.map ? JSON.parse(result.map) : false,
        inline: false,
        annotation: false,
        sourcesContent: true
      }
    });

    // Escribir archivo CSS
    fs.writeFileSync(
      path.join(paths.dist, paths.outputFile),
      postcssResult.css,
      'utf8'
    );

    // Escribir source map si está habilitado
    if (postcssResult.map) {
      fs.writeFileSync(
        path.join(paths.dist, paths.sourceMapFile),
        postcssResult.map.toString(),
        'utf8'
      );
    }

    console.log(`✨ CSS generado en: ${path.join(paths.dist, paths.outputFile)}`);
    
    if (postcssResult.map) {
      console.log(`🗺️  Source map generado en: ${path.join(paths.dist, paths.sourceMapFile)}`);
    }
    
    console.log('✅ Proceso completado con éxito');
    
  } catch (error) {
    console.error('❌ Error al compilar SASS:', error.message);
    if (error.file) {
      console.error(`📄 Archivo: ${error.file}`);
      console.error(`📝 Línea: ${error.line}, Columna: ${error.column}`);
      console.error(`💬 ${error.message}`);
    }
    process.exit(1);
  }
}

// Ejecutar la compilación
compileSass();
