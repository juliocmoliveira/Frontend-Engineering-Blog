import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

function Layout({ children }) {
    return (
        <>
            <Header/>
                { children }
            <Footer/>
        </>
    );
}
Layout.propTypes = {
    children: PropTypes.string.isRequired
};

export default Layout;