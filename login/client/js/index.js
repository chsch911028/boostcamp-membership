window.onload = function() {
  const HttpRequest = {
    getXMLHttpRequest: () => {
      //브라우저가 IE일 경우 XMLHttpRequest 객체 구하기
      if (window.ActiveXObject) {
        //Msxml2.XMLHTTP가 신버전이어서 먼저 시도
        try {
          return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
          try {
            return new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e1) {
            return null;
          }
        }
      }

      //IE 외 파이어폭스 오페라 같은 브라우저에서 XMLHttpRequest 객체 구하기
      if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
      }

      return null;
    },
    get: url => {
      const httpRequest = getXMLHttpRequest();
      httpRequest.open("GET", `${url}`, true);
      httpRequest.send(null);
    },
    post: (url, params) => {
      try {
        const paramsJSON = JSON.stringify(params);
        const httpRequest = getXMLHttpRequest();
        httpRequest.open("GET", `${url}`, true);
        httpRequest.send(paramsJSON);
      } catch (e) {
        throw new Error(e.message);
      }
    }
  };
};
