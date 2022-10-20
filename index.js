const React = {
  handlerState: {
    state: [],
    currentStateKey: 0,
  },
  handlerEffect: {
    currentEffectKey: 0,
  },
  render: function () {
    console.log(this.handlerState);

    const app = document.getElementById("root");
    app.innerHTML = App();
    this.handlerState.currentStateKey = 0;
  },
  useEffect: function (func, depandencies) {
    if (this.handlerEffect.currentEffectKey === 0) {
      this.handlerEffect.currentEffectKey += 1;
      func();
    }
  },
  useState: function (initState) {
    const state = this.handlerState.state;
    const currentStateKey = this.handlerState.currentStateKey;

    if (state.length === currentStateKey) {
      this.handlerState.state.push(initState);
    }

    const setState = (newState) => {
      this.handlerState.state[currentStateKey] = newState;
      this.render();
    };

    this.handlerState.currentStateKey += 1;

    return [state[currentStateKey], setState];
  },
};

function Cat() {
  let [cat, setCat] = React.useState("고양이");

  window.eat = () => {
    setCat(cat + "밥먹는중~");
  };

  return `
    <div style='display:flex; flex-direction:column; width:200px;'>
        <strong>${cat}</strong>
        <button type="button" onClick="eat();" >밥먹자~</button>
    </div>`;
}

function App() {
  let [count, setCount] = React.useState(1);

  window.increment = () => {
    setCount((count += 1));
  };

  return `
    <div style='display:flex; flex-direction:column; width:200px;'>
        <strong>COUNT : ${count}</strong>
        <button type="button" onClick="increment();" >증가</button>
    </div>
    ${Cat()}
    `;
}

React.render();
