# NLW Agents - API

Backend API for the NLW Agents project, developed during a Rocketseat event.

## 🛠️ Technologies

- **Runtime**: Node.js with TypeScript
- **Framework**: Fastify
- **Database**: PostgreSQL with pgvector
- **ORM**: Drizzle ORM
- **Validation**: Zod
- **Code Quality**: Biome
- **Containerization**: Docker & Docker Compose

## 📁 Project Structure

```
src/
├── db/
│   ├── connection.ts
│   ├── migrations/
│   ├── schemas/
│   └── seed.ts
├── http/
│   └── routes/
├── env.ts
└── server.ts
```

## 🚀 Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start PostgreSQL database**:

   ```bash
   docker-compose up -d
   ```

3. **Run database migrations**:

   ```bash
   npx drizzle-kit migrate
   ```

4. **Seed database** (optional):

   ```bash
   npm run db:seed
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

## 📝 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run start` - Start production server
- `npm run db:seed` - Seed database with initial data

## 🔧 Environment Variables

Create a `.env` file with:

```
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

## 🏗️ Architecture Patterns

- **Modular Structure**: Routes, schemas, and database logic separated
- **Type Safety**: Full TypeScript implementation with Zod validation
- **Database First**: Drizzle ORM with migration-based schema management
- **RESTful API**: Fastify-based HTTP server with CORS support
