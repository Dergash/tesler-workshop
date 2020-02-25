
docker create -v /var/lib/postgresql/data --name PostgresData alpine
docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=admin -d --volumes-from PostgresData postgres
