import {Modal,Button} from 'react-bootstrap';
import {useState} from "react";
const ModalAddUsers = (props) => {
    const {show,handleClose} = props;
    const [name,setName]= useState("");
    const [job,setJob] = useState("");
    const handleSaveUser = () => {
        console.log("Check : name",name,"job :",job)
    }
   return(
       <>
           <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                   <Modal.Title>Add New Users</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <div>
                       <form>
                           <div className="form-group">
                               <label htmlFor="exampleInputEmail1">Name</label>
                               <input onChange={(event)=>setName(event.target.value)} value={name} type="text" className="form-control"  placeholder="Enter Name"/>
                           </div>
                           <div className="form-group">
                               <label htmlFor="exampleInputPassword1">Job</label>
                               <input  onChange={(event)=>setJob(event.target.value)} value={job} type="text" className="form-control" placeholder="Enter Job"/>
                           </div>
                       </form>
                   </div>
               </Modal.Body>
               <Modal.Footer>
                   <Button variant="secondary" onClick={handleClose}>
                       Close
                   </Button>
                   <Button variant="primary" onClick={handleSaveUser}>
                       Save Changes
                   </Button>
               </Modal.Footer>
           </Modal>
       </>
   )
}
export default ModalAddUsers;