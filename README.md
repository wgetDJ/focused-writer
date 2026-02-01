# Focused Writer

A distraction-free, privacy-first markdown writing application with focus mode, client-side encryption, and full offline support.

## ✨ Features

- 📝 **Focus Mode**: Center your current paragraph, gray out everything else
- 🔒 **Client-Side Encryption**: Optional AES-GCM encryption with password/biometric/TOTP
- 📁 **File System Integration**: Choose your storage folder (Chromium browsers)
- 🎨 **Customizable Themes**: Built-in themes + full theme editor
- ⌨️ **Keyboard Shortcuts**: Fully customizable keyboard bindings
- 📱 **PWA**: Install as an app, works offline
- 📄 **PDF Export**: Export your documents to PDF
- 🌙 **Dark Mode**: Beautiful light and dark themes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/focused-writer.git
cd focused-writer

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Components**: shadcn/ui (Radix UI + Tailwind CSS)
- **Encryption**: Web Crypto API
- **Storage**: IndexedDB + File System Access API
- **PWA**: next-pwa

## 📖 Documentation

- [Architecture](./docs/architecture.md)
- [Security Model](./docs/security.md)
- [Keyboard Shortcuts](./docs/keyboard-shortcuts.md)
- [Theme Customization](./docs/theme-guide.md)

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🗺️ Roadmap

### Alpha (v0.1.0 - v0.9.0)
- [x] Project setup
- [ ] Basic markdown editor with focus mode
- [ ] File system integration
- [ ] Encryption system
- [ ] Theme customization
- [ ] Keyboard shortcuts

### Beta (v0.10.0+)
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Mobile responsiveness
- [ ] Cross-browser testing

### v1.0.0
- [ ] Production release

## 📧 Support

For questions or issues, please [open an issue](https://github.com/YOUR_USERNAME/focused-writer/issues).

---

**Current Version**: v0.1.0-alpha.1  
**Status**: 🚧 In Development
