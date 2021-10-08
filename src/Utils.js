import SampleImage1 from './images/sample1.jpg'
import SampleImage2 from './images/sample2.png'
import SampleImage3 from './images/sample3.png'
import SampleImage4 from './images/sample4.png'
import SampleImage5 from './images/sample5.png'
import SampleImage6 from './images/sample6.png'
import SampleImage7 from './images/sample7.png'
import SampleImage8 from './images/sample8.png'

export function getImagList(){

    let imageList =[];
    imageList.push(SampleImage1);
    imageList.push(SampleImage2);
    imageList.push(null);
    imageList.push(SampleImage3+1);
    imageList.push(SampleImage4);
    imageList.push(SampleImage5);
    imageList.push(null);
    imageList.push(SampleImage6);
    imageList.push(SampleImage7);
    imageList.push(SampleImage8);
        // for(let count =1; count<=8; count++){
        //     imageList.push(SampleImage+count)
        // }
    return imageList;

}