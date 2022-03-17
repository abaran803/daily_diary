import './App.css';
import AllCards from "./components/AllCards";
import CustomForm from "./components/CustomForm";
import {Alert, Container} from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";
import {useEffect, useState} from "react";
import {getAllPost} from "./api/Api";

function App() {

    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('danger');

    const [posts, setPosts] = useState();

    useEffect(() => {
        getAllPost((data) => {
            setPosts(data);
        })
    }, [])

    const handleAddition = (alertType) => {
        getAllPost((data) => {
            setPosts(data);
        })
        setAlertType(() => alertType);
        setShowAlert(true);
    }

    return (
        <Container fluid className='bg bg-light'>
            <Alert show={showAlert} onClose={() => setShowAlert(false)} className='position-fixed'
                   style={{zIndex: '2', width: '95%', margin: 'auto', top: '55px', left: '2.5%'}}
                   variant={alertType} dismissible>
                {alertType === 'success' ? 'Congratulations!!! Post added successfully.' : 'Oh! Some error occurred, please try again!!!'}
            </Alert>
            <CustomNavbar/>
            <div className='d-flex flex-md-row flex-sm-column-reverse flex-xs-column-reverse'
                 style={{paddingTop: '70px'}}>
                <AllCards posts={posts} />
                <CustomForm handleAddition={handleAddition}/>
            </div>
        </Container>
    );
}

export default App;
