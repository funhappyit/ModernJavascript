var Module = Module || {};
(function (_Module) {
  var name = "NoName"; //프라이빗 변수
  function getName() {
    return name; // 프라이빗 함수
  }
  _Module.showName = function () {
    //퍼블릭 함수
    console.log(getName());
  };
  _Module.setName = function (x) {
    //퍼블릭 함수
    name = x;
  };
})(Module);
Module.setName("Tom");
Module.showName(); //->TOM
