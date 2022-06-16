import { Fragment } from "react";
import Form from "./components/Form";

const App = () => {
    return (
        <Fragment>

          <p1 className="credits">Created by Matt Carlson</p1>
          <h1 className='title'>🖥️ QR Code Generator 🖥️</h1>
          <h3 className='description'>
            This is a QR Code Generator that I made using
            the <a href='https://reactjs.org'>React Framework</a> for the Harvard class <a href='https://cs50.harvard.edu'>CS50</a>, which
            I took online through <a href='https://www.edx.org/'>edX</a>. To generate a QR Code, enter a URL into the text box below and a QR code will generate instantly!
            This also works for just raw text if you want to fit a small message into a QR Code.
          </h3>
          <Form />

        </Fragment>
    );
}

export default App;
