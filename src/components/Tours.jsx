import React from "react";
import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  return (
    <section class="section" id="tours">
      <Title title="featured" subTitle="tour" />
      <div class="section-center featured-center">
        {tours.map((tour) => {
          const { id, image, date, info, text, country, days, cost } = tour;
          return (
            <article class="tour-card" key={id}>
              <div class="tour-img-container">
                <img src={image} class="tour-img" alt="" />
                <p class="tour-date">{date}</p>
              </div>
              <div class="tour-info">
                <div class="tour-title">
                  <h4>{info}</h4>
                </div>
                <p>{text}</p>
                <div class="tour-footer">
                  <p>
                    <span>
                      <i class="fas fa-map"></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{days} days</p>
                  <p>from ${cost}</p>
                </div>
              </div>
            </article>
          );
        })}

        {/* <article class="tour-card">
          <div class="tour-img-container">
            <img src="./images/tour-2.jpeg" class="tour-img" alt="" />
            <p class="tour-date">october 1th, 2020</p>
          </div>
          <div class="tour-info">
            <h4>best of java</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div class="tour-footer">
              <p>
                <span>
                  <i class="fas fa-map"></i>
                </span>{" "}
                indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article class="tour-card">
          <div class="tour-img-container">
            <img src="./images/tour-3.jpeg" class="tour-img" alt="" />
            <p class="tour-date">september 15th, 2020</p>
          </div>
          <div class="tour-info">
            <h4>explore hong kong</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div class="tour-footer">
              <p>
                <span>
                  <i class="fas fa-map"></i>
                </span>{" "}
                hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article class="tour-card">
          <div class="tour-img-container">
            <img src="./images/tour-4.jpeg" class="tour-img" alt="" />
            <p class="tour-date">december 5th, 2019</p>
          </div>
          <div class="tour-info">
            <h4>kenya highlights</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div class="tour-footer">
              <p>
                <span>
                  <i class="fas fa-map"></i>
                </span>{" "}
                kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Tours;
