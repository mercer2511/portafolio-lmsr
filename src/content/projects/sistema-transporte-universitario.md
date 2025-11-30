---
title: "Sistema Integral de Transporte Universitario"
pubDate: 2024-07-27
description: "Una solución full-stack para optimizar y asegurar el transporte nocturno de estudiantes, incluyendo backend, app móvil, microservicios y Business Intelligence."
tags: ["Arquitectura", "Backend", "Kotlin", "FastAPI", "Google Cloud", "Docker", "BI"]
image: "./images/stu-architecture.png"
github: "https://github.com/leona/test"
link: "https://google.com"
---

## El Problema

La gestión del transporte nocturno en la universidad era un proceso manual, propenso a errores y con brechas de seguridad. Los estudiantes no tenían una forma fiable de confirmar su asistencia, y los coordinadores carecían de visibilidad en tiempo real sobre las rutas y la ocupación de los vehículos. Esto generaba ineficiencias operativas y preocupaciones de seguridad.

## La Solución: Una Arquitectura de Microservicios

Para resolver esto, diseñé y desarrollé un sistema integral compuesto por varios servicios que trabajan en conjunto para automatizar y monitorizar todo el flujo, desde la confirmación del estudiante vía WhatsApp hasta el análisis de datos operativos para la toma de decisiones.

### Diagrama de Arquitectura

![Diagrama de Arquitectura del Sistema de Transporte](./images/stu-architecture.png)

### Componentes y Características Clave

#### 1. Backend Principal (Flask en Docker)
- **Función:** Orquesta toda la lógica de negocio, incluyendo la gestión de rutas, horarios, conductores y la comunicación con la base de datos.
- **Características:**
  - API RESTful segura para la comunicación con la aplicación móvil.
  - Integración con la API de WhatsApp para el envío de notificaciones y la recepción de confirmaciones de servicio.
  - Desplegado como un contenedor en Google Cloud para escalabilidad y aislamiento.

#### 2. App Móvil (Kotlin Nativo)
- **Función:** Herramienta para coordinadores y conductores.
- **Características:**
  - Autenticación segura y gestión de roles con Firebase Authentication.
  - Visualización en tiempo real de rutas asignadas y listas de pasajeros confirmados.
  - Funcionalidad para que el conductor marque el inicio y fin de la ruta, capturando datos operativos.

#### 3. Microservicio de Validación (FastAPI)
- **Función:** Provee un endpoint ligero y seguro para la validación de estudiantes.
- **Características:**
  - Valida la identidad del estudiante (código universitario y DNI) a través de un bot de WhatsApp.
  - Diseñado para ser rápido y estar desacoplado del backend principal, siguiendo el principio de responsabilidad única.

#### 4. Inteligencia de Negocio (ETL + Apache Superset)
- **Función:** Transforma datos crudos en insights de negocio.
- **Características:**
  - Un pipeline de ETL (Extract, Transform, Load) que procesa y anonimiza datos operativos.
  - Dashboards en Apache Superset que permiten a la administración universitaria visualizar KPIs clave como tiempos de ruta, ocupación por ruta y horas pico.

## Desafíos Técnicos y Decisiones

- **Seguridad en la Validación por WhatsApp:** El principal reto era cómo validar a un estudiante de forma segura a través de un medio no controlado. La decisión de crear un microservicio aislado con FastAPI permitió exponer solo la lógica necesaria, minimizando la superficie de ataque y protegiendo el backend principal.

- **Concurrencia y Escalabilidad:** Se anticipó una alta concurrencia de confirmaciones en un corto período de tiempo. El backend fue diseñado con un sistema de colas para procesar las solicitudes de manera asíncrona, garantizando que el sistema se mantuviera estable y responsivo durante las horas pico.
