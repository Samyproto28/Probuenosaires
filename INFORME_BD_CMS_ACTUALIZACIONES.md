# 📋 INFORME: Base de Datos, CMS y Actualizaciones en Tiempo Real
## Análisis de Directus vs WordPress como Backend para la Fundación

---

**Fecha:** 25 de febrero de 2026  
**Tipo:** Investigación técnica con respuestas a dudas específicas  

---

## 📌 ÍNDICE DE DUDAS RESPONDIDAS

1. [¿Cómo funciona la BD compartida entre los 2 hostings?](#1-la-base-de-datos-compartida-en-duplika)
2. [¿Directus o WordPress? ¿Cuál conviene?](#2-directus-vs-wordpress-cuál-conviene)
3. [¿Cuál es más fácil de configurar?](#3-cuál-es-más-fácil-de-configurar)
4. [¿Los cambios se actualizan en tiempo real en la web?](#4-las-actualizaciones-se-reflejan-en-tiempo-real)
5. [¿Las imágenes y contenido se guardan en la BD de Duplika?](#5-dónde-se-guardan-las-imágenes-y-el-contenido)
6. [¿Cualquier persona puede gestionar todo?](#6-accesibilidad-para-todos-los-miembros)

---

# 1. LA BASE DE DATOS COMPARTIDA EN DUPLIKA

## ¿Cómo funciona actualmente?

```
┌─────────────────────────────────────────────────────────────────┐
│                    DUPLIKA - ESTADO ACTUAL                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐                    ┌──────────────┐          │
│  │  Hosting 1   │                    │  Hosting 2   │          │
│  │  (Sitio web  │                    │  (Programa   │          │
│  │   fundación) │                    │   Rondas de  │          │
│  │              │                    │   Negocio)   │          │
│  └──────┬───────┘                    └──────┬───────┘          │
│         │                                    │                  │
│         │         ┌──────────────┐           │                  │
│         └────────►│   MySQL      │◄──────────┘                  │
│                   │  (Base de    │                              │
│                   │   datos)     │                              │
│                   │              │                              │
│                   │  phpMyAdmin  │                              │
│                   └──────────────┘                              │
│                                                                 │
│  ⚠️ PREGUNTA: ¿Es la MISMA base de datos o son diferentes?    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## La respuesta: Deben ser BASES DE DATOS SEPARADAS

### ¿Por qué?

Según las mejores prácticas de infraestructura y lo que cPanel soporta nativamente:

```
✅ CORRECTO: Bases de datos separadas (RECOMENDADO)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

En cPanel podés crear MÚLTIPLES bases de datos MySQL.
Cada una es independiente pero todas están en el MISMO servidor.

Ejemplo en phpMyAdmin:
┌─────────────────────────────────────────────────┐
│  📊 Bases de datos en Duplika:                  │
│                                                  │
│  📁 fundacion_sitio      ← Para el sitio web    │
│  │   📋 noticias                                │
│  │   📋 programas                               │
│  │   📋 miembros                                │
│  │   📋 logos                                   │
│  │                                               │
│  📁 fundacion_rondas     ← Para Rondas Negocio  │
│  │   📋 empresas                                │
│  │   📋 reuniones                               │
│  │   📋 participantes                           │
│  │   📋 resultados                              │
│                                                  │
│  Ambas viven en el MISMO servidor de Duplika     │
│  Ambas se ven en phpMyAdmin                      │
│  Pero están AISLADAS entre sí (seguridad ✅)     │
└─────────────────────────────────────────────────┘
```

### ¿Se pueden compartir datos entre ambas?

```
SÍ, si es necesario. Hay 2 formas:

Forma 1: Dos bases de datos, mismo usuario MySQL
→ El usuario MySQL tiene permisos en ambas BDs
→ Se pueden hacer queries entre bases:
   SELECT * FROM fundacion_sitio.noticias
   JOIN fundacion_rondas.empresas ON ...

Forma 2: Tablas compartidas en una BD
→ Se usa UNA sola BD con tablas de ambas apps
→ Más simple pero menos seguro

RECOMENDACIÓN: Forma 1 (dos BDs separadas)
La BD del sitio web es nueva y no interfiere
con la BD de rondas que ya funciona.
```

### Lo importante para la fundación:

> **Cuando alguien entra a phpMyAdmin, ahora va a ver DOS bases de datos (o más). Una para el sitio y otra para rondas. Puede navegar entre ambas libremente. Todo está en el mismo servidor de Duplika, accesible para quien tenga las credenciales.**

---

# 2. DIRECTUS VS WORDPRESS: ¿CUÁL CONVIENE?

## Análisis basado en las necesidades específicas de la fundación

### Lo que la fundación NECESITA hacer:

```
NECESIDADES CONCRETAS:
━━━━━━━━━━━━━━━━━━━━━

✏️  Crear noticias nuevas (título, texto, fotos, categoría)
✏️  Editar noticias existentes
🗑️  Eliminar noticias
📸  Subir imágenes
🔄  Mover logos de orden (drag & drop)
➕  Agregar nuevos logos de partners
✏️  Crear/editar programas
✏️  Crear/editar miembros del equipo
👥  Que CUALQUIER persona autorizada pueda hacerlo
📱  Accesible desde cualquier navegador
🔄  Que los cambios se reflejen en la web
```

### Comparación directa para estas necesidades:

| Necesidad de la Fundación | WordPress como Backend | Directus |
|--------------------------|:---------------------:|:--------:|
| **Crear noticias** | ✅ Nativo y fácil | ✅ Fácil |
| **Editar noticias** | ✅ Editor conocido | ✅ Editor moderno |
| **Eliminar contenido** | ✅ Un click | ✅ Un click |
| **Subir imágenes** | ✅ Media Library excelente | ✅ File Library buena |
| **Mover/reordenar logos** | ⚠️ Necesita plugin | ✅ Drag & drop nativo |
| **Agregar logos** | ✅ Como "entrada" nueva | ✅ Como "item" nuevo |
| **Crear/editar programas** | ⚠️ Necesita Custom Post Types (plugin) | ✅ Se crea la colección y listo |
| **Crear/editar miembros** | ⚠️ Necesita Custom Post Types (plugin) | ✅ Se crea la colección y listo |
| **Múltiples usuarios** | ✅ Nativo (admin, editor, autor) | ✅ Nativo (roles granulares) |
| **Acceso por navegador** | ✅ tudominio.com/wp-admin | ✅ tudominio.com:8055 |
| **Interfaz en español** | ✅ Totalmente traducido | ✅ Multi-idioma |
| **Usa MySQL directo** | ✅ Nativo | ✅ Nativo |
| **Familiaridad del equipo** | ✅⭐ YA lo conocen | ⚠️ Hay que aprenderlo |

### Análisis profundo de cada opción:

---

## WORDPRESS COMO BACKEND (Headless)

```
¿QUÉ SIGNIFICA "WORDPRESS HEADLESS"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Headless" = "Sin cabeza" = WordPress SIN el frontend visible.

WordPress normalmente hace 2 cosas:
  1. Guarda el contenido (backend) ← ESTO SE MANTIENE
  2. Muestra el sitio web (frontend) ← ESTO NO SE USA

En nuestro caso:
  - WordPress SOLO guarda/gestiona contenido
  - Next.js es el que MUESTRA el sitio web

El equipo de la fundación usa wp-admin normalmente,
pero el sitio bonito lo genera Next.js, NO WordPress.
```

### Pros de WordPress:

```
✅ VENTAJAS:
━━━━━━━━━━━

1. EL EQUIPO YA LO CONOCE
   → Esto es la ventaja más grande
   → No hay curva de aprendizaje
   → Ya saben crear posts, subir imágenes, etc.

2. Instalación instantánea en Duplika
   → cPanel tiene "Softaculous" o instalador automático
   → 1 click = WordPress instalado
   → Ya viene con la BD MySQL configurada

3. Media Library excelente
   → Subir fotos es facilísimo
   → Redimensiona automáticamente
   → Arrastra y suelta

4. Ecosystem gigante
   → Miles de plugins
   → ACF (Advanced Custom Fields) para crear campos personalizados
   → WPGraphQL para API moderna
   → Custom Post Type UI para crear tipos de contenido

5. Actualizaciones automáticas
   → WordPress se actualiza solo (seguridad)

6. PHP nativo
   → Duplika lo soporta perfectamente
   → No consume el recurso de Node.js
   → El sitio Next.js y WordPress usan tecnologías diferentes
      (Node.js y PHP respectivamente) sin competir por RAM
```

### Contras de WordPress:

```
❌ DESVENTAJAS:
━━━━━━━━━━━━━━

1. Para tipos de contenido personalizados necesita plugins
   → ACF + Custom Post Type UI (ambos gratuitos)
   → Pero hay que configurarlos

2. WordPress "headless" no es su uso natural
   → Fue diseñado como sitio completo
   → Algunos plugins asumen que hay un frontend WP

3. Seguridad
   → WordPress es el CMS más atacado del mundo
   → Necesita actualizaciones constantes
   → Necesita plugins de seguridad

4. Bloat (peso innecesario)
   → Instala muchas cosas que no necesitamos
   → Temas, comentarios, widgets... nada de eso se usa

5. Las imágenes se guardan en wp-content/uploads (filesystem)
   → NO en la base de datos (solo la metadata)
   → Hay que gestionar esa carpeta
```

---

## DIRECTUS

```
¿QUÉ ES DIRECTUS?
━━━━━━━━━━━━━━━━━

Directus es como un "traductor visual" de tu base de datos.

Vos tenés tablas en MySQL:
  → noticias, programas, miembros, logos

Directus las lee y automáticamente genera:
  → Un panel de administración visual
  → Un API REST para que Next.js lea los datos
  → Un sistema de permisos por usuario/rol

Es como si phpMyAdmin tuviera una interfaz bonita
y fácil de usar para personas no-técnicas.
```

### Pros de Directus:

```
✅ VENTAJAS:
━━━━━━━━━━━

1. SE MONTA SOBRE TU BD EXISTENTE
   → No crea una BD nueva
   → Lee las tablas que YA existen
   → Si mañana quitás Directus, las tablas siguen ahí

2. El panel admin es HERMOSO y MODERNO
   → Interfaz limpia, tipo Sanity
   → Drag & drop para reordenar
   → Editor de texto enriquecido incluido
   → Vista previa de imágenes
   → Dashboard personalizable

3. Diseñado para ser headless desde el inicio
   → API REST automática y completa
   → También soporta GraphQL
   → Pensado para conectarse con frontends como Next.js

4. Roles y permisos GRANULARES
   → Podés definir que "Editor" puede crear noticias
     pero no puede eliminar programas
   → Mucho más flexible que WordPress

5. Webhooks nativos (para actualizaciones automáticas)
   → Cuando alguien guarda algo, Directus puede notificar
     a Next.js automáticamente
   → Esto hace que el sitio se actualice "en tiempo real"

6. Multi-idioma nativo
   → La interfaz viene en español

7. Open-source y 100% gratuito
   → No hay versión de pago que limite funciones

8. Corre en Node.js
   → Mismo ecosistema que Next.js
   → Pero ojo: ambos compiten por la RAM del servidor
```

### Contras de Directus:

```
❌ DESVENTAJAS:
━━━━━━━━━━━━━━

1. EL EQUIPO NO LO CONOCE
   → Hay una curva de aprendizaje (aunque es pequeña)
   → Necesitan capacitación inicial

2. Instalación MÁS compleja en cPanel
   → No es un "1 click install"
   → Necesita configurar Node.js en cPanel
   → Algunos usuarios reportan problemas con dependencias
     como "sharp" en hosting compartido
   → Puede ser necesario un plan con más RAM

3. Consume RAM adicional
   → Directus es una app Node.js separada
   → Ya tenemos Next.js corriendo en Node.js
   → Dos apps Node.js = más consumo de RAM
   → Puede necesitar plan "Professional" ($27/mes)
     en vez de "Advanced" ($15/mes)

4. Las imágenes se guardan en el filesystem (igual que WP)
   → NO en la base de datos
   → Se guardan en una carpeta como /uploads/
   → En la BD solo se guarda la metadata (nombre, tamaño, ruta)

5. Menos comunidad y plugins que WordPress
   → Si necesitás algo especial, puede que no exista
```

---

## 🏆 VEREDICTO: ¿CUÁL CONVIENE PARA LA FUNDACIÓN?

```
┌─────────────────────────────────────────────────────────────────┐
│                    TABLA DE DECISIÓN                             │
├────────────────────────┬──────────────┬─────────────────────────┤
│ Criterio               │  WordPress   │  Directus              │
│                        │  (Headless)  │                         │
├────────────────────────┼──────────────┼─────────────────────────┤
│ El equipo ya lo conoce │  ✅ SÍ ⭐    │  ❌ No (hay que aprender)│
├────────────────────────┼──────────────┼─────────────────────────┤
│ Facilidad instalación  │  ✅ 1 click  │  ⚠️ Manual, más complejo│
├────────────────────────┼──────────────┼─────────────────────────┤
│ Hecho para headless    │  ⚠️ No orig. │  ✅ SÍ, desde el inicio │
├────────────────────────┼──────────────┼─────────────────────────┤
│ Panel admin moderno    │  ⚠️ Clásico  │  ✅ Moderno y bonito    │
├────────────────────────┼──────────────┼─────────────────────────┤
│ Drag & drop contenido  │  ⚠️ Plugin   │  ✅ Nativo              │
├────────────────────────┼──────────────┼─────────────────────────┤
│ Costo del servidor     │  ✅ $15/mes  │  ⚠️ $15-27/mes         │
│                        │  (PHP+Node)  │  (dos apps Node.js)    │
├────────────────────────┼──────────────┼─────────────────────────┤
│ Usa MySQL              │  ✅ SÍ       │  ✅ SÍ                  │
├────────────────────────┼──────────────┼─────────────────────────┤
│ API para Next.js       │  ✅ REST API │  ✅ REST + GraphQL      │
├────────────────────────┼──────────────┼─────────────────────────┤
│ Actualización real-time│  ✅ Webhook  │  ✅ Webhook + WebSocket │
├────────────────────────┼──────────────┼─────────────────────────┤
│ Seguridad              │  ⚠️ Más      │  ✅ Menor superficie    │
│                        │  atacado     │  de ataque             │
├────────────────────────┼──────────────┼─────────────────────────┤
│ Comparte BD con rondas │  ⚠️ BD propia│  ✅ Lee cualquier BD    │
├────────────────────────┼──────────────┼─────────────────────────┤
│                        │              │                         │
│ PUNTAJE TOTAL          │  ⭐⭐⭐⭐     │  ⭐⭐⭐⭐                │
│                        │  (7.5/10)    │  (8/10)                │
│                        │              │                         │
├────────────────────────┼──────────────┼─────────────────────────┤
│                        │              │                         │
│ MEJOR PARA:            │ Si priorizan │ Si priorizan            │
│                        │ FAMILIARIDAD │ MODERNIDAD y            │
│                        │ y rapidez de │ flexibilidad            │
│                        │ arranque     │ a largo plazo           │
│                        │              │                         │
└────────────────────────┴──────────────┴─────────────────────────┘
```

### MI RECOMENDACIÓN CONCRETA:

> ## 🏆 **WORDPRESS COMO BACKEND** es la mejor opción para la fundación.

**¿Por qué?** Por **una razón que pesa más que todas las demás:**

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  EL EQUIPO YA SABE USAR WORDPRESS.                        ║
║                                                            ║
║  El objetivo es que CUALQUIERA pueda gestionar             ║
║  el contenido sin depender de una persona técnica.         ║
║                                                            ║
║  Si les pongo Directus, necesitan:                         ║
║  1. Aprenderlo                                             ║
║  2. Que yo lo instale y configure                          ║
║  3. Que si falla, alguien técnico lo repare                ║
║                                                            ║
║  Si les pongo WordPress, ya saben:                         ║
║  - Dónde entrar (wp-admin)                                 ║
║  - Cómo crear contenido                                    ║
║  - Cómo subir fotos                                        ║
║  - Si algo falla, hay MILLONES de tutoriales               ║
║                                                            ║
║  La INDEPENDENCIA tecnológica se logra con herramientas     ║
║  que la gente YA conoce, no con las "mejores" herramientas.║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

### ⚠️ PERO con una nota importante:

> **Directus es TÉCNICAMENTE superior para este caso de uso.** Si en el futuro la fundación contara con soporte técnico dedicado, vale la pena considerar migrar a Directus. Pero HOY, con el objetivo de que cualquiera pueda usarlo independientemente, WordPress gana.

---

# 3. ¿CUÁL ES MÁS FÁCIL DE CONFIGURAR?

## Comparación paso a paso:

### INSTALAR WORDPRESS en Duplika:

```
PASOS (Tiempo estimado: 15-30 minutos):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Entrar a cPanel de Duplika
2. Buscar "Softaculous" o "Instalador de Apps"
3. Click en WordPress
4. Click en "Instalar"
5. Configurar:
   - Dominio: admin.probuenosaires.org.ar (subdominio)
   - Usuario admin: fundacion_admin
   - Contraseña: ********
   - Idioma: Español
6. Click "Instalar" → ¡LISTO! ✅

Resultado: En 5 minutos tenés WordPress funcionando.

DESPUÉS (configuración headless, 2-4 horas):
7. Instalar plugin WPGraphQL (o usar REST API nativa)
8. Instalar plugin Custom Post Type UI
9. Instalar plugin Advanced Custom Fields (ACF)
10. Crear los tipos de contenido:
    - "Noticia" (con campos: título, extracto, imagen, etc.)
    - "Programa" (con sus campos)
    - "Miembro" (con sus campos)
    - "Logo" (con sus campos)
11. Configurar permisos de la API
```

### INSTALAR DIRECTUS en Duplika:

```
PASOS (Tiempo estimado: 2-6 horas):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Entrar a cPanel
2. Crear una base de datos MySQL (si no existe)
3. Ir a "Setup Node.js App"
4. Crear nueva aplicación Node.js
5. Conectar por SSH al servidor
6. Instalar Directus via npm:
   npx create-directus-project@latest directus
7. Configurar .env con la conexión a MySQL:
   DB_CLIENT=mysql
   DB_HOST=localhost
   DB_PORT=3306
   DB_DATABASE=fundacion_directus
   DB_USER=usuario
   DB_PASSWORD=contraseña
8. Crear archivo de arranque start.js para Passenger
   (el servidor web de cPanel)
9. Configurar la app Node.js en cPanel
10. Resolver posibles errores de dependencias
    (sharp, bcrypt, etc. a veces fallan en shared hosting)
11. Iniciar Directus
12. Configurar colecciones y campos

⚠️ NOTA: Usuarios en GitHub reportan dificultades
instalando Directus en hosting compartido con cPanel.
Algunos tuvieron que migrar a VPS.
```

### Comparación de facilidad:

```
FACILIDAD DE INSTALACIÓN:
━━━━━━━━━━━━━━━━━━━━━━━━

WordPress:  ████████████████████░  95% fácil
                                    (1 click + plugins)

Directus:   ████████████░░░░░░░░  60% fácil
                                    (requiere SSH + config manual)
                                    
⚠️ RIESGO: Directus en cPanel compartido puede tener
problemas de compatibilidad con algunas dependencias.
WordPress en cPanel NUNCA tiene este problema.
```

---

# 4. ¿LAS ACTUALIZACIONES SE REFLEJAN EN TIEMPO REAL?

## Esta es una pregunta MUY importante. La respuesta tiene matices.

### ¿Qué significa "tiempo real"?

```
TIPOS DE "TIEMPO REAL":
━━━━━━━━━━━━━━━━━━━━━━

⚡ INSTANTÁNEO (0-2 segundos):
   El usuario guarda → el sitio cambia inmediatamente
   Ejemplo: un chat en vivo

🔄 CASI INSTANTÁNEO (2-30 segundos):
   El usuario guarda → el sitio cambia en pocos segundos
   Ejemplo: un feed de redes sociales

⏱️ PERIÓDICO (30 segundos - 5 minutos):
   El sitio verifica si hay cambios cada cierto tiempo
   Ejemplo: un sitio de noticias
```

### ¿Cómo funciona actualmente con Sanity?

```
FLUJO ACTUAL CON SANITY:
━━━━━━━━━━━━━━━━━━━━━━━

1. Alguien publica en Sanity Studio
2. Sanity envía un webhook a /api/revalidate
3. Next.js limpia su caché para esa página
4. La próxima visita a esa página muestra el contenido nuevo

TIEMPO: 2-30 segundos (casi instantáneo) 🔄

Además, el sitio tiene revalidate = 30 (ISR)
lo que significa que cada 30 segundos verifica
si hay cambios, incluso sin webhook.
```

### ¿Cómo funcionaría con WordPress como Backend?

```
FLUJO CON WORDPRESS:
━━━━━━━━━━━━━━━━━━━

1. Alguien publica en wp-admin
2. WordPress ejecuta un webhook (vía plugin)
   → Plugin gratuito: "WP Webhooks" o código custom
3. El webhook llama a Next.js: POST /api/revalidate
4. Next.js limpia su caché para esa página
5. La próxima visita muestra el contenido nuevo

TIEMPO: 2-30 segundos (casi instantáneo) 🔄

ES EXACTAMENTE IGUAL que con Sanity.
El mecanismo es el mismo (on-demand revalidation).
```

```
DIAGRAMA DEL FLUJO:
━━━━━━━━━━━━━━━━━━

     Persona de           WordPress           Next.js           Usuario
    la Fundación           (CMS)              (Sitio)           visitante
         │                    │                   │                  │
         │ 1. Crea noticia   │                   │                  │
         │──────────────────►│                   │                  │
         │                    │                   │                  │
         │                    │ 2. Guarda en MySQL│                  │
         │                    │───────────────────│                  │
         │                    │                   │                  │
         │                    │ 3. Webhook:       │                  │
         │                    │ "¡Hay contenido   │                  │
         │                    │  nuevo!"          │                  │
         │                    │──────────────────►│                  │
         │                    │                   │                  │
         │                    │                   │ 4. Limpia caché  │
         │                    │                   │ (revalidación)   │
         │                    │                   │                  │
         │                    │                   │                  │
         │                    │                   │◄────────────────│
         │                    │                   │ 5. Visita web    │
         │                    │                   │                  │
         │                    │                   │ 6. Lee MySQL     │
         │                    │                   │ (datos frescos)  │
         │                    │                   │                  │
         │                    │                   │─────────────────►│
         │                    │                   │ 7. Muestra       │
         │                    │                   │ contenido nuevo  │
         │                    │                   │                  │
         
TOTAL: 2-30 segundos desde que guardan hasta que se ve en la web ✅
```

### ¿Cómo funcionaría con Directus?

```
FLUJO CON DIRECTUS:
━━━━━━━━━━━━━━━━━━

IGUAL que WordPress, pero con una diferencia:
Directus tiene WebSockets nativos.

Esto significa que ADEMÁS del webhook (revalidación),
puede enviar datos en TIEMPO REAL INSTANTÁNEO.

Pero para el caso de la fundación, el webhook
(2-30 segundos) es MÁS que suficiente.

No necesitan que una noticia aparezca en 0.5 segundos.
Con 5-10 segundos está perfecto.
```

### Comparación de tiempos:

```
¿CUÁNTO TARDA EN VERSE EL CAMBIO EN LA WEB?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Con Sanity (actual):        2-30 seg  🔄
Con WordPress + Webhook:    2-30 seg  🔄  ← MISMO RESULTADO
Con Directus + Webhook:     2-30 seg  🔄  ← MISMO RESULTADO
Con Directus + WebSocket:   0-2 seg   ⚡  ← Más rápido (innecesario)

CONCLUSIÓN: Los tres dan un resultado prácticamente igual
para el caso de uso de la fundación.
```

### ¿Hay que hacer algo para que funcione?

```
SÍ, hay que implementar la revalidación, pero es SIMPLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

El sitio actual YA TIENE esto implementado:
  → app/api/revalidate/route.ts (ya existe)

Solo hay que:
1. Modificar la ruta para que acepte webhooks de WordPress
   (en vez de Sanity)
2. Configurar WordPress para que envíe el webhook
   cuando se publique contenido

Son cambios menores. El mecanismo ES EL MISMO.
```

---

# 5. ¿DÓNDE SE GUARDAN LAS IMÁGENES Y EL CONTENIDO?

## Esta es una diferencia CLAVE que hay que entender:

### ¿Qué se guarda EN la base de datos MySQL?

```
EN LA BASE DE DATOS (MySQL / phpMyAdmin):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Títulos de noticias
✅ Textos/descripciones
✅ Fechas
✅ Categorías
✅ Nombres de miembros
✅ Cargos
✅ Bios
✅ Tags de expertise
✅ Nombres de programas
✅ Nombres de empresas (logos)
✅ Configuraciones

EN RESUMEN: Todo lo que es TEXTO y DATOS se guarda en MySQL.
Esto SÍ se puede ver y editar desde phpMyAdmin.
```

### ¿Qué NO se guarda en la base de datos?

```
EN EL FILESYSTEM (carpeta del servidor):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Las fotos de los miembros (archivo .jpg/.png)
❌ Las imágenes de las noticias
❌ Los logos de partners
❌ Cualquier archivo subido

ESTO pasa tanto en WordPress como en Directus (y también
pasaba con Sanity, solo que ahí las imágenes estaban en
el CDN de Sanity, no en la BD).

¿POR QUÉ? Porque guardar imágenes directamente
en una base de datos:
  - Hincha la BD enormemente
  - La hace más lenta
  - Es una mala práctica de ingeniería
```

### ¿Entonces cómo funciona?

```
CÓMO SE MANEJAN LAS IMÁGENES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Con WordPress:
┌──────────────────────────────────────────────────────┐
│                                                      │
│  Imagen: foto_juan.jpg                               │
│                                                      │
│  EN EL SERVIDOR (filesystem):                        │
│  /home/usuario/public_html/wp-content/uploads/       │
│  └── 2026/02/foto_juan.jpg    ← El archivo real      │
│                                                      │
│  EN MYSQL (tabla wp_posts):                          │
│  id: 42                                              │
│  post_type: "attachment"                             │
│  guid: "https://dominio.com/wp-content/uploads/      │
│         2026/02/foto_juan.jpg"   ← La URL            │
│  post_title: "Foto Juan"                             │
│  post_mime_type: "image/jpeg"                        │
│                                                      │
│  EN MYSQL (tabla wp_postmeta):                       │
│  meta_key: "_wp_attached_file"                       │
│  meta_value: "2026/02/foto_juan.jpg"                 │
│  meta_key: "_wp_attachment_metadata"                 │
│  meta_value: {width: 800, height: 600, sizes: ...}   │
│                                                      │
└──────────────────────────────────────────────────────┘

RESULTADO:
- La IMAGEN está en una carpeta del servidor
- La INFORMACIÓN sobre la imagen está en MySQL
- Cuando Next.js necesita mostrarla, lee la URL
  de MySQL y la usa como <img src="...">
```

```
Con Directus es IGUAL:
┌──────────────────────────────────────────────────────┐
│                                                      │
│  EN EL SERVIDOR (filesystem):                        │
│  /home/usuario/directus/uploads/                     │
│  └── abc123-foto_juan.jpg     ← El archivo real      │
│                                                      │
│  EN MYSQL (tabla directus_files):                    │
│  id: "abc-123-def-456"                               │
│  storage: "local"                                    │
│  filename_download: "foto_juan.jpg"                  │
│  type: "image/jpeg"                                  │
│  width: 800                                          │
│  height: 600                                         │
│                                                      │
│  Next.js accede a la imagen via:                     │
│  https://dominio.com/assets/abc-123-def-456          │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Lo que la fundación necesita saber:

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║  ⭐ RESUMEN SIMPLE:                                            ║
║                                                                ║
║  • Los TEXTOS (noticias, nombres, etc.) → en MySQL ✅          ║
║    → Se ven en phpMyAdmin                                      ║
║    → Quedan en la base de datos de Duplika                     ║
║                                                                ║
║  • Las IMÁGENES (fotos, logos) → en una carpeta del servidor   ║
║    → También en Duplika                                        ║
║    → Se acceden via cPanel → File Manager                      ║
║    → Se suben desde WordPress/Directus (automáticamente)       ║
║                                                                ║
║  • TODO queda en Duplika ✅                                    ║
║    → No hay nada externo                                       ║
║    → No hay nada en Sanity cloud                               ║
║    → No hay nada en Vercel                                     ║
║                                                                ║
║  • Los backups de Duplika cubren TODO ✅                       ║
║    → Tanto la BD como los archivos                             ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

# 6. ACCESIBILIDAD PARA TODOS LOS MIEMBROS

## ¿Cómo lograr que CUALQUIERA pueda gestionar el contenido?

### Con WordPress (la opción recomendada):

```
CONFIGURACIÓN DE ACCESO:
━━━━━━━━━━━━━━━━━━━━━━━

URL de acceso: https://admin.probuenosaires.org.ar/wp-admin
(subdominio dedicado para WordPress)

USUARIOS Y ROLES:
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  👑 Administrador (1-2 personas)                       │
│  │   Puede: TODO                                       │
│  │   - Crear/editar/eliminar cualquier contenido       │
│  │   - Gestionar usuarios                              │
│  │   - Configurar plugins                              │
│  │   - Acceder a phpMyAdmin                            │
│  │                                                     │
│  ✏️ Editor (equipo de comunicación)                    │
│  │   Puede:                                            │
│  │   - Crear noticias                                  │
│  │   - Editar CUALQUIER noticia                        │
│  │   - Subir imágenes                                  │
│  │   - Publicar contenido                              │
│  │   - Gestionar logos                                 │
│  │   No puede:                                         │
│  │   - Instalar plugins                                │
│  │   - Modificar configuración                         │
│  │                                                     │
│  ✍️ Autor (colaboradores)                              │
│  │   Puede:                                            │
│  │   - Crear noticias (solo las suyas)                 │
│  │   - Subir imágenes                                  │
│  │   No puede:                                         │
│  │   - Editar contenido de otros                       │
│  │   - Eliminar contenido                              │
│  │                                                     │
│  👁️ Suscriptor (solo lectura)                         │
│      Puede: Ver el dashboard                           │
│      No puede: Nada más                                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Lo que cada persona puede hacer:

```
ACCIONES Y QUIÉN PUEDE HACERLAS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📰 NOTICIAS:
  Crear nueva noticia ────────── Admin ✅  Editor ✅  Autor ✅
  Editar noticia existente ──── Admin ✅  Editor ✅  Autor (solo suyas)
  Eliminar noticia ──────────── Admin ✅  Editor ✅  Autor ❌
  Publicar noticia ──────────── Admin ✅  Editor ✅  Autor ❌

🏢 PROGRAMAS:
  Crear programa ────────────── Admin ✅  Editor ✅
  Editar programa ───────────── Admin ✅  Editor ✅
  Eliminar programa ─────────── Admin ✅  Editor ❌

🤝 LOGOS / PARTNERS:
  Agregar logo ──────────────── Admin ✅  Editor ✅
  Mover/reordenar logos ─────── Admin ✅  Editor ✅
  Eliminar logo ─────────────── Admin ✅  Editor ❌

👥 MIEMBROS EQUIPO:
  Agregar miembro ───────────── Admin ✅  Editor ✅
  Editar miembro ────────────── Admin ✅  Editor ✅
  Eliminar miembro ──────────── Admin ✅  Editor ❌

📸 IMÁGENES:
  Subir fotos ───────────────── Admin ✅  Editor ✅  Autor ✅
  Eliminar fotos ────────────── Admin ✅  Editor ✅
```

### ¿Y phpMyAdmin?

```
phpMyAdmin sigue accesible SIEMPRE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Las personas con acceso a cPanel pueden:
  ✅ Ver TODAS las tablas de la BD
  ✅ Ver los datos crudos
  ✅ Hacer consultas SQL
  ✅ Exportar datos
  ✅ Editar datos directamente (para urgencias)

WordPress / Directus es la "interfaz bonita" para
el uso diario. phpMyAdmin es el "acceso directo a
la base de datos" para casos especiales o verificación.

AMBOS existen simultáneamente. No se excluyen.
```

---

# 📊 RESUMEN FINAL: TODAS LAS DUDAS RESPONDIDAS

```
┌─────────────────────────────────────────────────────────────────┐
│                    RESUMEN DE RESPUESTAS                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. LA BD COMPARTIDA                                           │
│     → Se crean BDs SEPARADAS (una para el sitio, otra para     │
│       rondas) pero en el MISMO servidor de Duplika             │
│     → Ambas visibles en phpMyAdmin                             │
│     → Pueden compartir datos si es necesario                   │
│                                                                 │
│  2. ¿DIRECTUS O WORDPRESS?                                     │
│     → WORDPRESS como backend (headless)                        │
│     → Razón: el equipo ya lo conoce                            │
│     → Directus es técnicamente superior pero requiere          │
│       aprendizaje y setup más complejo                         │
│                                                                 │
│  3. ¿CUÁL ES MÁS FÁCIL?                                       │
│     → WordPress: 1 click de instalación + plugins              │
│     → Directus: requiere config manual en Node.js              │
│     → WordPress gana en facilidad                              │
│                                                                 │
│  4. ¿SE ACTUALIZA EN TIEMPO REAL?                              │
│     → SÍ, en 2-30 segundos (igual que con Sanity)             │
│     → Funciona via webhooks (mecanismo que ya existe)          │
│     → La persona guarda en WP → el sitio se actualiza          │
│                                                                 │
│  5. ¿LAS IMÁGENES SE GUARDAN EN DUPLIKA?                      │
│     → SÍ, TODO queda en Duplika                               │
│     → Textos/datos → en MySQL (visible en phpMyAdmin)          │
│     → Imágenes → en carpeta del servidor (wp-content/uploads)  │
│     → Nada queda fuera de Duplika                              │
│                                                                 │
│  6. ¿CUALQUIERA PUEDE GESTIONAR?                              │
│     → SÍ, con sistema de usuarios y roles de WordPress        │
│     → Admin, Editor, Autor, Suscriptor                         │
│     → Cada rol tiene permisos específicos                      │
│     → phpMyAdmin sigue disponible para acceso directo          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

# 🎯 ARQUITECTURA FINAL RECOMENDADA

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    DUPLIKA (Todo aquí)                          │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────────────────┐│
│  │   Next.js    │  │  WordPress   │  │  Programa Rondas     ││
│  │  (sitio web  │  │  (panel de   │  │  de Negocio          ││
│  │   visible)   │  │  admin CMS)  │  │  (ya existente)      ││
│  │              │  │              │  │                       ││
│  │  Node.js     │  │  PHP         │  │  PHP                 ││
│  │  server.js   │  │  wp-admin    │  │                       ││
│  └──────┬───────┘  └──────┬───────┘  └───────────┬───────────┘│
│         │                  │                       │           │
│         │          ┌───────▼────────┐              │           │
│         │          │    MySQL       │              │           │
│         └─────────►│  fundacion_    │◄─────────────┘           │
│                    │  sitio         │                           │
│                    │                │   ┌──────────────┐       │
│                    │  fundacion_    │◄──│  Otra BD     │       │
│                    │  rondas        │   │  (rondas)    │       │
│                    └────────────────┘   └──────────────┘       │
│                           │                                    │
│                    ┌──────▼───────┐                            │
│                    │  phpMyAdmin  │                            │
│                    │  (acceso     │                            │
│                    │   directo)   │                            │
│                    └──────────────┘                            │
│                                                                │
│  ┌──────────────────────────────────┐                         │
│  │  Carpeta: wp-content/uploads/   │                         │
│  │  (todas las imágenes subidas)   │                         │
│  └──────────────────────────────────┘                         │
│                                                                │
│  SSL ✅ | Backups ✅ | cPanel ✅ | LiteSpeed ✅              │
│                                                                │
└─────────────────────────────────────────────────────────────────┘

FLUJO DE TRABAJO DIARIO:
━━━━━━━━━━━━━━━━━━━━━━━

1. Persona de la fundación entra a wp-admin
2. Crea/edita contenido (noticia, programa, etc.)
3. Sube imágenes → se guardan en wp-content/uploads/
4. Datos se guardan en MySQL
5. WordPress envía webhook a Next.js
6. Next.js revalida la página afectada
7. El visitante ve el contenido actualizado ✅

TODO OCURRE DENTRO DE DUPLIKA.
NADA DEPENDE DE SERVICIOS EXTERNOS.
```

---

*Fin del informe. Cualquier duda adicional estoy disponible para profundizar.*
