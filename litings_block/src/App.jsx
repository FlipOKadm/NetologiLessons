
import PropTypes from 'prop-types';

function New({ children }) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {children}
        </div>
    );
}

New.propTypes = {
    children: PropTypes.node.isRequired,
};

function Popular({ children }) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {children}
        </div>
    );
}

Popular.propTypes = {
    children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react/display-name
const withPopularOrNew = (WrappedComponent) => (props) => (
    props.views > 100 ? <Popular><WrappedComponent {...props} /></Popular> : <New><WrappedComponent {...props} /></New>
)

function Article({ title, views }) {
    return (
        <div className="item item-article">
            <h3><a href="#">{title}</a></h3>
            <p className="views">Прочтений: {views.toLocaleString('ru')}</p>
        </div>
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
};

function Video({ url, views: viewsCount }) {
    return (
        <div className="item item-video">
            <iframe src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className="views">Просмотров: {viewsCount.toLocaleString('ru')}</p>
        </div>
    )
}

Video.propTypes = {
    url: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
}

const VideoWithPopularOrNew = withPopularOrNew(Video);
const ArticleWithPopularOrNew = withPopularOrNew(Article);

function List({ list }) {
    return list.map(item => {
        const ItemComponent = item.type === 'video' ? VideoWithPopularOrNew : ArticleWithPopularOrNew;
        return <ItemComponent {...item} key={item.type + item.url} />;
    });
}

export default function App() {
    const list = [
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&controls=0&showinfo=0',
            views: 50
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&controls=0&showinfo=0',
            views: 12
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            views: 175
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            views: 1532
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&controls=0&showinfo=0',
            views: 4253
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ];

    return (
        <List list={list} />
    );
}

