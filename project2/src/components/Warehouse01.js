import { storage } from "../components/config/config";

 // Get all the images from Storage
    const [files, setFiles] = useState();

useEffect(() => {
    const fetchImages = async () => {
      let result = await storage.ref().child("https://preprojeck-default-rtdb.firebaseio.com").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      setFiles(urls);
    };
    loadImages();
}, []);

  console.log(files);