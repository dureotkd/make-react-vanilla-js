const React = {
  handlerState: {
    state: [],
    count: 0,
  },
  render: function () {
    const app = document.getElementById("root");
    app.innerHTML = App();
    this.handlerState.count = 0;
  },
  useState: function (initState) {
    const state = this.handlerState.state;
    const count = this.handlerState.count;

    if (state.length === count) {
      this.handlerState.state.push(initState);
    }

    const setState = (newState) => {
      this.handlerState.state[count] = newState;
      this.render();
    };

    this.handlerState.count += 1;

    return [state[count], setState];
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
