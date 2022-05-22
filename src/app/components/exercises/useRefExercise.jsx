import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const [blockName, setBlockName] = useState("Блок");
    const blockRef = useRef();
    const handleClickWidth = () => {
        blockRef.current.style.width = "80px";
        blockRef.current.style.height = "150px";
        setBlockName("text");
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>{blockName}</small>
            </div>
            <button
                className="btn btn-secondary m-1"
                onClick={handleClickWidth}
            >
                Применить новые параметры
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
