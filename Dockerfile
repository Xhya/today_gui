FROM node:10.18-slim

# Copy the file from your host to your current location.
COPY angular.json .
COPY package.json .
COPY src ./src
COPY tsconfig.json .
COPY tslint.json .

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 8080

RUN npm install 
RUN ng update @angular/cli --migrate-only --from=1.6.7

# Run the specified command within the container.
CMD [ "npm", "start" ]