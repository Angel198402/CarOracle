import "./style.scss";
export default function CarCare() {
  return (
    <div className="carcare">
      <div className="carcare-left">
        <p className="secondarybluetext bodycard nunitosans">CAR CARE</p>
        <div>
          <p className="primarybluetext b1 nunitosans">
            The Ultimate Guide to Washing and Detailing Your Car Like a Pro
          </p>
        </div>
        <p className="primarybluetext bodycard nunitosans">8 MIN READ</p>
      </div>
      <img
        className="carcare-right"
        src="../images/carcare-detail.png"
        alt="show detail"
      />
    </div>
  );
}
