import React, { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';
import { useSpring, animated } from '@react-spring/web';
import Content from './content';
import './index.css';
export default function Onload() {
    const [open, setOpen] = useState(true);
    const [ref, { width }] = useMeasure();
    const props = useSpring({ width: open ? width : 0,
      config : {
          duration:2000
  
  
      },
      
      onRest: () => setOpen(false) });
  
    useEffect(() => {
      const handleLoad = () => {
        setOpen(true);
      };
  
      window.addEventListener('load', handleLoad);
  
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, []); 
  
    return (
  
      <div  className=''>
        {open ? (
          <div ref={ref} className='main '>
            <animated.div className='fill' style={props} />
            <animated.div className='content'>{props.width.to(x => x.toFixed(0))}</animated.div>
          </div>
        ) : (
         <Content/>
        )}
      </div>
    );
  }
  