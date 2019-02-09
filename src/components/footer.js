import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">PixaBay Image Finder</h5>
            <p>
             This simple web app is developed by HW & PSN (The HW-Faction)
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contact</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Github</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Gmail</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Address</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> The HW-Faction </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
