import React,{useState} from 'react';
import './register.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


function Register() {
    const[list,updateList]=useState([])
    const[filter,filteredList]=useState([])
    
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[number,setNumber]=useState("");
    const[project,setProject]=useState("");
    const[task,setTask]=useState("");
    const[sdate,setSdate]=useState("");
    const[edate,setEdate]=useState("");
    const[status,setStatus]=useState("");
    const[toggle,setToggle]=useState(-1);
    const[show,setShow]=useState(true);

const save=()=>{
    setToggle(-1);
    let user={name:name,email:email,number:number,project:project,task:task,sdate:sdate,edate:edate,status:status}
    setName("");
    setEmail("");
    setNumber("");
    setProject("");
    setTask("");
    setSdate("");
    setEdate("");
    setStatus("");
    console.log(toggle);
    
    if(name===""||email===""||number===""||project===""||task===""||sdate===""||edate===""){

        alert("Please fill all the fields");

    }else if(!email.includes("@")||!email.includes(".com")){
        alert("Please enter valid email");
    }else if(number.length!==10){
        alert("Please enter valid number");
    }else{
        if(toggle===-1){
            console.log("addnewentry");
            list.push(user);
            filteredList(list=>[...list])
        }
        else{
            console.log("update Entry at",+toggle);
            list[toggle]=user;

        }
    }
    setShow(true);
}

const deleteinfo=(index)=>{
    list.splice(index,1);
    updateList(list=>[...list])
}


const editInfo=(index)=>{
    setName(list[index].name);
    setEmail(list[index].email);
    setNumber(list[index].number);
    setProject(list[index].project);
    setTask(list[index].task);
    setSdate(list[index].sdate);
    setEdate(list[index].edate);
    setStatus(list[index].status);

    setToggle(index);

}

const view=()=>{
    filter.splice(0,filter.length);
    console.log("#1 ",filter.length)
    filteredList("");
    console.log("#2 ",filter.length)
    filteredList(list=>[...filter]);
    console.log("status",status,filter.length); 
  
    for(let i=0;i<list.length;i++){
        console.log(" item status ",list[i].status);
        if(list[i].status===status){
            filter.push(list[i]);
            
            
        }
    }
    console.log("#3 ",filter.length)
    filteredList(list=>[...filter])
    console.log("filtered",filter);
    setShow(false);

}
  return (
    <div>
    <h1>TODO LIST</h1>
       <p> <input type="text" placeholder='Enter Name of Person' onChange={obj=>setName(obj.target.value)} value={name} className="inp1" minLength={3}  maxLength={30} required={true} /></p>
       <div>
           <input type="email" placeholder='Enter a valid Email Id' onChange={obj=>setEmail(obj.target.value)}  value={email} className="inp1" />
           <input type="number" placeholder='Enter a valid mobile number' onChange={obj=>setNumber(obj.target.value)} value={number} className="inp1" required={true}   />
       </div>
       <p> <input type="text" placeholder='Enter a project Name'  onChange={obj=>setProject(obj.target.value)} value={project} className="inp1" minLength={3}  maxLength={30} required={true}     /> </p>
         <p> <input type="text" placeholder='Enter a Task Description' onChange={obj=>setTask(obj.target.value)} value={task} className="inp1" minLength={3}  maxLength={30} required={true}    /> </p>
         <div>
             <input type="Date"  placeholder='Start Date' onChange={obj=>setSdate(obj.target.value)} value={sdate} className="inp1" required={true}   />
                <input type="Date"  placeholder='End Date' onChange={obj=>setEdate(obj.target.value)} value={edate} className="inp1"  required={true}  />
         </div>
            <div>
                <p>Task Status :
                    <input type="radio" name='status'  value="Planned" onChange={obj=>setStatus(obj.target.value)}/> Planned
                    <input type="radio" name='status' value="In Progress" onChange={obj=>setStatus(obj.target.value)}/>  In Progress
                    <input type="radio" name='status' value="Done" onChange={obj=>setStatus(obj.target.value)}  /> Done
                
                </p>
            </div>
            <div>
            <button onClick={save} className="btn1">Save</button>
                <button className='btn1' onClick={view}> View </button>
            </div>


        <div>
            <table className='table'>
                <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Project</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Edit/Delete</th>
                    </tr>
                </thead>
               
                {
                    show ?
                
              
                <tbody >
                    {
                    list.map((info,index)=>{
                            return(
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{info.name}</td>
                                <td>{info.email}</td>
                                <td>{info.project}</td>
                                <td>{info.task}</td>
                                <td>{info.status}</td>
                                <td>{info.sdate}</td>
                                <td>{info.edate}</td>
                                <td><button className='btn2' onClick={editInfo.bind(this,index)}> <EditIcon/> </button>
                                    <button className='btn2'  onClick={deleteinfo.bind(this,index)}> <DeleteForeverIcon/> </button>
                                </td>
                                </tr>
                            )

                        })
                        
                    }
                </tbody> :
                <tbody >
                {
                    filter.map((info,index)=>{
                            return(
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{info.name}</td>
                                <td>{info.email}</td>
                                <td>{info.project}</td>
                                <td>{info.task}</td>
                                <td>{info.status}</td>
                                <td>{info.sdate}</td>
                                <td>{info.edate}</td>
                                <td><button className='btn2' onClick={editInfo.bind(this,index)}> <EditIcon/> </button>
                                    <button className='btn2'  onClick={deleteinfo.bind(this,index)}> <DeleteForeverIcon/> </button>
                                </td>
                                </tr>
                            )

                        })
                        
                }

                </tbody>
                }
                
                
            </table>
        </div>

       </div>
  )
}

export default Register;