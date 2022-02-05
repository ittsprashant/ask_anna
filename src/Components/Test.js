import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { render } from '@testing-library/react';
import axios from "axios";
import testing from "../assets/testing.pdf";

const Test=() =>{

    console.log('checkkarosachai')

    const practiceActivityData = [{ 'questions': '100', 'subject': 'Physics', 'marks': '75', 'time': '45', 'type': 'audio' }, { 'questions': '100', 'subject': 'Biology', 'marks': '75', 'time': '45', 'type': 'text' }, { 'questions': '100', 'subject': 'Mathematics', 'marks': '75', 'time': '45', 'type': 'audio' }]

    const date = ['Aug','sep']

    const [count, setCount] = useState()
    
    
    const data = {'Aug':[{'day':'mon','date':'21'},{'day':'tue','date':'22'}],'sep':[{'day':'mon',"date":'15'}]}
    const [expanded, setExpanded] = React.useState(false);
    
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const uuid = "14078667";
    const board_id = 180;
    const class_id = 36;
    const learning_profile = 1;
    const content_state = 1;
    const service_group = 1;
    const category_type = 5;
    const startIndex = 1;
    const endIndex = 10;
    useEffect(()=>{
        console.log('checkkaro', count)

    },[count])
useEffect(()=>{
    axios.get(
        `http://dev-contentreport.extramarks.com/mis/getCategoryContent?uuid=${uuid}&board_id=${board_id}&class_id=${class_id}&learning_profile=${learning_profile}&content_state=${content_state}&service_group=${service_group}&start_index=${startIndex}&end_index=${endIndex}&category_type=${category_type}&bookmark_count_required=0`,
        {headers:{
          "Accept": "/",
          "token": "abc"
        }}
        ).then(res => {
          let contentList = "";
          console.log("Response is "+ res.data);
          // if(res.data.contentList){
          //   if(res.data.contentList.length < 10) setHasMore(false);
          // res.data.contentsList.forEach((content)=>{
          //   contentList += content.content_id+",";
          // })
            
        
      })
})
    // useEffect(()=>{
    //     var list1 = [1,2,3]
    //     var list2 = [4,5,6]
    //     list1.map((i,j)=>{
    //         list3.push(i)
    //     })
    //     var list3 = [...list1, list2]
    //     console.log('dekhte hain', list3)
    // })

    

    return (
        <>
        <p>test</p>

        {/* <object data="https://mscontent.xtramarx.com/content_data/suggested_project/2017/08/21/1761223/main.pdf" type="application/pdf" width="100%" height="100%">
  <p>Your web browser doesn't have a PDF plugin.
  Instead you can <a href="filename.pdf">click here to
  download the PDF file.</a></p>
</object> */}
        <object>
        <iframe class="slm-iframe" src="https://drive.google.com/file/d/1ersCtKzaSKuCfqUZ9isDr8dxe56xWES4/preview" width="90%" height="100%" allow="fullscreen" scrolling="auto"></iframe>
        {/* <iframe class="slm-iframe" src={testing} width="90%" height="400px" allow="fullscreen" scrolling="auto"></iframe> */}
        </object>

        {/* <object data="your_url_to_pdf" type="application/pdf">
    <iframe src="https://docs.google.com/viewer?url=https://mscontent.xtramarx.com/content_data/suggested_project/2017/08/21/1761223/main.pdf&embedded=true" width="90%" height="600px"></iframe>
</object> */}
        </>
    )
   }

export default Test
