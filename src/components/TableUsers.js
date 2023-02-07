import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import {fetchAllUser} from "../service/UserService";
import ReactPaginate from 'react-paginate';
const TableUsers = (props) => {
    const [listUsers,setListUser] = useState([]);
    const [totalUsers,setTotalUsers] = useState(0);
    const [totalPage,setTotalPage] = useState(0)
    useEffect(()=>{
        getListUser(1);
        },[])
    
    const getListUser = async (page) => {
        let res = await fetchAllUser(page);
        console.log("Check res :",res)
        if(res && res.data ){
            setListUser(res.data);
            setTotalPage(res.total);//Tong so luong phan tu
            setTotalPage(res.total_pages)
        }
    }
    const handlePageClick = (event) => {
      getListUser(+event.selected+1);
    }
    return(
        <>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            </thead>
            <tbody>
            {listUsers && listUsers.length>0 &&
                listUsers.map((item,index)=>{
                    return(
                        <tr key={`user-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                pageCount={totalPage}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
    </>);
}
export default TableUsers ;