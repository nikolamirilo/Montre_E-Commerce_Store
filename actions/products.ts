import { CloudinaryResponse } from "@/typescript/interfaces";

export async function getAllProducts() {
    try {
      const res = await fetch(`${process.env.MONGO_DB_URL!}/action/find`, {
        cache: "no-cache",
        method: "POST",
        headers: {
          "api-key": process.env.MONGO_DB_API_KEY!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dataSource: "MainCluster",
          database: "Store",
          collection: "products",
        }),
      });
  
      if (!res.ok) {
        console.log(res);
      }
      return res.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  export async function uploadImagesToCloudinary (files:any, images:string[]) {
    const formData = new FormData();
    for (let i = 0; i <= files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "products");
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/montre-cloudinary/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(`Image upload failed: ${response.statusText}`);
        }

        // Now, extract and parse the JSON response correctly
        const uploadImage: CloudinaryResponse = await response.json();
        images.push(uploadImage.url);
        formData.delete("file");
        // Rest of your code here, if needed
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }
