# Microservices with NodeJS

A simple example of a Node App using Microservices, Docker and Nginx.

## Containers

- Installation for Windows:

  - https://hub.docker.com/editions/community/docker-ce-desktop-windows/
  - You may need the Linux Kernel update package:
    https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel

- Run

  - Open a command-line terminal like PowerShell, and try out some Docker commands!
  - Run `$ docker version` to check the version.
  - Run `$ docker run hello-world` to verify that Docker can pull and run images.
    - Flags:
      - `-it` interactive terminal (what's going on)
      - `-p` port from local to container like `3000:3000`
      - `-d` run container in background
  - Example of running mongo in a Docker container: `$ docker run -d -p 27017:27017 mongo`
  - Speed everything up: `$ docker-compose up -d`. For this, you will need a Docker Compose file
  - Download a container: `$ docker pull mongo`

- Stop

  - Check first for the container id: `$ docker ps`
  - `$ docker stop e8` (You can use just the first few characters of it)
  - Stop all: `$ docker stop $(docker ps -aq)`

- **Dockerfile** is a file to specify how Docker should package your application.
  - `FROM ` base container;
  - `COPY . /{sourceFolder}` copy everything in the current directory to the source folder;
  - `WORKDIR /{sourceFolder}` all the commands will run inside this sourced folder;
  - `RUN ` run the main commands/scripts, such as installing all the dependencies: `npm install --production`;
  - `EXPOSE {port}` expose the port of this container to be available for others containers;
  - `CMD ` command that will run when the container starts running. e.g.: `npm start`.
