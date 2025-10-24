<template>

        <h1>Educación superior</h1>
        <h4>Documentos</h4>
        <table>
            <tr> 
                <td>
                <BsFillCloudArrowDownFill />

                    <p>
                        Fortalecimiento de capacidades para la implementación de la Educación Dual en las Instituciones de Educación Superior en El Salvador (DUALELS)
                    </p>
                </td>
                <td>
                    <BsFillCloudArrowDownFill />
                    <p>
                    Caracterización de la atención educativa de estudiantes con discapacidad en las Instituciones de Educación Superior-IES de El Salvador
                    </p>
                </td>
                <td>
                    <BsFillPeopleFill />
                    <p>
                    Publicaciones
                    </p>
                </td>
            </tr> 
            
            <tr> 
                <td>
                    
                    <AiOutlineBarChart />
                    <p>
                    Estadísticas de Educación Superior
                    </p>
                </td>
                <td>
                    <BsFillCloudArrowDownFill />
                    <p>
                    Becas y Financiamiento
                    </p>
                </td>
                <td>
                    <AiOutlineFileWord />
                    <p>
                    Solicitud para asignación de especialidad curricular a profesionales no docentes
                    </p>
                </td>
            </tr> 
        </table> 

        <hr>
        <hr>

        <table>
            <tr> 
                <td>
                    <img src="https://www.mined.gob.sv/images/carreras01.jpg" alt="Carreras">
                    <p>Carreras Autorizadas</p>
                </td>
                <td>
                    <img src="https://www.mined.gob.sv/images/universidad02.jpg" alt="Universidad">
                    <p>Instituciones Legalmente Establecidas</p>
                </td>
                <td>
                    <img src="https://www.mined.gob.sv/images/interes03.jpg" alt="Intereses">
                    <p>Enlaces de Interes</p>
                </td>
                <td>
                    <img src="https://www.mined.gob.sv/images/servicios04.jpg" alt="Servicios">
                    <p>Servicios</p>
                </td>
            </tr> 

        </table> 

</template>


<script setup>
import { BsFillCloudArrowDownFill, BsFillPeopleFill} from 'vue-icons-plus/bs'
import { AiOutlineFileWord, AiOutlineBarChart } from 'vue-icons-plus/ai'




</script>


<style>
h1{
    margin-top: 20px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 30px;
    font-size: 2.5em;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    padding-bottom: 15px;
}

h4{
    color: white;
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 15px;
}

td {
    background-color: #3a4250;
    color: white;
    padding: 25px 20px;
    text-align: center;
    border-radius: 12px;
    font-size: 1.1em;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

img{
    border-radius: 50%;
}

hr{
    width: 75%;
    height: 1.5px;
    margin: 20px auto;
    background-color: #3a4250;
    border: none; 
}

</style>




