# MielAbejas / Mielcaffeto

Aplicación web desarrollada con Angular 17 para una marca de miel, enfocada en presentar la empresa, sus productos, proceso de elaboración y una experiencia de contacto/registro para usuarios.

## Descripción

Este proyecto es una landing page y sitio comercial con navegación por secciones como:

- Inicio
- Nosotros
- Productos
- Proceso
- Contacto
- Registro

La aplicación está construida con Angular, usa rutas para la navegación, y se prepara para integraciones con Firebase y servicios web.

## Stack tecnológico

- Angular 17
- TypeScript
- RxJS
- Angular Fire
- Firebase
- Sass / SCSS
- Node.js

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js 18 o superior
- npm
- Angular CLI (opcional, pero recomendado)

Puedes instalar Angular CLI globalmente con:

```bash
npm install -g @angular/cli
```

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/CesarMauriciof/miel_abejas.git
cd miel_abejas
```

Instala las dependencias:

```bash
npm install
```

## Ejecutar la aplicación

Inicia el servidor de desarrollo:

```bash
npm start
```

O con Angular CLI:

```bash
ng serve
```

Luego abre en tu navegador:

```text
http://localhost:4200/
```

La aplicación se recargará automáticamente al detectar cambios en el código.

## Scripts disponibles

En el archivo `package.json` se incluyen los siguientes scripts:

```bash
npm start
```
Ejecuta el proyecto en modo desarrollo.

```bash
npm run build
```
Genera la versión de producción en la carpeta `dist/`.

```bash
npm run watch
```
Compila la aplicación en modo desarrollo y observa cambios.

```bash
npm test
```
Ejecuta las pruebas unitarias con Karma.

## Estructura del proyecto

```text
miel_abejas/
├── src/
│   ├── app/
│   │   ├── core/
│   │   ├── pages/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   └── app.routes.ts
│   ├── assets/
│   ├── environments/
│   └── main.ts
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## Configuración y Firebase

El proyecto incluye integración con Angular Fire y Firebase, ideal para:

- autenticación
- almacenamiento de datos
- gestión de usuarios
- registros y formularios

Si vas a usar Firebase, asegúrate de configurar correctamente los archivos de entorno y las credenciales del proyecto.

## Compilar para producción

```bash
npm run build
```

La versión compilada quedará disponible en:

```text
dist/miel_abejas/
```

## Convenciones y flujo de trabajo

- Usa ramas separadas para cada funcionalidad o corrección.
- Mantén mensajes de commit claros y descriptivos.
- Ejecuta pruebas antes de entregar cambios importantes.

## Licencia

Este proyecto no especifica licencia en el archivo actual, por lo que se recomienda revisarlo antes de usarlo en producción o compartirlo públicamente.

## Soporte

Si necesitas ayuda con el proyecto, puedes revisar la documentación de Angular o consultar el contenido del código fuente del proyecto.

## Enlaces útiles

- [Angular](https://angular.io/)
- [Angular CLI](https://angular.io/cli)
- [Firebase](https://firebase.google.com/)
- [Angular Fire](https://github.com/angular/angularfire)

---

Si quieres, también puedo ayudarte a dejar este README aún mejor con una versión más comercial, más técnica o más enfocada a un portfolio/cliente final.
