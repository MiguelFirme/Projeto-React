import { useState } from "react";

export default function UseStateComponent() {
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);

    const incraseValue1 = () => setValue1(value1 + 1);
    const decraseValue1 = () => setValue1(value1 - 1);

    const incraseValue2 = () => setValue2(value2 + 1);
    const decraseValue2= () => setValue2(value2 - 1);

    return (
        <>
            <hr />
            <p>Exercicio 01 useState</p>
            <p>{value1}</p>
            <button onClick = {decraseValue1}>-</button>
            <button onClick = {incraseValue1}>+</button>
            <hr />
            <p>{value2}</p>
            <button onClick = {decraseValue2}>-</button>
            <button onClick = {incraseValue2}>+</button>
            <p>Resultado: {value1} * {value2} = {value1 * value2}</p>
        </>
    )
}
