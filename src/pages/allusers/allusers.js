import {useEffect,useState} from 'react';
import Header from '../../components/header';
import data from '../../components/sample.json';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';
import CustomSidebar from '../../components/customsidebar';

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
        <div className='app_container'>
             <Header />
             {/* <CustomSidebar /> */}
        <div >
       
            {/* <Sidebar  /> */}
    <div className="content" style={{marginLeft:'280px',}}>
         
        
       
       
        <div class="row m-auto">

           
            <div style={{marginTop:'20px'}}>
             
                <div  class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Interest
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

      <Footer />
    </div>
    )
}
 
export default Dashboard