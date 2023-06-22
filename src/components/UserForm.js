import React, { useContext, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { UserInfoContext } from '../context/context'

const UserForm = () => {
    const { userInfo, setUserInfo, userProfile, setUserProfile, onChangeFun, setProfile, errors } = useContext(UserInfoContext);
    console.log(errors)
    return (
        <Form className='user-form'>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" value={userInfo.fullName} name="fullName" placeholder="Enter full name" onChange={onChangeFun} />
                        {(errors.fullName && !userInfo.fullName.length > 0) && <div className='err-msg rounded mt-2 px-2'>{errors.fullName}</div>}
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formJobTitle">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type="text" value={userInfo.jobTitle} name="jobTitle" placeholder="Enter job title" onChange={onChangeFun} />
                        {(errors.jobTitle && !userInfo.jobTitle.length > 0) && <div className='err-msg rounded mt-2 px-2'>{errors.jobTitle}</div>}
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formUserRole">
                        <Form.Label>User role</Form.Label>
                        <Form.Control type="text" value={userInfo.userRole} name="userRole" placeholder="Enter user role" onChange={onChangeFun} />
                        {(errors.userRole && !userInfo.userRole.length > 0) && <div className='err-msg rounded mt-2 px-2'>{errors.userRole}</div>}
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={userInfo.email} name="email" placeholder="Enter email" onChange={onChangeFun} />
                        {(errors.email && !userInfo.email.length > 0) && <div className='err-msg rounded mt-2 px-2'>{errors.email}</div>}
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={userInfo.password} name="password" placeholder="Password" onChange={onChangeFun} />
                        {(errors.password && !userInfo.password.length > 0) && <div className='err-msg rounded mt-2 px-2'>{errors.password}</div>}
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" value={userInfo.confirmPassword} name="confirmPassword" placeholder="Confirm Password" onChange={onChangeFun} />
                        {(errors.confirmPassword && !userInfo.confirmPassword.length > 0) && <div className='err-msg rounded mt-2 px-2'>{errors.confirmPassword}</div>}
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default UserForm
