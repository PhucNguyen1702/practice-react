import './App.scss';
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import Container from 'react-bootstrap/Container';
import {Modal} from "react-bootstrap";
import ModalAddUsers from "./components/ModalAddUsers";
import {useState} from "react";
function App() {
    const [isShowModalAddNew,setIsShowModalAddNew] = useState(false);
    const handleClose = () => {
        setIsShowModalAddNew(false)
    }

  return (
    <div className={'app-container'}>
        <Header></Header>
        <Container>
            <div className={"my-3 add-new"}>
                <span><b>List User</b></span>
                <button onClick={()=>{setIsShowModalAddNew(true)}} className={"btn btn-success"}>Add New Users</button>
            </div>
            <TableUsers></TableUsers>>
        </Container>
        <ModalAddUsers
        show={isShowModalAddNew}
        handleClose={handleClose}>
        </ModalAddUsers>
    </div>
  );
}

export default App;
