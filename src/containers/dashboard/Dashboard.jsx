import React from "react";
import DashboardImage from "../../assets/images/dashboard-hero.png";
import Hero from "../../components/pagehero/Hero";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function Dashboard() {
  const labels = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Homeless people",
        data: [
          0, 1000, 2000, 3000, 4000, 4500, 5000, 6000, 6000, 6000, 7000, 8000,
          9999,
        ],
        borderColor: "#ebd2b4",
        backgroundColor: "#67beb0",
      },
    ],
  };

  return (
    <>
      <Hero color="#ebd2b4" imageUrl={DashboardImage}>
        <h1 className="mb-1">Our reports</h1>
      </Hero>
      <section className="section-pad dashboard-stats">
        <div className="container">
          <h1 className="text-center mb-5">Our impact</h1>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-6 mb-4 text-center">
              <GiForkKnifeSpoon className="green-color text-center mb-3" />
              <h1 className="mb-1">12890</h1>
              <p>Meals Served this year</p>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-4 text-center">
              <SlCalender className="green-color text-center mb-3" />
              <h1 className="mb-1">46</h1>
              <p>Events held this year</p>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-4 text-center">
              <AiOutlineHome className="green-color text-center mb-3" />
              <h1 className="mb-1">107</h1>
              <p>New home provieded this year</p>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-4 text-center">
              <BsPeople className="green-color text-center mb-3" />
              <h1 className="mb-1">315</h1>
              <p>New volunteer registered</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad grey-background dashboard-chart">
        <div className="container">
          <h1 className="mb-5 text-center">
            Number of unsheltered homeless by years
          </h1>
          <div className="chart-box">
            <Line options={options} data={data} />
          </div>
        </div>
      </section>
    </>
  );
}
