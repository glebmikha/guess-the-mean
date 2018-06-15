docker rmi -f $(docker images -qf dangling=true)

docker-compose up -d --build

bash -c clear && docker exec -it byandlarge_frontend sh
