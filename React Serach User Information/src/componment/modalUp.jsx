import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

//fn componment
const ModalUp = (props) => {
    return<>
        <Modal show = {props.isOpenPro} onHide = {props.closedModal}>
            <Modal.Header closeButton>
                <Modal.Title>Edit User Information</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <label>User Name:</label>
                <input type="text" style={{"margin": "10px"}} id="nameInput"/>
                <p></p>
                <label>User Email:</label>
                <input type="email" style={{"margin": "10px"}} id="emailInput"/>
                <p></p>
                <label>User ID:</label>
                <input type="id" style={{"margin": "10px"}} id="idInput"/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.closedModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.saveEditUserInfor}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>


        <Modal show = {props.addModal} onHide={props.closedAddmodal}>
            <Modal.Header closeButton>
                <Modal.Title>Add New User Information</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <label>User Name: </label>
                <input type = "text" style={{"margin": "10px"}} id="addName"/>
                <p></p>
                <label>User Email: </label>
                <input type = "email" style={{"margin": "10px"}} id="addEmail"/>
                <p></p>
                <label>User ID: </label>
                <input type = "id" style={{"margin": "10px"}} id="addId"/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='secondary' onClick={props.closedAddmodal}>
                    Close
                </Button>
                <Button variant='primary' onClick={props.saveAddUserInfor}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}


export default ModalUp
