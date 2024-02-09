<template>
  <div class="container-fluid mt-4">
    <div id="Nueva Propiedad" class="card mt-4">
      <div class="card-header">
        <h5>Pico al Niko</h5>
      </div>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-4">
            <material-input
              id="Nombre"
              variant="static"
              label="Nombre"
              placeholder="Alec"
            />
          </div>
          <div class="col-4">
            <material-input
              id="apellidoPaterno"
              variant="static"
              label="Apellido Paterno"
              placeholder="Thompson"
            />
          </div>
          <div class="col-4">
            <material-input
              id="apellidoMaterno"
              variant="static"
              label="Apellido Materno"
              placeholder="Thompson"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8">
            <div class="col-sm-8">
              <div class="row">
                <div class="col-sm-5 col-5">
                  <label class="form-label mt-4 ms-0">Birth Date</label>
                  <select
                    id="choices-month"
                    class="form-control"
                    name="choices-month"
                  ></select>
                </div>
                <div class="col-sm-4 col-3">
                  <label class="form-label mt-4 ms-0">&nbsp;</label>
                  <select
                    id="choices-day"
                    class="form-control"
                    name="choices-day"
                  ></select>
                </div>
                <div class="col-sm-3 col-4">
                  <label class="form-label mt-4 ms-0">&nbsp;</label>
                  <select
                    id="choices-year"
                    class="form-control"
                    name="choices-year"
                  ></select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-6">
            <material-input
              id="email"
              type="email"
              variant="static"
              label="Email"
              placeholder="example@email.com"
            />
          </div>
          <div class="col-6">
            <material-input
              id="confirmEmail"
              type="email"
              variant="static"
              label="Confirm Email"
              placeholder="example@email.com"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-6">
            <material-input
              id="location"
              type="text"
              variant="static"
              label="Your Location"
              placeholder="Sydney, A"
            />
          </div>
          <div class="col-6">
            <material-input
              id="phoneNumber"
              type="phone"
              variant="static"
              label="Phone Number"
              placeholder="+40 745 765 439"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 align-self-center">
            <label class="form-label mt-4 ms-0">Language</label>
            <select
              id="choices-language"
              class="form-control"
              name="choices-language"
            >
              <option value="English">Pene</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label mt-4 ms-0">Skills</label>
            <input
              id="choices-skills"
              class="form-control"
              type="text"
              value="vuejs, angular, react"
              placeholder="Enter something"
              onfocus="focused(this)"
              onfocusout="defocused(this)"
            />
          </div>
          <div class="col-sm-3 col-4">
            <label class="form-label mt-4 ms-0">Tipo de propiedad</label>
            <select
              id="choices-gender"
              class="form-control"
              name="Tipo de Propiedad"
            >
              <option value="Casa">Casa</option>
              <option value="Edificio">Edificio</option>
              <option value="Sitio">Sitio</option>
              <option value="Bodega">Bodega</option>
              <option value="Departamento">Departamento</option>
              <option value="Parcela">Parcela</option>
            </select>
          </div>
        </div>
      <div class="row">
        <!--    Agregar imagenes-->
        <h5 class="font-weight-bolder">Media</h5>
        <div class="multisteps-form__content">
          <div class="mt-3 row">
            <div class="col-12">
              <label class="form-control mb-0">Product images</label>
              <div
                id="productImg"
                action="/file-upload"
                class="form-control border dropzone"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
      </div>
</template>


<script>
import * as Choices from 'choices.js'
import MaterialButton from '@/components/MaterialButton.vue'
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialBadge from '@/components/MaterialBadge.vue'
import MaterialAvatar from '@/components/MaterialAvatar.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import Dropzone from 'dropzone'

export default {
  name: 'AgregarPropiedad',
  components: {
    MaterialButton,
    MaterialSwitch,
    MaterialBadge,
    MaterialAvatar,
    MaterialInput
  },
  mounted() {
    let myDropzone = new Dropzone("#productImg");
    myDropzone.on("addedfile", (file) => {
      console.log(`File added: ${file.name}`);
    });

    if (document.getElementById('choices-gender')) {
      var gender = document.getElementById('choices-gender')
      new Choices(gender)
    }

    if (document.getElementById('choices-language')) {
      var language = document.getElementById('choices-language')
      new Choices(language)
    }

    if (document.getElementById('choices-month')) {
      var month = document.getElementById('choices-month')
      setTimeout(function() {
        new Choices(month)
      }, 1)

      // eslint-disable-next-line no-unused-vars
      var d = new Date()
      var monthArray = new Array()
      monthArray[0] = 'January'
      monthArray[1] = 'February'
      monthArray[2] = 'March'
      monthArray[3] = 'April'
      monthArray[4] = 'May'
      monthArray[5] = 'June'
      monthArray[6] = 'July'
      monthArray[7] = 'August'
      monthArray[8] = 'September'
      monthArray[9] = 'October'
      monthArray[10] = 'November'
      monthArray[11] = 'December'
      for (let m = 0; m <= 11; m++) {
        var optn = document.createElement('OPTION')
        optn.text = monthArray[m]
        // server side month start from one\
        optn.value = m + 1
        // if june selected
        if (m == 1) {
          optn.selected = true
        }
        month.options.add(optn)
      }
    }

    if (document.getElementById('choices-day')) {
      var day = document.getElementById('choices-day')
      setTimeout(function() {
        new Choices(day)
      }, 1)

      for (let y = 1; y <= 31; y++) {
        var optn1 = document.createElement('OPTION')
        optn1.text = y
        optn1.value = y

        if (y == 1) {
          optn1.selected = true
        }

        day.options.add(optn1)
      }
    }

    if (document.getElementById('choices-year')) {
      var year = document.getElementById('choices-year')
      setTimeout(function() {
        new Choices(year)
      }, 1)

      for (let y = 1900; y <= 2020; y++) {
        var optn2 = document.createElement('OPTION')
        optn2.text = y
        optn2.value = y

        if (y == 2020) {
          optn.selected = true
        }

        year.options.add(optn2)
      }
    }

    if (document.getElementById('choices-skills')) {
      var skills = document.getElementById('choices-skills')
      new Choices(skills, {
        delimiter: ',',
        editItems: true,
        maxItemCount: 5,
        removeItemButton: true,
        addItems: true
      })
    }
  }
}
</script>
