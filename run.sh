npm i
npm run prebuild
npm run build
npm i -g pm2
pm2 del "Convy Backend"
pm2 start npm run start:prod --name "Convy Backend"