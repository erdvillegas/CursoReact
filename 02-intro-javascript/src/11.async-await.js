

const getImage = async() =>{

    try {
        const apiKey = '';
        const resp = await fetch(`=${apiKey}`);
        const {data} = await resp.json();
    
        
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    
        console.log(data);
    } catch (error) {
        console.log({error});
    }
};

getImage();