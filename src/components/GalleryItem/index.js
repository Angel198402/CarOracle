import "./style.scss";
export default function GalleryItem() {
  return (
    <div className="galleryitem">
      <div className="galleryitem-logo">
        <img src="../images/ourpick-img1.png" alt="ourpick" />
      </div>
      <div className="galleryitem-content">
        <p className="nunitosans b1 primarybluetext">
          Top 10 Tips for Extending Your Car's Lifespan: Keep It Running
          Smoothly
        </p>
      </div>
      <div className="galleryitem-body">
        <img src="../images/avatar.png" alt="user" />
        <p
          className="graycomplementarytext nunitosans"
          style={{ textTransform: "uppercase" }}
        >
          By Brett Nanigian
        </p>
      </div>
      <p
        className="galleryitem_detail blueaccenttext nunitosans"
        style={{ textAlign: "right", width: "100%" }}
      >
        Read more
      </p>
    </div>
  );
}
