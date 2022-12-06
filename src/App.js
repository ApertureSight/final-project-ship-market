import "./styles.css";
import Helmet from "react-helmet";
import Ships from "./Components/Ship";

import Slider from "./Components/Slider";

export default function App() {
  return (
    <>
      <Slider />

      <div className="App">
        <Helmet>
          <style>{"body { background-color: #cdd6f7; }"}</style>
        </Helmet>
        <div className="header"></div>

        <Grid container>
          <Grid>
            <div className="cards">
              <Ships />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
