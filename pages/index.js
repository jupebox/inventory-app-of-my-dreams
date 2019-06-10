import AppContainer from "../components/app-container";
import Search from "../components/search";
import OrderSummary from "../components/order-summary";

function Home() {
  return (
    <AppContainer>
      <OrderSummary />
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
