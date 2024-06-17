import PropTypes from 'prop-types';

function Card({ title, text, link = "#", linkText = "Ver post" }) {
    return (
        <div className="card">
        <div className="card-body">
            <h3 className="card-title"> { title } </h3>
            <p className="card-text"> { text } </p>
            <a href={ link } className="btn btn-primary"> { linkText } </a>
        </div>
    </div>
    );
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
};

export default Card;