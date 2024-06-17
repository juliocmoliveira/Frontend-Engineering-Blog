import PropTypes from 'prop-types';

function Footer({ text = '© 2024 FIAP, Inc' }) {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-muted"> { text } </span>
            </div>
        </footer>
    )
}
Footer.propTypes = {
    text: PropTypes.string.isRequired
};

export default Footer;