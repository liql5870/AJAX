getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status <= 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.prepend(style);
        console.log("下载完成");
      } else {
        alert("加载CSS失败");
      }
    }
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "2.js");
  request.onload = () => {
    console.log(request.response);

    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.append(script);
  };
  request.onerror = () => {};
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "3.html");
  request.onreadystatechange = () => {
    console.log(request.readyState);
  };
  request.send();
};
getXML.onclick = () => {
  console.log("domn");
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyStatus === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getJSON.onclick = () => {
  console.log("fuck");
  const request = new XMLHttpRequest();
  request.open("GET", "5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      console.log(object);
    }
  };
  request.send();
};
