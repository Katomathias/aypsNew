const BASE_URL = 'http://49.13.143.118:8005/api';


// export const getSensorData = async () => {
//     const response = await fetch(`${BASE_URL}/sensor-data/`);
//     return response.json();
// };


export const getSensorData = async (sensorData) => {
    const response = await fetch(`${BASE_URL}/sensor-data/`, {  // Ensure the correct endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sensorData),
    });
    if (!response.ok) {
        throw new Error('HTTP error! status: ${response.status}');
    }
    return response.json();
};


export const uploadImage = async (image, modelType) => {
    const formData = new FormData();
    formData.append('image', {
        uri: image.uri,
        type: 'image/jpeg',
        name: 'photo.jpg',
    });
    formData.append('model_type', modelType);

    const response = await fetch(`${BASE_URL}/upload-image/`, {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.json();
};




