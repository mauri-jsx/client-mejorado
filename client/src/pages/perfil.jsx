import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload, Row, Col } from "antd";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const Perfil = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      handlePreview(newFileList[0]);
    }
  };
  const uploadButton = (
    <div style={{ textAlign: "center" }}>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <div>
      <h1 className="text-3xl font-bold" style={{ textAlign: "center" }}>
        Configuración de perfil
      </h1>
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col
          span={8}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
            marginTop: "100px",
          }}
        >
          {previewImage && (
            <Image
              width={200}
              height={200}
              src={previewImage}
              alt="Imagen de perfil"
              style={{
                borderRadius: "50%",
                border: "2px solid #f0f0f0",
                marginBottom: 20,
              }}
            />
          )}
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-circle"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            showUploadList={false}
          >
            {fileList.length === 0 ? uploadButton : null}
          </Upload>
        </Col>
        <Col span={16} />
      </Row>
    </div>
  );
};

export default Perfil;
