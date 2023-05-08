
import React, { useState } from "react";
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

function AdminPage(){
  const[text,setText]=useState("")
  const upload=(text)=>{
    const url = "http://localhost:5015/upload";
fetch(url, {
    method : "POST",
    body:JSON.stringify({"data":text})
})
  }
  const readFile=(e)=>{
    console.log("file inputted ")
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const content = e.target.result;
        var doc = new Docxtemplater(new PizZip(content), {delimiters: {start: '12op1j2po1j2poj1po', end: 'op21j4po21jp4oj1op24j'}});
        var text = doc.getFullText();
        console.log(text)
        setText(text)
        upload(text)
      };
      reader.readAsBinaryString(e.target.files[0]);
    }else{
      console.log("error uploading file")
    }
  }
  return( <div>
          <input type="file" onChange={readFile}/>
  </div>
  )
}
export default AdminPage