<?php
    if(!empty($_POST['buscar'])){
        if(empty($_POST['buscar_l'])){
            // echo "<script>alert('Hola')</script>";
            // header("Location: prueba.html");
        }else{
            $buscarL = $conn->real_escape_string($_POST['buscar_l']);

            $consulta = "SELECT * FROM libros WHERE titulo = '$buscarL' OR autor = '$buscarL'";
            $libroEncontrado = mysqli_query($conn, $consulta);

            while($row = mysqli_fetch_array($libroEncontrado)){
                
                header("Location: bookDetails.php?libro=$row[iD]");
            }


        }
    }
    
    
?>