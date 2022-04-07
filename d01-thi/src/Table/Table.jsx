import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'
import Button from '../Common/Button'
import Textbox from '../Form/Textbox'
import Label from '../Form/Lable'

export default function table() {
  return (
    <>   
    <div className="container" style={{padding: '50px'}}  >        
      <div className="row">
          <div className="col-4">     
            <Label value="Mã sinh viên"></Label>
            <Textbox></Textbox>
            
            <Label value="Tên sinh viên"></Label>              
            <Textbox ></Textbox>

            <Label value="Email"></Label>                         
            <Textbox></Textbox>
            
            <Button className={`btn-primary form-control mt-2`} value="Thêm" ></Button>           
          </div>
          <div className="col-8 ">
            <table className="table">
                <TableHead></TableHead>
                <TableBody></TableBody>
            </table>
          </div>             
      </div>
    </div>
</>
  )
}
