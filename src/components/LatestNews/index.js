import "./style.scss";
export default function LatestNews() {
  return (
    <div className="latestnews">
      <img src="../images/latestnews-img1.png" alt="news" />
      <div className="reviewcard-right">
        <div>
          <p className="nunitosans b1 primarybluetext">
            Top 10 Tips for Extending Your Car's Lifespan: Keep It Running
            Smoothly
          </p>
        </div>
        <p
          className="graycomplementarytext nunitosans"
          style={{ textTransform: "uppercase" }}
        >
          By Brett Nanigian
        </p>
      </div>
    </div>
  );
}
