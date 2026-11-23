# Portfolio — Romaric BOMBADE

Portfolio bilingue (FR par défaut / EN), responsive, mode clair/sombre.
Next.js 15 en **export statique** : le dossier `out/` se déploie sur n'importe quel hébergement (Apache/WAMP, Netlify, Vercel, o2switch…).

## Commandes

```powershell
npm install
npm run dev     # développement : http://localhost:3000/fr/
npm run build   # génère le site statique dans out/
```

## Modifier le contenu

Toutes les données sont dans `src/data/` :

| Fichier | Contenu |
|---|---|
| `profile.ts` | identité, contact, accroches, bio, piliers, valeurs, secteurs, **placeholders** (photo, CV, logo) |
| `projects.ts` | les 12 projets (+ `featured: true` pour la page d'accueil, `image` pour la capture) |
| `experience.ts` | expériences et formation |
| `skills.ts` | compétences par catégorie |
| `services.ts` | offres RoroDev, prix, liens Chariow, vidéos de démo |
| `ui.ts` | libellés d'interface FR/EN et SEO |

## Placeholders à remplacer

Déposez vos fichiers dans `public/` puis renseignez le chemin :

- Photo de profil → `profile.assets.photo = "/images/romaric.jpg"`
- CV PDF → `profile.assets.cv = "/cv/romaric-bombade-cv.pdf"`
- Logo RoroDev → `profile.assets.logo = "/images/rorodev-logo.svg"`
- Captures de projets → `image: "/images/projets/qr-resto.jpg"` (SUCCESS reste confidentiel)
- Vidéos de démo des services → `demoVideo: "/videos/animation-logo.mp4"`
- Image Open Graph → ajoutez `public/og.png` (1200×630) et décommentez `images` dans `src/lib/seo.ts`

## Notes

- Le formulaire de contact (site statique) ouvre la messagerie du visiteur avec le message pré-rempli vers `dromaric58@gmail.com`.
- `/` redirige vers `/fr/` ou `/en/` selon la langue du navigateur.
- Sitemap : `/sitemap.xml` · Robots : `/robots.txt`.
