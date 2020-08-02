FROM openjdk:14

ENV ENVIRONMENT=prod

MAINTAINER Civan Erbay <civan.erbay@web.de>

ADD envolve-backend/target/envolve-backend.jar app.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Dauth.jwt.secret=$JWT_SECRET -jar /app.jar" ]


