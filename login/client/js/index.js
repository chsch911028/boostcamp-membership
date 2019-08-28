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

  const Validator = {
    idValidate: id => {
      //1. 이미 사용중인 아이디입니다. (빨강색)

      //2. 5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다. (빨강색)
      if (id.length < 5 || id.length > 20) {
        return { message: "5~20자의 id를 입력하셔야 합니다.", result: false };
      }

      if(id)
      //3. 사용 가능한 아이디입니다. (초록색)
      return { message: "사용 가능한 아이디 입니다.", result: true };
    }

    pwdValidate: pwd => {
      //8~16자의 영문 대, 소문자, 숫자, 특수문자의 조합이어야 한다.
    }
  };

  //Load DOM
  const idInputEl = document.querySelector(`input[name="id"]`);
  const pwdInputEl = document.querySelector(`input[name="pwd"]`);
  const pwdCheckerInputEl = document.querySelector(`input[name="pwd-checker"]`);

  //Set EventHandler
  const idInputBlurEventHandler = e => {
    console.log("blur id");
    const { message, result } = Validator.idValidate(e.currentTarget.value);
    const fontColor = result ? "green" : "red";
    const hintEl = e.currentTarget.parentElement.nextElementSibling;
    hintEl.innerHTML = `<span class="${fontColor}">${message}</span>`;
  };

  const pwdInputBlurEventHandler = e => {
    console.log("blur pwd");
  };

  const pwdCheckerBlurEventHandler = e => {
    console.log("blur pwdChecker");
  };

  //ADD EventListener
  idInputEl.addEventListener("blur", idInputBlurEventHandler);
  pwdInputEl.addEventListener("blur", pwdInputBlurEventHandler);
  pwdCheckerInputEl.addEventListener("blur", pwdCheckerBlurEventHandler);
};
