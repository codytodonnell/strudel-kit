FROM node:20-alpine
WORKDIR /strudel-app
# Install python, pip, and pipx
RUN apk add --no-cache python3 py3-pip pipx
# Install strudel-cli as a command-line tool
RUN pipx install strudel-cli==0.1.1
RUN mkdir frontend
WORKDIR /strudel-app/frontend
# Copy frontend task flows into the image
COPY ./strudel-taskflows .
# Install the dependencies
RUN npm install
EXPOSE 5175
# Run the app in development mode
CMD ["npm", "start"]