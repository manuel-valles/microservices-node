# Microservices with NodeJS

A simple example of a Node App using Microservices, Docker and Nginx.

## Containers

- Installation for Windows:

  - https://hub.docker.com/editions/community/docker-ce-desktop-windows/
  - You may need the Linux Kernel update package:
    https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel
  - `$ docker version`
  - You can also run `$ docker run hello-world` to verify that Docker can pull and run images.

- Configuration:

  - **Dockerfile** is an environment file to specify how Docker should package your application, so it can be reproduced anywhere.
    - `FROM ` base container;
    - `COPY . /{sourceFolder}` copy everything in the current directory to the source folder;
    - `WORKDIR /{sourceFolder}` all the commands will run inside this sourced folder;
    - `RUN ` run the main commands/scripts, such as installing all the dependencies: `npm install --production`;
    - `EXPOSE {port}` expose the port of this container to be available for others containers;
    - `CMD ` command that will run when the container starts running. e.g.: `npm start`.
  - **docker-compose.yml** is a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration: `$ docker-compose up`

- Main Commands:

  - Run a new Container: `$ docker run {IMAGE}`

    - Flags:
      - `--name {CONTAINER}` assign a name
      - `-p {HOSTPORT}:{CONTAINERPORT}` map a port
      - `-it` interactive terminal (what's going on)
      - `-d {IMAGE}` start container in background
      - `--hostname {HOSTNAME}` assign a hostname
      - `--add-host {HOSTNAME}:{IP}` add a DNS entry
    - Example of running mongo in a Docker container: `$ docker run -d -p 27017:27017 mongo`

  - Manage Containers:

    - `$ docker ps` list of running containers
    - `$ docker ps -a` list of all containers
    - `$ docker stop {CONTAINER}` stop a running container. You can use just the first few characters of it: `$ docker stop e8`
    - `$ docker stop $(docker ps -aq)` stop all the containers.
    - `$ docker start {CONTAINER}` start a stopped container
    - `$ docker rm {CONTAINER}` delete a container
    - `$ docker rm -f {CONTAINER}` delete a running container
    - `$ docker container prune` delete stopped containers

  - Manage Images:

    - `$ docker images` show a list of all images
    - `$ docker pull {IMAGE}` download an image
    - `$ docker rmi {IMAGE}` delete an image
    - `$ docker images prune` delete dangling images
    - `$ docker images prune -a` delete all unused images

  - Info & Stats:
    - `$ docker logs {CONTAINER}` show the logs of a container
    - `$ docker stats` show stats of running containers
