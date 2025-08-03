# Ɲova E-Commerce - Next.js Application

A modern, responsive e-commerce application built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This project features a clean, user-friendly interface for browsing and purchasing products online.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout that works on all devices
- **Product Catalog**: Browse products with filtering and categorization
- **Shopping Cart**: Add, remove, and manage items in your cart
- **User Authentication**: Login system with user accounts
- **UI Components**: Utilizes UI5 Web Components for a professional look
- **State Management**: Context API for global state management
- **API Integration**: Integrated with Fake Store API for product data
- **Custom Hooks**: Reusable hooks for products, cart, filters, and alerts
- **Alert System**: User-friendly notifications and alerts

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.3 with App Router
- **Frontend**: React 19.1.0, TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Library**: UI5 Web Components React
- **Package Manager**: pnpm
- **Development**: ESLint, PostCSS
- **API**: Fake Store API

## 📁 Project Structure

```
e-commerce_nextjs/
├── app/
│   ├── accounts/          # Account management pages
│   ├── cart/             # Shopping cart functionality
│   ├── context/          # React Context providers
│   ├── hooks/            # Custom React hooks
│   ├── login/            # Authentication pages
│   ├── shop/             # Product catalog pages
│   ├── ui/               # UI components and pages
│   │   ├── common/       # Shared UI components
│   │   ├── components/   # Reusable components
│   │   └── pages/        # Page components
│   ├── utils/            # Utility functions and types
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── public/               # Static assets
├── .env                  # Environment variables
├── package.json          # Dependencies and scripts
└── README.md            # Project documentation
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm (preferred) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-commerce_nextjs
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # The .env file is already configured with:
   NEXT_PUBLIC_API=https://fakestoreapi.com
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code linting

## 🔧 Key Features Implementation

### State Management
The application uses React Context API with custom hooks for:
- **Products**: Fetching and managing product data
- **Cart**: Shopping cart state and operations
- **User**: Authentication and user management
- **Filters**: Product filtering and search
- **Alerts**: User notifications

### API Integration
- Integrated with [Fake Store API](https://fakestoreapi.com) for product data
- Custom hooks handle API calls and error management
- Proper loading states and error handling

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive navigation and layout
- Optimized for various screen sizes

### User Experience
- Clean, modern interface
- Smooth transitions and hover effects
- Loading skeletons for better UX
- Alert system for user feedback

## 🌐 Pages and Routes

- `/` - Home page with featured products
- `/shop` - Product catalog with filtering
- `/cart` - Shopping cart management
- `/login` - User authentication
- `/accounts` - User account management

## 🎨 UI Components

The application uses UI5 Web Components which provide:
- Professional, enterprise-grade components
- Consistent design language
- Accessibility features
- Cross-browser compatibility

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Deploy automatically with each push to main branch

### Manual Deployment
1. Build the application: `pnpm build`
2. Deploy the `.next` folder to your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is private and intended for development purposes.

## 🐛 Known Issues

- None at the moment

## 📧 Support

For questions or support, please contact the development team.

---

**Built with ❤️ using Next.js and React**