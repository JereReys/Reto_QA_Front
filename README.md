Reto de Automatización QA - FrontEnd (Playwright + Cucumber)

Descripción del Proyecto

Este proyecto contiene una suite de pruebas automatizadas para la aplicación web:

https://www.saucedemo.com/

El objetivo es validar los principales flujos de usuario (login, carrito y compra) utilizando **Playwright** junto con **Cucumber (Gherkin)**, aplicando buenas prácticas de automatización como el patrón **Page Object Model (POM)**.

---

Objetivo

Automatizar escenarios de prueba que simulan el comportamiento de un usuario dentro de la aplicación, incluyendo:

* Inicio de sesión
* Manejo de errores de autenticación
* Selección de productos
* Gestión del carrito
* Proceso completo de compra

---

Tecnologías Utilizadas

* Node.js
* Playwright
* Cucumber (Gherkin)
* JavaScript

---

Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

* Node.js (v16 o superior)
* npm o yarn
* Git (opcional)

---

Instalación y Ejecución

1. Clonar el repositorio

```bash id="y8j2q1"
git clone https://github.com/tu-usuario/playwright-saucedemo.git
cd playwright-saucedemo
```

2. Instalar dependencias

```bash id="l3c2pw"
npm install
```

3. Instalar navegadores de Playwright

```bash id="h7m2sa"
npx playwright install
```

4. Ejecutar pruebas

```bash id="q1k8ds"
npx cucumber-js
```

---

Casos de Prueba Implementados

Casos Positivos

* Login exitoso con usuario válido (`standard_user`)
* Agregar productos al carrito
* Visualización del carrito de compras
* Flujo completo de compra hasta confirmación

Casos Negativos

* Login con credenciales inválidas
* Login con usuario bloqueado (`locked_out_user`)
* Validación de mensajes de error

---

Usuarios de Prueba

| Tipo de usuario | Usuario         | Contraseña   |
| --------------- | --------------- | ------------ |
| Estándar        | standard_user   | secret_sauce |
| Bloqueado       | locked_out_user | secret_sauce |

---

Estrategia de Automatización

Se implementó una estrategia basada en:

* **Cucumber + Gherkin** para definir escenarios legibles
* **Playwright** para automatización moderna y robusta
* **Page Object Model (POM)** para separar lógica de UI y mejorar mantenibilidad
* **Reutilización de código** mediante páginas y steps
* **Cobertura funcional completa** del flujo de compra

---

Patrón de Diseño Implementado

### Page Object Model (POM)

Se utilizó el patrón POM para encapsular la lógica de interacción con cada página:

* `LoginPage.js` → manejo de autenticación
* `InventoryPage.js` → listado de productos
* `CartPage.js` → carrito de compras
* `CheckoutPage.js` → proceso de compra

Beneficios:

* Mayor mantenibilidad
* Reutilización de código
* Separación de responsabilidades

---

Validaciones Implementadas

* Verificación de elementos visibles en pantalla
* Validación de mensajes de error
* Confirmación de navegación entre páginas
* Validación de compra exitosa

---

Resultados Esperados

Al ejecutar las pruebas:

* Todos los escenarios deben completarse correctamente
* Se validan flujos positivos y negativos
* Se asegura la estabilidad del proceso de compra

---

Consideraciones

* Se utilizan datos de prueba proporcionados por Sauce Demo
* Las pruebas están diseñadas para ser independientes
* Se priorizó la claridad y mantenibilidad del código

---

Autor: Jeremy Uriel Reyes Correa

Proyecto desarrollado como parte de un reto técnico de automatización QA FrontEnd.

---
