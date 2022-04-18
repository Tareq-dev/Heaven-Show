import React from "react";

const Review = () => {
  return (
    <div style={{backgroundColor: '#a7f2fc'}} className="pb-5">
      <h2 className="text-center pt-4 mb-5">See Honest Reviews</h2>
      <div className="p-2 m-3">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4 border p-3 bg-white mt-2">
            <span className="fs-1 fw-bold">❝</span>
            <p>
              I found Raami Travel through a web search for tour guides in Riga
              and contacted several local guides regarding a full day (8 – 9
              hours) private tour for two. Liga from Raami Travel was quick to
              respond .
            </p>
            <div className="d-flex">
              <img
                style={{ borderRadius: "50%", width: "60px", height: "60px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpnI4A4Jwia-fP97dKcSkEtiDLfdCk7IHOE5CeKFIKWmGw3cqdqofBwh-Brs_I4AHJ0_k&usqp=CAU"
                alt=""
              />
              <div className="mx-3">
                <h4>Devid Colins</h4>
                <p>
                  <small>Norway, USA</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 border p-3 bg-white mt-2">
            <span className="fs-1 fw-bold">❝</span>
            <p>
              Excellent private tour. Our guide was incredibly knowledgable and
              gave us a fantastic day in Riga. We learnt about history, art,
              culture and much more. We are well traveled and have high
              standards, and we were very happy with our tour guide - she was
              great and spoke excellent English. Time and money well invested.
            </p>
            <div className="d-flex">
              <img
                style={{ borderRadius: "50%", width: "60px", height: "60px" }}
                src="https://akm-img-a-in.tosshub.com/indiatoday/styles/photo_slider_753x543/public/images/photogallery/201303/w-25powerful-women-mar-6_031313040148.jpg?AepWF.OYxaUH0haBaB0X4XFVzzsjcSAA"
                alt=""
              />
              <div className="mx-3">
                <h4>Tahmina keya</h4>
                <p>
                  <small>Delhi, India</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 border p-3 p-3 bg-white mt-2">
            <span className="fs-1 fw-bold">❝</span>
            <p>
              A fantastic tour. This tour won’t disappoint! We had a fantastic
              tour guide who was very knowledgeable. He gave us lots of
              historical and cultural information and was more than happy to
              answer questions.
            </p>
            <div className="d-flex">
              <img
                style={{ borderRadius: "50%", width: "60px", height: "60px" }}
                src="https://www.observerbd.com/2020/07/09/observerbd.com_1594312826.jpg"
                alt=""
              />
              <div className="mx-3">
                <h4>Enayet Ashik</h4>
                <p>
                  <small>Halishahar, BD</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
