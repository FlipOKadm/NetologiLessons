export function Header(props) {
    return (
        <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day"></div>
            <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">{props.date}</div>
                <div className="ui-datepicker-material-month">Марта</div>
                <div className="ui-datepicker-material-year">2024</div>
            </div>
        </div>
    )
}