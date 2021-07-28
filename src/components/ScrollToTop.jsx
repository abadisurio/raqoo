import { useEffect } from 'react'
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history }) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, (window.innerWidth < 768) ? window.innerHeight-50 : 0);
            });
            return () => {
            unlisten();
        }
    }, [history]);
    
    return (null);
}

export default withRouter(ScrollToTop);
