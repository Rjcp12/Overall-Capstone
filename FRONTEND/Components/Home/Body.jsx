import React from 'react'

function Body() {
  return (
    <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://th.bing.com/th/id/R.d06b8fba3f9af316b95a5cd1d6de1da3?rik=p%2bv1LMJCGFC2Vg&riu=http%3a%2f%2fblog.gogo-vacations.com%2fwp-content%2fuploads%2f2016%2f03%2fAlSol-Luxury-Village_Collage.jpg&ehk=KhnC%2f4H07c%2fglRA%2fJc7us2dAcw5wywWAA%2fL%2fpqFEEPE%3d&risl=1&pid=ImgRaw&r=0" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
            <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Body