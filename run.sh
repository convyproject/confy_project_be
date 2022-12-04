npm i
npm i -g pm2
pm2 del "Convy Backend"
# npm run build --optimize_for_size --max_old_space_size=460 
pm2 start npm run start:prod --name "Convy Backend"