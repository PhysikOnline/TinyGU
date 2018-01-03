#https://www.katacoda.com/courses/docker/create-nginx-static-web-server
FROM nginx
COPY . /usr/share/nginx/html

#FROM nginx
##RUN rm /etc/nginx/conf.d/default.conf
##RUN rm /etc/nginx/conf.d/examplessl.conf
#COPY index.html /usr/share/nginx/htm
##COPY conf /etc/nginx
