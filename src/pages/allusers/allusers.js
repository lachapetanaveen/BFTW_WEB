import {useEffect,useState} from 'react';
import Header from '../../components/header';
import data from '../../components/sample.json';
import Footer from '../../components/footer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#f2f2f2',
      border: '1px solid #ccc',
      borderRadius: '4px',
      minHeight: '10px',
      boxShadow: 'none',
      width:'160px',
      // height:'0px',
      marginLeft:'20px'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#e6e6e6' : 'white',
      color: state.isSelected ? 'white' : 'black',
      cursor: 'pointer',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      color: 'black',
    }),
  };
const options = [
    { value: 'Baptism', label: 'Baptism' },
    { value: 'Counselling', label: 'Counseling' },
    { value: 'Connect with Church', label: 'Connect With a Church' },
    { value: 'more scripture', label: 'More Scripture' },
  ];
const Dashboard = () => {
    const [daaat,setDaaat] = useState(data)
    const pageSize = 5; 
  const [currentPage, setCurrentPage] = useState(1);
    const [searchvalue,setSearchvalue] = useState('')
    const [selectedOption, setSelectedOption] = useState(null);

  const filterinterest = (value) => {
    setSelectedOption(value);
    if(value && value.length > 0){
        
        const filteredData = data.filter((item) => {
            return value.some((option) => item.intrests.includes(option.value));
          });
          setDaaat(filteredData);
    }else {
        console.log('else condition');
        setDaaat(data)
    }
    
    // const dert = daaat.filter
    // console.log(value[0].value);
  }
   const totalPages = Math.ceil(daaat.length / pageSize);

   const handlePageChange = (page) => {
     setCurrentPage(page);
   };
   const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);
  const getDisplayedPages = () => {
    const totalPageCount = 5; // Number of page numbers to display
  
    if (totalPages <= totalPageCount) {
      return range(1, totalPages);
    }
  
    const middlePage = Math.max(
      Math.min(currentPage, totalPages - Math.floor(totalPageCount / 2)),
      Math.ceil(totalPageCount / 2)
    );
    const startPage = middlePage - Math.floor(totalPageCount / 2);
    const endPage = startPage + totalPageCount - 1;
  
    if (endPage >= totalPages) {
      return range(totalPages - totalPageCount + 1, totalPages);
    }
  
    return range(startPage, endPage);
  };
  const startIndex = (currentPage - 1) * pageSize;
const endIndex = startIndex + pageSize;
const paginatedData = daaat.slice(startIndex, endIndex);
    return (
        <div className='app_container'>
             <Header />
        <div>
  
    <div className="content" style={{marginLeft:'160px',padding:'20px',paddingTop:'8px'}}>
      
        <div className="m-auto">

            <div style={{marginTop:'60px'}}>
             
                <div  className="table-box table-responsive">
                
                    <table  className="table">
                        
                        <thead className="thead-light">
                            <tr className='th-bg'>
                                {/* <th style={{fontWeight:700,}}>No.</th> */}
                                <th style={{fontWeight:700,textAlign:'center'}}>Name </th>
                                <th style={{fontWeight:700,textAlign:'center'}}>Email</th>
                                <th style={{fontWeight:700,display:'flex',alignItems:'center',justifyContent:'end'}}><span style={{marginRight:'60px'}}>Interest</span> <Select 
                                    isMulti={true}
                                    styles={customStyles}
                                    onMenuClose={(value) => filterinterest(value)}
                                    isSearchable={true}
        defaultValue={selectedOption}
        onChange={(value) => filterinterest(value)}
        options={options}
      />
                                  
                                </th>
                               
                            </tr>
                           
                        </thead>
                        <tbody>
                            
                         {paginatedData && paginatedData.length > 0 ? 
                             paginatedData.map((output)=> {
                                return (
                                    <tr>
                               
                                <td style={{textAlign:'center'}}>{output.name}</td>
                                <td style={{textAlign:'center'}}>{output.email}</td>
                                <td style={{textAlign:'center'}}>{output.intrests && output.intrests.join(',')}</td>
                            </tr>
                                )
                             }) : 
                                <tr>
                                    <td>No Users Available</td>
                                </tr>
                             }
                            
                          
                        </tbody>
                    </table>
                   
                </div>

                <div className="pagination-container">
  <button
    disabled={currentPage === 1}
    onClick={() => handlePageChange(currentPage - 1)}
  >
    <FaChevronLeft />
  </button>
  {getDisplayedPages().map((page) => (
    <button
      key={page}
      className={currentPage === page ? 'active' : ''}
      onClick={() => handlePageChange(page)}
    >
      {page}
    </button>
  ))}
  <button
    disabled={currentPage === totalPages}
    onClick={() => handlePageChange(currentPage + 1)}
  >
    <FaChevronRight />
  </button>
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