<template>

    <div class="container">
        <div class="encabezado">
            <img src="../assets/Logo- Educacion.png" alt="Ministerio de educacion">
        </div>

        <nav>
            <ul>
                <li><router-link to="/">INICIO</router-link></li>
                <li><router-link to="/educacion/superior">EDUCACION SUPERIOR</router-link></li>
                <li><router-link to="/horarios">HORARIOS</router-link></li>
                <li><router-link to="/directorio">DIRECTORIO</router-link></li>
            </ul>
        </nav>
    </div>
    
</template>

<script>
export default {
  name: 'BarraMenu',
}
</script>

<style>

*{
    margin: 0;
    box-sizing: border-box;
}
.encabezado{
    background-color: #303845;
}
nav {
  background-color: #3d4654;
  padding: 0;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}


nav a {
  display: block;
  color: #ffffff;
  text-decoration: none;
  padding: 1.2rem 1.5rem;
  font-weight: 500;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

</style>

