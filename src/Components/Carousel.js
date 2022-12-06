// import React, { useState, useEffect } from "react";
// import { useTransition, animated } from "react-spring";
// import "../styles.css";

// const images = [
//   "/public/data/carousel/carousel/carousel1.png",
//   "/public/data/carousel/carousel/carousel2.png",
//   "/public/data/carousel/carousel/carousel3.png",
//   "/public/data/carousel/carousel/carousel4.png",
//   "/public/data/carousel/carousel/carousel5.png",
//   "/public/data/carousel/carousel/carousel6.png"
// ];

// export default function Carousel() {
//   const [position, setPosition] = useState(0);

//   const transitions = useTransition(position, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },

//     config: { duration: 2000 }
//   });

//   useEffect(() => {
//     setInterval(() => {
//       setPosition((index) => (index + 1) ;
//     }, 3000);
//   }, []);
//   return (
//     <div>
//       {transitions((style, index) => (
//         <animated.div
//           style={{
//             position: "absolute",
//             width: "100vh",
//             height: "400px",
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//             top: "0",
//             left: "0",
//             backgroundImage:
//           }}
//         />
//       ))}
//     </div>
//   );
// }
