import { useState } from "react";
import { RcFile } from "antd/es/upload";
import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { IStorageImageOutput } from "@/shared/config/interfaces/IStorageImageOutput.ts";

const useImageStorage = () => {
  const [image, setImage] = useState<IStorageImageOutput | null>(null);
  const [loading, setLoading] = useState(false);

  const setImageInStorage = async (file: RcFile) => {
    setLoading(true);
    try {
      const res: AxiosResponse<IStorageImageOutput> = await $api.post(
        "/api/storage",
        { file },
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        },
      );
      setImage(res.data);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  const deleteImage = async () => {
    if (image) {
      await $api.delete("/api/storage", {
        params: {
          uuid: image.uuid,
        },
      });
      setImage(null);
    }
  };

  return { image, setImageInStorage, deleteImage, loading };
};

export default useImageStorage;
