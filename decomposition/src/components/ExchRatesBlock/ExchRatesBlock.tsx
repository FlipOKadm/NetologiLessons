import ExchRates from "./ExchRates/ExchRates";

/**
 * 
 * @param {array} DataRates Массив объектов с курсами валют.
 * Возвращает список курс валют.
 * Список состоит из первых трех записей. При желании можно перейти на страницу с полным списком
 * нажав на ...
 */

export default function ExchRatesBlock() {
    return(
        <>
        <ExchRates/>
        </>
    )
}