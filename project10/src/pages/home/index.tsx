
import React, { useEffect, useState, useRef } from 'react';

import { Carousel, Modal, WingBlank } from 'antd-mobile';
import { ComponentProps } from '@/typings';

const Home: React.FC<ComponentProps> = props => {
  const [data, setData] = useState([]);
  const [index,setIndex] = useState(0)
  const getData = async () => {
    let data = await fetch('https://cnodejs.org/api/v1/topics').then(res => res.json());
    setData(data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleClick = (type)=>{
    console.log(index,'index');
    setIndex((val)=>{
      if(type=='add'&&val<data.length){
      return  val+1
      }
      if(type=='sub' &&val!=0){
      return  val-1

      }else{
        alert('当前为第一个')
      return 0
      }
    })
  }
  return (
    <div>
      <h1>CNode：Node.js专业中文社区 </h1>
    <div style={{height: '600px',overflow: 'auto',border: '1px solid #f60'}}>
      <div dangerouslySetInnerHTML={{ __html: data[index]?.content }}></div>

    </div>
  <div style={{display: 'flex',justifyContent: 'center'}}>
  <button style={{marginRight:20}} onClick={()=>handleClick('add')}>+</button>
{  data[index]?.title}

    <button onClick={()=>handleClick('sub')}>-</button>
  </div>

    </div>
  );
};

export default Home;
