import AppContainer from "../components/app-container";
import Search from "../components/search";

function Home() {
  return (
    <AppContainer>
      <Search />
      <style jsx>{`
        body {
          font-family: Helvetica, Arial, Verdana, sans-serif;
        }
      `}</style>
    </AppContainer>
  );
}

export default Home;
