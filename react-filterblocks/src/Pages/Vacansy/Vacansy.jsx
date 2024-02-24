import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import array from "../../Storage/Storage.json";
import { IconMapPin } from "@tabler/icons-react";
import style from "./style.module.scss";

function Vacansy() {
  const [foundVacansy, setFoundVacansy] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const found = array.filter((el) => el.id == +id);
    setFoundVacansy(found[0]);
  }, []);

  return (
    <>
      <div className={style.header}>
        <h1>{foundVacansy?.title}</h1>
        <div className={style.flex}>
          <p>{foundVacansy?.salary}</p>
          <p>{foundVacansy?.time}</p>
        </div>
        <div className={style.flex}>
          <IconMapPin></IconMapPin>
          <p>{foundVacansy?.location}</p>
        </div>
      </div>

      <div className={style.content}>
        <h2>Обязанности:</h2>
        <ul>
          {foundVacansy.responsibilities?.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
        <h2>Требования:</h2>
        <ul>
          {foundVacansy.requirements?.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
        <h2>Условия:</h2>
        <ul>
          {foundVacansy.conditions?.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Vacansy;
