# define an alias for the specific python version used in this file.
FROM docker.io/python:3.12.5-slim-bookworm AS python

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

# Install apt packages
RUN apt-get update && apt-get install --no-install-recommends -y
# Requirements are installed here to ensure they will be cached.
COPY requirements.txt ./
RUN pip install -r requirements.txt
