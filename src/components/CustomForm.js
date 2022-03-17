import {Button, Container, Form} from "react-bootstrap";
import {useFormik} from "formik";
import {addPost} from "../api/Api";

const CustomForm = props => {

    const formik = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        onSubmit: values => {
            addPost({'title': formik.values.title, 'description': formik.values.description}, (data) => {
                console.log('Data:', data);
                if(data) {
                    props.handleAddition('success');
                } else {
                    props.handleAddition('danger');
                }
            })
            formik.resetForm();
        },
    });

    return (
        <Container fluid className='w-25 bg bg-primary bg-opacity-50 position-sticky border rounded py-4 px-3 h-100'
                   style={{top: '70px'}}>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' onChange={formik.handleChange} value={formik.values.title} placeholder="Enter Title"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name='description' onChange={formik.handleChange} value={formik.values.description} rows={5} placeholder='Enter Description' style={{resize: 'none'}}/>
                </Form.Group>
                <Button type='submit' variant="primary">Submit</Button>
            </Form>
        </Container>
    )
}

export default CustomForm;