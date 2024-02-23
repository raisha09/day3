import React, { useEffect, useState } from 'react'
import { TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import axios from 'axios';
import Add from './Add';

const View = () => {
  var[edit,setEdit]=useState(false);
  var[selected,setSelected]=useState(true);
  var [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/students").then((response) => {
      console.log(response.data)
      setData(response.data);
    })
      .catch((error) => console.log(error));
  }, []);
  const deletestudent = (id) => {
    axios.delete("http://localhost:4000/students/" + id).then(() => {
      alert("delete a row");
      window.location.reload();

    })
      .catch(() => {
        alert("could not delete the row");
      });
  }
  const editStudent=(id) => {
    axios.get("http://localhost:4000/students/" + id).then((response)=> {
      setSelected(response.data);
      setEdit(true);
  })
  .catch(()=>{
    alert("cannot edit student")
      });
    };
  return (
    <div>
      {edit?(
        <Add method="put" data={{id:selected.id,name:selected.name}}/>
      ):(

      <TableContainer>
      
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "black", fontFamily: "cursive", fontSize: "20PX" }}> Name</TableCell>
              <TableCell style={{ color: "black", fontFamily: "cursive", fontSize: "20PX" }}>Age</TableCell>
              <TableCell style={{ color: "black", fontFamily: "cursive", fontSize: "20PX" }}>Department</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((value, index) => {
              return (
                <TableRow>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.age}</TableCell>
                  <TableCell>{value.department}</TableCell>
                  <TableCell>
                    <Button  variant='contained'  onClick={() => {editStudent(value._id); }}>edit</Button>
                    
                  </TableCell>

                  <TableCell>
                    <Button variant='contained' onClick={() => { deletestudent(value._id); }}>
                      DELETE
                    </Button>
                  </TableCell>
                  {/* <TableCell>
                    <Button  variant='contained'  onClick={() => {editStudent(value._id); }}>edit</Button>
                    
                  </TableCell> */}

                </TableRow>
              )
            })}

          </TableBody>
        </Table>
      </TableContainer>
      )}
    </div>
  )
}

export default View