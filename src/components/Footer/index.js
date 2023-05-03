import "./style.scss";
export default function Footer() {
  return (
    <div className="footer primaryblue">
      <div className="footer-header">
        <img src="../images/footer-logo.png" alt="footer-logo" />
        <p className="robotoslab">CarOracle</p>
      </div>
      <div className="footer-body">
        <div className="footer-body-logotext">
          <p className="nunitosans">
            Our mission is to serve as a comprehensive and robust source of
            vehicle information, designed to empower all car owners.
          </p>
        </div>
        <div className="footer-body-imagegroup">
          <img src="../images/facebook.png" alt="facebook" />
          <img src="../images/twitter.png" alt="twitter" />
          <img src="../images/instagram.png" alt="instagram" />
        </div>
      </div>
      <div className="footer-footer nunitosans">
        <p className="footer-footer-copyright">
          ©2023 CarOracle. All rights reserved
        </p>
        <div className="footer-footer-rules">
          <p>Privacy & Policy</p>
          <p>Term & Condition</p>
        </div>
      </div>
    </div>
  );
}
