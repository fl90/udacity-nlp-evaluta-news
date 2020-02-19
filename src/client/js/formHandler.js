function sentimentAnalysis(event){
    event.preventDefault()
    console.log("Get's called!");

    let sentence = document.getElementById("name");
    let polarity = document.getElementById("polarity");
    let subjectivity = document.getElementById("subjectivity");
    let text = document.getElementById("text");
    let polarity_confidence = document.getElementById("polarity_confidence");
    let subjectivity_confidence = document.getElementById("subjectivity_confidence");

    if(sentence && sentence.value && !(sentence.value === ""))
    {
        postData('http://localhost:8080/sentiment', {
            text: sentence.value
        }).then(function(receivedData){
            polarity.innerHTML = "Polarity: " + receivedData.polarity;
            subjectivity.innerHTML = "Subjectivity: " + receivedData.subjectivity;
            text.innerHTML = "Text: " + receivedData.text;
            polarity_confidence.innerHTML = "Polarity Confidence: " + receivedData.polarity_confidence;
            subjectivity_confidence.innerHTML = "Subjectivity Confidence: " + receivedData.subjectivity_confidence;
        })
    }
    else {
        polarity.innerHTML = "Please enter a sentence!";
    }
    

    
}

/* Function to POST data */
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });


    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}

export { sentimentAnalysis }
