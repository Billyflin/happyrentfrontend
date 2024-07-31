const { exec } = require('child_process');
const glob = require('glob');
const path = require('path');

// Lista de migraciones disponibles en sass-migrator
const migrations = [
  'calc-interpolation',
  'division',
  'module',
  'namespace',
  'strict-unary'
];

// Función para ejecutar un comando de shell y capturar la salida
function runCommand(command, callback) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${command}`);
      console.error(error.message);
      return;
    }
    console.log(`Output for command: ${command}`);
    console.log(stdout);
    if (stderr) {
      console.error(`Error output for command: ${command}`);
      console.error(stderr);
    }
    if (callback) callback();
  });
}

// Función para encontrar todos los archivos SCSS en el proyecto
function findAllScssFiles() {
  return glob.sync('./**/*.scss', {
    ignore: ['./node_modules/**']
  });
}

// Construir la cadena de load-paths para sass-migrator
const loadPaths = [
  './src/assets/scss',
  './node_modules'
].map(p => `--load-path=${path.resolve(p)}`).join(' ');

// Ejecutar todas las migraciones de sass-migrator en secuencia
function runAllMigrations(migrations, files) {
  if (migrations.length === 0) return;

  const migration = migrations.shift();
  const command = `sass-migrator ${migration} --migrate-deps ${loadPaths} ${files.join(' ')}`;

  runCommand(command, () => runAllMigrations(migrations, files));
}

// Encuentra todos los archivos SCSS y ejecuta las migraciones
const scssFiles = findAllScssFiles();
if (scssFiles.length > 0) {
  runAllMigrations([...migrations], scssFiles);
} else {
  console.log('No SCSS files found.');
}
