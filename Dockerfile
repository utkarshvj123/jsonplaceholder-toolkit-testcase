# Use full Nginx image
FROM nginx:mainline

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy your prebuilt React app
COPY build/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
