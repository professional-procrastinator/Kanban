import type { NextPage } from 'next';
import Header from '../components/Header';
import Kanban from '../components/Kanban';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import SidebarLinks from '../components/SidebarLinks';
import Statusbar from '../components/StatusBar';
import { styled } from '../stitches.config';

const FlexColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  padding: '0px',
  margin: '0px',
});

const Home: NextPage = () => {
  return (
    <Layout>
      <Sidebar />
      <SidebarLinks />
      <FlexColumn>
        <Header />
        <Statusbar />
        <Kanban />
      </FlexColumn>
    </Layout>
  );
};

export default Home;
