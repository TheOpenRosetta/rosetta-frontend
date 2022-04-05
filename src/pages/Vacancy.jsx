import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Components/Nav/Nav.jsx";
import Footer from "../Components/Footer/Footer";

import vacancies from "../vacancies";

const Vacancy = () => {
  let { role } = useParams();

  const data = vacancies[role];

  const paragraph = (text) => (
    <p className="vacancy__p" key={text}>
      {text}
    </p>
  );
  const listLinks = (arr) => (
    <ul className="vacancy__ul">
      {arr.map((item) => (
        <li className="vacancy__li" key={item.text}>
          <a href={item.link} className="vacancy__a">
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
  const list = (arr) => (
    <ul className="vacancy__ul">
      {arr.map((item) => (
        <li className="vacancy__li" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <main>
      <Nav></Nav>
      <div className="vacancy">
        <div className="vacancy__intro">
          <div className="container">
            <div className="vacancy__title">{data.title}</div>
          </div>
        </div>
        <div className="vacancy__content">
          <div className="container">
            {data.p && (
              <div className="vacancy__group">
                <h3 className="vacancy__subtitle">Who Is Rosetta?</h3>
                {data.p.map((el) =>
                  Array.isArray(el) ? listLinks(el) : paragraph(el)
                )}
              </div>
            )}

            {data.who && (
              <div className="vacancy__group">
                <h3 className="vacancy__subtitle">Who You Are:</h3>
                {list(data.who)}
              </div>
            )}

            {data.do && (
              <div className="vacancy__group">
                <h3 className="vacancy__subtitle">What You’ll Do:</h3>
                {list(data.do)}
              </div>
            )}

            {data.have && (
              <div className="vacancy__group">
                <h3 className="vacancy__subtitle">What You Have:</h3>
                {list(data.have)}
              </div>
            )}

            {data.get && (
              <div className="vacancy__group">
                <h3 className="vacancy__subtitle">What You’ll Get:</h3>
                {list(data.get)}
              </div>
            )}

            <div className="vacancy__group">
              <a
                type="link"
                href={`mailto:anthony.geo.ryan@gmail.com?Subject=Rosetta%20careers:%20${encodeURI(
                  data.title
                )}`}
                rel="noreferrer"
                target="_blank"
                className="btn btn__primary vacancy__btn"
              >
                Apply for this job
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Vacancy;
