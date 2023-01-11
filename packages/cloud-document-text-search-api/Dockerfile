FROM node:14.18.1
RUN apt-get update

RUN mkdir /cloud_document_text_search
WORKDIR /cloud_document_text_search

COPY . .
RUN make install
RUN make ci
ENTRYPOINT npm start
