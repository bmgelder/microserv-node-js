npm init -y
npm install typescript ts-node-dev express @types/express
tsc --init
npm install --save express-validator
npm install express-async-errors --save
npm install mongoose
npm install @types/mongoose --save-dev
npm install cookie-session @types/cookie-session
npm install jsonwebtoken @types/jsonwebtoken
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

skaffold dev
