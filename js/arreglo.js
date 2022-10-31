var indiceInstructorSeleccionada = null;

var classroom = [
    {
        instructor: {
            nombre:"Goku",
            correo: "goku@gmail.com",
            imagen: "goku.jpg",
        },
        clases: [
            {
                nombreClase: "Desarrollo web",
                codigo: "asdasd",
                seccion: "1300",
                descripcion: "Probar habilidades",
                aula: "078",
            },
        ],
    },

    {
        instructor: {
            nombre:"Vegeta",
            correo: "vegeta@gmail.com",
            imagen: "vegeta.jpg",
        },
        clases: [
            {
                nombreClase: "POO",
                codigo: "qweqwe",
                seccion: "1500",
                descripcion: "Practicar",
                aula: "078",
            },
            {
                nombreClase: "Economia",
                codigo: "qweqwe2",
                seccion: "1600",
                descripcion: "Practicar2",
                aula: "078",
            },
            {
                nombreClase: "Redes",
                codigo: "qweqwe3",
                seccion: "2000",
                descripcion: "Practicar3",
                aula: "078",
            }
        ],
    },

    {
        instructor: {
            nombre:"Patricio",
            correo: "patricio@gmail.com",
            imagen: "patricio.jpg",
        },
        clases: [
            {
                nombreClase: "Inteligencia Artificial",
                codigo: "zxczxczxc",
                seccion: "1700",
                descripcion: "Clase del futuro",
                aula: "078",
            },
            {
                nombreClase: "Sistemas expertos",
                codigo: "zxczxczxc2",
                seccion: "1800",
                descripcion: "Clase del futuro2",
                aula: "078",
            },
            {
                nombreClase: "Computacion cuántica",
                codigo: "zxczxczx3",
                seccion: "1900",
                descripcion: "Clase del futuro3",
                aula: "078",
            },
            {
                nombreClase: "Coompiladores",
                codigo: "zxczxczx4",
                seccion: "2100",
                descripcion: "Clase del futuro4",
                aula: "078",
            }
        ],
    },
]

//Uso de LocalStorage
var localStorage = window.localStorage;
if (localStorage.getItem('classroom') == null) {
    localStorage.setItem('classroom', JSON.stringify(classroom));; //De JSON a cadena// //Guardamos el listado de las aplicaciones por primera vez
}else{
    classroom = JSON.parse(localStorage.getItem('classroom')); //De cadena a JSON //Si hay algun elemento en localStorage que se llama aplicaciones, rescatamos el valor y lo almacenamos en el listado de aplicaciones.
}

//Empezar con 0
document.getElementById('profilePic').innerHTML = `<img id="imgInstructor" src="img/home/profile-pics/defaultProfilePic.png" alt="" srcset=""></img>`;

function obtenerInstructores() {
    document.getElementById('dropMenu').innerHTML = '';
    var texto = '';
    
    for (let i = 0; i < classroom.length; i++) {
        const element = classroom[i].instructor.nombre;

        //console.log(element);
        document.getElementById('dropMenu').innerHTML += `
        <div class="instructor row" style="display: flex;" onclick="obtenerClases(${i})">
            <span class="dropdown-item infoInstructor col-1"><img id="imgInstructor" src="img/home/profile-pics/${classroom[i].instructor.imagen}" alt="" srcset=""></span>
            <div class="infoInstructor col-11">
                <h5 style="margin-left: 10px; margin-bottom: 0px; font-family: bold; font-size: 15px;">${classroom[i].instructor.nombre}</h5>
                <small class = "text-muted" style="margin-left: 10px;">${classroom[i].instructor.correo}</small>
            </div>
        </div>
        ${texto}
        `;
    }
    //Otra Info para Dropdown
    document.getElementById('dropMenu').innerHTML += `
    <div class="instructor row" style="display: flex;">
        <span class="dropdown-item infoInstructor"style ="display:flex; margin: 5px 0px 0px 13px;" id = "addUser">
            <i class="fas fa-gear"></i>
            <h5 style="margin-bottom: 0px; font-family: bold; font-size: 15px; margin-left: 18px;"> Configuracion</h5>
        </span>
        <span class="dropdown-item infoInstructor"style ="display:flex; margin: 5px 0px 0px 13px;" id = "addUser">
            <i class="fas fa-right-from-bracket"></i>
            <h5 style="margin-bottom: 0px; font-family: bold; font-size: 15px; margin-left: 18px;"> Cerrar Sesion</h5>
        </span>
    </div>
    `;
    }

function obtenerClases(indice) {
    //console.log("Entro a funcion", indice);

    indiceInstructorSeleccionada = indice;
    document.getElementById('tarjetasClases').innerHTML = '';
    document.getElementById('profilePic').innerHTML = `<img id="imgInstructor" src="img/home/profile-pics/${classroom[indice].instructor.imagen}" alt="" srcset=""></img>`;
    document.getElementById('clasesSideBar').innerHTML = `
        <a href="#">Clases</a>`;

    for (let i = 0; i < classroom[indice].clases.length; i++) {
        var element = classroom[indice].clases;
        let random = Math.floor(Math.random() * (20 - 1) + 1);

        let r = Math.floor(Math.random() * (255 - 0) + 0);
        let g = Math.floor(Math.random() * (255 - 0) + 0);
        let b = Math.floor(Math.random() * (255 - 0) + 0);

        let nImagen = "img"+ random+".jpg";
        //console.log(nImagen);
        
        document.getElementById('clasesSideBar').innerHTML += `
            <div class="todasClasesAba" style="display: inline-block;">
                    <a href="#" class="menuArribaClases" style="display: flex; padding: 5px; justify-content: center; align-items: center;"><span class="infoInstructor col-1"><i class="rightBarIcons" style="margin-top: -12px; background-color: rgb(${r},${g},${b}); color: white; font-family: bold;">${element[i].nombreClase.charAt(0)}</i></span>
                        <div class="infoInstructor col-11" style="margin: 0px 0px 0px 25px; margin-top: -10px;">
                            <h6 style="margin-left: 10px; margin-bottom: 0px; font-family: Roboto, sans-serif;
                            font-weight: 700; font-size: 0.9rem;">${element[i].nombreClase}</h6>
                            <small class = "text-muted" style="margin-left: 10px; font-family: Roboto, sans-serif;">${element[i].seccion}</small>
                        </div>
                    </a>
                
            </div>
        `;

        
        document.getElementById('tarjetasClases').innerHTML += `
        <div class="tarjeta">
			<div class="cabecera" style="background: url(img/home/classes-background/${nImagen});background-repeat: no-repeat;-webkit-background-size: cover;background-size: cover;">
			</div>
            
			<div class="medio">				
                <a class="parte1" href="">
                    <div class="titulo">${element[i].seccion} - ${element[i].nombreClase}</div>	
                </a>
			</div>
		</div>
        `;
    }
}


function crearClase() {
    const clase = {
        nombreClase: document.getElementById('nombreClase').value,
        codigo: document.getElementById('codigo').value,
        seccion: document.getElementById('seccion').value,
        descripcion: document.getElementById('descripcion').value,
        aula: document.getElementById('aula').value,
    }

    //console.log(clase);
    classroom[indiceInstructorSeleccionada].clases.push(clase);
    //console.log(classroom);   
    localStorage.setItem('classroom', JSON.stringify(classroom));    
    obtenerClases(indiceInstructorSeleccionada); 
    vaciarCampos();
    $('#modalAddClass').modal('hide');
}

function vaciarCampos() {
    console.log("Vacio");
    document.getElementById('nombreClase').value = '';
    document.getElementById('codigo').value = '';
    document.getElementById('seccion').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('aula').value = '';
}

obtenerClases(0);