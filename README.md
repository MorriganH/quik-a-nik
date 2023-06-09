# Instructions

- `npm install` in both frontend and backend
- in server, create .env and copy .env.example into it. Ensure `DB_USER` and `DB_PASS` are accurate for your system
- in frontend, create .env and copy .env.example into it. Replace `key` with your Google Maps API key

## Frontend

- `cd frontend/`

### To run in browser

- `npm run web`

### To run on mobile

- `npx expo start --tunnel`
If you are on android, download the Expo Go app
Scan the QR code to veiw your app

## Backend

- `cd backend/`
- `npm start`