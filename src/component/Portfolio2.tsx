import React from 'react'

export default function Portfolio2() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การจัดกิจกรรมเพื่อการพัฒนาองค์การภาครัฐ
              {/* <small>Subheading</small> */}
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">หน้าหลัก</a>
              </li>
              <li className="breadcrumb-item active">การจัดกิจกรรมเพื่อการพัฒนาองค์การภาครัฐ
</li>
            </ol>
          </div>
          <div className="row">
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Morbi eu nulla ac mauris euismod aliquet.</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Morbi eu nulla ac mauris euismod aliquet.</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit aliquam aperiam nulla perferendis dolor nobis numquam,
                    rem expedita, aliquid optio, alias illum eaque. Non magni,
                    voluptates quae, necessitatibus unde temporibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Morbi eu nulla ac mauris euismod aliquet.</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Morbi eu nulla ac mauris euismod aliquet.</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit aliquam aperiam nulla perferendis dolor nobis numquam,
                    rem expedita, aliquid optio, alias illum eaque. Non magni,
                    voluptates quae, necessitatibus unde temporibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Morbi eu nulla ac mauris euismod aliquet.</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Morbi eu nulla ac mauris euismod aliquet.</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit aliquam aperiam nulla perferendis dolor nobis numquam,
                    rem expedita, aliquid optio, alias illum eaque. Non magni,
                    voluptates quae, necessitatibus unde temporibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
      </div>
  )
}
