# Nuxt.js i18n Bootstrap Project

A modern, multilingual web application built with Nuxt.js 3, Bootstrap 5, and internationalization support for English and Arabic languages.

## Features

- ⚡ **Nuxt.js 3** - The latest version of the Vue.js framework
- 🎨 **Bootstrap 5** - Modern, responsive UI framework
- 🌍 **Internationalization (i18n)** - Support for English and Arabic
- 📱 **Responsive Design** - Mobile-first approach
- 🔄 **RTL Support** - Right-to-left layout for Arabic
- 🚀 **SSR/SPA** - Server-side rendering with SPA capabilities

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview

# Generate static site
npm run generate
```

## Project Structure

```
project/
├── assets/
│   └── css/
│       └── main.css          # Custom styles and RTL support
├── layouts/
│   └── default.vue           # Main layout with navigation
├── locales/
│   ├── en.json              # English translations
│   └── ar.json              # Arabic translations
├── pages/
│   ├── index.vue            # Home page
│   ├── about.vue            # About page
│   └── contact.vue          # Contact page
├── plugins/
│   └── bootstrap.client.js  # Bootstrap JavaScript initialization
├── app.vue                  # Root component
├── error.vue               # Error page
├── nuxt.config.ts          # Nuxt configuration
└── package.json            # Dependencies and scripts
```

## Configuration

### Nuxt Configuration (`nuxt.config.ts`)

The project is configured with:
- **@nuxtjs/i18n** module for internationalization
- **Bootstrap CSS** imported globally
- **Client-side Bootstrap plugin** for JavaScript components
- **Language detection** with cookie persistence
- **Prefix routing** for language switching

### Internationalization

- **Default language:** English (`en`)
- **Supported languages:** English (`en`), Arabic (`ar`)
- **Strategy:** `prefix_except_default` (English URLs have no prefix, Arabic URLs have `/ar` prefix)
- **Browser detection:** Automatic language detection with cookie persistence

### Bootstrap Integration

- **CSS:** Bootstrap 5 CSS loaded globally
- **JavaScript:** Bootstrap components (Modal, Dropdown, Collapse, Toast) available via `$bootstrap` plugin
- **RTL Support:** Custom CSS for Arabic right-to-left layout

## Language Support

### English
- URL: `https://yoursite.com/`
- Direction: LTR (Left-to-Right)

### Arabic
- URL: `https://yoursite.com/ar/`
- Direction: RTL (Right-to-Left)
- Custom RTL styles applied automatically

## Available Pages

1. **Home** (`/` or `/ar/`)
   - Hero section with call-to-action
   - Features showcase
   - Responsive design demonstration

2. **About** (`/about` or `/ar/about`)
   - Company information
   - Team statistics
   - Technology stack

3. **Contact** (`/contact` or `/ar/contact`)
   - Contact form with validation
   - Contact information
   - Map placeholder

## Bootstrap Components Used

- **Navigation:** Navbar with responsive collapse
- **Cards:** Feature cards and content cards
- **Forms:** Contact form with validation
- **Buttons:** Various button styles and states
- **Grid System:** Responsive layout system
- **Utilities:** Spacing, colors, and typography

## Customization

### Adding New Languages

1. Create a new locale file in `locales/` (e.g., `fr.json`)
2. Add the locale configuration in `nuxt.config.ts`:
   ```typescript
   locales: [
     // existing locales...
     {
       code: 'fr',
       name: 'Français',
       file: 'fr.json'
     }
   ]
   ```

### Adding New Pages

1. Create a new Vue file in the `pages/` directory
2. Add translations for the page in all locale files
3. Update navigation in `layouts/default.vue` if needed

### Styling

- Global styles: `assets/css/main.css`
- Component styles: Use scoped styles in individual components
- Bootstrap customization: Override Bootstrap variables or add custom classes

## Development Tips

- Use `$t('key')` for translations in templates
- Use `localePath('/path')` for internal navigation
- Use `switchLocalePath('locale')` for language switching
- Access Bootstrap components via `$bootstrap` in components

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- RTL languages properly supported

## License

This project is open source and available under the MIT License.