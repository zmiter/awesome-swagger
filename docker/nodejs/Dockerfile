FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
	curl \
	npm \
	git

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install -y nodejs

COPY ./entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh
RUN ln -s /usr/local/bin/entrypoint.sh /

WORKDIR /var/www/html

ENTRYPOINT ["entrypoint.sh"]