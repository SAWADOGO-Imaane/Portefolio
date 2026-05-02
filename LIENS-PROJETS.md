# 🔗 Guide de Configuration des Liens de Projets

## Instructions pour ajouter vos liens d'applications hébergées

Ouvrez le fichier `index.html` et remplacez les liens suivants par vos vrais URLs :

### 📍 Projet 1 : Chatbot Santé Mentale
**Ligne ~211 et ~218**
```html
<!-- Remplacez ces liens : -->
<a href="https://votre-lien-demo1.com" target="_blank">
<a href="https://github.com/votre-username/projet1" target="_blank">

<!-- Par vos vrais liens : -->
<a href="https://chatbot-sante.vercel.app" target="_blank">
<a href="https://github.com/imaane-sawadogo/chatbot-sante" target="_blank">
```

### 📍 Projet 2 : Système Gestion Étudiants
**Ligne ~232 et ~239**
```html
<a href="https://votre-lien-demo2.com" target="_blank">
<a href="https://github.com/votre-username/projet2" target="_blank">
```

### 📍 Projet 3 : App IA Médicale
**Ligne ~253 et ~260**
```html
<a href="https://votre-lien-demo3.com" target="_blank">
<a href="https://github.com/votre-username/projet3" target="_blank">
```

### 📍 Projet 4 : Dashboards Analytiques
**Ligne ~274 et ~281**
```html
<a href="https://votre-lien-demo4.com" target="_blank">
<a href="https://github.com/votre-username/projet4" target="_blank">
```

### 📍 Projet 5 : API REST
**Ligne ~295 et ~302**
```html
<a href="https://votre-lien-demo5.com" target="_blank">
<a href="https://github.com/votre-username/projet5" target="_blank">
```

### 📍 Projet 6 : Analyse Données Santé
**Ligne ~316 et ~323**
```html
<a href="https://votre-lien-demo6.com" target="_blank">
<a href="https://github.com/votre-username/projet6" target="_blank">
```

---

## 🌐 Plateformes d'hébergement recommandées

### Pour applications web :
- **Vercel** : https://vercel.com (idéal pour React, Next.js)
- **Netlify** : https://netlify.com (sites statiques)
- **Render** : https://render.com (backend + frontend)
- **Railway** : https://railway.app (full-stack)

### Pour API / Backend :
- **Render** : https://render.com (gratuit)
- **Railway** : https://railway.app
- **Heroku** : https://heroku.com
- **PythonAnywhere** : https://pythonanywhere.com (Python/Flask/FastAPI)

### Pour applications mobiles :
- **Expo** : https://expo.dev (React Native)
- **GitHub Releases** : Pour APK Android
- Vidéo démo sur **YouTube** ou **Loom**

---

## 💡 Conseils

1. **Si vous n'avez pas encore hébergé** : 
   - Laissez les liens comme exemple
   - Ou supprimez temporairement la section `.project-links`

2. **Pour les projets non web** (apps mobiles) :
   - Mettez un lien vers une vidéo démo
   - Ou vers le fichier APK sur GitHub Releases

3. **Documentation Swagger/API** :
   - Utilisez le lien "Voir la démo" pour pointer vers votre doc Swagger

4. **Projets privés** :
   - Si le code est privé, supprimez le bouton GitHub
   - Ou mettez un lien vers une présentation PDF

---

## ✏️ Exemple de remplacement

**AVANT :**
```html
<a href="https://votre-lien-demo1.com" target="_blank" class="project-link">
```

**APRÈS :**
```html
<a href="https://chatbot-mental-health.onrender.com" target="_blank" class="project-link">
```

---

## 🎯 Résultat

Une fois les liens ajoutés, les visiteurs pourront :
- ✅ Cliquer sur l'icône œil dans l'overlay de l'image
- ✅ Cliquer sur "Voir la démo" sous le projet
- ✅ Cliquer sur "Code source" pour voir GitHub
- ✅ Tous les liens s'ouvrent dans un nouvel onglet

Bonne chance ! 🚀
