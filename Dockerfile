FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/table-tmpl.jar /table-tmpl/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/table-tmpl/app.jar"]
