# -----------------------------
# Stage 1: Build React App
# -----------------------------
    FROM node:20 AS build

    WORKDIR /app
    
    COPY package*.json ./
    
    RUN npm install --legacy-peer-deps
    
    COPY . .
    
    ENV CI=true
    
    RUN npm run build
    
    # -----------------------------
    # Stage 2: Serve with Nginx
    # -----------------------------
    # Use full Nginx image (not alpine)
    FROM nginx:mainline
    
    # Remove default content
    RUN rm -rf /usr/share/nginx/html/*
    
    # Copy React build
    COPY --from=build /app/build /usr/share/nginx/html
    
    EXPOSE 80
    
    CMD ["nginx", "-g", "daemon off;"]
    