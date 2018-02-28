#!/bin/sh

docker build --build-arg TOMCAT_EXTRAS=false -t foresight/geoserver:2.12.1 .
