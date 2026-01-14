# Build stage
FROM node:20-slim AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches/

# Install dependencies including dev dependencies for building
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
# This builds both the frontend (to dist/public) and the server (to dist/index.js)
RUN pnpm run build

# Production stage
FROM node:20-slim AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production
ENV PORT=3311

# Copy built assets and server from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# Install only production dependencies
# We use npm here to avoid installing pnpm in the final image if space is a concern, 
# but pnpm is better for consistency. Let's stick with pnpm for lockfile consistency.
RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile

# Expose the port the app runs on
EXPOSE 3311

# Start the application
CMD ["node", "dist/index.js"]
