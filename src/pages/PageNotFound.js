import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import pagenotfound from '../assets/images/pagenotfound.png'
export const PageNotFound = () => {
  useTitle("Page Not Found");
  
  return (
    <section className="pageNotFound">
      <p>404 / Page Not Found</p>
      <img src={pagenotfound} alt="Page Not Found" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  )
}
