import style from "./style.module.scss";
import { Pagination } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";

function Vacancies() {
  const array = [
    {
      id: 1,
      title: "Менеджер-дизайнер",
      salary: "з/п от 70000 rub",
      time: "Полный рабочий день",
      location: "Новый Уренгой",
    },
    {
      id: 2,
      title: "Ведущий графический дизайнер НЕ УДАЛЕННО",
      salary: "з/п от 80000 rub",
      time: "Полный рабочий день",
      location: "Москва",
    },
    {
      id: 3,
      title: "Работник декорации, дизайнер (ТЦ Амбар)",
      salary: "з/п 29000 rub",
      time: "Сменный график работы",
      location: "Самара",
    },
    {
      id: 4,
      title: "Менеджер-дизайнер",
      salary: "з/п 55000 - 95000 rub",
      time: "Полный рабочий день",
      location: "з/п 55000 - 95000 rub",
    },
  ];
  return (
    <>
      <div className={style.vacancies}>
        <div className={style.list}>
          {array.map((el) => (
            <div className={style.content}>
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
          ))}
        </div>
        <Pagination total={10} />
      </div>
    </>
  );
}

export default Vacancies;
