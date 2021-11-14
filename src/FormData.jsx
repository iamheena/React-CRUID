
import {useEffect, useState} from 'react'
function FormData() {
    const [Key, setKey] = useState(null)
    const [data, setdata] = useState([{
        firstName:"heena",
        lastName:"kathrotiya",
        email:"heena@gmail.com",
        phoneno:"8776567890",
        address:"surat",
        comments:"this is good"
    }])
    function submitdata(){ 
        let fname=document.querySelector("#name").value
        let lname=document.querySelector("#lname").value
        let email=document.querySelector("#email").value
        let phone=document.querySelector("#phone").value
        let add=document.querySelector("#add").value
        let comments=document.querySelector("#comment").value

        setdata([...data,{firstName:fname,lastName:lname,email:email,phoneno:phone,address:add,comments:comments}])
        console.log(data);
       
        document.querySelector("#name").value=""
        document.querySelector("#lname").value=""
        document.querySelector("#email").value=""
        document.querySelector("#phone").value=""
        document.querySelector("#add").value=""
        document.querySelector("#comment").value=""
    }
    function UpdateData(){
        let fname=document.querySelector("#name").value
        let lname=document.querySelector("#lname").value
        let email=document.querySelector("#email").value
        let phone=document.querySelector("#phone").value
        let add=document.querySelector("#add").value
        let comments=document.querySelector("#comment").value
        setdata(data.map((d,i)=>{
            if(i===Key){
                return {firstName:fname,lastName:lname,email:email,phoneno:phone,address:add,comments:comments}
            }else{
                return d
            }
        }))
        setKey(null)
        document.querySelector("#name").value=""
        document.querySelector("#lname").value=""
        document.querySelector("#email").value=""
        document.querySelector("#phone").value=""
        document.querySelector("#add").value=""
        document.querySelector("#comment").value=""
    }
    function editdata(key){
        data.find((d,i)=>{
            if(i==key){
                document.querySelector("#name").value=d.firstName
                document.querySelector("#lname").value=d.lastName
                document.querySelector("#email").value=d.email
                document.querySelector("#phone").value=d.phoneno
                document.querySelector("#add").value=d.address
                document.querySelector("#comment").value=d.comments
                setKey(key)
            }
        })

    }
    function deletedata(i){
 
        // let x=data
        //  x.splice(i,1)

        // setdata(x)
        // console.log(typeof x);

       setdata(data.filter((d,key)=>{
           if(key!==i){
                return d
           }
       }))
    // console.log([...x]);
    // console.log([...data]);
    // console.log(data);
    // console.log(x);
    // setdata([...x])
    // console.log(data,"asdasdsa");

    //    console.log(x,"x ");
    //    console.log(data,"data");
    }
    // useEffect(()=>{
    //     setdata(data)
    // },[data])


    return (
        <div>
            {/* <h1 >{Key}</h1> */}
            <table>
                <thead>
                    <tr>
                        <th>FName</th>
                        <th>Lname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Add</th>
                        <th>Comment</th>
                    </tr>
                    
                   { data.map((res,i)=>(
                       <tr key={i}>
                            <td>{res.firstName}</td>
                            <td>{res.lastName}</td>
                            <td>{res.email}</td>
                            <td>{res.phoneno}</td>
                            <td>{res.address}</td>
                            <td>{res.comments}</td>
                            <td style={{width:"auto"}}><button onClick={()=>editdata(i)}>Edit</button></td>
                            <td style={{width:"auto"}}><button onClick={()=>deletedata(i)}>Delete</button></td>

                       </tr>
                       
                   ))}
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
                            <label htmlFor="">PhoneNo</label>
                            <input type="text" id="phone"/>
                    </div>
                    <div className="fname">
                            <label htmlFor="">Address</label>
                            <input type="text" id="add"/>
                    </div>
                    <div className="fname">
                            <label htmlFor="">Comments</label>
                            <input type="text"id="comment" />
                    </div>
                    <div className="fname">
                            {Key?
                            <button onClick={UpdateData}>Update</button>:
                            <button onClick={submitdata}>Submit</button>
                            
                            }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FormData
