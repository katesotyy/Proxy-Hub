const fs = require('fs');
const axios = require('axios');
const path = require('path');

// 设置下载文件的 URL 和自定义文件名
const fileUrl = 'https://subconverters.com/sub?target=clash&url=https%3A%2F%2Fraw.githubusercontent.com%2Fpeasoft%2FNoMoreWalls%2Fmaster%2Flist.yml%7Chttps%3A%2F%2Fraw.githubusercontent.com%2Froosterkid%2Fopenproxylist%2Fmain%2FV2RAY_BASE64.txt%7Chttps%3A%2F%2Fwww.xrayvip.com%2Ffree.yaml&insert=true&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR_Online_Full_AdblockPlus.ini&filename=Proxy-Hub&append_type=true&tls13=true&sort=true&emoji=true&list=false&xudp=true&udp=true&tfo=true&expand=true&scv=false&fdn=true&new_name=true'; // 替换为你的链接
const customFileName = 'Proxy-Hub.yml'; // 自定义重命名文件名

async function downloadFile() {
  try {
    const response = await axios({
      url: fileUrl,
      method: 'GET',
      responseType: 'stream',
    });

    // 创建写入流，将文件保存为自定义的文件名
    const writer = fs.createWriteStream(path.resolve(__dirname, customFileName));

    response.data.pipe(writer);

    writer.on('finish', () => {
      console.log(`File downloaded and saved as ${customFileName}`);
    });

    writer.on('error', (err) => {
      console.error(`Error downloading the file: ${err.message}`);
    });
  } catch (error) {
    console.error(`Failed to download the file: ${error.message}`);
  }
}

// 执行下载文件逻辑
downloadFile();
