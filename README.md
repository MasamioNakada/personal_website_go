# Sitio Web Personal

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Git](https://git-scm.com/downloads)
- [Go](https://golang.org/dl/)
- [Hugo](https://gohugo.io/installation/)

## Instalación Local

1. Clona el repositorio:

```bash
git clone <URL-del-repositorio>
cd masaminakada_site
```

2. Inicializa y actualiza los submódulos de Git (para el tema Blowfish):

```bash
git submodule init
git submodule update
```

3. Instala las dependencias de Hugo:

```bash
hugo mod get
hugo mod tidy
```

4. Inicia el servidor de desarrollo local:

```bash
hugo server -D
```

El sitio web estará disponible en `http://localhost:1313`

## Estructura del Proyecto

```
├── content/          # Contenido del sitio
├── static/           # Archivos estáticos
├── themes/           # Tema Blowfish
├── config/          # Archivos de configuración
└── assets/          # Recursos personalizados
```

## Desarrollo

Para desarrollar nuevas características:

1. Crea una nueva rama:
```bash
git checkout -b feature/nueva-caracteristica
```

2. Realiza tus cambios y compruébalos en local usando `hugo server -D`

3. Cuando estés satisfecho con los cambios, haz commit y push:
```bash
git add .
git commit -m "Descripción de los cambios"
git push origin feature/nueva-caracteristica
```