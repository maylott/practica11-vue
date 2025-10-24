<template>
    
<div class="parent footer-links">

    <div class="div2 link-item">
      <BsGraphUp />
      <span>Estadísticas Educativas</span>
    </div>
    <div class="div3 link-item">
      <AiOutlineCloudDownload />
      <span>Descargas</span>
    </div>
    <div class="div4 link-item">
      <AiOutlineQuestionCircle />          
      <span>Preguntas Frecuentes</span>
    </div>
    <div class="div5 link-item">
      <BsPeople />
      <span>Programas</span>
    </div>
    <div class="div6 link-item">
      <AiOutlineNotification />
      <span>Avisos</span>
    </div>
</div>


<div class="parent2">
    <div class="div1_2"><IoLocationOutline /></div>
    <div class="div2_2"><BsTelephone /></div>
    <div class="div3_2"><AiOutlineMail /></div>
    <div class="div4_2">
      <p>Ministerio de Educación, Ciencia y Tecnología
      Alameda Juan Pablo II y calle Guadalupe , edificios A, San Salvador, El Salvador, Centro América
      </p><br><br>
    </div>
    <div class="div5_2">
      <p>Conmutador Edificios A1 y A2 <br>+(503) 2592-2000, 2592-2122</p><br>
      <p>Conmutador Edificios A3 y A4 <br>2592-3117</p><br>
      <p>Unidad de Acceso a la Información Pública <br>2281-0274, 2222-2043, 2222-2008</p><br>
      <p>Quejas, avisos o denuncias: <br>2592-2009</p><br><br>
    </div>
    <div class="div6_2">educacion@mined.gob.sv</div>
    <div class="div7_2">
     <img src="https://www.presidencia.gob.sv/wp-content/uploads/2019/06/LogoPagina_Mesa-de-trabajo-1.png" class="logo">
    </div>
    <div class="div8_2">
      <br>
      <p>Horario de atención <br>Lunes a Viernes de 7:30 a.m. a 3:30 p.m.</p><br><br>
      <p>Únete a nuestra comunidad</p>
    </div>
    <div class="div10_2">
      <p>
        Mapa del Sitio <br> <br>
        Politica Web <br> <br>
        Preguntas Frecuentes <br> <br>
        Carta de Derecho <br> <br>
        Avisos y Denuncias <br> <br>
      </p>
    </div>
</div>
    
    
</template>

<script setup>
//Importacion de iconos
import {BsGraphUp, BsPeople, BsTelephone } from 'vue-icons-plus/bs'
import { AiOutlineCloudDownload, AiOutlineQuestionCircle, AiOutlineNotification, AiOutlineMail  } from 'vue-icons-plus/ai'
import {IoLocationOutline} from 'vue-icons-plus/io'




</script>

<style scoped>
.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
  margin: 20px auto 0;
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

  span {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    line-height: 1.5;
    padding: 5px;
  }
}

.logo{
  border-radius: 0%;
  width: 200px;
  text-align: center;
}


/**TABLA 1 */
.parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 5px;
    background-color:  #282e38;;
}

.div2 {
    grid-row-start: 2;
}

.div3 {
    grid-row-start: 2;
}

.div4 {
    grid-row-start: 2;
}

.div5 {
    grid-row-start: 2;
}

.div6 {
    grid-row-start: 2;
}
    
/**TABLA 2 */


.parent2 {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, 0.3fr);
    color: rgba(255, 255, 255, 0.605);
    align-items: center;
    background-color: #3d4654;

}



.div1_2 {
    grid-column-start: 1;
    grid-row-start: 1;
    text-align: end;
    margin-right: 15px;
}    

.div2_2 {
    grid-column-start: 1;
    grid-row-start: 2;
    text-align: end;
    margin-right: 15px;
}

.div3_2 {
    grid-column-start: 1;
    grid-row-start: 3;
    text-align: end;
    margin-right: 15px;
    margin-top: 15px;

}

.div4_2 {
    grid-column: span 3 / span 3;
    grid-column-start: 2;
    grid-row-start: 1;
    text-align: start;
    width: fit-content;
    justify-content: left;
    
}

.div5_2 {
    grid-column: span 3 / span 3;
    grid-column-start: 2;
    grid-row-start: 2;
    text-align: start;
    justify-content: left;
}

.div6_2 {
    grid-column: span 3 / span 3;
    grid-column-start: 2;
    grid-row-start: 3;
    text-align: start;
    justify-content: left;
    margin-top: 15px;

}


.div7_2 {
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
    grid-column-start: 5;
    grid-row-start: 1;
    text-align: center;
}

.div8_2 {
    grid-column: span 3 / span 3;
    grid-column-start: 8;
    grid-row-start: 1;
    text-align: center;

}


.div10_2 {
    grid-column: span 3 / span 3;
    grid-row: span 2 / span 2;
    grid-column-start: 8;
    grid-row-start: 2;
    text-align: end;
    margin: 55px 35px 0 0;
}
        

</style>
