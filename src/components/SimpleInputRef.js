import { useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const formSubmissionHandler = (event) => {
    // http request가 실행되면 브라우저는 새로고침된다. 그걸 방지해준다.
    event.preventDefault();

    const enteredValue = nameInputRef.current.value;

    console.log(enteredValue);

    // input 태그의 value 속성에 바인딩되는 것이 아니다. DOM에 직접 접근하여 수정했다.
    // 바람직한 방법이 아니며 지향해야 한다.
    nameInputRef.current.value = "";
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name(Ref)</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
