import Footer from 'src/components/footer';
import Profile from 'src/components/profile';
import Skills from 'src/components/skills';
import Tasks from 'src/components/tasks/tasks';

const MainPage = () => {
  return (
    <>
      <Profile />
      <Skills />
      <Tasks />
      <Footer />
    </>
  );
};

export default MainPage;
