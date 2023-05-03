import LatestNews from "../../components/LatestNews";
import GalleryItem from "../../components/GalleryItem";
import FAQquestion from "../../components/FAQquestion";
import "./style.scss";
export default function VehiclePurchasing() {
  return (
    <div className="vehiclepurchasing">
      <div className="vehiclepurchasing-section1">
        <div className="vehiclepurchasing-section1-filter1" />
        <div className="vehiclepurchasing-section1-filter2" />
        <h1 className="whitebackgroundtext robotoslab">Vehicle purchasing</h1>
        <p className="subtitle whitebackgroundtext robotoslab">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </p>
      </div>
      <div className="vehiclepurchasing-section2 whitebackground">
        <div className="vehiclepurchasing-section2-main">
          <h2 className="primarybluetext robotoslab">
            Our picks for: Purchasing
          </h2>
          <div className="vehiclepurchasing-section2-main-gallerygroup">
            <div className="vehiclepurchasing-section2-main-gallerygroup-level">
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
            </div>
            <div className="vehiclepurchasing-section2-main-gallerygroup-level">
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
            </div>
          </div>
        </div>
      </div>
      <div className="vehiclepurchasing-section3 whitebackground">
        <div className="vehiclepurchasing-section3-main">
          <h2 className="primarybluetext robotoslab">
            Stay up to date with the latest news
          </h2>
          <div className="vehiclepurchasing-section3-main-content">
            <div className="vehiclepurchasing-section3-main-content-left">
              <img src="../images/car-img2.png" alt="car" />
            </div>
            <div className="vehiclepurchasing-section3-main-content-right">
              <LatestNews />
              <LatestNews />
              <LatestNews />
            </div>
          </div>
        </div>
      </div>
      <div className="vehiclepurchasing-section4 lightbluecomplementary">
        <div className="vehiclepurchasing-section4-main">
          <h2 className="primarybluetext robotoslab">
            Vehicle Purchasing FAQs
          </h2>
          <div className="vehiclepurchasing-section4-main-faqs">
            <FAQquestion />
            <FAQquestion />
            <FAQquestion />
            <FAQquestion />
            <FAQquestion />
          </div>
        </div>
      </div>
    </div>
  );
}
