<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
    <link rel="icon" type="image/x-icon" href="img/favicon.png">
    <link rel="stylesheet" href="css/index.css" />
    <title>Biblioteca Virtual</title>
</head>
    <body>
        <div class="container">
            <div class="forms-container">
                <div class="signin-signup">
                    <!-- FORM PARA INICIO DE SESION -->
                    <form action="#" class="sign-in-form">
                        <h2 class="title">Inicia Sesión</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" name="usuario" placeholder="Usuario" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" name="password" placeholder="Contraseña" />
                        </div>
                        <input type="submit" value="Entrar" class="btn solid" />
                    </form>

                    <!-- FORM PARA REGISTRO DE USUARIO -->
                    <form action="#" class="sign-up-form">
                        <h2 class="title">Registrate</h2>
                        <div class="input-field">
                            <i class="fas fa-pen"></i>
                            <input type="text" name="nombreCompleto" placeholder="Nombre Completo" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" name="usuario" placeholder="Usuario" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-envelope"></i>
                            <input type="email" name="correo" placeholder="Correo Electrónico" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" name="password" placeholder="Contraseña" />
                        </div>
                        <input type="submit" class="btn" value="Registrarse" />
                    </form>
                </div>
            </div>

            <div class="panels-container">
                <div class="panel left-panel">
                <div class="content">
                    <h3>¿No tienes cuenta?</h3>
                    <p>Create una cuenta para formar parte de nuestra familia y obtener distintos beneficios.</p>
                    <button class="btn transparent" id="sign-up-btn">
                    Registrarse
                    </button>
                </div>
                <img src="img/index/login.svg" class="image" alt="" />
                </div>
                <div class="panel right-panel">
                <div class="content">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>¿Ya eres parte de la familia? Entonces inicia sesión.</p>
                    <button class="btn transparent" id="sign-in-btn">
                    Iniciar Sesión
                    </button>
                </div>
                <img src="img/index/register.svg" class="image" alt="" />
                </div>
            </div>
        </div>

        <script src="js/app.js"></script>
    </body>
</html>