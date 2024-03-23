import Tabs from "../../Tabs/Tabs";
import ListNews from "../ListNews/ListNews";

/**
 * Возвращает список новостей.
 * Содержит в себе два компонента:
 * 1. Табы.
 * 2. Список новостей.
 */

export default function NewsBlock() {
    return (
        <>
            <Tabs />
            <ListNews/>            
        </>
    )
}