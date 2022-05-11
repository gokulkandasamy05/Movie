// import React, { useEffect, useState,useContext }from 'react';
// import {values} from './home/Home';


// const Hoc = (Component, name) =>{
//     const [data, setData] = useState('');
//   const arr = useContext(values);

//   useEffect(() => {
//     if (arr.name === undefined) {
//       return;
//     } else {
//       setData(arr.name.results);
//     }
//   }, [arr.name]);


//   return (
//     <Component data={data}></Component>
//   );
// }


// export default Hoc;