import Form from "./pages/form";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="main-container">
        <div className="inner-container">
          <div className="partial-container-1">
            {/* <Particle/> */}
            <div className="container-1-image">
              <img src="" alt="form-control-image" />
            </div>
          </div>
          <div className="partial-container-2">
            <div className="form-heading">
              <p>Registration Info</p>
            </div>
            <div className="form-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
