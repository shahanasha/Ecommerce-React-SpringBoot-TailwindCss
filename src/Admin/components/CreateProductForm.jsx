import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../State/Product/Action';
import { Grid, TextField, Typography } from '@mui/material';

const initialSizes=[
  { name:"S", quantity:0 },
  { name:"M", quantity:0 },
  { name:"L", quantity:0 },
]

const CreateProductForm = () => {

  const [productData,setProductData]= useState({
    imgUrl: "",
    brand: "" ,
    title: "" ,
    color: "" ,
    discountedPrice: "" ,
    price: "" ,
    discountePercent: "" ,
    size: initialSizes ,
    quantity: "" ,
    topLevelCategory: "" ,
    secondLevelCategory: "" ,
    thirdLevelCategory: "" ,
    description: "",
  });

  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")

  const handleChange=(e)=>{
    const { name , value}=e.target;
    setProductData((prevState)=>({
      ...prevState,
      [name]:value
    }));
  }

  const handleSizeChange=(e,index)=>{
    let { name, value } =e.target;
    name==="size_quantity"?name="quantity":name=e.target.name;

    const sizes= [...productData.size];
    sizes[index][name]=value;
    setProductData((prevState)=>({
      ...prevState,
      size:sizes,
    }));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(createProduct(productData));
    console.log(productData);
  }

  return (
    
    <Fragment classname="createProductContainer">
      <Typography 
      variant='h3'
      sx={{ textAlign: "center" }}
      className='py-10 text-center'
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className='createProductContainer min-h-screen'
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                fullWidth
                label="Image URL"
                name='imgUrl'
                value={productData.imgUrl}
                onChange={handleChange}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Brand"
                name='brand'
                value={productData.brand}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Title"
                name='title'
                value={productData.title}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Color"
                name='color'
                value={productData.color}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Quantity"
                name='quantity'
                value={productData.quantity}
                onChange={handleChange}
                type='number'
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Price"
                name='price'
                value={productData.price}
                onChange={handleChange}
                type='number'
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Discounted Price"
                name='discountedPrice'
                value={productData.discountedPrice}
                onChange={handleChange}
                type='number'
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Discounted Percent"
                name='discountedPercent'
                value={productData.discountedPrice}
                onChange={handleChange}
                type='number'
              />
            </Grid>
            
          </Grid>

      </form>
    </Fragment>
  )
}

export default CreateProductForm