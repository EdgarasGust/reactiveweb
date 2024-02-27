import useResize from "../hooks/useResize";
import ControlledAccordion from "../ui/ControlledAccordion";
import { services } from "../data/serviceData";
import { timeLineData } from "../data/timeLineData";
import BackgroundImage from "../ui/BackgroundImage";
import InfoTimeline from "../ui/InfoTimeline";
import { SERVICE_BG_IMAGE, SERVICE_BG_IMAGE_MOBILE } from "../utils/constants";
import { Helmet } from "react-helmet-async";

function Services() {
  const isMobile = useResize();
  const bgImage = isMobile ? SERVICE_BG_IMAGE_MOBILE : SERVICE_BG_IMAGE;

  return (
    <>
      <Helmet>
        <title>What I bring to the table</title>
        <meta
          name="description"
          content="Check out the goods! Dive into the juicy details of what I offer and how I make magic happen."
        />
      </Helmet>
      <BackgroundImage imageUrl={bgImage} />
      <section className="container mx-auto mt-16 max-w-7xl">
        <div className="mb-8 ">
          <h3 className="mb-4 text-center text-3xl sm:text-4xl">What I do?</h3>
        </div>
        <div className="mx-auto mb-16 max-w-[800px]">
          <ControlledAccordion dataArray={services} />
        </div>
        <div className="mb-4 border-b">
          <h3 className="mb-4 text-center text-2xl sm:text-4xl">
            Standard Work Process
          </h3>
        </div>
        <InfoTimeline data={timeLineData} />
      </section>
    </>
  );
}

export default Services;
