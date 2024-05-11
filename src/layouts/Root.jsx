import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import bg from '../assets/bg-main.png';

const Root = () => {
  return (
    <div
      className='font-workSans '
      // style={{
      //   // background: 'linear-gradient(62deg, #E0F9ED 0%, #DCEEF7 100%)',
      //   background: `URL(${bg})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      <div className='container mx-auto'>
        <NavBar></NavBar>
        <div className='min-h-[calc(100vh-329px)]'>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Root;
