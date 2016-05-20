
#`/sbin/ip route|awk '/default/ { print $3 }'`
[ -z "$NODE_ENV" ] && export NODE_ENV=production

node /app/dist/server/server.js
