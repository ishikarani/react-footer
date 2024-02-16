
  import { Component } from 'react';
  import React from 'react';
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
  import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
  import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
  import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
  import './index.css'

  class Footer extends Component {
    render() {
      return (
          <MDBFooter  className='text-center text-lg-start text-white'>
    
          <section className='footer-background'>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 startup-card'>
                  <h6 className='text-capitalize fw-bold mb-4 fs-3 mt-4'>
                     <i className="bi bi-person-fill"></i> Startup
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                  </p>
                  
                  <MDBRow className='pt-4'>
                    <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                      <MDBInput type='text' id='form5Example2' contrast />
                    </MDBCol>

                    <MDBCol >
                      <MDBBtn className='text-capitalize customize-btn' color='dark'>Sign Up</MDBBtn>
                    </MDBCol>
                  </MDBRow>
          
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-capitalize fs-5 mt-4 fw-bold mb-4 customize-text'>Get In Touch</h6>
                  <p>
                    <MDBIcon className="me-1" />
                    <i className="bi bi-geo-alt customize-icon-color me-1"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon className="me-1" />
                    <i class="bi bi-envelope-open customize-icon-color me-1" ></i> info@example.com
                  </p>
                  <p>
                   <i class="bi bi-telephone customize-icon-color me-1"></i><MDBIcon className="me-1" /> + 01 234 567 88
                  </p>
                  <MDBContainer className='pt-4' >
                      <section className='mb-4'>
                         <MDBBtn className='me-3' style={{ backgroundColor: '#55acee' }}> <i className="bi bi-twitter" ></i> </MDBBtn>
                         <MDBBtn className='me-3' style={{ backgroundColor: '#55acee' }}> <i class="bi bi-facebook"></i> </MDBBtn>
                         <MDBBtn className='me-3' style={{ backgroundColor: '#55acee' }}> <i class="bi bi-linkedin"></i> </MDBBtn>
                         <MDBBtn className='me-3' style={{ backgroundColor: '#55acee' }}> <i class="bi bi-instagram"></i> </MDBBtn>
                      </section>
  
                  </MDBContainer>
                </MDBCol>
    
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 style text-reset'>
                  <h6 className='text-capitalize fs-5 mt-4 fw-bold mb-4 customize-text'>Quick Links</h6>
                  <p >
                    <a href='#!' className='text-reset mt-2'>
                      Home
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      About Us
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Our Services
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Meet The Team
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Latest Blog
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Contact Us
                    </a>
                  </p>
                 
                </MDBCol>
    
                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 style text-reset'>
                  <h6 className='text-capitalize mt-4 fs-5 fw-bold mb-4 customize-text'>Popular links</h6>
                  <p>
                    <a href='#!' className='text-reset mt-2'>
                     Home
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      About us
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Our Services
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Meet The Team
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Latest Blog
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Contact Us
                    </a>
                  </p>
                </MDBCol>
    
              </MDBRow>
            </MDBContainer>
          </section>
    
          <div className='text-center p-4 custom-bg '>
            <p className="custom-para">
              © <a className='custom-theme1'>Your Site Name</a>. All Rights Reserved. Designed by <a className='custom-theme1'>HTML Codex</a> Distributed By: <a className='custom-theme2'>ThemeWagon</a>
            </p>
            
          </div>
        </MDBFooter>
      );
    }
  }

  export default Footer;
