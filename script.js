var url = '';

function download(cb) {
    setTimeout(() => {
        console.log('download started');
        url = 'https://th.bing.com/th/id/Ra18dd374597fc779945e1c402e5862c8?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw'
        console.log('download ended');
        cb(url)

    }, 2000)
}
download(display);

function display(data) {
    var img = document.createElement('img');
    img.src = data;
    img.alt = 'no img';
    

    document.querySelector('div').append(img);

}