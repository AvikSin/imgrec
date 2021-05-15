//https://teachablemachine.withgoogle.com/models/_aQ8IEYAY/

Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:' , ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_aQ8IEYAY/.model.json',modelLoded);

function modelLoded()
{
    console.log('modelLoded');
}

function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotresult);
}

function gotresult(error,result)
{
    if(error){
        console.error(error);
    }
    else{console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
        }
}