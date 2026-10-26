# 🎵 TuneVibe - Modern Music Player

> A professional, Spotify-inspired music streaming web application built with vanilla HTML, CSS, and JavaScript.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📸 Preview

```
┌──────────────────────────────────────────────────┐
│  🟢 TuneVibe          Music For Everyone         │
├──────────────────────────────────────────────────┤
│         Music For Everyone                        │
│        Stream your favorite tracks                │
│                                                   │
│  ┌────────────────────────────────────────────┐  │
│  │ 🎵 Dil Me Ho Tum - Arman Malik      4:03  │  │
│  └────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────┐  │
│  │ 🎵 Khwahish - Munawar              4:12   │  │
│  └────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│  0:00 ━━━━━━━━○────────────────── 4:03          │
│  🎵 Now Playing: Song Name - Artist              │
│         ⏮    ▶️    ⏭    🔀                      │
└──────────────────────────────────────────────────┘
```

---

## ✨ Features

- 🎧 **Play/Pause Control** - Smooth audio playback
- ⏭️ **Track Navigation** - Next/Previous buttons
- 🔀 **Shuffle Mode** - Randomized playback
- 📊 **Progress Bar** - Visual timeline with seek functionality
- 🎵 **Dynamic Playlist** - Click any song to play
- 🎨 **Modern UI** - Spotify-inspired dark theme
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast & Lightweight** - No frameworks, pure vanilla JS
- 🎯 **Active Highlighting** - See what's playing
- 🔄 **Auto-play Next** - Continuous listening experience

---

## 🚀 Quick Start

### Option 1: Direct Open (Simplest)
```bash
1. Download or clone this repository
2. Open index.html in your browser
3. Click any song to start playing!
```

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Then open: http://localhost:8000
```

### Option 3: Live Server (VS Code)
```
1. Install "Live Server" extension
2. Right-click index.html
3. Select "Open with Live Server"
```

---

## 📁 Project Structure

```
TuneVibe/
├── index.html                 # Main application entry point
├── PROJECT_STRUCTURE.md       # Detailed structure documentation
│
├── assets/                    # All static resources
│   ├── audio/                 # Music files (.mpeg)
│   ├── css/
│   │   └── style.css          # All styles
│   ├── js/
│   │   └── app.js             # Application logic
│   └── images/                # Album covers, logo, animations
│
├── docs/                      # Complete documentation
│   ├── README.md              # Overview
│   ├── CODE_EXPLANATION.md    # Detailed code walkthrough
│   ├── USAGE_GUIDE.md         # User guide
│   └── ...
│
└── tests/                     # Testing utilities
    ├── test-icons.html        # Font Awesome test
    └── debug.html             # Debug utilities
```

📖 **[View Complete Structure Documentation →](PROJECT_STRUCTURE.md)**

---

## 🎮 How to Use

### Playing Music

1. **Start Playing:**
   - Click any song card from the list
   - Song will load and start playing automatically

2. **Player Controls:**
   - **⏮ Previous** - Go to previous song
   - **▶️ Play/Pause** - Toggle playback (large center button)
   - **⏭ Next** - Skip to next song
   - **🔀 Shuffle** - Enable random playback (turns green when active)

3. **Progress Bar:**
   - Click anywhere on the bar to jump to that position
   - Shows current time and total duration

### Adding Your Own Songs

1. **Add audio file:**
   ```
   Place your file in: assets/audio/7.mpeg
   ```

2. **Add album cover:**
   ```
   Place image in: assets/images/my-cover.jpg
   ```

3. **Update playlist:**
   ```javascript
   // In assets/js/app.js, add to songs array:
   {
       id: 6,
       name: "Your Song Name",
       artist: "Artist Name",
       img: "assets/images/my-cover.jpg",
       src: "assets/audio/7.mpeg",
       duration: "3:45"
   }
   ```

4. **Refresh browser** - Your song appears!

---

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| HTML5 | Structure & Audio API | 5 |
| CSS3 | Styling & Animations | 3 |
| JavaScript | Logic & Interactivity | ES6+ |
| Font Awesome | Icons | 6.4.0 |
| Google Fonts | Typography (Roboto) | Latest |

**No frameworks, no build tools, no dependencies!** Just open and run.

---

## 📚 Documentation

| Document | Description | Audience |
|----------|-------------|----------|
| [README.md](README.md) | This file - project overview | Everyone |
| [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) | Folder organization explained | Developers |
| [CODE_EXPLANATION.md](docs/CODE_EXPLANATION.md) | Line-by-line code guide | Learners |
| [USAGE_GUIDE.md](docs/USAGE_GUIDE.md) | Detailed usage instructions | Users |
| [QUICK_START.md](docs/QUICK_START.md) | Fast reference guide | Everyone |

---

## 🎓 Learning Outcomes

Perfect project for learning:

### HTML5
- ✅ Semantic markup
- ✅ Audio API basics
- ✅ Data attributes
- ✅ Form elements (range input)

### CSS3
- ✅ Flexbox layouts
- ✅ Fixed positioning
- ✅ CSS transitions
- ✅ Media queries
- ✅ Custom styling (range inputs)

### JavaScript
- ✅ DOM manipulation
- ✅ Event handling
- ✅ Array methods (map, forEach, filter)
- ✅ Template literals
- ✅ Promises (async/await)
- ✅ setInterval/clearInterval
- ✅ Audio API control

### Software Engineering
- ✅ Project structure
- ✅ Separation of concerns
- ✅ Code organization
- ✅ Documentation
- ✅ Best practices

---

## 🔧 Configuration

### Changing Theme Color

Default: Spotify Green (`#1DB954`)

```css
/* In assets/css/style.css, find and replace: */
#1DB954 → #YOUR_COLOR

/* Popular alternatives: */
#1E90FF  /* Blue */
#9B59B6  /* Purple */
#E74C3C  /* Red */
#F39C12  /* Orange */
```

### Adjusting Player Size

```css
/* In assets/css/style.css */

/* Make play button larger */
#playBtn {
    font-size: 60px !important;  /* Default: 44px */
}

/* Wider progress bar */
.progress-container {
    padding: 0 50px;  /* Add side padding */
}
```

---

## 🐛 Troubleshooting

### Icons Not Showing (Boxes Instead)

**Problem:** Font Awesome not loading  
**Solutions:**
1. Check internet connection (icons load from CDN)
2. Disable ad-blockers temporarily
3. Open `tests/test-icons.html` to verify
4. Try different browser

### Songs Won't Play

**Problem:** Audio files not found  
**Solutions:**
1. Verify files exist in `assets/audio/`
2. Check file names match (1.mpeg, 2.mpeg, etc.)
3. Browser console (F12) may show errors
4. Try clicking song card, not just play button

### Paths Not Working

**Problem:** Files not loading  
**Solutions:**
1. Check relative paths in code
2. Verify folder structure matches documentation
3. Use local server instead of file:// protocol

### Still Having Issues?

1. Open `tests/debug.html` for diagnostics
2. Check browser console (F12) for errors
3. Verify all files are in correct locations
4. Review [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

---

## 🚀 Future Enhancements

Planned features for future versions:

- [ ] Volume control slider
- [ ] Repeat mode (one/all)
- [ ] Playlist creation/management
- [ ] Search and filter songs
- [ ] Favorites/like functionality
- [ ] Lyrics display
- [ ] Audio visualizer
- [ ] Keyboard shortcuts
- [ ] LocalStorage for preferences
- [ ] Backend API integration
- [ ] User authentication
- [ ] Upload custom songs

---

## 📊 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Opera | 76+ | ✅ Fully Supported |
| IE | Any | ❌ Not Supported |

---

## 📝 Code Quality

- ✅ **Clean Code** - Readable and well-commented
- ✅ **Modular Functions** - Single responsibility principle
- ✅ **DRY Principle** - No code duplication
- ✅ **Semantic Naming** - Self-documenting code
- ✅ **Error Handling** - Graceful failure handling
- ✅ **Best Practices** - Industry-standard patterns

---

## 🤝 Contributing

Contributions welcome! Here's how:

1. **Fork the repository**
2. **Create feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit changes:** `git commit -m 'Add amazing feature'`
4. **Push to branch:** `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Contribution Guidelines
- Follow existing code style
- Comment your code
- Update documentation
- Test in multiple browsers

---

## 📄 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2024 TuneVibe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 🙏 Acknowledgments

- **Spotify** - UI/UX inspiration
- **Font Awesome** - Beautiful icons
- **Google Fonts** - Roboto font family
- **MDN Web Docs** - Excellent documentation

---

## 📧 Contact & Support

- **Issues:** [Report a bug](https://github.com/yourname/tunevibe/issues)
- **Discussions:** [Ask questions](https://github.com/yourname/tunevibe/discussions)
- **Email:** your.email@example.com

---

## ⭐ Show Your Support

If you find this project helpful:
- ⭐ Star this repository
- 🍴 Fork and customize
- 🐛 Report bugs
- 💡 Suggest features
- 📢 Share with others

---

## 📈 Project Stats

- **Files:** 3 main (HTML, CSS, JS)
- **Lines of Code:** ~700
- **Size:** < 100 KB (excluding audio)
- **Load Time:** < 1 second
- **Dependencies:** 0 (CDNs for fonts/icons)

---

## 🎯 Perfect For

- 📚 **Learning Web Development** - Great starter project
- 💼 **Portfolio Projects** - Showcase your skills
- 🎓 **Teaching** - Demonstrate core concepts
- 🔧 **Customization** - Build your own player
- 🚀 **Starting Point** - Foundation for bigger projects

---

**Made with ❤️ for music lovers and developers**

**🎵 Enjoy the music! 🎵**

---

## 🔗 Quick Links

- 📖 [Full Documentation](docs/)
- 🏗️ [Project Structure](PROJECT_STRUCTURE.md)
- 💻 [Code Explanation](docs/CODE_EXPLANATION.md)
- 🚀 [Quick Start Guide](docs/QUICK_START.md)
- 🧪 [Run Tests](tests/)

---

*Last Updated: 2024*
