import axios from "axios"

export const serverApi = async () => {

    try {
        const serApi_Data = await axios(`http://localhost:3000/posts`);
        console.log(serApi_Data.data);

        return serApi_Data.data
    } catch (err) {
        return err
    }

}