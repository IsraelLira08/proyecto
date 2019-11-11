// PUERTO
process.env.PORT = process.env.PORT || 3000;
// conexion a base de datos
let urlDB;
if (process.env.NODE_ENV === "dev") {
    urlDB = "mongodb://localhost:27017//cafeteria";
} else { 
    urlDB='mongodb+srv://isla:israeldelira@cluster0-bhukx.azure.mongodb.net/cafeteria';
}
process.env.URLlDB=urlDB;