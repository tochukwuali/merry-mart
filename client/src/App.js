import { Container } from "react-bootstrap";
import {Route} from "react-router-dom"
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path="/product/:id" exact component={ProductScreen}/>
          <Route path="/cart/:id?" component={CartScreen}/>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
