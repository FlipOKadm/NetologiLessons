export function Calendar(props) {
    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let weekDay = days[props.date.getDay()];
    let monthName = props.date.toLocaleString('ru-Ru', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).split(' ');
    return (
        <>{monthName}</>
    )
}