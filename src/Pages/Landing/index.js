import ResourceCard from "../../components/ResourceCard";
import CarCare from "../../components/CarCare";
import ReviewCard from "../../components/ReviewCard";
import "./style.scss";
export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-section1 primaryblue">
        <div className="landing-section1-title">
          <h1 className="whitebackgroundtext robotoslab">
            Your Comprehensive Automotive Resource
          </h1>
          <p className="subtitle whitebackgroundtext robotoslab">
            Empowering You with Reliable Car Facts and Insights to Make Informed
            Decisions
          </p>
        </div>
        <div className="landing-section1-body">
          <div className="landing-section1-body-level">
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
          </div>
          <div className="landing-section1-body-level">
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
          </div>
        </div>
      </div>
      <div className="landing-section2 lightbluecomplementary">
        <div className="landing-section2-main">
          <h2 className="primarybluetext robotoslab">Our picks by category</h2>
          <div className="landing-section2-main-content">
            <div className="landing-section2-main-content-left">
              <img src="../images/car-img1.png" alt="car" />
            </div>
            <div className="landing-section2-main-content-right">
              <CarCare />
              <CarCare />
              <CarCare />
            </div>
          </div>
        </div>
      </div>
      <div className="landing-section3 whitebackground">
        <div className="landing-section3-main">
          <h2 className="primarybluetext robotoslab">
            Latest news and reviews
          </h2>
          <div className="landing-section3-main-content">
            <div className="landing-section3-main-content-level">
              <ReviewCard />
              <ReviewCard />
            </div>
            <div className="landing-section3-main-content-level">
              <ReviewCard />
              <ReviewCard />
            </div>
            <div className="landing-section3-main-content-level">
              <ReviewCard />
              <ReviewCard />
            </div>
            <div className="landing-section3-main-content-level">
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
