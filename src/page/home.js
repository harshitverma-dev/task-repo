import React, { useContext} from 'react'
import { Button, Container, Modal} from 'react-bootstrap';
import UserForm from '../components/UserForm';
import DataGrid from '../components/dataGrid';
import { UserInfoContext } from '../context/context';

const Home = () => {
    const { showUserModel, setShowUserModel } = useContext(UserInfoContext)
    const handleClose = () => setShowUserModel(false);
    const handleShow = () => setShowUserModel(true);
    const { submitAddUserData} = useContext(UserInfoContext);
    return (
        <Container fluid>
            <div className='p-4 main-section'>
                <div className='home-page-title d-flex justify-content-between'>
                    <h4 className='text-uppercase'>User List</h4>
                    <Button className='border-0' variant="primary" onClick={handleShow}>
                        Add User
                    </Button>
                    <Modal size="lg" show={showUserModel} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <UserForm />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={submitAddUserData} className='save-user border-0'>
                                Save User
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Cannel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <DataGrid />
            </div>
        </Container>

    )
}

export default Home
