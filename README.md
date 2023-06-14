# Instructions

- `npm install` in both frontend and backend
- In server, create .env and copy .env.example into it. Ensure `DB_USER` and `DB_PASS` are accurate for your system
- In frontend, create api_key.js and copy api_key.js.example into it. Replace `yourKey` with your Google Maps API key

## Frontend

- `cd frontend/`

### To run in browser

- `npm run web`

### To run on mobile

- `npx expo start --tunnel`
If you are on android, download the Expo Go app
Scan the QR code to veiw your app

## Backend

- `cd server/`
- `npm start`

### To allow mobile to make axios requests to localhost

Global install localtunnel using `npm i -g localtunnel`
Run localtunnel with `lt -p 3000`
ctrl click the provided url and enter your ip address into the field
In frontend, create backend_tunnel.js and copy backend_tunnel.js.example into it. Replace `generatedURL` with the provided url