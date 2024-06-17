import PropTypes from 'prop-types';

function Header({ title = "My Blog" }) {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    { title }
                </span>
            </div>
        </nav>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;