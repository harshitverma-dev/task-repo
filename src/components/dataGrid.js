import React, { useContext, useState } from 'react'
import { Alert, Card, Form, Table } from 'react-bootstrap'
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { UserInfoContext } from '../context/context';
import { deleteUser } from '../store/actions/userActions';
import DeleteConfirmation from './DeleteConfirmation';

const DataGrid = () => {
    const dispatch = useDispatch()
    const listUserData = useSelector((state) => state.userReducers.allUserData);
    const { userProfile } = useContext(UserInfoContext)
    const [show, setShow] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [id, setId] = useState(null);
    const [userName, setUserName] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const searchHandle = (e) => {
        setSearchQuery(e.target.value)
    }
    // console.log(searchQuery.length >= 3 ? "yes" : 'no')
    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id))
        setShow(false)
    }

    const showDeleteModal = (id, name) => {
        setId(id)
        setShow(true)
        setUserName(name)
    }

    return (
        <>
            <Card className='shadow p-3 mt-5'>
                <div className='info-msg'>
                    <Alert variant="info" className='pb-0 mb-2' onClose={() => setShow(false)} dismissible>
                        <p>
                            Please Enter 3 letter for the search, Enter first letter capital if name starts with capital letter !
                        </p>
                    </Alert>
                </div>
                <div className='w-25 search-container'>
                    <Form>
                        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" value={searchQuery} className='text' placeholder="Search by name" onChange={searchHandle} />
                        </Form.Group>
                    </Form>
                </div>
                <Table responsive bordered hover>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Job Tile</th>
                            <th>User Role</th>
                            <th>Email</th>
                            <th>Confirm Password</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listUserData?.filter((item) => {
                                if (searchQuery.length >= 3) {
                                    return item?.data?.fullName.includes(searchQuery);
                                } else {
                                    return listUserData
                                }
                            }
                            ).map((items, index) => {
                                {/* console.log(items.id) */}
                                return (
                                    <tr key={index}>
                                        <td>{items?.data?.fullName ?? "-"}</td>
                                        <td>{items?.data?.jobTitle ?? "-"}</td>
                                        <td>{items?.data?.userRole ?? "-"}</td>
                                        <td>{items?.data?.email ?? "-"}</td>
                                        <td>{items?.data?.confirmPassword ?? "-"}</td>
                                        <td>{items?.data?.password ?? "-"}</td>
                                        <td>
                                            {/* <span className='edit-user me-3'><AiOutlineEdit size={20} /></span> */}
                                            <span className='delete-user' onClick={() => showDeleteModal(items?.id, items?.data?.fullName)}><AiOutlineDelete size={20} /></span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Card>
            <DeleteConfirmation showModal={show} confirmModal={handleDeleteUser} hideModal={handleClose} id={id} userName={userName}/>
        </>
    )
}

export default DataGrid
