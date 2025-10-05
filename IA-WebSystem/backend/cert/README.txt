Coloca aquí los archivos de certificado autofirmado para HTTPS:
- key.pem
- cert.pem

Puedes generarlos con:

openssl req -nodes -new -x509 -keyout key.pem -out cert.pem -days 365 -subj "/CN=localhost"
