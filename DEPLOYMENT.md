# 🚀 GUÍA RÁPIDA DE DESPLIEGUE

## Paso 1: Prueba Local (2 minutos)

### Opción A - Abrir directamente
```
1. Haz clic derecho en index.html
2. Abre con tu navegador
3. ¡Listo! Verás el sitio completo
```

### Opción B - Live Server (VS Code)
```
1. Instala extensión "Live Server" en VS Code
2. Click derecho en index.html
3. "Open with Live Server"
4. El navegador se abre automáticamente
```

---

## Paso 2: Personalización Rápida (5 minutos)

### Cambiar número de WhatsApp
Abre `index.html` y reemplaza `51999999999` con tu número:

Busca:
```
https://wa.me/51999999999?text=
```

Reemplaza por:
```
https://wa.me/[TU_NUMERO_WHATSAPP]?text=
```

Ejemplo si tu número es +34 666 777 888:
```
https://wa.me/34666777888?text=
```

### Cambiar logo
1. Reemplaza `assets/logo.png` con tu logo
2. Asegúrate que sea cuadrado (512x512px recomendado)

### Cambiar colores de marca
Edita `style.css` líneas 15-25:
```css
--primary-blue: #0D4B82;      /* Cambiar aquí */
--dark-blue: #0B3E6C;          /* Cambiar aquí */
--background: #081420;         /* Cambiar aquí */
```

---

## Paso 3: Desplegar en GitHub Pages (10 minutos)

### 3.1 Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: **[TU_USUARIO].github.io**
   - Reemplaza [TU_USUARIO] con tu usuario de GitHub
3. Descripción (opcional): "Landing page - Biblioteca sin Censura"
4. Tipo: **Público** ✓
5. Click "Create repository"

### 3.2 Subir archivos

En tu terminal (dentro de la carpeta del proyecto):

```bash
git init
git add .
git commit -m "Initial commit: Biblioteca sin Censura landing page"
git branch -M main
git remote add origin https://github.com/[TU_USUARIO]/[TU_USUARIO].github.io.git
git push -u origin main
```

Reemplaza:
- `[TU_USUARIO]` con tu usuario de GitHub (dos veces)

Ejemplo completo:
```bash
git init
git add .
git commit -m "Initial commit: Biblioteca sin Censura landing page"
git branch -M main
git remote add origin https://github.com/juan/juan.github.io.git
git push -u origin main
```

### 3.3 Verificar configuración

1. Ve a https://github.com/[TU_USUARIO]/[TU_USUARIO].github.io
2. Click en "Settings" (arriba a la derecha)
3. En el menú izquierdo, click en "Pages"
4. Verifica:
   - Source: "Deploy from a branch"
   - Branch: "main" y folder "/ (root)"
   - Guardado automáticamente

### 3.4 ¡Accede a tu sitio!

Tu sitio estará en vivo en:
```
https://[TU_USUARIO].github.io
```

Ejemplo:
```
https://juan.github.io
```

---

## Paso 4: Actualizaciones Futuras

Cuando hagas cambios en local:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

GitHub Pages se actualiza automáticamente en menos de 1 minuto.

---

## ❓ Problemas Comunes

### "El sitio dice 'repository not found'"
✓ Asegúrate que el repositorio sea **público**
✓ El nombre es exactamente `[tu_usuario].github.io`
✓ Espera 2-3 minutos para que GitHub procese

### "El sitio se ve roto o sin estilos"
✓ Borra la caché del navegador (Ctrl+Shift+Del)
✓ Abre en navegador privado/incógnito
✓ Espera 5 minutos

### "Los botones de WhatsApp no funcionan"
✓ Asegúrate de haber reemplazado correctamente `51999999999`
✓ Usa solo números sin + ni espacios
✓ Ejemplo correcto: `34666777888` (no `+34 666 777 888`)

### "El logo no aparece"
✓ Asegúrate que `assets/logo.png` existe
✓ Usa una imagen cuadrada (PNG, JPG o SVG)
✓ Tamaño recomendado: 512x512px

---

## 📱 Prueba en Móvil

### Opción 1: QR
Abre https://qr.io y crea un QR con:
```
https://[TU_USUARIO].github.io
```

### Opción 2: Link directo
Envía el link por WhatsApp, email, etc.

### Opción 3: Tus redes sociales
- TikTok bio
- Instagram bio (linktree)
- WhatsApp status
- Telegram

---

## 🎯 Checklist Final

- [ ] Sitio funciona en http://localhost (local)
- [ ] Logo está reemplazado con tu branding
- [ ] Números de WhatsApp están correctos
- [ ] Colores coinciden con tu marca
- [ ] Repositorio creado en GitHub
- [ ] Archivos subidos correctamente
- [ ] Settings → Pages está configurado
- [ ] Sitio en vivo en https://[tu_usuario].github.io
- [ ] Probado en móvil (funciona perfecto)

---

## ✨ Características incluidas

✅ Navbar sticky con navegación
✅ Hero section con mockup del dashboard
✅ 4 beneficios en tarjetas
✅ 6 categorías de recursos
✅ Precios Perú e Internacional
✅ FAQ accordion funcional
✅ CTA final optimizada
✅ Footer minimalista
✅ Mobile-first responsive
✅ Sin dependencias (solo HTML/CSS/JS)
✅ Compatible con GitHub Pages
✅ Load rápido (< 1s)
✅ Animaciones suaves
✅ Colores premium personalizables

---

## 🎓 Recursos Útiles

- Documentación GitHub Pages: https://docs.github.com/pages
- Editor online: https://github.dev (edita en web)
- Verificar SEO: https://search.google.com/search-console
- Compressor imágenes: https://tinypng.com

---

## 🤝 Soporte Rápido

Si algo no funciona:
1. Verifica que todos los archivos estén en la carpeta
2. Prueba en navegador privado/incógnito
3. Borra caché y cookies
4. Intenta en otro navegador
5. Espera 5 minutos (a veces GitHub tarda)

**¡Tu página está lista para ir viral! 🚀**
