1. **image**(設計書)
1. **container**(実際に作られたもの/作っては削除する)
1. **compose**(containerが複数で一つの機能を果たすもの)
1. **network**:コンテナ同士を繋ぐもの
1. **volume**: containerが使う外部のデータやモジュール(データ保管庫)

# **Dockerfile**を書く
`docker build -t IMAGE-NAME:TAG -f MYDOCKERFILE PATH/to/Dockerfile`
**image**
`docker iamgpe|container`

# Dockerfile

## `FROM`

image

## `WORKDIR`

/

# image

```bash
docker image ls
docker image build # Type1: make iamge by myself
docker image pull # Type2: use image downloaded from DockerHub
docker image rm

docker image push # upload the local image to DockerHub
```

```bash
# during iamge being run
exit
```

# container

```bash
docker container run <image-name> # Run instance of image
docker container stop <container-name> # Stop the instance running
docker container start <container-name> # Restart the interrupted instance
docker container rm <container-name> # Stop the 
docker container kill <container-name> # Kill forcefully the container process
```

## compose

```bash
docker compose up # same with `docker container run`
docker compose run # 
docker compose stop # same with `docker container stop`
docker compose start # same with container
docker compose down
```

```yaml
version: '3.8'

services:
	web: nginx:latest
		container_name: web_server
			- "8080.80"
		volumes:
			- ./html:/usr/share/nginx/html
		networks:
			- app_network
	db:
		image: mysql:5.7
		container_name: mysql_db
		environment:
			MYSQL_ROOT_PASSWORD: example
			MYSQL_DATABASE: my_database
volumes:
	- mysql_data:/var/lib/mysql
networks:
	- app_network

```