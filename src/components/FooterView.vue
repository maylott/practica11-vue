<template>
    <div>
        <div class="footer-links">
        <div class="link-item">
          <i class="fas fa-chart-line"></i>
          <span>Estadísticas Educativas</span>
        </div>
        <div class="link-item">
          <i class="fas fa-cloud-download-alt"></i>
          <span>Descargas</span>
        </div>
        <div class="link-item">
          <i class="fas fa-question-circle"></i>
          <span>Preguntas Frecuentes</span>
        </div>
        <div class="link-item">
          <i class="fas fa-users"></i>
          <span>Programas</span>
        </div>
        <div class="link-item">
          <i class="fas fa-bell"></i>
          <span>Avisos</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  background: #2c3e50;
}

.link-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 8px;
  min-width: 140px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }

  i {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    color: #3498db;
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.3;
  }
}

/* Versión con fondo claro */
.footer-links.light {
  background: #f8f9fa;
  
  .link-item {
    color: #2c3e50;
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
    
    i {
      color: #0066cc;
    }
  }
}

/* Versión con fondo azul intermedio */
.footer-links.blue {
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  
  .link-item {
    i {
      color: #ffd700;
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
}

/* Responsive */
@media (max-width: 768px) {
  .footer-links {
    gap: 1.5rem;
    padding: 2rem 1rem;
  }

  .link-item {
    min-width: 120px;
    padding: 0.8rem;
    
    i {
      font-size: 1.5rem;
    }
    
    span {
      font-size: 0.8rem;
    }
  }
}

@media (max-width: 480px) {
  .footer-links {
    flex-direction: column;
    gap: 1rem;
  }

  .link-item {
    flex-direction: row;
    gap: 1rem;
    min-width: auto;
    width: 100%;
    max-width: 250px;
    
    i {
      margin-bottom: 0;
      font-size: 1.3rem;
    }
  }
}

</style>
