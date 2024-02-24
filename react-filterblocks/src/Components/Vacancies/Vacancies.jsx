import style from "./style.module.scss";
import { Pagination } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import array from "../../Storage/Storage.json";
import { Link } from "react-router-dom";
function Vacancies() {
  return (
    <>
      <div className={style.vacancies}>
        <div className={style.list}>
          {array.map((el) => (
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
        <Pagination total={10} />
      </div>
    </>
  );
}

export default Vacancies;
