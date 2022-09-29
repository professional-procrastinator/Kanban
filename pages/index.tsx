import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import SidebarLinks from '../components/SidebarLinks';

const Home: NextPage = () => {
  return (
    <Layout>
      <Sidebar />
      <SidebarLinks />
    </Layout>
  );
};

export default Home;
