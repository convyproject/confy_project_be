npm i
npm i -g pm2
pm2 del "Convy Backend"
# export NODE_OPTIONS=--max_old_space_size=4096
# npm run build
pm2 start ./serve.sh --name "Convy Backend"