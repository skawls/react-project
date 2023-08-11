# React

야무님께서 강의하신 내용을 바탕으로 코드를 작성해 보았습니다.

컨트롤러 jsx파일에서 펑션으로 버튼 이벤트를 주고 import(trafficLight)로 연결하고
trafficLight에서 props를 적고 리턴값으로 버튼타입을 적었습니다.

```
function TraffcLight() {
  return (
    <div role="group" className="container">
      <Button 
        direction={'stop'}
        label={'멈춰!'}
      />
    </div>
  );
}

export default TraffcLight;
```

