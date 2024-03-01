import style from "./style.module.scss";
import { Pagination } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import array from "../../Storage/Storage.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Vacancies() {
  const [currentPage, setCurrentPage] = useState(1);
  const [foundVacancyPage] = useState(3);

  const lastVacansy = currentPage * foundVacancyPage;
  const firstVacancy = lastVacansy - foundVacancyPage;
  const currentVacancy = array.slice(firstVacancy, lastVacansy);

  return (
    <>
      <div className={style.vacancies}>
        <div className={style.list}>
          {currentVacancy.map((el) => (
            <Link to={`/${el.id}`}>
              <div key={el.id} className={style.content}>
                <h1>{el.title}</h1>
                <div className={style.text}>
                  <p>{el.salary}</p>
                  <div className={style.dot}>•</div>
                  <p>{el.time}</p>
                </div>
                <div className={style.flexLocation}>
                  <IconMapPin></IconMapPin>
                  <p>{el.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Pagination
          total={Math.ceil(array.length / currentPage)}
          onChange={setCurrentPage}
          mt="sm"
        />
      </div>
    </>
  );
}

export default Vacancies;
