/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import { clearCart } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function KeepMountedModal(props) {

    const [formData, setFormData] = useState({
        firstname: '',
        email: '',
        mobileNo: '',
        address: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((i) => (
            { ...i, [name]: value }
        ))
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <Modal
                keepMounted
                open={props.modalOpen}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Enter Address Details
                    </Typography>

                    <TextField
                        label="First Name"
                        fullWidth
                        margin="normal"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <TextField
                        label="Mobile No"
                        fullWidth
                        margin="normal"
                        name="mobileNo"
                        onChange={handleChange}
                        value={formData.mobileNo}
                    />
                    <TextField
                        label="Address"
                        fullWidth
                        margin="normal"
                        name="address"
                        rows={3}
                        multiline
                        variant="filled"
                        onChange={handleChange}
                        value={formData.address}
                    />

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Button variant="contained" size="large" color='success'
                            onClick={() => {
                                // console.log(formData);
                                setTimeout(() => {
                                    props.modaltoggle()
                                    navigate('/')
                                    dispatch(clearCart())
                                    alert("Order Successfully Placed");
                                }, 3000)
                            }}
                        >Place your Order</Button>


                        <Button variant="contained" size="large" color='error'
                            onClick={() => {
                                props.modaltoggle()
                            }}
                        >Cancel </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
