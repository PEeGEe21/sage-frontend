import React, {useState} from 'react'
import Navbar from '../layout/navbar'
import Hero from './components/hero'
import Footer from '../layout/footer'
import ContentArea from '../home/components/cta'
import {CartItems} from '../data'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Form } from 'react-bootstrap';
import { useTheme } from '@material-ui/styles'
import './cart.css'
import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core'
import SelectInput from '@material-ui/core/Select/SelectInput'





const Cart = () =>{
    const cart = useSelector(state=>state.cart)
    // console.log(cart)
    const [address, setAddress] = useState('');

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const [states, setStates] = useState('')
    const [meals, setMeals] = useState()
    // cart.products
    const handleChange = (event) => {
        setStates(event.target.value);
    }


    const onChange = (event) =>{
        setAddress(event.target.value);
    }
    // const onChange = (e) =>{
    //     const value = e.target.value;
    //     setAddress({
    //         [e.target.name]:value
    //     });
    // }
    const getcartproduct = () =>{
        return cart.products.map((prod)=>{
    
            return(
                <tr value={prod.name} key={prod.name}>
                    
    
                    <td className="flex_item clear_fix" >
                    <Link to={`/our-menu/product/${prod.id}`}>
                        <img src={prod.image} alt="images" className="float_left" width="70" height="80"/>

                        <h6 className="float_left">{prod.name}</h6>
                    </Link>
                    </td>
    
                    <td>
                        <input name="quantity" min="0" defaultValue={prod.quantity} type="number"/>
                    </td>
    
                    <td>
                        <span>$ {prod.price}</span>
                    </td>
                    <td>
                        <span className="color2">$ {prod.price*prod.quantity}</span>
                    </td>
                    <td>
                        <input type="checkbox"/> <span>Remove</span>
                    </td>
                </tr>
    
            )
        })
    
    }

    const cartproduct = () =>{
        return CartItems.map((prod)=>{
    
            return(
                <li key={prod.id}>
                    {prod.name}
                </li>
                
                // <tr >
                    
    
                //     <td className="flex_item clear_fix" >

                //         <h6 className="float_left">{prod.name}</h6>
                //     </td>
    
                //     <td>
                //         <input name="quantity" min="0" defaultValue={prod.quantity} type="number"/>
                //     </td>
    
                //     <td>
                //         <span>$ {prod.price}</span>
                //     </td>
                //     <td>
                //         <span className="color2">$ {prod.price*prod.quantity}</span>
                //     </td>
                //     <td>
                //         <input type="checkbox"/> <span>Remove</span>
                //     </td>
                // </tr>
    
            )
        })
    
    }

  
    const smsOrder = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };



    const onSubmit = (event) => {
        const data = {
            state: states,
            address: address,
            // meals: cartproduct()
        };
        console.log(data);

    }

    const user = useSelector((state) => state.user.currentUser);
    // const user = null;



    return (
        <>
            <div className="home   header-sticky  header-v5 hide-topbar-mobile">
                <div id="page" className="hfeed site">
                    <Navbar />
                    <Hero /><div className="site-content">
                        {user ? 
                            
                            <div className="cartpage cart">
                                <div className="shop_cart_table container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="table-responsive">
                                                <table className="table table-1">
                                                    <tbody>
                                                        <tr>
                                                            <th><span>Product</span></th>
                                                            <th><span>Quantity (Plates)</span></th>
                                                            <th><span>Product Price</span></th>
                                                            <th><span>Total</span></th>
                                                            <th><span>Remove</span></th>
                                                        </tr>

                                                        {getcartproduct()}

                                                        </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <input placeholder="Enter Coupon Code..." className="coupon" type="text"/>
                                            <button className="cart_btn1 tran3s color1_bg">Apply Coupon</button>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 cart_update text-right">
                                            <button className="cart_btn3 tran3s">Update Cart</button>
                                        </div>
                                    </div>

                                    <div className="row shipping_address align-items-center justify-content-center">
                                        

                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 wow fadeInUp ">
                                            <h4>Cart Totals</h4>
                                            <div className="table-responsive">
                                                <table className="table table-2">
                                                    <tbody>
                                                        <tr>
                                                            <td><span>Cart Subtotal</span></td>
                                                            <td><span>$ {cart.total}</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Shipping and Handling</span></td>
                                                            <td><span>Free Shipping</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Order Total</span></td>
                                                            <td><span>$ {cart.total}</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                            <button className="cart_btn2 tran3s color1_bg">Proceed to Checkout</button>
                                            <button className="cart_btn2 tran3s" style={{background: '#121d2f'}} onClick={smsOrder}>Order with an SMS</button>
                                            </div>
                                            
                                            <Form onSubmit={onSubmit}>

                                                <Dialog
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="form-dialog-title"
                                                    
                                                >
                                                    <DialogTitle id="form-dialog-title">Order Meals</DialogTitle>
                                                    <DialogContent>
                                                        <DialogContentText>
                                                        channels are where your team communicates. They're best when organized around a topic - #marketing, for example.
                                                        </DialogContentText>
                                                    <Box component="form" sx={{display: 'flex', flexWrap: 'wrap'}}>
                                                    <table className="table table-1">
                                                    <tbody>
                                                        <tr>
                                                            <th><span>Product</span></th>
                                                            <th><span>Quantity (Plates)</span></th>
                                                            <th><span>Product Price</span></th>
                                                            <th><span>Total</span></th>
                                                        </tr>

                                                        {
                                                            cart.products.map((prod)=>{
                                                                return(
                                                                    

                                                                <tr value={prod.name} key={prod.id}>
                    
    
                                                                    <td>{prod.name}</td>
                                                    
                                                                    <td>{prod.quantity}</td>
                                                    
                                                                    <td>
                                                                        <span>$ {prod.price}</span>
                                                                    </td>
                                                                    <td>$ {prod.price*prod.quantity}
                                                                    </td>
                                                                </tr>
                                                                
                                                                )
                                                            })
                                                                
                                                        }
                                                        <tr>
                                                            <td><span>Total</span></td>
                                                            <th><span>{cart.total}</span></th>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                        

                                                        <TextField
                                                        name="address" 
                                                        margin="dense"
                                                        id="address"
                                                        label="Your Address"
                                                        type="text"
                                                        fullWidth
                                                        defaultValue=''
                                                        required
                                                        onChange={onChange} 
                                                        // input={<OutlinedInput label="Address" />}
                                                        />

                                                        <FormControl fullWidth variant="standard" required>
                                                            {/* <InputLabel id="demo-simple-select-label"> */}
                                                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                                                            <Select labelId="demo-simple-select-label" 
                                                            id="demo-simple-select" 
                                                            value={states}
                                                            label="State *"
                                                            onChange={handleChange} 
                                                            >
                                                                <MenuItem value="" disabled><em>None</em></MenuItem>
                                                                <MenuItem value={'Enugu'}>Enugu</MenuItem>
                                                                <MenuItem value={'Lagos'}>Lagos</MenuItem>
                                                                <MenuItem value={'Abuja'}>Abuja</MenuItem>
                                                            </Select>

                                                        </FormControl>

                                                        <TextField
                                                        name="mobno"
                                                        margin="dense"
                                                        id="mobno"
                                                        label="Phone Number"
                                                        type="text"
                                                        fullWidth
                                                        defaultValue=''
                                                        required
                                                        onChange={onChange} 
                                                        // input={<OutlinedInput label="Address" />}
                                                        />

                                                        
                                                        {/* {getcartproduct()} */}
                                                    </Box>
                                                    </DialogContent>
                                                    <DialogActions>
                                                    <Button onClick={handleClose} color="primary">
                                                        Cancel
                                                    </Button>
                                                    <Button onClick={onSubmit} color="primary">
                                                        Order
                                                    </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        : 
                            <div className="row d-flex align-items-center text-center justify-content-center">
                                <div className="col-12">
                                    <h2><span>Log in to view cart</span></h2>
                                </div>
                            </div>
                        
                        }
                    </div>
                         
                        <ContentArea />
                    <Footer></Footer>
                
                </div>
            </div>
        
        </>
    )
}

export default Cart;
