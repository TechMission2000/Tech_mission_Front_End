# Tech Mission Front End

## Live Demo

🌐 **[View Live Site](https://www.techmissionglobe.com/)**

## Overview

This is a modern, responsive web application built for Tech Mission, a technology company. The project showcases a comprehensive front-end solution using cutting-edge web technologies to deliver an engaging user experience across various business pages including home, about, services, blogs, careers, and more.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Dynamic Pages**: Multiple pages including Home, About, Services, Blogs, Careers, Contact, Privacy Policy, Terms of Service, Quote Request, and Portfolio
- **Interactive Components**: Custom UI components like carousels, accordions, forms, and navigation elements
- **Blog System**: Dynamic blog pages with pagination, sidebar, and detailed blog posts
- **Career Portal**: Job listings with detailed job cards and application features
- **Contact Forms**: Integrated contact and quote request forms
- **Portfolio Showcase**: Display of company projects and work samples
- **SEO Optimized**: Built with Next.js for optimal search engine performance
- **State Management**: Redux Toolkit for efficient state management
- **Modern UI**: Styled with Tailwind CSS for a clean, professional appearance

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit with RTK Query
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Build Tool**: Next.js built-in
- **Deployment**: Ready for Vercel or other platforms

## Skills Demonstrated

This project demonstrates expertise in:

- **Front-End Development**: Proficient in React and Next.js ecosystem
- **TypeScript**: Strong typing and modern JavaScript development
- **Responsive Design**: CSS frameworks and mobile-first design principles
- **State Management**: Complex application state handling with Redux
- **Component Architecture**: Modular, reusable component design
- **API Integration**: RESTful API consumption with RTK Query
- **Performance Optimization**: Next.js optimizations for fast loading
- **Version Control**: Git workflow and collaborative development
- **UI/UX Implementation**: Translating design concepts into functional interfaces

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (main)/            # Main layout group
│   ├── about/             # About page
│   ├── blogs/             # Blog pages with dynamic routing
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── quote/             # Quote request
│   ├── services/          # Services pages
│   └── work/              # Portfolio/work page
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   ├── landing/          # Landing page sections
│   ├── about/            # About page components
│   ├── blog/             # Blog-related components
│   └── ...               # Other feature components
├── data/                 # Static data files
├── lib/                  # Utility functions
├── public/               # Static assets
└── redux/                # Redux store and slices
```

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Tech_mission_Front_End
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup** (if needed)

   - Copy `.env.example` to `.env.local`
   - Add necessary environment variables

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

- **Development**: `npm run dev` - Start development server with hot reload
- **Build**: `npm run build` - Create production build
- **Start**: `npm run start` - Start production server
- **Lint**: `npm run lint` - Run ESLint for code quality

## Key Components

- **HeroSection**: Dynamic hero banners for different pages
- **BlogGrid**: Responsive grid layout for blog posts
- **JobCard**: Interactive job listing cards
- **ContactSection**: Multi-purpose contact forms
- **Portfolio**: Showcase of company projects
- **Testimonials**: Customer testimonial carousel
- **FAQ**: Expandable FAQ sections

## API Integration

The application integrates with backend APIs for:

- Blog content management
- Job listings and applications
- Contact form submissions
- Portfolio data

## Performance Features

- **Image Optimization**: Next.js Image component for optimized loading
- **Code Splitting**: Automatic code splitting for better performance
- **Static Generation**: Pre-rendered pages where possible
- **Lazy Loading**: Components loaded on demand

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Contact

- **Author**: Md Moniruzzaman
- **Email**: [mdmoniruzzamanshuvo2003@gmail.com
  ](mailto:mdmoniruzzamanshuvo2003@gmail.com)
- **LinkedIn**: [Md Moniruzzaman](https://linkedin.com/in/dmmonir2003)
- **GitHub**: [dmmonir2003](https://github.com/dmmonir2003)

For any questions about this project or my development work, please feel free to reach out.

---

_Built with passion for delivering exceptional digital experiences._
