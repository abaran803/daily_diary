import './App.css';
import AllCards from "./components/AllCards";
import CustomForm from "./components/CustomForm";
import {Alert, Container} from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";
import {useState} from "react";

function App() {

    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('error');

    return (
        <Container fluid className='bg bg-light'>
            {showAlert && (
                    <Alert className='position-fixed'
                           style={{zIndex: '2', width: '95%', margin: 'auto', top: '55px', left: '2.5%'}}
                           variant={alertType}>
                        Congratulations!!! Post added successfully.
                    </Alert>
                )
            }
            <CustomNavbar/>
            <div className='d-flex flex-md-row flex-sm-column-reverse flex-xs-column-reverse'
                 style={{paddingTop: '70px'}}>
                <AllCards/>
                <CustomForm setShowAlert={setShowAlert} setAlertType={setAlertType}/>
            </div>
        </Container>
    );
}

export default App;
