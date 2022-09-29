import type { NextPage } from 'next';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import SidebarLinks from '../components/SidebarLinks';

const Home: NextPage = () => {
  return (
    <Layout>
      <Sidebar />
      <SidebarLinks />
      <Header />
    </Layout>
  );
};

export default Home;
