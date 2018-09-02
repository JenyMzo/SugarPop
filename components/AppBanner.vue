<template>
  <section id='banner-area' class='banner-area relative'>
    <div class='overlay overlay-bg'>
    <div class='hero-wrap d-flex align-items-center justify-content-center'>
      <div class='video-wrap'>
        <video muted='' autoplay='' loop='' poster='' class='ng-star-inserted' style=''>
          <source type='video/mp4' :src="require('~/assets/cover.mp4')">
          <!-- <source type='video/webm' src='https://staging.coverr.co/s3/webm/Breakfest.webm'> -->
        </video>
      </div>
    </div>
    </div>
    <div class='container'>
      <div class='row fullscreen d-flex justify-content-center align-items-center'>
        <div class='banner-content col-lg-10 col-md-12 justify-content-center'>
          <img :src="require('~/assets/img/SugarPop.png')" alt=''>
          <h1>
            Haz esos momentos inolvidables...
          </h1>
          <p class='text-white mx-auto'>
            Amor hecho por ti para las personas que quieres 💗
          </p>
          <a href='#' class='primary-btn squire text-uppercase mt-10' v-scroll-to="'#about-area'">Ver más</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-wrap{
    width: 100%;
    height: 100vh;
    position: relative;
}
.video-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
video{
  width: 100%;
  height: 100%;
  z-index: -100;
  -o-object-fit: cover;
  object-fit: cover;
  right: 0;
  bottom: 0;
  background-size: cover;
  overflow: hidden;
}
.banner-content > img{
  width:250px;
}
</style>
