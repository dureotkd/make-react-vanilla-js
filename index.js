const React = {
  state: null,
  render: function () {
    const app = document.getElementById("root");
    app.innerHTML = App();
  },
  useState: function (initState) {
    if (this.state === null) {
      this.state = initState;
    }

    const setState = (newState) => {
      this.state = newState;
      this.render();
    };

    return [this.state, setState];
  },
};

function App() {
  let [count, setCount] = React.useState(1);

  window.increment = () => {
    setCount((count += 1));
  };

  return `
    <div style='display:flex; flex-direction:column; width:200px;'>
        <strong>COUNT : ${count}</strong>
        <button type="button" onClick="increment();" >증가</button>
    </div>`;
}

React.render();
