import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div className=''>
      
      <Navbar/>
      <Hero/>
      <BlogList/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
