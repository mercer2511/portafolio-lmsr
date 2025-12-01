---
title: "Análisis de Bienestar y Anemia Infantil (ENDES 2023)"
pubDate: 2024-05-15
description: "Proyecto de análisis de datos que investiga la correlación entre el bienestar socioeconómico y la anemia infantil en Perú, utilizando regresión ordinal con datos de la encuesta ENDES 2023."
tags: ["Análisis de Datos", "Python", "Pandas", "Statsmodels", "Salud Pública"]
github: "https://github.com/mercer2511/endes_anemia"
---

## El Reto: ¿La Pobreza Agrava la Anemia Infantil?

La anemia infantil es un problema crítico de salud pública en Perú. Este proyecto, **ganador de una competencia académica**, nació de una pregunta fundamental: ¿Existe una conexión demostrable entre la situación socioeconómica de un hogar y la **gravedad** de la anemia en sus niños?

El objetivo era ir más allá de una simple correlación y utilizar métodos estadísticos robustos para cuantificar esta relación, utilizando como fuente la prestigiosa Encuesta Demográfica y de Salud Familiar (ENDES) 2023.

## Mi Enfoque y Metodología

Para responder a esta pregunta, realicé un análisis estadístico riguroso utilizando Python y el ecosistema de data science. El proceso se dividió en tres fases clave:

1.  **Ingesta y Fusión de Datos Complejos:** Unifiqué cuatro datasets distintos de la ENDES (`RECH0`, `RECH1`, `RECH23`, `RECH6`) que contenían información demográfica, del hogar, de la vivienda y de salud. Este proceso requirió un manejo cuidadoso de las llaves de unión y la estructura de los datos para crear un único dataset coherente de **19,265 registros**.

2.  **Limpieza y Preprocesamiento:** Filtré los datos para aislar la población de interés (niños de 6 a 59 meses) y transformé variables crudas en características útiles para el modelo, como la recodificación del sexo, la creación de una variable de peso muestral y la categorización del índice de riqueza.

3.  **Modelado Estadístico Avanzado:** Ajusté un **modelo de regresión ordinal logit** utilizando la librería `statsmodels`. Este modelo es ideal para analizar variables de respuesta con un orden natural, como la severidad de la anemia (No anémico, Leve, Moderado, Severo), permitiendo una interpretación mucho más rica que un simple modelo binario.

<!-- Inserta aquí un gráfico clave del proyecto, como la distribución de la anemia por quintil de riqueza. -->

## Resultados Clave: Una Conexión Cuantificable

El modelo confirmó la hipótesis alternativa con significancia estadística: **el bienestar del hogar es un factor protector significativo contra la anemia severa.**

El hallazgo más importante fue que, por cada quintil que mejora el índice de bienestar de un hogar, la probabilidad de que un niño tenga una forma menos grave de anemia **aumenta en aproximadamente un 26% (Odds Ratio ≈ 1.26)**. Este resultado cuantitativo subraya la importancia de las políticas socioeconómicas en la salud infantil y valida el enfoque del proyecto.

## Mi Rol y Aprendizajes

Como único responsable de este proyecto, gestioné todo el ciclo de vida del análisis:

*   **Definición del problema y la hipótesis.**
*   **Data Wrangling:** Limpieza, fusión y transformación de datos complejos.
*   **Modelado Estadístico:** Selección e implementación del modelo de regresión ordinal.
*   **Interpretación y Comunicación:** Análisis de los resultados del modelo para extraer conclusiones significativas.

Este proyecto reforzó mi capacidad para abordar un problema desde una perspectiva científica y mi habilidad para manejar datasets del mundo real. Además, me motivó a explorar técnicas más avanzadas para el ajuste por diseños muestrales complejos, una mejora clave para futuras iteraciones.
