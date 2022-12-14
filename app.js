const express = require('express');
const app = express();
const port = 3030
const path = require ('path');

//recursos estaticos
app.use(express.static('public'))

//rutas
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/ofertas', (req,res) => res.sendFile(path.join(__dirname, 'views', 'ofertas.html')));
app.get('/tiendasOficiales', (req,res) => res.sendFile(path.join(__dirname, 'views', 'tiendasOficiales.html')));
app.get('/vender', (req,res) => res.sendFile(path.join(__dirname, 'views', 'vender.html')));
app.get('/ayuda', (req,res) => res.sendFile(path.join(__dirname, 'views', 'ayuda.html')));
app.get('/creaTuCuenta', (req,res) => res.sendFile(path.join(__dirname, 'views', 'creaTuCuenta.html')));
app.get('/ingresa', (req,res) => res.sendFile(path.join(__dirname, 'views', 'ingresa.html')));
app.get('/misCompras', (req,res) => res.sendFile(path.join(__dirname, 'views', 'ofertas.html')));

app.get('*', (req,res) => res.sendFile(path.join(__dirname, 'views', '404.html')));

//levantamos/llamamos al servidor
app.listen(3030, () => console.log(`Servidor levantado en http://localhost:${port}`))