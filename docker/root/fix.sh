#!/bin/sh

php-cs-fixer fix /app

chown -R www-data:www-data /app
chmod -R 777 /app
