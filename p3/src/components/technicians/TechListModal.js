import React, { useState, useEffect } from 'react';
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techList, setTechList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechList();
    // eslint-disable-next-line
  }, []);

  const getTechList = async () => {
    setLoading(true);
    const
      res = await fetch('/techs'),
      data = await res.json(); // When using FETCH you must use this to return a json formatted response (unlike axios)

    console.log('Data is: ', data);
    setTechList(data);
    setLoading(false);
  };

  return (
    <div id={"tech-list-modal"} className={"modal"}>
      <div className={"modal-content"}>
        <h4>Technician List</h4>
        <ul className={"collection"}>
          {!loading && techList.map(technician => <TechItem technician={technician} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;