# NLW Agents - Web

Frontend application for the NLW Agents project, developed during a Rocketseat event.

## 🛠️ Technologies

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: TanStack React Query
- **UI Components**: Lucide React icons
- **Code Quality**: Biome
- **Utilities**: clsx, class-variance-authority, tailwind-merge

## 📁 Project Structure

```
src/
├── pages/
│   ├── create-room.tsx
│   └── room.tsx
├── lib/
│   └── utils.ts
├── app.tsx
├── main.tsx
└── index.css
```

## 🚀 Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📝 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🏗️ Architecture Patterns

- **Component-Based**: React functional components with hooks
- **Type Safety**: Full TypeScript implementation
- **Utility-First CSS**: Tailwind CSS for styling
- **Client-Side Routing**: React Router for navigation
- **Data Fetching**: TanStack React Query for server state management
- **Modern Build**: Vite for fast development and optimized builds
