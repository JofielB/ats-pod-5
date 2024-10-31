 # ATS POD 5 - Discovering the World (UI Replication)

## Objetivo

El objetivo de esta actividad es replicar una interfaz de usuario proporcionada, prestando atención a los detalles de diseño para que sea lo más parecida posible, incluyendo la disposición de los elementos, los estilos y la funcionalidad básica.

## Informacion
### Capability
Backend Engineering
### Nombre
Jofiel Batista Farias
### CL
10
### EID
jofiel.batista
### Reflexion
Desarrollar mi primer proyecto con Angular fue una experiencia enriquecedora que me enseñó la importancia de la precisión en el diseño de interfaces de usuario. Al replicar la UI de la aplicación "discovering the world", aprendí a manejar la estructura de componentes en Angular, crear un menú de navegación visual, y gestionar eventos y estados para abrir modales y editar postales. Además, la implementación de botones para filtrar categorías, aunque solo visuales, me hizo reflexionar sobre la usabilidad y la organización de la información. En resumen, este proyecto me proporcionó una base sólida en Angular y una apreciación por el diseño intuitivo de interfaces.

## Ejecutar Proyecto
### Requerimientos previos
#### Node 18
1. Installs fnm (Fast Node Manager):
```bash
winget install Schniz.fnm
```
2. Configure fnm environment:
```bash
fnm env --use-on-cd | Out-String | Invoke-Expression
 ```
3. Download and install Node.js:
```bash
fnm use --install-if-missing 18
 ```
4. Verifies the right Node.js version is in the environment(should print `v18.20.4`):
```bash
node -v
 ```
5. Verifies the right npm version is in the environment(should print `10.7.0`):
```bash
npm -v
 ```
#### Angular CLI
1. Installs Angular CLI:
```bash
 npm install -g @angular/cli
```
### Pasos para ejecucion
1. Clonar proyecto:
```bash
git clone https://github.com/JofielB/ats-pod-5.git
```
2. Moverse al directorio del proyecto:
```bash
cd ats-pod-5
```
3. Instalar dependencias:
```bash
npm install
```
4. Levantar proyecto:
```bash
ng serve --open
```

