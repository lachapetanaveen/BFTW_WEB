import {useEffect,useState} from 'react';
import Header from '../../components/header';

import Footer from '../../components/footer';
import Sidebar from '../home/sidebar';
 
const Dashboard = () => {
   
   const[record,setRecord] = useState([])
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },[])
    
 console.log(record,'record');
    return (
        <div>
             <Header />
        
        <div style={{display:'flex'}}>
           
            <Sidebar  />
    <div style={{marginLeft:'40px'}}>
         
        
       
       
        <div class="row m-auto">

           
            <div >
              <h5 class="mt-3 mb-3 text-secondary">
               Check More Records of 'BFTW-NEW'
              </h5>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Label</th>
                                <th>Header</th>
                                <th>Column</th>
                                <th>Record Data</th>
                            </tr>
                        </thead>
                        <tbody>
                         {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                               
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    </div>
   
    </div>
    <Footer />

    </div>
    )
}
 
export default Dashboard