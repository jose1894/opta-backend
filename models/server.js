const express = require('express');
const cors = require('cors');
const path = require('path')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        //this.app.use(express.static(path.join(__dirname, '..', 'public/projects')));

        this.paths = {
            auth:             '/api/auth',
            buscar:           '/api/buscar',
            categorias:       '/api/categorias',
            paises:           '/api/paises',
            estados:          '/api/estados',
            ciudades:         '/api/ciudades',
            productos:        '/api/productos',
            usuarios:         '/api/usuarios',
            aliados:          '/api/aliados',
            cargos:           '/api/cargos',
            monedas:          '/api/monedas',
            miembros:         '/api/miembros',
            sucursales:       '/api/sucursales',
            unidadesNegocios: '/api/unidadesNegocios',
            gastos:           '/api/gastos',
            accionesPerfiles: '/api/accionesPerfiles',
            menu:             '/api/menu',
            perfiles:         '/api/perfiles',
            tasas:            '/api/tasas',
            idiomas:          '/api/idiomas',
            profesiones:      '/api/profesiones',
            personal:         '/api/personal',
            industrias:       '/api/industrias',
            contactos:        '/api/contactos',
            clientes:         '/api/clientes',
            enfoques:         '/api/enfoques',
            actividades:      '/api/actividades',
            proyectos:        '/api/proyectos',
            personasProyectos:'/api/personasProyectos',
            riesgos:          '/api/riesgos',
            uploads:          '/api/uploads',
            emails:          '/api/emails',
            planes:          '/api/planes',
            membresiaLicencias: '/api/membresiaLicencias',
        }


        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors({}) );

        // Lectura y parseo del body
        //this.app.use( express.json({ limit: '50mb' }) );
        this.app.use(bodyParser.json({ limit: '50mb' }));
        // Directorio Público
        this.app.use( express.static('public') );

        // Cargar archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));

        this.app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

    }

    routes() {
        
        this.app.use( this.paths.auth, require('../routes/auth'));
        this.app.use( this.paths.buscar, require('../routes/buscar'));
        this.app.use( this.paths.categorias, require('../routes/categorias'));
        this.app.use( this.paths.paises, require('../routes/paises'));
        this.app.use( this.paths.estados, require('../routes/estados'));
        this.app.use( this.paths.ciudades, require('../routes/ciudades'));
        this.app.use( this.paths.productos, require('../routes/productos'));
        this.app.use( this.paths.usuarios, require('../routes/usuarios'));
        this.app.use( this.paths.aliados, require('../routes/aliados'));
        this.app.use( this.paths.cargos, require('../routes/cargos'));
        this.app.use( this.paths.monedas, require('../routes/monedas'));
        this.app.use( this.paths.sucursales, require('../routes/sucursales'));
        this.app.use( this.paths.miembros, require('../routes/miembro'));
        this.app.use( this.paths.unidadesNegocios, require('../routes/unidadesNegocio'));
        this.app.use( this.paths.gastos, require('../routes/gastos'));
        this.app.use( this.paths.accionesPerfiles, require('../routes/accionesPerfiles'));
        this.app.use( this.paths.menu, require('../routes/menu'));
        this.app.use( this.paths.perfiles, require('../routes/perfiles'));
        this.app.use( this.paths.tasas, require('../routes/tasas'));
        this.app.use( this.paths.profesiones, require('../routes/profesiones'));
        this.app.use( this.paths.idiomas, require('../routes/idiomas'));
        this.app.use( this.paths.personal, require('../routes/personal'));
        this.app.use( this.paths.industrias, require('../routes/industrias'));
        this.app.use( this.paths.contactos, require('../routes/contactos'));
        this.app.use( this.paths.clientes, require('../routes/clientes'));
        this.app.use( this.paths.enfoques, require('../routes/enfoques'));
        this.app.use( this.paths.actividades, require('../routes/actividades'));
        this.app.use( this.paths.proyectos, require('../routes/proyectos'));
        this.app.use( this.paths.personasProyectos, require('../routes/personaProyecto'));
        this.app.use( this.paths.riesgos, require('../routes/riesgos'));
        this.app.use( this.paths.uploads, require('../routes/uploads'));
        this.app.use( this.paths.emails, require('../routes/email'));
        this.app.use( this.paths.planes, require('../routes/planes'));
        this.app.use( this.paths.membresiaLicencias, require('../routes/membresiaLicencia'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
