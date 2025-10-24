<template>
  <div class="horario-page">
    <!-- Header
    <header class="header">
      <div class="header-top">
        <div class="left-section">
          <a href="#" class="instituciones">
            <i class="fas fa-building"></i> INSTITUCIONES
          </a>
          <a href="#" class="transparencia">
            <i class="fas fa-search"></i> Portal de Transparencia
          </a>
          <a href="#" class="casos">
            Gestión de casos antisoborno
          </a>
        </div>

        <div class="center-section">
          <img src="../assets/Logo- Educacion.png" alt="Logo Ministerio" class="logo">
          <div class="ministry-text">
            <div>MINISTERIO</div>
            <div>DE EDUCACIÓN</div>
          </div>
        </div>

        <div class="right-section">
          <div class="search-box">
            <input type="text" placeholder="Buscar aquí..">
            <button><i class="fas fa-search"></i></button>
          </div>
          <a href="#" class="avisos-btn">
            <i class="fas fa-exclamation-triangle"></i> Avisos y Denuncias
          </a>
          <div class="language">
            <span>EN</span>
            <span class="active">ES</span>
          </div>
        </div>
      </div>

     
      <nav class="main-nav">
        <ul>
          <li><a href="#">INICIO</a></li>
          <li><a href="#">SERVICIOS</a></li>
          <li><a href="#">NUESTRO TRABAJO</a></li>
          <li><a href="#">INSTITUCIÓN</a></li>
          <li><a href="#">CONTÁCTENOS</a></li>
          <li><a href="#">ORGANISMOS INTERNACIONALES</a></li>
        </ul>
      </nav>
    </header> -->

    <div class="hero-section">
      <div class="hero-content">
        <div class="title-container">
          <div class="triangle-down"></div>
          <h1>HORARIOS DE<br>ATENCIÓN</h1>
        </div>
      </div>
    </div>


    <div class="breadcrumb">
      <span>Inicio > Horarios de atención</span>
    </div>


    <div class="blue-background">
      <div class="schedule-content">
        <h2>Horarios de atención</h2>
        <p class="subtitle"><strong>Nuestros horarios de atención:</strong></p>
        <p class="hours">De Lunes a Viernes de 7:30 a.m. a 3:30 p.m.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorarioView'
}
</script>

<style scoped>
.horario-page {
  font-family: Arial, sans-serif;
  min-height: 100vh;
}

.header {
  background-color: #2c3e50;
  color: white;
}

.header-top {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
}

.left-section a {
  color: white;
  text-decoration: none;
  margin-right: 1.5rem;
  font-size: 0.9rem;
}

.center-section {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  width: auto;
  margin-right: 1rem;
}

.ministry-text {
  font-size: 1.2rem;
  font-weight: bold;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-box {
  display: flex;
  background: #fff;
  border-radius: 4px;
  padding: 0.3rem;
}

.search-box input {
  border: none;
  padding: 0.3rem;
  outline: none;
}

.search-box button {
  background: none;
  border: none;
  cursor: pointer;
}

.avisos-btn {
  background: #0066cc;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
}

.language span {
  margin: 0 0.3rem;
  cursor: pointer;
}

.language .active {
  font-weight: bold;
}

.main-nav {
  background: #1a2634;
  padding: 1rem 0;
}

.main-nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.main-nav a {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
}

.hero-section {
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), #2c3e50;
  background-size: cover;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-content {
  color: white;
  text-align: center;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.triangle-down {
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-top: 40px solid #ffd700;
  flex-shrink: 0;
}

h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0;
  text-align: left;
}

.breadcrumb {
  background: #f5f5f5;
  padding: 1rem 2rem;
  color: #666;
  font-size: 0.9rem;
}

.blue-background {
  background-color: #2c3440;
  color: white;
  text-align: center;
  padding: 4rem 1rem;
}

.schedule-content {
  margin-bottom: 3rem;
}

.schedule-content h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.schedule-content .subtitle {
  font-size: 1rem;
  margin: 0;
  color: #ffffffcc;
}

.schedule-content .hours {
  font-size: 1rem;
  margin-top: 0.3rem;
  color: #fff;
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.link-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-item i {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: white;
}

.link-item span {
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
}

.link-item:hover {
  transform: translateY(-3px);
  color: #e0e0e0;
}


@media (max-width: 768px) {
  .title-container {
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    text-align: center;
  }

  .footer-links {
    gap: 2rem;
  }

  .header-top {
    flex-direction: column;
    gap: 1rem;
  }

  .schedule-card {
    padding: 2rem 1.5rem;
  }

  .blue-background {
    padding: 2rem 0;
  }
}
</style>
