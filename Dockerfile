FROM node:4-onbuild

LABEL maintainer "george.melo7@gmail.com"

RUN apt-get update -y & \
apt-get clean && \
rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 8080

ADD start.sh /root/start.sh

RUN chmod +x /root/start.sh

CMD ["/root/start.sh"]
