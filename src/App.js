import React, { useEffect, useState } from "react";
import Gallery from 'react-photo-gallery'
import File from "./File";
import imageOne from './media/one.jpg'
import imageTwo from './media/two.jpg'
import imageThree from './media/three.jpg'
import imageFour from './media/four.jpg'
import imageFive from './media/five.jpg'
import imageSix from './media/six.jpg'
import imageSeven from './media/seven.jpg'
import imageEight from './media/eight.jpg'
import imageNine from './media/nine.jpg'
import imageTen from './media/ten.jpg'
import imageEleven from './media/eleven.jpg'
import imageTwelve from './media/twelve.jpg'
import imageThirteen from './media/thirteel.jpg'

function App() {
  const [imgList, setImgList] = useState([]);

  const photos = [
    {
      src: imageTen,
      width: 4,
      height: 3
    },
    {
      src: imageSeven,
      width: 1,
      height: 1
    },
    {
      src: imageOne,
      width: 4,
      height: 3
    },
    {
      src: imageSix,
      width: 1,
      height: 1
    },
    {
      src: imageFour,
      width: 1,
      height: 1
    },
    {
      src: imageThirteen,
      width: 4,
      height: 3
    },
    {
      src: imageFive,
      width: 1,
      height: 1
    },
    {
      src: imageOne,
      width: 4,
      height: 3
    },
    {
      src: imageThirteen,
      width: 1,
      height: 1
    },
    {
      src: imageFour,
      width: 1,
      height: 1
    },
  ];

  return (
    <div className="App">
      {/* <div className="One">
    <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
      <Masonry columnsCount={4} gutter={9}>
        <img src={imageOne} />  
        <img src={imageTwo} /> 
        <img src={imageThree} /> 
        <img src={imageSix} /> 
        <img src={imageFour} /> 
        <img src={imageTen} /> 
        <img src={imageEleven} /> 
        <img src={imageTwelve} /> 
        <img src={imageThirteen} /> 
        <img src={imageFive} /> 
        <img src={imageSeven} /> 
        <img src={imageEight} /> 
        <img src={imageNine} /> 
      </Masonry>
      </ResponsiveMasonry>
    </div> */}
      <File />
    <div className="One">
    <Gallery photos={photos} direction={"column"} />
    </div>
    </div>
  );
}
// AppRegistry.registerComponent('My360App', () => App);
export default App;
