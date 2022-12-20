# Miguel Mateos Portfolio

## Como usar

### Instalar dependencias

```bash
npm install
```

### Iniciar servidor de desarrollo

```bash
npm run dev
```
### Subir a git

```bash
git add .
git commit -m "Mensaje"
git push
```

#### Para subir a git
- Necesitas tener instalado git en tu ordenador
- si tienes mac, entras en la terminal y escribes git, automaticamente te preguntara si quieres instalar xcode no se que pues lo instalas y ya esta
- cuando hagas push te pedira usuario y contraseña,
- el usuario es el tuyo
- la contraseña tienes que ir a tu cuenta de github
  - Icono arriba a la derecha
  - Settings
  - Developer settings (Sidebar izquierdo)
  - Personal access tokens
  - Creas token clasico con los permisos que quieras (en principio los que vienen por defecto creo que son suficientes, si no todo lo que sea write y read)
  - pones ese token en donde el password de la terminal


## Sitios para modificar la pagina

- Archivo Case studies para los projects (tu local)
- Archivo Footer para el footer (tu local)
- Stack para los logos de las tecnologias (en db pones el nombre de la tecnologia y lo pones en true -- teck_stack)
- Section para exp laboral (en la bd tienes las columnas para poner los datos -- la tabla es work)
- Studies para certificaciones y referencias (bd igual que Section -- la tabla se llama cert_ref)