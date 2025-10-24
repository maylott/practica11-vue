<template>
    <div>
        <div class="footer-links">
        <div class="link-item">
          <span>Estadísticas Educativas</span>
        </div>
        <div class="link-item">
          <AiOutlineCloudDownload />
          <span>Descargas</span>
        </div>
        <div class="link-item">
          <AiOutlineQuestionCircle />          
          <span>Preguntas Frecuentes</span>
        </div>
        <div class="link-item">
          <IoPeopleOutline />
          <span>Programas</span>
        </div>
        <div class="link-item">
          <span>Avisos</span>
        </div>
      </div>
    </div>
</template>

<script setup>
import { AiOutlineCloudDownload, AiOutlineQuestionCircle, IoPeopleOutline } from 'vue-icons-plus/ai'



</script>

<style scoped>
.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 1rem;
  background-color: #3d4654;
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

</style>
