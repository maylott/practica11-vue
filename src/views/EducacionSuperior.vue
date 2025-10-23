<template>

    <div class="containers">
        <h1>Educación superior</h1>
        <h4>Documentos</h4>
        <table>
            <tr> 
                <td>Fortalecimiento de capacidades para la implementación de la Educación Dual en las Instituciones de Educación Superior en El Salvador (DUALELS)</td>
                <td>Caracterización de la atención educativa de estudiantes con discapacidad en las Instituciones de Educación Superior-IES de El Salvador</td>
                <td>Publicaciones</td>
            </tr> 
            
            <tr> 
                <td>Estadísticas de Educación Superior</td>
                <td>Becas y Financiamiento</td>
                <td>Solicitud para asignación de especialidad curricular a profesionales no docentes</td>
            </tr> 
        </table> 
    </div>

</template>

<script>
export default{
    name: 'EducacionSuperior',
}
</script>


<style>
h1{
    margin-top: 20px;
}


.containers {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    width: 100%;
}

h1 {
    text-align: center;
    color: #333A48;
    margin-bottom: 30px;
    font-size: 2.5em;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    padding-bottom: 15px;
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 15px;
}

td {
    background-color: #333A48;            
    color: white;
    padding: 25px 20px;
    text-align: center;
    border-radius: 12px;
    font-size: 1.1em;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    position: relative;
    overflow: hidden;
}

</style>




