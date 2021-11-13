import React, { useState, useEffect } from 'react';
import './all.css';
import Avatar from "react-avatar";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function ListUser() {

    const [list, setList] = useState([]);
    const [search, setsearch] = useState('');
    const [filteredData, setFilteredData] = useState([])
    
    
    useEffect(async () => {
        try {
            await getUser();
            if (search === '') {
                setFilteredData(list)
            }

        }
        catch (error) {
            console.log(error.message);
        }
    }, [filteredData]);

    

    const getUser = async()=>{
        try {

            const getBlog = await axios.get('https://omnificrud.herokuapp.com/api/users');
            console.log(getBlog.data);
            setList(getBlog.data);
            
        } catch (error) {
            console.log(error.message);
        }

    }

    const deleteData = async(_id)=>{
        try {
            const getDelete = await axios.delete(`https://omnificrud.herokuapp.com/api/users/${_id}`);
            console.log(getDelete.data);

            
        } catch (error) {
            console.log(error.message);
            
        }
    }

    const filterData = (e) => {
        setsearch(e.target.value);
        const result = list.filter((element) => {
            return element.name.includes(search) || element.email.includes(search) || element.phone.toString().includes(search)
        })
        setFilteredData(result)
    }
    

    // const listBlog = list.map((e)=>{ this list will go to searching so we do by filteredData.map
    const listBlog = filteredData.map((e)=>{
        return (<tr key={e._id}>
        <td>1</td>
        <td><a href="#"> <Avatar className="mr-2" name={e.name} size="45" round={true} /> {e.name}</a></td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
        <td>{e.message}</td>
        <td>
            <NavLink to ={`/updateblog/${e._id}`}>
                <a href="/" class="view bg-warning" title="View Details" ><i  class="fa fa-edit"></i></a></NavLink></td>
        
        
        <td><a href="/" class="view bg-danger" title="View Details" ><i onClick={()=>{
            if (e._id) {
                deleteData(e._id) 
            }
         }} class="fa fa-trash"></i></a></td>

    </tr>)
    })

    return (
        <React.Fragment>

<div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-4">
                        <h2>Blog <b>Details</b></h2>
                    </div>
                    <div class="col-sm-8">						
                     
                        <NavLink to="/createblog"><a href="/" class="btn btn-success"><i class="fa fa-plus-circle"></i><span>Add Blog</span></a></NavLink>
                    </div>
                </div>
            </div>
            <div class="table-filter">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="show-entries">
                            <span>Show</span>
                            <select class="form-control">
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                            </select>
                            <span>entries</span>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <button type="button" class="btn btn-primary"><i class="fa fa-search"></i></button>
                        <div class="filter-group">
                            <label>Search</label>
                            <input type="text" class="form-control" value={search} onChange={filterData}/>
                        </div>
                       
                       
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>						
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listBlog}
                    
                </tbody>
            </table>
            <div class="clearfix">
                <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul class="pagination">
                    <li class="page-item disabled"><a href="#">Previous</a></li>
                    <li class="page-item"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item"><a href="#" class="page-link">3</a></li>
                    <li class="page-item active"><a href="#" class="page-link">4</a></li>
                    <li class="page-item"><a href="#" class="page-link">5</a></li>
                    <li class="page-item"><a href="#" class="page-link">6</a></li>
                    <li class="page-item"><a href="#" class="page-link">7</a></li>
                    <li class="page-item"><a href="#" class="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>        
</div> 
            
        </React.Fragment>
    )
}

export default ListUser
