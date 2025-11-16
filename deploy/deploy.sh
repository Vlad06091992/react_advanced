cd /react/react_advanced

npm run build:prod mode=production apiUrl=https://vladsmirnov.tech/api

rm -rf /var/www/project/html

mkdir /var/www/project/html

mv /react/react_advanced/build/* /var/www/project/html