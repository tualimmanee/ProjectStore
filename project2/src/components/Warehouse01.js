import * as React from 'react'
import firebase from '../config/firebase'

const Photos = () => {
  
  const [imageTab, setImageTab] = useState([]);

  useEffect(() => {
    firebase.storage()
      .ref('gs://preprojeck.appspot.com/images/')
      .listAll()
      .then(function(result) {
          result.items.forEach(function(imageRef) {
              imageRef.getDownloadURL().then(function(url) {
                  imageTab.push(url);
                  setImageTab(imageTab);
              }).catch(function(error) {
                  // Handle any errors
              });
          });
      })
      .catch((e) => console.log('Errors while downloading => ', e));
  }, []);

  return (<View>
    {imageTab.map(i => (<Image style={{height: 200, width: 200}} source={{uri: i}} />))}
  </View>);
}

export default Photos;
