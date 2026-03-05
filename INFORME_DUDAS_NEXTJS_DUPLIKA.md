# 📋 INFORME COMPLEMENTARIO: Respuestas a Dudas sobre Next.js, Vercel y Duplika
## Investigación y Aclaración Técnica

---

**Fecha:** 25 de febrero de 2026  
**Contexto:** Respuestas a dudas surgidas del informe de migración  

---

## 📌 TUS 3 DUDAS PRINCIPALES

1. ¿Next.js SOLO puede alojarse en Vercel?
2. ¿Cómo se reemplaza Sanity para que el contenido siga siendo dinámico y manipulable?
3. ¿Cómo funciona exactamente el deploy de Next.js en Duplika?

---

# DUDA 1: ¿Next.js SOLO puede alojarse en Vercel?

## ❌ NO. Esto es un MITO muy común.

### Lo que dice la documentación OFICIAL de Next.js

Directamente de **nextjs.org/docs/app/building-your-application/deploying** (la página oficial de deploy):

> **"Next.js can be deployed as a Node.js server, Docker container, static export, or adapted to run on different platforms."**

Y sobre el servidor Node.js:

> **"Next.js can be deployed to any provider that supports Node.js."**

### ¿De dónde viene la confusión?

```
┌─────────────────────────────────────────────────────────────────┐
│                   ¿POR QUÉ SE CREE ESTO?                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📌 HECHO: Vercel es la empresa que CREÓ Next.js               │
│                                                                 │
│  Por eso:                                                       │
│  • Vercel optimiza TODO para Next.js automáticamente            │
│  • Cuando hacés "push" a Git, Vercel compila y despliega solo   │
│  • Es la experiencia más fácil y sin configuración              │
│  • Los tutoriales dicen "deploy on Vercel" porque es lo más     │
│    simple                                                       │
│                                                                 │
│  PERO eso NO significa que sea la ÚNICA opción.                 │
│  Es como decir que WordPress solo puede estar en WordPress.com  │
│  cuando en realidad lo podés instalar en cualquier hosting.     │
│                                                                 │
│  Next.js es SOFTWARE LIBRE (MIT License). Podés ejecutarlo      │
│  donde quieras.                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Las 4 formas de desplegar Next.js (según documentación oficial)

| Forma | ¿Necesita Vercel? | ¿Funciona en Duplika? | Soporta todas las features |
|-------|:------------------:|:---------------------:|:--------------------------:|
| **1. Servidor Node.js** | ❌ No | ✅ Sí | ✅ Todas |
| **2. Docker** | ❌ No | ⚠️ Solo en VPS | ✅ Todas |
| **3. Export estático** | ❌ No | ✅ Sí | ❌ No SSR, no API Routes |
| **4. Vercel** | ✅ Sí | N/A | ✅ Todas + extras |

### Plataformas que la documentación oficial de Next.js lista como compatibles:

- ✅ **Cualquier servidor con Node.js** ← Esto incluye Duplika
- ✅ Vercel
- ✅ Netlify
- ✅ AWS Amplify
- ✅ Cloudflare
- ✅ Firebase App Hosting
- ✅ Google Cloud Run
- ✅ Render
- ✅ DigitalOcean
- ✅ Docker en cualquier servidor
- ✅ Y literalmente **cualquier hosting que soporte Node.js**

### La frase clave de la documentación oficial:

> **"Node.js deployments support ALL Next.js features."**

Esto significa que si Duplika soporta Node.js (y lo soporta, versiones 20, 22 y 24), entonces **TODAS las funciones de Next.js funcionan ahí**: SSR, API Routes, ISR, dynamic routes, middleware, todo.

### Analogía para entenderlo mejor:

```
WordPress es a WordPress.com  
    como
Next.js es a Vercel

WordPress.com es el hosting OFICIAL de WordPress,
pero WordPress lo podés instalar en Duplika, GoDaddy,
o cualquier hosting con PHP.

Vercel es el hosting OFICIAL de Next.js,
pero Next.js lo podés instalar en Duplika, AWS,
o cualquier hosting con Node.js.

Es exactamente la misma lógica.
```

### Conclusión Duda 1:
> **Next.js puede ejecutarse en CUALQUIER servidor que tenga Node.js. Duplika tiene Node.js (versiones 20, 22, 24). Por lo tanto, Next.js puede ejecutarse en Duplika. Período.**

---

# DUDA 2: ¿Cómo se reemplaza Sanity para que el contenido siga siendo dinámico?

## El problema que resolvía Sanity:

```
CON SANITY (lo que tenemos ahora):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Alguien de la fundación entra a el Studio (panel visual)
2. Crea una noticia nueva → escribe título, texto, sube foto
3. Clicking "Publicar"
4. La noticia aparece automáticamente en el sitio web
5. También pueden editar, eliminar, reordenar

ESTO es lo que llamamos "dinámico y manipulable"
```

### ¿Se puede lograr lo mismo sin Sanity, en Duplika?

## ✅ SÍ. Hay 3 formas de lograrlo:

---

### FORMA 1: WordPress como CMS (la que ya conocen)

```
CÓMO FUNCIONA:
━━━━━━━━━━━━━

┌──────────────┐         ┌──────────────┐         ┌──────────┐
│   Usuario    │         │  WordPress   │         │  Next.js │
│   de la      │────────►│  wp-admin    │────────►│  (sitio  │
│   fundación  │         │  (panel)     │  API    │   web)   │
└──────────────┘         └──────┬───────┘  REST   └──────────┘
                                │
                         ┌──────▼───────┐
                         │    MySQL     │
                         │  (Duplika)   │
                         └──────────────┘

FLUJO:
1. El usuario entra a wp-admin (que ya conocen de antes)
2. Crea/edita una noticia, sube fotos, etc.
3. WordPress guarda en MySQL (la BD que ya tienen)
4. Next.js consulta la API REST de WordPress para mostrar los datos
5. El sitio se actualiza automáticamente

VENTAJA: El equipo YA SABE usar wp-admin
DESVENTAJA: WordPress tiene que estar instalado como backend "invisible"
            (solo para administrar contenido, no para mostrar el sitio)
```

**¿Es igual de dinámico que Sanity?** ✅ SÍ, incluso más, porque:
- Agregar/editar/eliminar noticias ← ✅
- Subir/cambiar fotos ← ✅
- Crear nuevos programas ← ✅
- Gestionar miembros del equipo ← ✅
- Reordenar contenido ← ✅
- Gestionar logos ← ✅
- Multiples usuarios con roles ← ✅ (WordPress lo tiene nativo)

---

### FORMA 2: Directus (la alternativa moderna y gratuita)

```
CÓMO FUNCIONA:
━━━━━━━━━━━━━

Directus es un CMS open-source que se "monta" encima de
CUALQUIER base de datos SQL existente y genera automáticamente
un panel de administración visual.

┌──────────────┐         ┌──────────────┐         ┌──────────┐
│   Usuario    │         │  Directus    │         │  Next.js │
│   de la      │────────►│  (panel      │────────►│  (sitio  │
│   fundación  │         │   admin)     │  API    │   web)   │
└──────────────┘         └──────┬───────┘  REST   └──────────┘
                                │
                         ┌──────▼───────┐
                         │    MySQL     │
                         │  (Duplika)   │
                         │ (las mismas  │
                         │  tablas que  │
                         │  ya existen) │
                         └──────────────┘

QUÉ HACE DIRECTUS:
1. Mirá tu base de datos MySQL
2. Detecta las tablas (noticias, programas, miembros, logos)
3. Genera automáticamente un panel visual para cada tabla
4. Te deja:
   - Crear registros nuevos (noticias, programas, etc.)
   - Editar registros existentes
   - Subir imágenes
   - Eliminar registros
   - Reordenar con drag & drop
   - Asignar roles y permisos a usuarios
5. También genera una API REST automática
6. Next.js usa esa API para mostrar los datos
```

**¿Por qué Directus es ideal para este caso?**

| Característica | Sanity | Directus | WordPress |
|---------------|:------:|:--------:|:---------:|
| Panel visual bonito | ✅ | ✅ | ✅ |
| Gratuito | ✅ (hasta cierto punto) | ✅ (siempre) | ✅ |
| Open-source | Parcial | ✅ Total | ✅ |
| Self-hosted (en TU servidor) | ❌ (es cloud) | ✅ | ✅ |
| Usa MySQL | ❌ (usa su BD propietaria) | ✅ | ✅ |
| Corre en Node.js | ❌ | ✅ | ❌ (PHP) |
| API REST automática | ✅ | ✅ | ✅ |
| Múltiples usuarios y roles | ✅ | ✅ | ✅ |
| Drag & drop | ✅ | ✅ | Con plugins |
| Editor de texto enriquecido | ✅ | ✅ | ✅ |
| Subida de imágenes | ✅ | ✅ | ✅ |
| Se conecta a la BD existente | ❌ | ✅ ⭐ | ❌ (crea la suya) |

> **Directus es como tener un "Sanity" pero que vive en TU servidor, usa TU base de datos MySQL, y no depende de ningún servicio externo.**

---

### FORMA 3: Panel Admin personalizado (más trabajo pero 100% a medida)

```
CÓMO FUNCIONA:
━━━━━━━━━━━━━

Se crea una sección /admin dentro del mismo sitio Next.js
con formularios para gestionar el contenido.

┌──────────────┐         ┌──────────────┐
│   Usuario    │         │   Next.js    │
│   de la      │────────►│  /admin      │
│   fundación  │         │  (panel      │
└──────────────┘         │   custom)    │
                         │              │
                         │  /noticias   │ ◄── lo que ven
                         │  /programas  │     los visitantes
                         │  /equipo     │
                         └──────┬───────┘
                                │
                         ┌──────▼───────┐
                         │    MySQL     │
                         │  (Duplika)   │
                         └──────────────┘

Todo en la misma aplicación.
```

### Comparación visual: ¿Qué sería igual a lo que tenían con Sanity?

```
LO QUE EL USUARIO DE LA FUNDACIÓN HACÍA EN SANITY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✏️ "Quiero crear una noticia nueva"
   Sanity: Entro al Studio → Click "Nueva Noticia" → Lleno formulario → Publicar
   Con WP: Entro a wp-admin → Posts → Agregar nuevo → Lleno formulario → Publicar
   Con Directus: Entro al panel → Noticias → Crear Item → Lleno formulario → Guardar

📸 "Quiero subir una foto de un miembro nuevo"
   Sanity: Entro al Studio → Equipo → Nuevo miembro → Subo foto → Publicar
   Con WP: Entro a wp-admin → Miembros → Agregar → Subo foto → Publicar
   Con Directus: Entro al panel → Miembros → Crear → Subo foto → Guardar

🗑️ "Quiero eliminar un programa que ya no existe"
   Sanity: Entro al Studio → Programas → Selecciono → Eliminar
   Con WP: Entro a wp-admin → Programas → Papelera
   Con Directus: Entro al panel → Programas → Selecciono → Eliminar

🔄 "Quiero cambiar el orden de los logos"
   Sanity: Drag & drop en el Studio
   Con WP: Con un plugin de ordenamiento
   Con Directus: Drag & drop nativo

EN TODOS LOS CASOS: ¡ES LA MISMA EXPERIENCIA!
La diferencia es que ahora TODO vive en Duplika,
no hay ningún servicio externo (como Sanity Cloud).
```

### Conclusión Duda 2:
> **El contenido puede seguir siendo 100% dinámico y manipulable. Sanity se reemplaza por WordPress (como backend) o Directus (como CMS moderno), ambos conectados a MySQL en Duplika. La experiencia del usuario es prácticamente idéntica.**

---

# DUDA 3: ¿Cómo funciona exactamente el deploy de Next.js en Duplika?

## Explicación paso a paso con diagramas:

### Paso 0: ¿Qué es un deploy "standalone"?

```
NORMALMENTE (en Vercel):
━━━━━━━━━━━━━━━━━━━━━━━

Vos hacés "git push" → Vercel agarra tu código → Lo compila → Lo pone online
(Vercel hace TODO por vos automáticamente)


EN DUPLIKA (self-hosting):
━━━━━━━━━━━━━━━━━━━━━━━━

Vos compilás el sitio en TU computadora → Subís los archivos a Duplika
→ Duplika lo ejecuta con Node.js

Es como la diferencia entre:
  📱 Subir una foto a Instagram (automático)
  💾 Copiar una foto a un pendrive y ponerla en otra computadora (manual)
```

### Paso 1: Configurar el proyecto para standalone

```
ARCHIVO: next.config.mjs
━━━━━━━━━━━━━━━━━━━━━━━

// Antes (configuración actual):
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
}

// Después (para Duplika):
const nextConfig = {
  output: "standalone",     // ← ESTA LÍNEA ES LA CLAVE
  images: {
    unoptimized: true,       // ← Simplifica el manejo de imágenes
  },
}

¿Qué hace output: "standalone"?
Cuando compilás el proyecto, Next.js crea una carpeta especial
que contiene TODO lo necesario para ejecutar el sitio, incluyendo
un archivo server.js que funciona como servidor web independiente.
```

### Paso 2: Compilar el proyecto (en tu computadora)

```bash
# En tu terminal, en la carpeta del proyecto:
npm run build

# Esto genera:
# .next/standalone/          ← El sitio listo para subir
# .next/standalone/server.js ← El "motor" del sitio
# .next/static/              ← CSS, JS, imágenes del diseño
# public/                    ← Archivos públicos (logos, íconos)
```

```
RESULTADO DE LA COMPILACIÓN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━

📁 .next/
│   📁 standalone/           ← ESTO es lo que subís a Duplika
│   │   📄 server.js         ← El "motor" (archivo de arranque)
│   │   📄 package.json
│   │   📁 node_modules/     ← Solo las dependencias necesarias
│   │   📁 .next/
│   │       📁 server/       ← Páginas compiladas
│   │
│   📁 static/               ← CSS, JS del frontend
│
📁 public/                   ← Imágenes, logos, ícono
```

### Paso 3: Preparar los archivos para subir

```
ANTES DE SUBIR: Hay que copiar 2 carpetas dentro de standalone:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Copiar  .next/static/  →  .next/standalone/.next/static/
2. Copiar  public/        →  .next/standalone/public/

RESULTADO FINAL (lo que se sube a Duplika):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📁 standalone/
│   📄 server.js              ← Punto de entrada
│   📄 package.json
│   📁 node_modules/
│   📁 .next/
│   │   📁 server/
│   │   📁 static/            ← (copiado)
│   📁 public/                ← (copiado)
│       📁 uploads/           ← Carpeta para imágenes dinámicas
```

### Paso 4: Subir a Duplika

```
OPCIÓN A: Via File Manager de cPanel
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Comprimir la carpeta standalone/ en un .zip
2. Entrar a cPanel de Duplika
3. Ir a "File Manager" (Administrador de Archivos)
4. Navegar a: /home/<tu_usuario>/probuenosaires/
   (crear la carpeta si no existe)
5. Click "Upload" → seleccionar el .zip
6. Click derecho → "Extract" (Extraer)
7. Listo, los archivos están en el servidor


OPCIÓN B: Via SSH (para los más técnicos)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Conectarse por SSH al servidor de Duplika
2. Usar scp o rsync para subir los archivos
```

### Paso 5: Configurar la app Node.js en cPanel

```
ESTE ES EL PASO MÁS IMPORTANTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

En cPanel hay una sección que se llama:
🔧 "Setup Node.js App" o "Application Manager"
   (está en la sección "Software" del cPanel)

AHÍ se configura:
━━━━━━━━━━━━━━━━

┌─────────────────────────────────────────────────────────┐
│         CONFIGURACIÓN DE APP NODE.JS EN cPanel          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Node.js version:      20 (LTS)                       │
│                                                         │
│  Application mode:     Production                      │
│                                                         │
│  Application root:     /home/tuusuario/probuenosaires  │
│                                                         │
│  Application URL:      probuenosaires.org.ar           │
│                        (o el dominio que tengan)        │
│                                                         │
│  Application startup   server.js                       │
│  file:                                                  │
│                                                         │
│  ─── Variables de entorno ───                          │
│                                                         │
│  DB_HOST     = localhost                               │
│  DB_USER     = probuenosaires_user                     │
│  DB_PASS     = tu_contraseña_segura                    │
│  DB_NAME     = probuenosaires_db                       │
│  PORT        = (lo asigna cPanel automáticamente)      │
│                                                         │
│  [✓ Run NPM Install]                                  │
│  [▶ Start App]                                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Paso 6: ¡El sitio está online!

```
RESULTADO FINAL:
━━━━━━━━━━━━━━━━

                    Internet
                       │
                       ▼
            ┌─────────────────────┐
            │   probuenosaires    │
            │     .org.ar         │
            │   (tu dominio)      │
            └──────────┬──────────┘
                       │
            ┌──────────▼──────────┐
            │   Duplika           │
            │   (Servidor)        │
            │                     │
            │   ┌───────────────┐ │
            │   │   LiteSpeed   │ │  ← Recibe las visitas
            │   │   (reverse    │ │
            │   │    proxy)     │ │
            │   └───────┬───────┘ │
            │           │         │
            │   ┌───────▼───────┐ │
            │   │   Node.js     │ │  ← Ejecuta Next.js
            │   │   (server.js) │ │
            │   └───────┬───────┘ │
            │           │         │
            │   ┌───────▼───────┐ │
            │   │    MySQL      │ │  ← Almacena los datos
            │   │  (phpMyAdmin) │ │
            │   └───────────────┘ │
            │                     │
            └─────────────────────┘

Todo en el MISMO servidor.
Nada externo.
Nada que dependa de una persona.
```

### ¿Cómo se actualiza el sitio después?

```
ESCENARIO 1: Actualizar CONTENIDO (noticias, programas, etc.)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Con WordPress/Directus:
  → Se entra al panel admin desde el navegador
  → Se modifica el contenido
  → El sitio se actualiza automáticamente
  → NO hay que subir nada, NO hay que compilar nada

Con phpMyAdmin:
  → Se entra a phpMyAdmin
  → Se edita la fila en la tabla correspondiente
  → El sitio se actualiza automáticamente


ESCENARIO 2: Actualizar el CÓDIGO del sitio (diseño, funcionalidad)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Esto solo lo hace un desarrollador:
  1. Modificar el código en la PC
  2. npm run build (compilar)
  3. Subir la carpeta standalone/ actualizada a Duplika
  4. Reiniciar la app en cPanel

Esto es exactamente igual que actualizar un sitio WordPress:
modificás los archivos y los subís.
```

### Flujo completo visual:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                  FLUJO COMPLETO DE LA MIGRACIÓN                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ESTADO ACTUAL:                                                         │
│  ┌────────┐  ┌────────────┐  ┌───────────┐  ┌──────────┐              │
│  │Código  │  │  Sanity    │  │  Vercel   │  │ Duplika  │              │
│  │Next.js │──│  Cloud     │──│  Hosting  │  │ (solo BD │              │
│  │(tu PC) │  │  (CMS)     │  │  (deploy) │  │  MySQL)  │              │
│  └────────┘  └────────────┘  └───────────┘  └──────────┘              │
│      │             │              │               │                     │
│      │    datos     │     sitio    │    rondas     │                     │
│      │    viven     │     vive     │    viven      │                     │
│      │     acá      │      acá     │     acá       │                     │
│                                                                         │
│  ════════════════════════════════════════════════════                   │
│                                                                         │
│  ESTADO DESPUÉS DE LA MIGRACIÓN:                                        │
│  ┌────────────────────────────────────────────────────────┐            │
│  │                    DUPLIKA                             │            │
│  │                                                        │            │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────────┐  │            │
│  │  │  Next.js   │  │   MySQL    │  │  Programa de   │  │            │
│  │  │  (sitio    │──│ (noticias, │──│  Rondas de     │  │            │
│  │  │   web)     │  │  programas,│  │  Negocio       │  │            │
│  │  │            │  │  miembros, │  │                │  │            │
│  │  │            │  │  logos)    │  │                │  │            │
│  │  └────────────┘  └────────────┘  └────────────────┘  │            │
│  │                                                        │            │
│  │  + WordPress/Directus (panel de admin)                │            │
│  │                                                        │            │
│  └────────────────────────────────────────────────────────┘            │
│                                                                         │
│  ✅ TODO en un solo lugar                                              │
│  ✅ Accesible para todos con acceso al cPanel                         │
│  ✅ No depende de ninguna persona                                     │
│  ✅ No depende de servicios externos                                  │
│  ✅ La misma base de datos para el sitio Y las rondas                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Conclusión Duda 3:
> **El deploy en Duplika funciona así: compilás el sitio en tu computadora, subís los archivos a Duplika por cPanel, y configurás la app Node.js desde cPanel. Es un proceso de una sola vez. Después, las actualizaciones de contenido las hace cualquier persona desde el panel de admin (WordPress/Directus) sin necesidad de tocar código.**

---

# 📊 RESUMEN FINAL DE LAS 3 DUDAS

```
┌─────────────────────────────────────────────────────────────────┐
│                    RESUMEN DE DUDAS                              │
├──────────────────────────────────┬──────────────────────────────┤
│                                  │                              │
│  DUDA 1:                         │  RESPUESTA:                  │
│  ¿Next.js solo en Vercel?        │  ❌ NO. Es un mito.         │
│                                  │  Next.js funciona en         │
│                                  │  CUALQUIER servidor con      │
│                                  │  Node.js. Es software libre. │
│                                  │  Duplika tiene Node.js. ✅   │
│                                  │                              │
├──────────────────────────────────┼──────────────────────────────┤
│                                  │                              │
│  DUDA 2:                         │  RESPUESTA:                  │
│  ¿Cómo queda dinámico            │  ✅ Se reemplaza Sanity por  │
│  sin Sanity?                     │  WordPress (como backend) o  │
│                                  │  Directus (CMS moderno).     │
│                                  │  Ambos se conectan a MySQL   │
│                                  │  en Duplika. La experiencia  │
│                                  │  es la misma: crear, editar, │
│                                  │  eliminar contenido desde    │
│                                  │  un panel visual.            │
│                                  │                              │
├──────────────────────────────────┼──────────────────────────────┤
│                                  │                              │
│  DUDA 3:                         │  RESPUESTA:                  │
│  ¿Cómo se sube Next.js           │  Se compila localmente,      │
│  a Duplika?                      │  se sube el .zip a cPanel,   │
│                                  │  y se configura como         │
│                                  │  "Node.js App" en 5 clicks.  │
│                                  │  Las actualizaciones de      │
│                                  │  CONTENIDO no requieren      │
│                                  │  re-subir nada.              │
│                                  │                              │
└──────────────────────────────────┴──────────────────────────────┘
```

---

# 💡 RECOMENDACIÓN CONCRETA

Basado en todo el análisis, la combinación ideal para la Fundación sería:

```
┌──────────────────────────────────────────────────────────┐
│              STACK RECOMENDADO PARA DUPLIKA               │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  🌐 Sitio web:    Next.js (el que ya tienen, compilado  │
│                   en modo standalone)                     │
│                                                          │
│  📊 Base datos:   MySQL (la que ya tienen en Duplika)   │
│                                                          │
│  ✏️ Panel admin:  WordPress instalado como backend      │
│                   OR Directus (más moderno)              │
│                                                          │
│  🖥️ Hosting:      Duplika plan "Advanced" ($15/mes)     │
│                   Node.js 20 LTS                        │
│                                                          │
│  🔒 SSL:          Automático (incluido en Duplika)      │
│                                                          │
│  Ventaja estratégica:                                    │
│  → La BD de las rondas y del sitio pueden ser la misma  │
│  → Un solo cPanel para TODO                             │
│  → Cualquier persona accede                             │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

*Fin del informe complementario. Si tenés más dudas puntuales, podemos profundizar en cualquiera de estos puntos.*
