# 🏗️ PLAN DE IMPLEMENTACIÓN: Next.js + WordPress Headless en Duplika

**Fecha:** 25 de febrero de 2026  
**Objetivo:** Migrar el sitio de Sanity/Vercel → WordPress/Duplika  
**Resultado:** Sitio 100% dinámico, manipulable por cualquier persona, alojado en Duplika

---

## 📦 PARTE 0: INVENTARIO — Todo lo que se necesita ANTES de empezar

### 0.1 — Accesos requeridos

| Acceso | ¿Lo tenemos? | ¿Para qué? |
|--------|:------------:|------------|
| WHM de Duplika | ✅ Verificar | Crear cuentas cPanel si hace falta |
| cPanel del hosting del sitio | ✅ Necesario | Instalar WordPress + Node.js app |
| phpMyAdmin | ✅ Necesario | Crear la BD del sitio |
| SSH (opcional) | Recomendado | Troubleshooting y subida rápida |
| Dominio/DNS | ✅ Necesario | Apuntar dominio al servidor |
| Código fuente (este repo) | ✅ Tenemos | Modificar el frontend |
| Sanity Studio actual | ✅ Tenemos | Exportar datos existentes |

### 0.2 — Requisitos del plan de hosting Duplika

| Requisito | Mínimo | Recomendado |
|-----------|--------|-------------|
| Node.js | v18+ | v20 LTS |
| PHP | v7.4+ | v8.1+ |
| MySQL | 5.7+ | 8.0 |
| RAM | 1 GB | 2 GB |
| Espacio | 5 GB | 10 GB+ |
| SSL | Sí | Sí (incluido en Duplika) |

### 0.3 — Software en tu PC para desarrollar

| Herramienta | ¿Instalado? | Uso |
|-------------|:-----------:|-----|
| Node.js v18+ | Verificar: `node -v` | Compilar Next.js |
| npm | Viene con Node | Instalar dependencias |
| Git | Verificar: `git --version` | Control de versiones |
| Editor (VS Code) | ✅ | Editar código |

### 0.4 — Datos a exportar de Sanity (ANTES de tocar código)

Exportar todo el contenido actual de Sanity Studio:

```
Contenido a exportar:
━━━━━━━━━━━━━━━━━━━

📰 Noticias      → Título, slug, fecha, categoría, extracto, imagen, autor, body
📋 Programas     → Título, slug, ícono, descripción, impacto, imagen, gradient, body
👥 Miembros      → Nombre, cargo, bio, foto, expertise, accent, sección
🤝 Logos         → Nombre, imagen, tier (red/alianza), orden
📸 IMÁGENES      → Descargar TODAS las imágenes de cdn.sanity.io
```

**Método de exportación:** Desde terminal con `npx sanity dataset export production export.tar.gz`

---

## 🗄️ FASE 1: Preparar WordPress en Duplika (Backend/CMS)

> **Tiempo estimado:** 2-3 horas  
> **Quién lo hace:** Desarrollador  
> **Dónde:** En cPanel de Duplika

### Paso 1.1 — Crear base de datos MySQL

1. Entrar a **cPanel** → sección **Bases de datos** → **MySQL Databases**
2. Crear nueva BD: `fundacion_sitio` (cPanel le agrega prefijo: `usuario_fundacion_sitio`)
3. Crear usuario MySQL: `fundacion_web` con contraseña segura
4. Asignar el usuario a la BD con **TODOS los privilegios**
5. Anotar credenciales:

```
DB_NAME:  usuario_fundacion_sitio
DB_USER:  usuario_fundacion_web
DB_PASS:  (la contraseña que pusiste)
DB_HOST:  localhost
```

> **IMPORTANTE:** Esta BD es SEPARADA de la BD de rondas de negocios. No se tocan entre sí.

### Paso 1.2 — Instalar WordPress

1. En cPanel → **Softaculous** (o "Instalador de aplicaciones")
2. Buscar **WordPress** → click **Instalar**
3. Configurar:
   - **Protocolo:** https://
   - **Dominio:** `admin.probuenosaires.org.ar` (subdominio) o `probuenosaires.org.ar/wp` (subcarpeta)
   - **Base de datos:** Usar la BD creada en 1.1
   - **Admin user:** `fundacion_admin`
   - **Admin email:** el email de la fundación
   - **Idioma:** Español
4. Click **Instalar** → En ~2 minutos queda listo

### Paso 1.3 — Instalar plugins necesarios en WordPress

Entrar a `wp-admin` → **Plugins** → **Agregar nuevo** e instalar:

| Plugin | Gratuito | Para qué |
|--------|:--------:|----------|
| **Custom Post Type UI (CPT UI)** | ✅ | Crear tipos: Programa, Miembro, Logo |
| **Advanced Custom Fields (ACF)** | ✅ | Agregar campos personalizados (ícono, gradient, etc.) |
| **WP REST API Controller** | ✅ | Controlar qué campos expone la API |
| **Enable Media Replace** | ✅ | Reemplazar imágenes sin cambiar la URL |
| **Simple Custom Post Order** | ✅ | Drag & drop para reordenar logos/miembros |
| **WP Webhooks** | ✅ | Notificar a Next.js cuando hay cambios |
| **Application Passwords** | ✅ (nativo WP 5.6+) | Autenticación segura para la API |

### Paso 1.4 — Crear los tipos de contenido (Custom Post Types)

En wp-admin → **CPT UI** → **Agregar nuevo tipo de entrada**:

#### Tipo: `programa`

```
Slug:           programa
Nombre singular: Programa
Nombre plural:   Programas
Público:         Sí
Mostrar en REST: Sí (CRÍTICO)
Slug REST:       programas
Soporta:         Título, Editor, Imagen destacada, Extracto, Slug
```

#### Tipo: `miembro`

```
Slug:           miembro
Nombre singular: Miembro del Equipo
Nombre plural:   Miembros del Equipo
Público:         Sí
Mostrar en REST: Sí
Slug REST:       miembros
Soporta:         Título, Editor, Imagen destacada
```

#### Tipo: `logo`

```
Slug:           logo
Nombre singular: Logo / Partner
Nombre plural:   Logos / Partners
Público:         Sí
Mostrar en REST: Sí
Slug REST:       logos
Soporta:         Título, Imagen destacada
```

> **Noticias** ya existen en WordPress como "Entradas" (Posts). No hace falta crear un CPT.

### Paso 1.5 — Crear campos personalizados con ACF

En wp-admin → **ACF** → **Grupos de campos** → **Agregar nuevo**:

#### Grupo: "Campos de Noticia" (Asignar a: Entradas/Posts)

| Campo | Tipo ACF | Slug | Obligatorio |
|-------|----------|------|:-----------:|
| Categoría | Select (Institucional, Novedades, Sustentabilidad, Alianzas) | `categoria` | ✅ |
| Extracto corto | Textarea | `excerpt_custom` | ✅ |
| Autor | Text | `autor` | No |
| Tiempo lectura | Text | `read_time` | No |
| Resumen | Textarea | `summary` | No |

#### Grupo: "Campos de Programa" (Asignar a: Programas)

| Campo | Tipo ACF | Slug | Obligatorio |
|-------|----------|------|:-----------:|
| Ícono | Select (Handshake, Network, Globe, HeartPulse, Radio, Cpu, Palette, Flag, Layers, Factory, Star, Target) | `icon` | ✅ |
| Descripción corta | Textarea | `description` | ✅ |
| Valor de impacto | Text | `impact` | ✅ |
| Etiqueta de impacto | Text | `impact_label` | ✅ |
| Gradient CSS | Text | `gradient` | ✅ |
| Activo | True/False | `is_active` | No (default: true) |

#### Grupo: "Campos de Miembro" (Asignar a: Miembros del Equipo)

| Campo | Tipo ACF | Slug | Obligatorio |
|-------|----------|------|:-----------:|
| Cargo | Text | `position` | ✅ |
| Biografía | Textarea | `bio` | ✅ |
| Expertise | Text (separado por comas) | `expertise` | No |
| Color acento | Color Picker | `accent` | No (default: #111269) |
| Sección | Select (directiva, coordinacion, profesional, internacional) | `section` | ✅ |

#### Grupo: "Campos de Logo" (Asignar a: Logos)

| Campo | Tipo ACF | Slug | Obligatorio |
|-------|----------|------|:-----------:|
| Tier | Select (red, alianza) | `tier` | ✅ |
| Orden | Number | `order_rank` | No |

### Paso 1.6 — Configurar webhook para revalidación

En wp-admin → **WP Webhooks** → **Settings** → **Send Data**:

```
Trigger:     post_update, post_create, post_delete, post_trash
URL destino: https://probuenosaires.org.ar/api/revalidate?secret=TU_SECRET_AQUI
Método:      POST
Tipo:        JSON
```

Esto le dice a WordPress: "cada vez que alguien cree, edite o elimine contenido, avisale a Next.js".

### Paso 1.7 — Cargar contenido existente

1. **Noticias:** Crear cada noticia como un Post en WordPress con sus campos ACF
2. **Programas:** Crear cada programa como CPT "Programa" con sus campos ACF
3. **Miembros:** Crear cada miembro como CPT "Miembro" con su foto y campos
4. **Logos:** Crear cada logo como CPT "Logo" con su imagen y tier
5. **Imágenes:** Subir todas las imágenes descargadas de Sanity a la Biblioteca de Medios

> **Verificar:** Que la API REST funcione: visitar `https://admin.probuenosaires.org.ar/wp-json/wp/v2/posts` y confirmar que devuelve JSON con las noticias.

---

## 💻 FASE 2: Modificar el Código Next.js (Frontend)

> **Tiempo estimado:** 6-10 horas  
> **Quién lo hace:** Desarrollador  
> **Dónde:** En tu PC, en este repositorio

### Paso 2.1 — Modificar `next.config.mjs`

**Archivo:** `next.config.mjs`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",          // ← NUEVO: para deploy en Duplika
  images: {
    unoptimized: true,           // ← CAMBIO: simplifica imágenes para self-hosting
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.probuenosaires.org.ar",  // ← CAMBIO: WordPress en vez de Sanity
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
}

export default nextConfig
```

### Paso 2.2 — Crear capa de datos WordPress (reemplaza Sanity client + queries)

**Crear archivo nuevo:** `lib/wordpress.ts`

```typescript
// lib/wordpress.ts
// Capa de acceso a datos — reemplaza sanity/lib/client.ts + queries.ts

const WP_API = process.env.WORDPRESS_API_URL || "https://admin.probuenosaires.org.ar/wp-json/wp/v2"

// Helper genérico para fetch con cache
async function wpFetch<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${WP_API}/${endpoint}`)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))
  
  const res = await fetch(url.toString(), { next: { revalidate: 30 } })
  if (!res.ok) throw new Error(`WP API error: ${res.status}`)
  return res.json()
}

// ─── NOTICIAS ───
export async function getLatestNews(limit = 3) {
  const posts = await wpFetch<any[]>("posts", {
    per_page: String(limit),
    orderby: "date",
    order: "desc",
    _embed: "wp:featuredmedia",
    acf_format: "standard",
  })
  return posts.map(mapPostToNewsItem)
}

export async function getAllNews() {
  const posts = await wpFetch<any[]>("posts", {
    per_page: "100",
    orderby: "date",
    order: "desc",
    _embed: "wp:featuredmedia",
    acf_format: "standard",
  })
  return posts.map(mapPostToNewsItem)
}

export async function getNewsBySlug(slug: string) {
  const posts = await wpFetch<any[]>("posts", {
    slug,
    _embed: "wp:featuredmedia",
    acf_format: "standard",
  })
  return posts[0] ? mapPostToFullArticle(posts[0]) : null
}

export async function getAllNewsSlugs() {
  const posts = await wpFetch<any[]>("posts", {
    per_page: "100",
    _fields: "slug",
  })
  return posts.map(p => ({ slug: p.slug }))
}

// ─── PROGRAMAS ───
export async function getLatestPrograms(limit = 6) {
  const programas = await wpFetch<any[]>("programas", {
    per_page: String(limit),
    orderby: "menu_order",
    order: "asc",
    _embed: "wp:featuredmedia",
    acf_format: "standard",
  })
  return programas.filter(p => p.acf?.is_active !== false).map(mapProgramaToItem)
}

export async function getAllPrograms() {
  return getLatestPrograms(100)
}

export async function getProgramBySlug(slug: string) {
  const programas = await wpFetch<any[]>("programas", {
    slug,
    _embed: "wp:featuredmedia",
    acf_format: "standard",
  })
  return programas[0] ? mapProgramaToFull(programas[0]) : null
}

export async function getAllProgramSlugs() {
  const programas = await wpFetch<any[]>("programas", {
    per_page: "100",
    _fields: "slug",
  })
  return programas.map(p => ({ slug: p.slug }))
}

// ─── MIEMBROS ───
export async function getAllMembers() {
  const miembros = await wpFetch<any[]>("miembros", {
    per_page: "100",
    orderby: "menu_order",
    order: "asc",
    _embed: "wp:featuredmedia",
    acf_format: "standard",
  })
  return miembros.map(mapMiembroToItem)
}

// ─── LOGOS ───
export async function getLogosByTier(tier: "red" | "alianza") {
  const logos = await wpFetch<any[]>("logos", {
    per_page: "100",
    orderby: "menu_order",
    order: "asc",
    _embed: "wp:featuredmedia",
    acf_format: "standard",
  })
  return logos
    .filter(l => l.acf?.tier === tier)
    .map(mapLogoToItem)
}

// ─── MAPPERS (WordPress → formato que esperan los componentes) ───

function getFeaturedImageUrl(post: any): string | undefined {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
}

function mapPostToNewsItem(post: any) {
  return {
    _id: String(post.id),
    title: post.title.rendered,
    slug: post.slug,
    publishedAt: post.date,
    category: post.acf?.categoria || "Novedades",
    excerpt: post.acf?.excerpt_custom || stripHtml(post.excerpt.rendered),
    mainImageUrl: getFeaturedImageUrl(post),
    author: post.acf?.autor,
    readTime: post.acf?.read_time,
  }
}

function mapPostToFullArticle(post: any) {
  return {
    ...mapPostToNewsItem(post),
    summary: post.acf?.summary || post.acf?.excerpt_custom,
    bodyHtml: post.content.rendered,  // WordPress devuelve HTML, no Portable Text
  }
}

function mapProgramaToItem(p: any) {
  return {
    _id: String(p.id),
    title: p.title.rendered,
    slug: p.slug,
    icon: p.acf?.icon || "Star",
    description: p.acf?.description || stripHtml(p.excerpt?.rendered || ""),
    impact: p.acf?.impact || "",
    impactLabel: p.acf?.impact_label || "",
    mainImageUrl: getFeaturedImageUrl(p),
    gradient: p.acf?.gradient || "from-[#111269] to-[#405e8c]",
    isActive: p.acf?.is_active !== false,
  }
}

function mapProgramaToFull(p: any) {
  return {
    ...mapProgramaToItem(p),
    publishedAt: p.date,
    author: p.acf?.autor,
    readTime: p.acf?.read_time,
    summary: p.acf?.description,
    bodyHtml: p.content.rendered,
  }
}

function mapMiembroToItem(m: any) {
  return {
    _id: String(m.id),
    name: m.title.rendered,
    position: m.acf?.position || "",
    bio: m.acf?.bio || "",
    photoUrl: getFeaturedImageUrl(m),
    expertise: m.acf?.expertise ? m.acf.expertise.split(",").map((s: string) => s.trim()) : [],
    accent: m.acf?.accent || "#111269",
    section: m.acf?.section || "profesional",
  }
}

function mapLogoToItem(l: any) {
  return {
    _id: String(l.id),
    name: l.title.rendered,
    src: getFeaturedImageUrl(l) || "",
    tier: l.acf?.tier || "alianza",
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim()
}
```

### Paso 2.3 — ARCHIVOS A MODIFICAR (lista exacta desde el código)

Estos son los **10 archivos** que importan de Sanity y necesitan cambiar:

| # | Archivo | Cambio |
|---|---------|--------|
| 1 | `components/news.tsx` | Reemplazar `client.fetch(latestNewsQuery)` → `getLatestNews()` |
| 2 | `components/novedades-content.tsx` | Reemplazar `client.fetch(allNewsQuery)` → `getAllNews()` |
| 3 | `components/partners.tsx` | Reemplazar `client.fetch(redLogosQuery)` → `getLogosByTier("red")` |
| 4 | `components/programs.tsx` | Reemplazar `client.fetch(latestProgramsQuery)` → `getLatestPrograms()` |
| 5 | `app/(website)/equipo/page.tsx` | Reemplazar `client.fetch(allMiembrosQuery)` → `getAllMembers()` |
| 6 | `app/(website)/novedades/[slug]/page.tsx` | Reemplazar queries → `getNewsBySlug()` + `getAllNewsSlugs()` |
| 7 | `app/(website)/programas/[slug]/page.tsx` | Reemplazar queries → `getProgramBySlug()` + `getAllProgramSlugs()` |
| 8 | `app/api/revalidate/route.ts` | Adaptar para recibir webhook de WordPress |
| 9 | `next.config.mjs` | Agregar `output: "standalone"`, cambiar images |
| 10 | `app/(website)/novedades/[slug]/page.tsx` | Reemplazar `<PortableTextRenderer>` → renderizar HTML |

### Paso 2.4 — Adaptar el renderizado de contenido rico

**Problema:** Sanity usa "Portable Text" (JSON). WordPress devuelve **HTML**.

**Solución:** En las páginas de artículo individual, reemplazar:
```tsx
// ANTES (Sanity):
<PortableTextRenderer value={noticia.body} />

// DESPUÉS (WordPress):
<div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: noticia.bodyHtml }} />
```

Aplicar este cambio en:
- `app/(website)/novedades/[slug]/page.tsx`
- `app/(website)/programas/[slug]/page.tsx`

### Paso 2.5 — Adaptar `api/revalidate/route.ts`

```typescript
// app/api/revalidate/route.ts — VERSIÓN WORDPRESS
import { revalidatePath } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get("secret")
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
    }

    const body = await req.json().catch(() => ({}))
    const postType = body?.post_type || body?.type || "post"

    if (postType === "post") {
      revalidatePath("/", "page")
      revalidatePath("/novedades", "page")
      if (body?.post_name) revalidatePath(`/novedades/${body.post_name}`, "page")
    } else if (postType === "programa") {
      revalidatePath("/", "page")
      revalidatePath("/programas", "page")
    } else if (postType === "miembro") {
      revalidatePath("/equipo", "page")
    } else if (postType === "logo") {
      revalidatePath("/", "page")
    } else {
      revalidatePath("/", "layout")
    }

    return NextResponse.json({ revalidated: true, now: Date.now(), type: postType })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
```

### Paso 2.6 — Eliminar dependencias de Sanity

Después de verificar que todo funciona con WordPress:

```bash
# Desinstalar paquetes de Sanity
npm uninstall sanity next-sanity @sanity/image-url @sanity/orderable-document-list @sanity/vision @portabletext/react

# Eliminar carpetas/archivos de Sanity
rm -rf sanity/
rm sanity.config.ts
rm -rf app/studio/
```

### Paso 2.7 — Variables de entorno

**Crear/editar `.env.local`:**

```env
# WordPress API
WORDPRESS_API_URL=https://admin.probuenosaires.org.ar/wp-json/wp/v2

# Revalidation
REVALIDATE_SECRET=un_token_secreto_largo_y_seguro_aqui
```

---

## 🚀 FASE 3: Build y Deploy en Duplika

> **Tiempo estimado:** 1-2 horas  
> **Quién lo hace:** Desarrollador  
> **Dónde:** PC local + cPanel de Duplika

### Paso 3.1 — Compilar el proyecto

```bash
# En tu terminal, en la carpeta del proyecto:
npm run build
```

Esto genera: `.next/standalone/` con `server.js` incluido.

### Paso 3.2 — Preparar archivos para subir

```bash
# Copiar archivos estáticos al standalone
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
```

**Resultado:** La carpeta `.next/standalone/` contiene TODO lo necesario.

### Paso 3.3 — Subir a Duplika

1. Comprimir `.next/standalone/` en un `.zip`
2. cPanel → **File Manager** → navegar a `/home/usuario/nextjs-site/`
3. **Upload** → seleccionar el `.zip`
4. Click derecho → **Extract**

### Paso 3.4 — Configurar Node.js App en cPanel

1. cPanel → **Setup Node.js App** → **Create Application**
2. Configurar:

```
Node.js version:       20 (LTS)
Application mode:      Production
Application root:      /home/usuario/nextjs-site
Application URL:       probuenosaires.org.ar
Startup file:          server.js

Variables de entorno:
  WORDPRESS_API_URL  = https://admin.probuenosaires.org.ar/wp-json/wp/v2
  REVALIDATE_SECRET  = tu_token_secreto
  PORT               = (lo asigna cPanel)
  HOSTNAME            = 0.0.0.0
```

3. Click **Create** → Click **Run NPM Install** → Click **Start App**

### Paso 3.5 — Configurar DNS

En el registrador de dominio (o en WHM):
- `probuenosaires.org.ar` → IP del servidor Duplika (sitio Next.js)
- `admin.probuenosaires.org.ar` → misma IP (WordPress admin)

---

## ✅ FASE 4: Verificación Final

| Verificación | Cómo probar | ✅/❌ |
|-------------|------------|:-----:|
| Sitio carga correctamente | Visitar probuenosaires.org.ar | |
| Noticias se muestran | Verificar sección novedades | |
| Programas se muestran | Verificar sección programas | |
| Equipo se muestra | Visitar /equipo | |
| Logos se muestran | Verificar sección partners | |
| Crear noticia en WP → aparece en web | Crear post test en wp-admin | |
| Editar noticia → se actualiza | Editar y verificar en 30seg | |
| Eliminar noticia → desaparece | Eliminar y verificar | |
| Subir imagen → se ve correctamente | Subir foto en WP | |
| SSL funciona | Verificar https:// | |
| Mobile responsive | Probar en celular | |

---

## 📅 CRONOGRAMA ESTIMADO

| Fase | Tarea | Duración | Día |
|------|-------|----------|-----|
| 0 | Exportar datos de Sanity | 1 hora | Día 1 |
| 1 | WordPress + BD + plugins + CPTs + ACF | 3 horas | Día 1 |
| 1 | Cargar contenido en WordPress | 2-4 horas | Día 1-2 |
| 2 | Crear `lib/wordpress.ts` | 2 horas | Día 2 |
| 2 | Modificar los 10 archivos | 4-6 horas | Día 2-3 |
| 2 | Testing local (npm run dev) | 2 horas | Día 3 |
| 2 | Limpiar Sanity del proyecto | 30 min | Día 3 |
| 3 | Build + deploy a Duplika | 2 horas | Día 3-4 |
| 4 | Verificación + fixes | 2-3 horas | Día 4 |
| | **TOTAL** | **~18-24 horas de trabajo** | **~4 días** |

---

## ⚠️ RIESGOS Y MITIGACIONES

| Riesgo | Probabilidad | Mitigación |
|--------|:------------:|------------|
| RAM insuficiente en Duplika | Media | Verificar plan contratado; subir de plan si es necesario |
| Node.js no arranca en cPanel | Baja | Verificar versión de Node.js; contactar soporte Duplika |
| Imágenes no cargan | Media | Verificar URLs en `remotePatterns` de next.config |
| ACF no expone campos en API | Media | Instalar plugin "ACF to REST API" |
| WordPress atacado (seguridad) | Media | Instalar Wordfence; mantener actualizado |
| Contenido se pierde en migración | Baja | Backup completo de Sanity ANTES de empezar |

---

*Este plan cubre la implementación completa de principio a fin. Cada paso debe ejecutarse en orden. No saltarse ningún paso de verificación.*
