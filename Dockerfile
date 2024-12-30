FROM httpd:latest

COPY my_httpd_config.conf /usr/local/apache2/conf/httpd.conf
COPY html/index.html /usr/local/apache2/htdocs/index.html
COPY css/ /usr/local/apache2/htdocs/css/
COPY fonts/ /usr/local/apache2/htdocs/fonts/
COPY images/ /usr/local/apache2/htdocs/images/
COPY javascript/ /usr/local/apache2/htdocs/javascript/

#docker build -t mjjohnson0417/httpd:latest .
#docker run -d --name myapache2 -p 8081:80 mjjohnson0417/httpd
#docker exec -it myapache2 sh
#docker run --rm httpd:2.4 cat /usr/local/apache2/conf/httpd.conf > my_httpd_config.conf
#docker run --rm httpd:latest cat /usr/local/apache2/conf/httpd.conf > my_httpd_config.conf