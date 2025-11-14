# Asaduzzaman Portfolio

A modern, high-performance portfolio website showcasing my web development projects, skills, and professional experience. Built with cutting-edge technologies for optimal performance, SEO, and user experience.

## ��� Overview

This portfolio website serves as a comprehensive showcase of my full-stack development capabilities, featuring:

- **Responsive Design**: Fully responsive and optimized for all devices
- **Dynamic Blog System**: A comprehensive blog platform for sharing technical insights and project updates
- **Performance Optimized**: Server-side rendering and static generation for lightning-fast load times
- **Modern UI/UX**: Beautiful, accessible interface with smooth animations

## ���️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) - React framework for production
- **Language**: TypeScript - Type-safe development
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **UI Components**: React with custom components
- **Animations**: AOS (Animate On Scroll), React Parallax Tilt
- **Particles**: tsParticles - Interactive particle animations
- **Content**: React Markdown for dynamic blog rendering
- **Icons**: React Icons - Comprehensive icon library
- **Deployment**: Vercel - Optimized Next.js hosting

## ��� Features

### Portfolio Showcase
- Projects with detailed descriptions and live links
- Skills and technical expertise display
- Professional experience timeline

### Blog System
- Dynamic blog posts with full markdown support
- SEO-optimized blog pages
- Categorized content organization
- Responsive blog layout

### Performance & SEO
- Server-side rendering for fast initial page loads
- Static generation for blog posts
- Optimized images and assets
- Meta tags and structured data for SEO

### User Experience
- Smooth scroll animations
- Interactive parallax effects
- Intuitive navigation
- Fast, fluid interactions

## ��� Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/asaduzzaman8316/asaduzzaman.git
cd asaduzzaman
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables (.env.local):
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## ��� Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── [blogid]/            # Dynamic blog pages
│   ├── Type/                # TypeScript type definitions
│   └── globals.css          # Global styles
├── components/
│   ├── Share/
│   │   └── Navbar/          # Navigation components
│   └── ...
├── public/
│   ├── blog.json            # Blog data
│   ├── resume.pdf           # Resume file
│   └── images/              # Image assets
└── package.json             # Dependencies
```

## ��� Blog Management

Blog data is stored in `public/blog.json` with the following structure:

```json
{
  "id": "1",
  "title": "Blog Post Title",
  "date": "2023-10-27",
  "slug": "blog-post-slug",
  "excerpt": "Short description",
  "imageUrl": "image-url",
  "bodyMarkdown": "# Markdown content here..."
}
```

## ��� Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_BASE_URL` - Your Vercel domain URL
4. Deploy with one click

### Environment Variables for Production

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

## ��� Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn Next.js features
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Styling guide
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - Type safety guide
- [React Documentation](https://react.dev) - React fundamentals

## ��� Contributing

Contributions, suggestions, and improvements are welcome! Feel free to open issues or submit pull requests.

## ��� License

This project is open source and available under the MIT License.

## ��� Contact

- **Email**: asaduzzaman8316@gmail.com
- **Portfolio**: [asaduzzaman-dev.vercel.app/](https://asaduzzaman-dev.vercel.app/)
- **GitHub**: [github.com/asaduzzaman8316](https://github.com/asaduzzaman8316)

---

**Built with ❤️ by Asaduzzaman**
