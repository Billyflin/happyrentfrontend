<template>
<!--  <div class="bg-dark vh-100 d-flex justify-content-center align-items-center">-->
<!--    <div class="container d-flex justify-content-center">-->
<!--      <div class="card p-2">-->
<!--        <div class="p-info px-3 py-3">-->
<!--          <div><h5 class="mb-0">Beats By Dre</h5> <span>Professional Headphones</span></div>-->
<!--          <div class="p-price d-flex flex-row"><span>$</span>-->
<!--            <h1>299</h1></div>-->
<!--          <div class="heart"><i class="bx bx-heart"></i></div>-->
<!--        </div>-->
<!--        <div class="text-center p-image"><img src="https://i.imgur.com/hpftqCo.png"></div>-->
<!--        <div class="p-about"><p>It is a long established fact that a reader will be distracted by the readable content-->
<!--          of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal-->
<!--          distribution of letters, as opposed</p></div>-->
<!--        <div class="buttons d-flex flex-row gap-3 px-3">-->
<!--          <button class="btn btn-danger w-100">View</button>-->
<!--          <button class="btn btn-outline-danger w-100">Buy Now</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->



  <div class="height d-flex justify-content-center align-items-center">

    <div class="card p-3">

      <div class="d-flex justify-content-between align-items-center ">
        <div class="mt-2">
          <h4 class="text-uppercase">Ikea</h4>
          <div class="mt-5">
            <h5 class="text-uppercase mb-0">Blanda Matt</h5>
            <h1 class="main-heading mt-0">VASE</h1>
            <div class="d-flex flex-row user-ratings">
              <div class="ratings">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <h6 class="text-muted ml-1">4/5</h6>
            </div>
          </div>
        </div>
        <div class="image">
          <img src="https://i.imgur.com/MGorDUi.png" width="200">
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
        <span>Available colors</span>
        <div class="colors">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>


      <p>A great option weather you are at office or at home. </p>

      <button class="btn btn-danger">Add to cart</button>
    </div>

  </div>
  <div class="card col-md-5">
    <div class="row g-0 position-relative">
      <div class="col-12 col-md-5 mb-md-0 p-md-4">
        <div id="carouselBasicExample" class="carousel slide " data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselBasicExample" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselBasicExample" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselBasicExample" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="imageSrc" class="d-block w-100 rounded" alt="frog" />
            </div>
            <div class="carousel-item">
              <img :src="imageSrc" class="d-block w-100 rounded" alt="frog" />
            </div>
            <div class="carousel-item">
              <img :src="imageSrc" class="d-block w-100 rounded" alt="frog" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselBasicExample"
                  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselBasicExample"
                  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <!--    <img :src="imageSrc"  class="img-fluid  rounded " alt="Card image">-->
      </div>
      <div class="col-12 col-md-7 p-4 ps-md-0">
        <h5 class="mt-0">Columns with stretched link</h5>
        <p>
          Another instance of placeholder content for this other custom component.
          It is intended to mimic what some real-world content would look like,
          and we're using it here to give the component a bit of body and size.
        </p>
        <a>Go somewhere</a>

      </div>
    </div>
  </div>
</template>

<script>
import imagePath from '@/assets/img/kal-visuals-square.jpg' // Importar la imagen
import wavesignin from '@/assets/img/illustrations/wave-sign-in.svg'

export default {
  name: 'Prueba',
  data() {
    return {
      imageSrc: imagePath, // Asignar la imagen importada
      wavesignin: wavesignin
    }
  }
}
</script>

