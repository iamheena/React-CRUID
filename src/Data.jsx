import {useState} from 'react'

function Data() {
    const [Key, setKey] = useState(null)
    const [data1, setdata1] = useState([{
        Name:"heena",
        laName:"kathrotiya",
        email:"heena@gmail.com"
       
    }])
    function adddata(){
        let name=document.querySelector("#name").value
        let l_name=document.querySelector("#lname").value
        let email=document.querySelector("#email").value     

        setdata1([...data1,{Name:name,laName:l_name,email:email}])
        console.log(data1);

       document.querySelector("#name").value=""
       document.querySelector("#lname").value=""
       document.querySelector("#email").value =""   
       
    }
    function deletdata(i){
       let dele= data1.filter((x,key)=>{
            console.log(key);
            if(key==i){             
                
            }
            else{
                return x
            }    

        })
        setdata1(dele)

    }
    function update(i){
        data1.find((a,k)=>{
            if(k==i){
                let name=document.querySelector("#name").value=a.Name
                let l_name=document.querySelector("#lname").value=a.laName
                let email=document.querySelector("#email").value=a.email
                setKey(k)
                
            }
        })

    }
    function editdata(){
        let name=document.querySelector("#name").value
        let l_name=document.querySelector("#lname").value
        let email=document.querySelector("#email").value  
        setdata1(data1.map((d,i)=>{
            if(i===Key){
                return({Name:name,laName:l_name,email:email})

            }
            else{
                return d
            }          

        }))
        setKey(null)
        document.querySelector("#name").value=""
        document.querySelector("#lname").value=""
        document.querySelector("#email").value =""  


    }
    
    return (
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Email</th>
                   
                        {data1.map((d,i)=>{
                            return(
                                <tr key={i}>
                                        <td>{d.Name}</td>
                                        <td>{d.laName}</td>
                                        <td>{d.email}</td>
                                        <td  style={{width:"auto"}}><button button onClick={()=>update(i)}>Edit</button></td>
                                        <td style={{width:"auto"}}><button onClick={()=>{deletdata(i)}}>Delete</button></td>
                                </tr>

                            )

                        })}
                       
                   
                </thead>
            </table>
           <div className="form">
                <div className="h1">
                     <h1>Cruid Operation</h1>
                </div>
                <div className="inputfield">
                    <div className="fname">
                            <label htmlFor="">FirstName</label>
                            <input type="text" id="name" />
                    </div>
                    <div className="fname">
                            <label htmlFor="">LastName</label>
                            <input type="text" id="lname"/>
                    </div>
                    <div className="fname">
                            <label htmlFor="">Email</label>
                            <input type="text"  id="email"/>
                    </div>
                    
                    <div className="fname"> 
                           {Key?
                           <button onClick={editdata}>Update</button>:
                            <button onClick={adddata}>Submit</button>
                        }
                            
                            
                    </div>
                    
                </div>
            </div>  
        </div>
    )
}

export default Data
