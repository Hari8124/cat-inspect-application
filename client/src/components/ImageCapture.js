import React, { useState } from 'react';

const ImageCapture = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    fetch('/api/images', {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(data => {
        console.log('Image uploaded:', data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageCapture;
