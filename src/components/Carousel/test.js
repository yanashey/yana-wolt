const test = () => {
  let newChildren = [];
  let currentWidth = null;
  let data = [
    { id: "yana" },
    { id: "yana" },
    { id: "yana" },
    { id: "yana" },
    { id: "yana" },
    { id: "yana" }
  ];
  for (let i = 0; i < data.length; i += 2 * 2) {
    let newSlide = [];
    for (let j = i; j < i + 2 * 2; j += 2) {
      let row = [];
      for (let k = j; k < j + 2; k += 1) {
        if (k >= children.length) break;
        row.push(
          React.cloneElement(children[k], {
            key: 100 * i + 10 * j + k,
            tabIndex: -1,
            style: {
              width: `${100 / settings.slidesPerRow}%`,
              display: "inline-block"
            }
          })
        );
      }
      newSlide.push(<div key={10 * i + j}>{row}</div>);
    }
    if (settings.variableWidth) {
      newChildren.push(
        <div key={i} style={{ width: currentWidth }}>
          {newSlide}
        </div>
      );
    } else {
      newChildren.push(<div key={i}>{newSlide}</div>);
    }
  }
};
