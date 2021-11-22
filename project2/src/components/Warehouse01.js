import { storage } from "../components/config/config";


    const [files, setFiles] = useState();

useEffect(() => {
    const fetchImages = async () => {
      let result = await storage.ref().child("gs://preprojeck.appspot.com/images").listAll();
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


