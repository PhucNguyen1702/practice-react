import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import {fetchAllUser} from "../service/UserService";

const TableUsers = (props) => {
    const [listUsers,setListUser] = useState([]);
    useEffect(()=>{
        getListUser();
        },[])

    const getListUser = async () => {
        let res = await fetchAllUser();
        // console.log("Check res :",res)
        if(res && res.data ){
            setListUser(res.data)
        }
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
    </>);
}
export default TableUsers ;