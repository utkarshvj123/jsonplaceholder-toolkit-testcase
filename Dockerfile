# Use official Nginx image
FROM nginx:mainline

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy the React build folder
COPY build/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
