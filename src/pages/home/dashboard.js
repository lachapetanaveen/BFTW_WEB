import {useEffect,useState} from 'react';
import Header from '../../components/header';
import data from '../../components/sample.json';
import Footer from '../../components/footer';
import Sidebar from './sidebar';

//  import FilterBox from './filterbox';
const Dashboard = () => {
    const [daaat,setDaaat] = useState(data)
    const [searchvalue,setSearchvalue] = useState('')
   const searchdata = (value) => {
  
    setSearchvalue(value)
        if(value){
            
            const filteredData = data.filter((item) =>
        item.intrests.includes(value)
      );
              setDaaat(filteredData)
              console.log(filteredData, 'dat dash');

        }else{
            setDaaat(data)
        }
   }
 
    return (
        <div>
             <Header />
        
        <div style={{display:'flex',minheight:'109px'}}>
           
            <Sidebar  />
    <div style={{marginLeft:'40px'}}>
         
        
       
       
        <div class="row m-auto">

           
            <div >
              <h5 style={{backgroundColor:'lightblue'}}class="mt-3 mb-3 text-secondary">
              All The Users-Data
              </h5>
                <div style={{float:'right'}} class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Intrest
                                    <input value={searchvalue} onChange={(e) => searchdata(e.target.value)} placeholder='Searh Interests' style={{backgroundColor:'white',borderWidth:1,borderColor:'white',marginLeft:8,borderRadius:10,padding:6}} />
                                </th>
                                {/* <th>Record Data</th> */}
                            </tr>
                        </thead>
                        <tbody>
                         {daaat && daaat.map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.intrests && output.intrests.join(',')}</td>
                               
                               
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    </div>
   
    </div>

      {/* <Footer /> */}
    </div>
    )
}
 
export default Dashboard