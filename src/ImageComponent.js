import { useState } from 'react';
import { getImagList } from './Utils'
import DefaultImage from '../src/images/defaultImage.jpg'
function ImageComponent() {
    const [imageList] = useState(getImagList());
    console.log("imageList =>>>>", imageList)
    

    return (<div>
            <div style={{width:'100%'}}>
        {imageList.map((item, index) => {
            return (
                    <img
                        style={{ width: '45%', height: '200px', margin:'10px', marginLeft:index%2==1?"40px":"60px" }}
                        src={item!=null? item : DefaultImage}
                        onError={(event)=>{
                                    event.target.src=DefaultImage
                        }}
                    />
            )
        })

        }
        </div>

    </div>)
}

export default ImageComponent;
