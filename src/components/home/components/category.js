import React, { Component, useState, useEffect } from 'react'
import './category.css'
import {CategoryItems} from '../../data'
// import styled from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios';
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';



// const Category = () => {
class Category extends Component {
    constructor(props) {
        super(props);
    
        // Setting up state
        this.state = {
            categories: [],
            categoriesData: [],
            products: [],
            Open: false,
            itemsToShow: 0,
            usersToShow: 0,
            expanded: false,
            userExpanded: false,
        };
      }

    // const [category, setCategory] = useState([]);
    // const [categories, setCategories] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);

    // useEffect(()=>{
    //     const getCategories= async ()=>{
    //         try{
    //             const res = await axios.get( "http://127.0.0.1:8000/api/category/" );
    //             setCategory(res.data)
    //             // console.log(res)
    //         }catch(err){}
    //     };
    //     getCategories()
    // }, [category])


    // useEffect(()=>{

    //     const CancelToken = axios.CancelToken;
    //     const source = CancelToken.source();

    //     const getCategories = async ()=>{
    //         try{
    //             const res = await axios.get( "http://127.0.0.1:8000/api/category/", { cancelToken: source.token } );
    //             setCategory(res.data)
    //             // console.log(res)
    //         }catch(err){
    //             if(axios.isCancel(err)){
    //                 console.log("cancelled");
    //             } else{
    //                 throw err
    //             }
    //         }
    //     };
    //     getCategories();
    //     return () => {
    //         source.cancel();
    //     }
    // }, [category])


      componentDidMount(){
          axios
            .get('https://sage-server.herokuapp.com/api/category')
            .then((response) => {
                //   console.log(response.data)
                this.setState({
                    categoriesData: response.data,
                });
                // console.log(categories);
            })
            .catch((error) => {
                console.log('Error');
      });
      }
    //   return CategoryItems.sort(()=> Math.random() - Math.random()).slice(0, 6).map((cat, i)=>{


      getCategoryRow(){
        return this.state.categoriesData.sort(()=> Math.random() - Math.random()).slice(0, 6).map((cat, i)=>{
    
            return(
                <div key={cat.id} obj={cat} className="col-lg-4 col-md-6 col-sm-12 p-4 cat" >
                    <Link to={`/category/${cat.name}`}>
                        <div className="item mb-2">
        
                            <div className="media align-items-center justify-space-between">
                                <div className="kt-widget5__pic">
                                    <span className="category-text">
                                        {cat.name}
                                    </span>
                                    <img  className="mr-2 img-fluid cat-img-loop" src={cat.image}  />
                                </div>
                                
                            </div>
                            
                        </div>
                    </Link>
                </div>
    
    
            )})
        }

      


    

    render(){

       
            
        
        
        

        return(
            <React.Fragment>
                <section >
                    <div className="container">
                        <div className="row d-flex align-items-center text-center justify-content-center mb-4 pb-4">
                            <div className="col-12 mb-2 pb-2 section-title">
                                <h2>Categories</h2>
                            </div>
                            <div className="col-12">
                                <p>Create an account and start enjoying our service fetbntrny bebebe ergeh th ethth th eheth ththr ehe</p>
                            </div>
      
                            
                        </div>

                        <div className="row category d-flex justify-content-center align-items-center">
                            {this.getCategoryRow()}
                        </div>
                        <div className="mf-button align-center style-1 margtop40">
                            <a className="button cat-btn no-marg has-background" href="/categories">View All Categories</a>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}
    
export default Category