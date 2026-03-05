# 📋 INFORME DE VIABILIDAD DE MIGRACIÓN
## De Next.js + Sanity (Vercel) → Duplika (MySQL + phpMyAdmin)
### Fundación Pro Buenos Aires

---

**Fecha:** 25 de febrero de 2026  
**Preparado por:** Equipo de Desarrollo  
**Clasificación:** Informe técnico-estratégico  
**Estado:** Análisis completo  

---

## 📑 ÍNDICE

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Análisis de la Situación Actual](#2-análisis-de-la-situación-actual)
3. [¿Qué es Duplika y qué soporta?](#3-qué-es-duplika-y-qué-soporta)
4. [Opciones de Arquitectura para la Migración](#4-opciones-de-arquitectura-para-la-migración)
5. [Análisis detallado de cada opción](#5-análisis-detallado-de-cada-opción)
6. [Compatibilidad con Google Ad Grants](#6-compatibilidad-con-google-ad-grants)
7. [¿Qué se rompe y qué no?](#7-qué-se-rompe-y-qué-no)
8. [Complejidad de la Migración](#8-complejidad-de-la-migración)
9. [Recomendación Final](#9-recomendación-final)
10. [Plan de Acción Sugerido](#10-plan-de-acción-sugerido)
11. [Glosario de Términos](#11-glosario-de-términos)

---

## 1. RESUMEN EJECUTIVO

### La pregunta central:
> *¿Es posible migrar el sitio web actual (Next.js + Sanity) a Duplika, conectarlo a la base de datos MySQL que ya tienen allí, y que todo sea accesible para cualquier persona de la organización sin depender de una sola persona?*

### La respuesta corta:
**SÍ, es posible. Pero hay matices importantes que deben entenderse.**

Existen **3 caminos viables**, cada uno con diferentes niveles de complejidad, costo y compromiso. La elección depende de cuánto quiere invertir la organización y qué tan "moderno" vs "simple" quiere ser el resultado.

### Tabla de Opciones Rápida:

| Opción | Descripción | Complejidad | Costo | Dinamismo | Recomendada |
|--------|-------------|:-----------:|:-----:|:---------:|:-----------:|
| **A** | Next.js Standalone en Duplika (Node.js) + MySQL | ⭐⭐⭐ Media | 💰 Bajo | ✅ Total | ⭐ **SÍ** |
| **B** | WordPress Headless + Frontend estático | ⭐⭐⭐⭐ Alta | 💰💰 Medio | ✅ Total | Parcial |
| **C** | Sitio PHP/MySQL puro (sin frameworks JS) | ⭐⭐⭐⭐⭐ Muy Alta | 💰💰💰 Alto | ✅ Total | ❌ No |

---

## 2. ANÁLISIS DE LA SITUACIÓN ACTUAL

### 2.1 Arquitectura del Sitio Web Actual

El sitio actual está construido con la siguiente tecnología:

```
┌─────────────────────────────────────────────────────────┐
│                  ARQUITECTURA ACTUAL                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Frontend:      Next.js v16 (React 19)                 │
│  CMS:           Sanity v5 (headless, cloud externo)    │
│  Hosting:       Vercel (automático)                    │
│  Base de datos: Sanity Cloud (propietaria)             │
│  Estilos:       Tailwind CSS v4                        │
│  Animaciones:   Framer Motion                          │
│  Tipografías:   DM Sans + Playfair Display (Google)    │
│  Idioma código: TypeScript                             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 2.2 Contenido Dinámico Gestionado (lo que se maneja desde Sanity)

El sitio tiene **4 tipos de contenido** que se gestionan dinámicamente:

| Tipo | Campos principales | Cantidad estimada |
|------|-------------------|:-----------------:|
| **Noticias** (`noticia`) | Título, slug, fecha, categoría, extracto, imagen, autor, tiempo de lectura, resumen largo, cuerpo con texto enriquecido e imágenes | Variable (crece) |
| **Programas** (`programa`) | Título, slug, ícono, descripción, impacto, imagen, gradiente, estado activo/inactivo, cuerpo con texto enriquecido | ~10-15 |
| **Logos/Partners** (`logo`) | Nombre empresa, imagen del logo, categoría (red/alianza), orden | ~20-30 |
| **Miembros del equipo** (`miembro`) | Nombre, cargo, bio, foto, expertise (tags), color de acento, sección (directiva/coordinación/profesional/internacional), estado activo | ~15-25 |

### 2.3 Páginas del Sitio

```
/ (Inicio)
├── /inicio
├── /novedades              ← Lista de noticias (dinámico)
│   └── /novedades/[slug]   ← Artículo individual (dinámico)
├── /programas              ← Lista de programas (dinámico)
│   └── /programas/[slug]   ← Programa individual (dinámico)
├── /equipo                 ← Equipo (dinámico)
├── /institucional          ← Estático
├── /donaciones             ← Estático
├── /contacto               ← Estático
├── /impacto-regional       ← Estático
├── /uvt                    ← Estático
└── /studio                 ← Sanity Studio (panel de admin)
```

### 2.4 Componentes que dependen de Sanity

Los siguientes archivos del frontend se conectan a Sanity para obtener datos:

| Archivo | Qué datos consume |
|---------|------------------|
| `components/news.tsx` | Últimas noticias para el home |
| `components/partners.tsx` | Logos de redes y alianzas |
| `components/programs.tsx` | Programas para el home |
| `components/programs-client.tsx` | Detalle de programas |
| `components/novedades-content.tsx` | Listado completo de noticias |

### 2.5 Lo que el cliente tiene en Duplika actualmente

```
┌─────────────────────────────────────────────────────────┐
│               INFRAESTRUCTURA ACTUAL EN DUPLIKA          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Hosting 1:  Sitio web (actualmente WordPress viejo)    │
│  Hosting 2:  Programa de Rondas de Negocio              │
│              (aplicación conectada a BD MySQL)           │
│                                                         │
│  Base de datos: MySQL (gestionada vía phpMyAdmin)       │
│  Panel:         cPanel                                  │
│                                                         │
│  ✅ Todo centralizado en un solo proveedor              │
│  ✅ Accesible para múltiples personas                   │
│  ✅ No depende de una sola persona técnica              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 3. QUÉ ES DUPLIKA Y QUÉ SOPORTA

### 3.1 Perfil de Duplika como proveedor

Duplika es un proveedor de hosting argentino con servidores en Buenos Aires (datacenter Tier 3), Norteamérica y Europa.

### 3.2 Capacidades Técnicas Confirmadas

| Característica | Soporte | Detalle |
|---------------|:-------:|--------|
| **PHP** | ✅ | Hasta PHP 8.4, configurable desde cPanel |
| **MySQL** | ✅ | Incluido en todos los planes, gestión vía phpMyAdmin |
| **Node.js** | ✅ | Versiones 20, 22 y 24 disponibles |
| **cPanel** | ✅ | Versión nativa sin restricciones |
| **SSL/HTTPS** | ✅ | Gratuito y automático (Let's Encrypt) |
| **SSH** | ✅ | Acceso por terminal |
| **LiteSpeed** | ✅ | HTTP/3, alto rendimiento |
| **CloudLinux** | ✅ | Aislamiento de recursos |
| **Backups** | ✅ | Automáticos diarios |
| **Anti-DDoS** | ✅ | Protección nativa |

### 3.3 Planes Relevantes para Node.js (Precios en USD)

| Plan | Almacenamiento | CPU | RAM | Transferencia | Precio/mes |
|------|:-------------:|:---:|:---:|:------------:|:----------:|
| **Start** | 5 GB NVMe | 1 core | 512 MB | 50 GB | $4 |
| **Essential** | 15 GB NVMe | 1 core | 1 GB | 150 GB | $7 |
| **Advanced** ⭐ | 30 GB NVMe | 2 cores | 2 GB | 300 GB | $15 |
| **Professional** | 60 GB NVMe | 3 cores | 3 GB | 500 GB | $27 |
| **Enterprise** | 120 GB NVMe | 4 cores | 4 GB | 1 TB | $54 |

> **⚠️ Para Next.js se recomienda mínimo el plan "Advanced" (2 GB RAM, 2 cores).** El plan "Start" con 512 MB de RAM sería insuficiente para correr Next.js en producción de forma estable.

### 3.4 Dato clave: Duplika SÍ soporta Node.js

✅ Esto significa que **Next.js puede ejecutarse en Duplika** usando la función "Setup Node.js App" de cPanel. No es necesario abandonar Next.js completamente.

---

## 4. OPCIONES DE ARQUITECTURA PARA LA MIGRACIÓN

### OPCIÓN A: Next.js Standalone en Duplika + MySQL (⭐ RECOMENDADA)

```
┌─────────────────────────────────────────────────────────┐
│                    OPCIÓN A                              │
│         Next.js Standalone + MySQL en Duplika            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌───────────┐    ┌──────────────┐    ┌──────────────┐ │
│  │           │    │              │    │              │ │
│  │  Next.js  │◄──►│  API Routes  │◄──►│    MySQL     │ │
│  │ Frontend  │    │  (Node.js)   │    │  (Duplika)   │ │
│  │           │    │              │    │              │ │
│  └───────────┘    └──────────────┘    └──────────────┘ │
│       ▲                                      ▲         │
│       │                                      │         │
│   Usuarios                              phpMyAdmin     │
│   (navegador)                            (admin)       │
│                                                         │
│  + Panel Admin personalizado (opcional)                 │
│                                                         │
│  TODO en el MISMO servidor de Duplika                   │
└─────────────────────────────────────────────────────────┘
```

**¿Qué implica?**
- Mantener Next.js pero compilarlo en modo `standalone` (una carpeta autocontenida)
- Reemplazar Sanity por MySQL como base de datos
- Crear API Routes en Next.js que lean/escriban en MySQL
- Subir todo a Duplika y configurar la app Node.js desde cPanel
- Opcionalmente crear un panel de administración simple

### OPCIÓN B: WordPress Headless + Frontend Estático

```
┌─────────────────────────────────────────────────────────┐
│                    OPCIÓN B                              │
│      WordPress como CMS + Frontend HTML/CSS/JS           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌───────────┐    ┌──────────────┐    ┌──────────────┐ │
│  │ Frontend  │    │  WordPress   │    │    MySQL     │ │
│  │ HTML/CSS  │◄──►│  REST API    │◄──►│  (Duplika)   │ │
│  │   + JS    │    │  (Headless)  │    │              │ │
│  └───────────┘    └──────────────┘    └──────────────┘ │
│       ▲                  ▲                              │
│       │                  │                              │
│   Usuarios          wp-admin                           │
│   (navegador)      (panel admin                        │
│                    conocido)                            │
│                                                         │
│  TODO en el MISMO servidor de Duplika                   │
└─────────────────────────────────────────────────────────┘
```

**¿Qué implica?**
- Instalar WordPress en Duplika (solo como backend/CMS)
- Re-crear el frontend como HTML/CSS/JS estático
- El frontend llama a la API REST de WordPress para obtener los datos
- Se pierde toda la parte de React/Next.js
- Requiere reescribir TODO el frontend desde cero

### OPCIÓN C: Sitio PHP/MySQL puro

```
┌─────────────────────────────────────────────────────────┐
│                    OPCIÓN C                              │
│        Sitio PHP puro con MySQL (tipo WordPress)         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────┐    ┌──────────────┐   │
│  │ Frontend PHP               │    │    MySQL     │   │
│  │ (Twig/Blade/puro)          │◄──►│  (Duplika)   │   │
│  │ + CSS + JS para animaciones│    │              │   │
│  └─────────────────────────────┘    └──────────────┘   │
│       ▲                                    ▲           │
│       │                                    │           │
│   Usuarios                           phpMyAdmin        │
│   (navegador)                        (admin DB)        │
│                                                         │
│  + Panel admin custom en PHP (hay que crearlo)         │
│                                                         │
│  TODO en el MISMO servidor de Duplika                   │
└─────────────────────────────────────────────────────────┘
```

**¿Qué implica?**
- Reescribir TODO el sitio en PHP desde cero
- Las animaciones de Framer Motion se perderían
- Hay que recrear cada página, cada componente
- Trabajo monumental

---

## 5. ANÁLISIS DETALLADO DE CADA OPCIÓN

### 5.1 OPCIÓN A: Next.js Standalone en Duplika + MySQL

#### ¿Cómo funciona técnicamente?

1. **Compilación:** Se configura `next.config.mjs` con `output: "standalone"`
2. **Build:** Se ejecuta `npm run build` localmente o en un CI
3. **Resultado:** Se genera una carpeta `.next/standalone/` con un `server.js` autocontenido
4. **Subida:** Se sube esa carpeta + `public/` + `.next/static/` a Duplika vía cPanel
5. **Configuración:** En cPanel → "Setup Node.js App" → se apunta a `server.js`
6. **Base de datos:** Se instala un paquete como `mysql2` y se crean API Routes que se conectan a MySQL

#### ¿Qué cambia respecto al sitio actual?

| Aspecto | Antes (Sanity) | Después (MySQL) |
|---------|---------------|-----------------|
| Dónde se guardan los datos | Sanity Cloud (externo) | MySQL en Duplika (local) |
| Cómo se consultan los datos | GROQ queries via Sanity client | SQL queries via mysql2 |
| Dónde se guardan las imágenes | Sanity CDN (cdn.sanity.io) | Carpeta `/uploads/` en Duplika |
| Panel de administración | Sanity Studio (embebido en /studio) | Panel custom (hay que crearlo) o phpMyAdmin |
| Hosting del sitio | Vercel | Duplika (Node.js app) |

#### ¿Qué hay que crear/modificar?

```
CAMBIOS NECESARIOS:
━━━━━━━━━━━━━━━━━

1. next.config.mjs
   └── Agregar: output: "standalone"
   └── Cambiar: remotePatterns (ya no Sanity CDN)

2. NUEVO: lib/db.ts
   └── Conexión a MySQL con mysql2/promise

3. NUEVO: app/api/noticias/route.ts
   └── GET → SELECT * FROM noticias
   └── POST → INSERT INTO noticias

4. NUEVO: app/api/programas/route.ts
   └── GET → SELECT * FROM programas
   └── POST → INSERT INTO programas

5. NUEVO: app/api/logos/route.ts
   └── GET → SELECT * FROM logos
   └── POST → INSERT INTO logos

6. NUEVO: app/api/miembros/route.ts
   └── GET → SELECT * FROM miembros
   └── POST → INSERT INTO miembros

7. NUEVO: app/api/upload/route.ts
   └── POST → Subir imagen a /public/uploads/

8. MODIFICAR: components/news.tsx
   └── Cambiar: fetch desde API local en vez de Sanity

9. MODIFICAR: components/programs.tsx
   └── Cambiar: fetch desde API local en vez de Sanity

10. MODIFICAR: components/partners.tsx
    └── Cambiar: fetch desde API local en vez de Sanity

11. MODIFICAR: components/novedades-content.tsx
    └── Cambiar: fetch desde API local en vez de Sanity

12. ELIMINAR: sanity/ (toda la carpeta)
13. ELIMINAR: sanity.config.ts
14. ELIMINAR: app/studio/ (Sanity Studio)
15. ELIMINAR: app/api/revalidate/ (webhook de Sanity)

16. NUEVO (opcional): Panel de Administración
    └── app/admin/ → Dashboard para gestionar contenido
    └── Con autenticación básica
    └── Editor de texto enriquecido (TipTap o similar)
```

#### Tablas MySQL necesarias

```sql
-- =========================================
-- ESQUEMA DE BASE DE DATOS MYSQL
-- Reemplazo de los 4 schemas de Sanity
-- =========================================

CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(96) NOT NULL UNIQUE,
    published_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    category ENUM('Institucional','Novedades','Sustentabilidad','Alianzas') NOT NULL,
    excerpt TEXT NOT NULL,
    main_image VARCHAR(500),
    author VARCHAR(255) DEFAULT 'Fundación Pro Buenos Aires',
    read_time VARCHAR(50) DEFAULT '5 min lectura',
    summary TEXT,
    body LONGTEXT, -- HTML o JSON del contenido enriquecido
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_published (published_at DESC)
);

CREATE TABLE programas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(96) NOT NULL UNIQUE,
    icon VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    impact VARCHAR(100) NOT NULL,
    impact_label VARCHAR(255) NOT NULL,
    main_image VARCHAR(500),
    gradient VARCHAR(100) DEFAULT 'from-[#111269] to-[#405e8c]',
    href VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    author VARCHAR(255) DEFAULT 'Fundación Pro Buenos Aires',
    read_time VARCHAR(50) DEFAULT '5 min lectura',
    summary TEXT,
    body LONGTEXT,
    order_rank VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_active (is_active),
    INDEX idx_order (order_rank)
);

CREATE TABLE logos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    tier ENUM('red','alianza') NOT NULL DEFAULT 'alianza',
    order_rank VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_tier (tier),
    INDEX idx_order (order_rank)
);

CREATE TABLE miembros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    bio TEXT NOT NULL,
    photo_url VARCHAR(500),
    expertise JSON, -- Array de strings: ["Finanzas", "Marketing"]
    accent VARCHAR(20) DEFAULT '#111269',
    section ENUM('directiva','coordinacion','profesional','internacional') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    order_rank VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_section (section),
    INDEX idx_active (is_active),
    INDEX idx_order (order_rank)
);
```

#### Pros y Contras

| ✅ Pros | ❌ Contras |
|---------|-----------|
| Se mantiene el 80% del código actual | Hay que reescribir las consultas de datos (~5 archivos) |
| Las animaciones de Framer Motion se conservan | Necesita plan Advanced ($15/mes) mínimo |
| La estética del sitio queda INTACTA | El build se debe hacer localmente y subir |
| Todo queda en Duplika | Hay que crear un panel de admin (si no quieren usar phpMyAdmin) |
| Conectado directamente a MySQL local | Requiere conocimiento de cPanel + Node.js |
| SEO excelente (SSR de Next.js) | Las actualizaciones del sitio (código) requieren re-subir archivos |
| Google Grants compatible ✅ | |
| Mismo dominio, mismo hosting | |

#### Estimación de tiempo

| Tarea | Horas estimadas |
|-------|:--------------:|
| Configurar standalone + subir a Duplika | 4-6h |
| Crear esquema MySQL + migrar datos de Sanity | 6-8h |
| Reescribir queries (Sanity → MySQL) en 5 componentes | 8-12h |
| Crear API Routes para CRUD | 6-8h |
| Sistema de upload de imágenes | 4-6h |
| Panel de administración básico | 16-24h |
| Testing y debugging | 8-12h |
| **TOTAL** | **52-76 horas** |
| **TOTAL (sin panel admin)** | **36-52 horas** |

---

### 5.2 OPCIÓN B: WordPress Headless + Frontend Estático

#### ¿Cómo funciona?

1. Instalar WordPress en Duplika (ya lo soportan nativamente)
2. Configurar WordPress como CMS headless (solo para administrar contenido)
3. Crear Custom Post Types para: noticias, programas, logos, miembros
4. Reescribir TODO el frontend como HTML/CSS/JavaScript puro
5. El JavaScript hace `fetch()` a la API REST de WordPress para obtener datos
6. Las páginas se renderizan en el navegador del usuario

#### ¿Qué se pierde?

| Se pierde | Impacto |
|-----------|---------|
| React y todos sus componentes | ⚠️ **CRÍTICO** - hay que reescribir todo |
| Framer Motion (animaciones) | ⚠️ **ALTO** - animaciones complejas hay que rehacerlas en CSS/JS |
| Server-Side Rendering (SSR) | ⚠️ **ALTO** - impacta SEO |
| Tailwind CSS (como se usa actualmente) | ⚠️ **MEDIO** - hay que migrar a CSS puro o incluir Tailwind CDN |
| TypeScript | ⚠️ **BAJO** - se usa JavaScript normal |

#### Pros y Contras

| ✅ Pros | ❌ Contras |
|---------|-----------|
| WordPress es familiar, mucha gente lo conoce | **Hay que REESCRIBIR todo el frontend** desde cero |
| wp-admin es un excelente panel de administración | Se pierden las animaciones de Framer Motion |
| PHP/MySQL nativo en Duplika | SEO se degrada (no SSR, contenido carga con JS) |
| Plugins para todo | Puede tener problemas de CORS entre WP API y frontend |
| WordPress tiene una comunidad enorme | WordPress Headless es una arquitectura rara, pocos la usan |
| | Mayor superficie de ataque (WordPress tiene muchas vulnerabilidades) |

#### Estimación de tiempo

| Tarea | Horas estimadas |
|-------|:--------------:|
| Instalar y configurar WordPress | 4-6h |
| Crear Custom Post Types + campos | 8-12h |
| Migrar datos de Sanity a WordPress | 8-12h |
| **Reescribir todo el frontend en HTML/CSS/JS** | **80-120h** |
| Recrear animaciones | 16-24h |
| Testing y debugging | 12-16h |
| **TOTAL** | **128-190 horas** |

---

### 5.3 OPCIÓN C: Sitio PHP/MySQL puro

Esta opción implica reconstruir absolutamente todo desde cero en PHP. No se recomienda.

#### Estimación de tiempo

| Tarea | Horas estimadas |
|-------|:--------------:|
| Diseñar arquitectura PHP | 8h |
| Crear templates PHP para todas las páginas | 60-80h |
| Recrear estilos CSS | 40-60h |
| Recrear animaciones | 20-30h |
| Panel de administración completo | 40-60h |
| Testing | 16-24h |
| **TOTAL** | **184-262 horas** |

**❌ No se recomienda.** Es el triple de trabajo de la Opción A, sin beneficios claros.

---

## 6. COMPATIBILIDAD CON GOOGLE AD GRANTS

### Requisitos de Google Ad Grants para el sitio web

Google Ad Grants otorga $10,000 USD/mes en publicidad a organizaciones sin fines de lucro elegibles. Los requisitos técnicos del sitio web son:

| Requisito | Opción A (Next.js) | Opción B (WP Headless) | Opción C (PHP) |
|-----------|:------------------:|:---------------------:|:--------------:|
| **Dominio propio** | ✅ | ✅ | ✅ |
| **HTTPS** | ✅ (SSL incluido en Duplika) | ✅ | ✅ |
| **Velocidad de carga** | ✅ Excelente (SSR) | ⚠️ Regular (CSR) | ⚠️ Regular |
| **Mobile-friendly** | ✅ Ya es responsive | ✅ Si se recrea bien | ✅ Si se recrea bien |
| **Contenido de calidad** | ✅ Ya lo tiene | ✅ | ✅ |
| **Navegación clara** | ✅ | ✅ | ✅ |
| **Sin ads excesivos** | ✅ | ✅ | ✅ |
| **Donaciones funcionales** | ✅ | ✅ | ✅ |
| **Política de privacidad** | ⚠️ Agregar si no existe | ⚠️ | ⚠️ |

### Veredicto Google Grants

> **La Opción A es la más compatible con Google Ad Grants** porque mantiene el SSR de Next.js, lo que garantiza excelentes tiempos de carga y SEO óptimo. Google prioriza sitios rápidos y bien indexados.

> La Opción B pierde SSR (el contenido se carga con JavaScript), lo que puede degradar la performance ante los estándares de Google.

---

## 7. ¿QUÉ SE ROMPE Y QUÉ NO?

### Con la Opción A (Recomendada):

#### ✅ LO QUE NO SE ROMPE (se conserva):

- ✅ **Diseño visual** — idéntico al actual
- ✅ **Animaciones** — Framer Motion funciona igual
- ✅ **Responsiveness** — todo el CSS/Tailwind se mantiene
- ✅ **Tipografías** — DM Sans y Playfair Display (Google Fonts)
- ✅ **Estructura de URLs** — /novedades, /programas, /equipo, etc.
- ✅ **SEO** — SSR se mantiene
- ✅ **Formulario de contacto** — se mantiene
- ✅ **Mapa de donaciones** — se mantiene
- ✅ **Todas las páginas estáticas** — institucional, donaciones, contacto, UVT

#### ⚠️ LO QUE CAMBIA (pero funciona):

- ⚠️ **Fuente de datos** — de Sanity a MySQL (mismo resultado visual)
- ⚠️ **Imágenes de contenido** — se sirven desde `/uploads/` en vez de `cdn.sanity.io`
- ⚠️ **Panel de admin** — ya no es Sanity Studio (necesita reemplazo)
- ⚠️ **Deploy** — ya no es automático vía Git push (hay que subir manualmente o con script)
- ⚠️ **Variables de entorno** — cambian de Sanity a MySQL

#### ❌ LO QUE SE PIERDE:

- ❌ **Sanity Studio** — el panel bonito de gestión de contenido
- ❌ **Deploy automático** — con Vercel era push y listo
- ❌ **CDN global de Vercel** — Duplika tiene datacenter en BA, pero no es un CDN global
- ❌ **Revalidación automática** — el webhook de Sanity se elimina

---

## 8. COMPLEJIDAD DE LA MIGRACIÓN

### Escala de complejidad (1-10):

```
OPCIÓN A (Next.js + MySQL en Duplika):  ████████░░  6/10
OPCIÓN B (WordPress Headless):          ████████████ 8/10
OPCIÓN C (PHP puro):                    █████████████ 9/10
```

### ¿Por qué la Opción A es un 6/10?

La complejidad es MEDIA porque:

1. **NO hay que reescribir el frontend** — se mantiene tal cual ✅
2. **SÍ hay que reescribir 5 archivos de consultas** — tedioso pero directo
3. **SÍ hay que crear las tablas MySQL** — hay un script SQL listo arriba
4. **SÍ hay que migrar los datos** — se puede hacer con un script de exportación de Sanity
5. **SÍ hay que configurar cPanel** — no es trivial pero hay documentación
6. **El panel de admin es lo más complejo** — pero se puede empezar con phpMyAdmin e ir creando un panel gradualmente

### ¿Quién podría hacer la migración?

| Perfil | ¿Puede hacerla? |
|--------|:---------------:|
| Desarrollador full-stack Jr/Mid con experiencia Next.js + MySQL | ✅ Sí |
| Desarrollador WordPress tradicional | ❌ No (no sabe Next.js) |
| Administrador de sistemas | ❌ No (no sabe programar) |
| El equipo actual de desarrollo (nosotros) | ✅ Sí |

---

## 9. RECOMENDACIÓN FINAL

### 🏆 RECOMENDACIÓN: OPCIÓN A — Next.js Standalone + MySQL en Duplika

**¿Por qué?**

1. **Mínimo esfuerzo** — se reutiliza el 80% del trabajo ya hecho
2. **Misma calidad visual** — el usuario NO nota diferencia alguna
3. **Todo centralizado** — hosting, base de datos, imágenes, todo en Duplika
4. **Accesible** — cualquier persona con acceso al cPanel puede ver/editar datos
5. **Compatible con Google Grants** — mantiene SSR, HTTPS, velocidad
6. **No depende de nadie** — sin Vercel, sin Sanity, sin servicios externos
7. **Mismo servidor que el programa de rondas** — pueden compartir la base de datos MySQL

### Acerca del Panel de Administración

Para reemplazar Sanity Studio hay 3 sub-opciones:

| Sub-opción | Descripción | Esfuerzo |
|-----------|-------------|:--------:|
| **A1. phpMyAdmin** | Gestionar contenido directamente en las tablas MySQL | 0 horas ⭐ |
| **A2. Panel Admin básico** | Crear un `/admin` con formularios para CRUD | 16-24 horas |
| **A3. Directus** | Instalar Directus (CMS headless open-source que se conecta a MySQL y corre en Node.js, se instala en Duplika) | 8-12 horas |

> **Recomendación:** Empezar con **A1 (phpMyAdmin)** para la migración inicial, y luego ir construyendo **A2 o A3** gradualmente.

> **Nota sobre Directus:** Directus es un CMS open-source que se "monta" encima de cualquier base de datos SQL existente y genera automáticamente un panel de administración visual hermoso. Se instala como una app Node.js adicional en Duplika. Es como tener un "Sanity" pero self-hosted y conectado a TU MySQL. **Esta podría ser la opción ideal** para el cliente.

---

## 10. PLAN DE ACCIÓN SUGERIDO

### Fase 1: Preparación (Semana 1)

```
□ 1. Verificar el plan de hosting actual en Duplika
     → Si es un plan que no soporta Node.js, hay que upgradear al "Advanced" ($15/mes)
     
□ 2. Crear una base de datos MySQL nueva en Duplika para el sitio
     → Via cPanel → "MySQL Databases" → Crear DB + usuario

□ 3. Ejecutar el script SQL para crear las 4 tablas
     → Via phpMyAdmin → pestaña SQL → pegar y ejecutar

□ 4. Exportar todos los datos de Sanity
     → Usar Sanity CLI: npx sanity dataset export production
     → Esto genera un archivo .tar.gz con todos los datos + imágenes
```

### Fase 2: Migración de Datos (Semana 1-2)

```
□ 5. Crear script de migración (Sanity JSON → MySQL INSERT)
     → Script Node.js que lee el export de Sanity y ejecuta INSERTs

□ 6. Migrar las imágenes
     → Descargar todas las imágenes de Sanity CDN
     → Subirlas a /public/uploads/ en Duplika

□ 7. Verificar que los datos están correctos en phpMyAdmin
```

### Fase 3: Modificación del Código (Semana 2-3)

```
□ 8. Agregar output: "standalone" al next.config.mjs

□ 9. Instalar mysql2: npm install mysql2

□ 10. Crear lib/db.ts con la conexión a MySQL

□ 11. Crear API Routes para cada tipo de contenido

□ 12. Modificar los 5 componentes que usan Sanity
      → news.tsx, programs.tsx, partners.tsx, etc.

□ 13. Eliminar todas las dependencias de Sanity
      → npm uninstall sanity next-sanity @sanity/image-url @sanity/vision @sanity/orderable-document-list
      → Eliminar carpetas: sanity/, app/studio/, app/api/revalidate/

□ 14. Build local: npm run build

□ 15. Testear localmente: npm run start
```

### Fase 4: Deploy en Duplika (Semana 3)

```
□ 16. Preparar archivos para subir:
      → .next/standalone/ (incluye server.js)
      → .next/static/ → copiar dentro de standalone/.next/static/
      → public/ → copiar dentro de standalone/public/
      → package.json

□ 17. Comprimir en .zip y subir via File Manager de cPanel

□ 18. En cPanel → "Setup Node.js App":
      → Node.js version: 20 LTS
      → Application mode: Production
      → Application root: /home/<user>/probuenosaires
      → Application URL: probuenosaires.org.ar (o el dominio)
      → Application startup file: server.js

□ 19. Configurar variables de entorno:
      → DB_HOST=localhost
      → DB_USER=<usuario_mysql>
      → DB_PASS=<password>
      → DB_NAME=probuenosaires

□ 20. Instalar dependencias: Click "Run NPM Install"

□ 21. Iniciar la aplicación
```

### Fase 5: Verificación (Semana 3-4)

```
□ 22. Verificar que todas las páginas cargan correctamente
□ 23. Verificar que los datos se muestran bien
□ 24. Verificar que las imágenes se ven
□ 25. Verificar HTTPS con SSL
□ 26. Verificar performance con Google PageSpeed Insights
□ 27. Configurar DNS si es necesario
□ 28. Pruebas de usuario con el equipo de la fundación
```

### Fase 6 (Opcional): Panel de Admin

```
□ 29. Evaluar si instalar Directus u otro panel
□ 30. O crear panel custom en /admin
□ 31. Capacitar al equipo de la fundación
```

---

## 11. GLOSARIO DE TÉRMINOS

Para que cualquier persona de la organización pueda entender este informe:

| Término | Explicación simple |
|---------|-------------------|
| **Next.js** | Un framework (herramienta) para crear sitios web modernos. Como un "motor" que hace que el sitio funcione |
| **React** | La tecnología base que usa Next.js para crear las interfaces |
| **Sanity** | Un servicio online para guardar y editar el contenido del sitio (textos, fotos, etc.) |
| **MySQL** | Un programa para guardar datos en tablas (como Excel pero para sitios web) |
| **phpMyAdmin** | Una interfaz visual para ver y editar las tablas de MySQL desde el navegador |
| **cPanel** | El panel de control de tu hosting (como el "escritorio" de tu servidor) |
| **Standalone** | Una forma de empaquetar el sitio para que funcione solo, sin depender de otros servicios |
| **SSR** | Server-Side Rendering. Significa que el sitio genera las páginas EN el servidor, antes de enviarlas. Esto es bueno para Google/SEO |
| **API** | Una "puerta" que permite a diferentes programas comunicarse entre sí |
| **Deploy** | El proceso de subir y poner en funcionamiento el sitio en el servidor |
| **CMS** | Content Management System. Software para gestionar contenido (como WordPress o Sanity) |
| **Headless CMS** | Un CMS que solo maneja los datos, sin encargarse de cómo se ven. El "cómo se ve" lo maneja otro programa |
| **Node.js** | Un programa que permite ejecutar JavaScript fuera del navegador, en el servidor |
| **Vercel** | Un servicio de hosting especializado en Next.js (el que usamos actualmente) |
| **Google Ad Grants** | Programa de Google que da $10,000/mes en publicidad gratuita a ONGs |
| **GROQ** | El lenguaje de consultas de Sanity (como preguntarle a Sanity "dame las noticias") |
| **SQL** | El lenguaje de consultas de MySQL (como preguntarle a la base de datos "dame las noticias") |
| **CDN** | Red de servidores distribuidos que hace que las imágenes carguen rápido desde cualquier lugar |
| **SSL/HTTPS** | El "candadito" que aparece en el navegador, significa que la conexión es segura |
| **Directus** | Un CMS open-source gratuito que se instala en tu propio servidor y genera un panel de administración automático |

---

## 📊 RESUMEN COMPARATIVO FINAL

```
┌────────────────────────────────────────────────────────────────────┐
│                    COMPARACIÓN FINAL                               │
├──────────────────┬──────────┬───────────────┬─────────────────────┤
│ Criterio         │ Opción A │ Opción B      │ Opción C            │
│                  │ Next.js  │ WP Headless   │ PHP puro            │
│                  │ + MySQL  │ + HTML/CSS/JS │ + MySQL             │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ Trabajo frontend │ Mínimo   │ Reescritura   │ Reescritura total   │
│                  │ (~5 arch)│ total         │                     │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ Horas estimadas  │ 36-76h   │ 128-190h      │ 184-262h            │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ Calidad visual   │ Idéntica │ Inferior      │ Inferior            │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ SEO              │ Excelente│ Regular       │ Bueno               │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ Google Grants    │ ✅ Ideal │ ⚠️ Aceptable  │ ⚠️ Aceptable        │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ Animaciones      │ ✅ Se    │ ❌ Hay que    │ ❌ Hay que           │
│                  │ mantienen│ rehacerlas    │ rehacerlas          │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ Todo en Duplika  │ ✅ Sí    │ ✅ Sí         │ ✅ Sí               │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ MySQL local      │ ✅ Sí    │ ✅ Sí         │ ✅ Sí               │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ Accesible p/todos│ ✅ Sí    │ ✅ Sí         │ ✅ Sí               │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ Panel admin      │ ⚠️ Crear │ ✅ wp-admin   │ ⚠️ Crear            │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ Costo mensual    │ ~$15     │ ~$7           │ ~$7                 │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ Complejidad      │ ⭐⭐⭐    │ ⭐⭐⭐⭐        │ ⭐⭐⭐⭐⭐             │
│ de migración     │ Media    │ Alta          │ Muy Alta            │
├──────────────────┼──────────┼───────────────┼─────────────────────┤
│ VEREDICTO        │ 🏆 MEJOR│ Posible       │ No recomendada      │
└──────────────────┴──────────┴───────────────┴─────────────────────┘
```

---

## ✅ CONCLUSIÓN

**La migración es 100% viable.** Duplika soporta Node.js, lo que permite hospedar Next.js directamente allí. El sitio puede mantener su diseño, animaciones y funcionalidad actuales mientras se conecta a la base de datos MySQL local de Duplika.

**La Opción A es la ganadora clara:** menor esfuerzo, mejor resultado, compatible con Google Grants, y cumple con todos los requisitos del cliente (todo en Duplika, accesible para todos, no depende de una persona).

El principal reto es **crear un panel de administración** para reemplazar Sanity Studio, pero esto se puede resolver de forma gradual:
1. Empezar con phpMyAdmin (costo cero)
2. Instalar Directus (gratuito, open-source, visual)
3. O crear un panel custom a medida

**No se rompe el sitio.** Se cambia la "cañería" por detrás, pero la "fachada" (lo que ve el usuario) queda exactamente igual.

---

*Fin del informe. Cualquier duda adicional, estoy disponible para profundizar en cualquiera de los puntos cubiertos.*
