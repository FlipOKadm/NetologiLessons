import PropTypes from 'prop-types';
import { getDateDiffDays, getDateDiffInMinutes, getDateDiffInHours } from './functions';
function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

DateTime.propTypes = {
  date: PropTypes.string.isRequired
}

const DateTimePrettyComponent = (WrappedComponent) => {
  return function DateTimePrettyComponent(props) {
    const minuts = getDateDiffInMinutes(props.date);
    const hours = getDateDiffInHours(props.date);
    const days = getDateDiffDays(props.date);
    console.log(minuts, hours, days);
    const formattedDate = (minuts<60) ? minuts + ' минут назад' :  hours < 24 ? hours + ' часа назад' : days + ' дней назад';
    return <WrappedComponent {...props} date={formattedDate} />;
  };
};
const DateTimePretty = DateTimePrettyComponent(DateTime);


function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

function VideoList(props) {
    /**
     * Помню что index использовать в роли ключа плохо.
     */
    return props.list.map((item, index) => <Video key={index} url={item.url} date={item.date} />);
}

export default function App() {
    const videos = [
        {
            url: 'https://www.youtube.com/embed/Etsa5LSuWSk?si=SeLfSAYHLOYHK05O&amp;controls=0',
            date: '2024-03-23 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&controls=0&showinfo=0',
            date: '2024-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&controls=0&showinfo=0',
            date: '2024-03-23 19:02:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&controls=0&showinfo=0',
            date: '2024-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&controls=0&showinfo=0',
            date: '2024-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&controls=0&showinfo=0',
            date: '2024-01-23 05:24:00'
        },
    ];

    return (
        <VideoList list={videos} />
    );
}
