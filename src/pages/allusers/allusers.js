import { useEffect, useState } from 'react';
import Header from '../../components/header';
import data from '../../components/sample.json';
import Footer from '../../components/footer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Select from 'react-select';
import { getAllUsers } from '../../services/userService';

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#f2f2f2',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '10px',
    boxShadow: 'none',
    width: '160px',
    // height:'0px',
    marginLeft: '20px'
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
  menu: (provided) => ({
    ...provided,
    maxHeight: '200px', // Adjust the height as needed
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 9999, // Adjust the z-index as needed to place the dropdown above other elements
  }),
};
const options = [
  { value: 'Baptism', label: 'Baptism' },
  { value: 'counseling', label: 'Counseling' },
  { value: 'CWC', label: 'Connect With a Church' },
  { value: 'MS', label: 'More Scripture' },
];
const Dashboard = () => {
  const [daaat, setDaaat] = useState([])
  const [ddaat, setDDaat] = useState([])
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchvalue, setSearchvalue] = useState('')
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    getdata()
  }, [])
  const getdata = async () => {
    try {
      const dat = await getAllUsers();
      if (dat) {
        const dert = dat.filter(k => { return k.user_type !== 'A' })
        setDDaat(dert)
        setDaaat(dert)
      }
    } catch (ex) {}
  }


  const filterinterest = (value) => {
    setSelectedOption(value);
    if (value && value.length > 0) {

      const filteredData = ddaat.filter((item) => {
        return value.some((option) => item.interests.includes(option.value.toLowerCase()));
      });
      setDaaat(filteredData);
    } else {
      console.log('else condition');
      setDaaat(ddaat)
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

        <div className="content" style={{ marginLeft: '160px', padding: '20px', paddingTop: '8px' }}>

          <div className="m-auto">

            <div style={{ marginTop: '60px' }}>

              <div className="table-box table-responsive">

                <table className="table">

                  <thead className="thead-light">
                    <tr className='th-bg'>
                      {/* <th style={{fontWeight:700,}}>No.</th> */}
                      <th style={{ fontWeight: 700, textAlign: 'center' }}>Name </th>
                      <th style={{ fontWeight: 700, textAlign: 'center' }}>Email</th>
                      <th style={{ fontWeight: 700, textAlign: 'center' }}>User Type</th>
                      <th style={{ fontWeight: 700, textAlign: 'center' }}>Created</th>
                      <th style={{ fontWeight: 700, textAlign: 'center' }}>Interest

                      </th>
                      <th style={{ fontWeight: 700, position: 'relative', right: 0 }}>
                        <Select
                          isMulti={true}
                          styles={customStyles}
                          onMenuClose={(value) => filterinterest(value)}
                          isSearchable={true}
                          defaultValue={selectedOption}
                          onChange={(value) => filterinterest(value)}
                          options={options}
                          menuPortalTarget={document.body}
                        />
                      </th>
                    </tr>

                  </thead>
                  <tbody>

                    {paginatedData && paginatedData.length > 0 ?
                      paginatedData.map((output) => {
                        const dateObj = new Date(output.createdAt);
                        const day = String(dateObj.getDate()).padStart(2, '0');
                        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
                        const year = dateObj.getFullYear();
                        const hours = dateObj.getHours();
                        const minutes = dateObj.getMinutes();
                        return (

                          <tr>

                            <td style={{ textAlign: 'center' }}>{output.full_name}</td>
                            <td style={{ textAlign: 'center' }}>{output.email}</td>
                            <td style={{ textAlign: 'center' }}>{output.user_type === 'NU' ? 'Normal User' : 'Admin'}</td>
                            <td style={{ textAlign: 'center' }}>{`${day}-${month}-${year} ${hours}:${minutes}`}</td>
                            <td style={{ textAlign: 'center' }}>{output.interests && output.interests.length > 0 ? output.interests && output.interests.join(',') : 'NA'}</td>
                            <td style={{ textAlign: 'center' }}></td>
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