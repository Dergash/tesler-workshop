After docker is set following commands are used to setup a postgres instance
```sh
docker create -v /var/lib/postgresql/data --name PostgresData alpine
```
```sh
docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=admin -d --volumes-from PostgresData postgres
```
When all dependencies are installed and database is up and running, from the root of the chronos application (https://github.com/Dergash/tesler-workshop/tree/practicum/chronos) following command will build the application:
```sh
mvn clean install -PUI,Dev
```

And following command will run it:
```sh
mvn spring-boot:run -X -f chronos-app -PUI,Dev
```