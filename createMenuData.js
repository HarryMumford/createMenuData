function createMenuData(data) {
  let output = [];
  let parents = {};

  data.forEach((inputEntry) => {
    const parent = inputEntry.split('/')[0];
    const children = inputEntry.split('/')[1];

    if (!children) {
      return [];
    }

    if (parents[parent]) {
      parents[parent].push(children);
    } else {
      parents[parent] = [children];
    }
  });

  Object.keys(parents).forEach((parent) => {
    output.push({ title: parent, data: parents[parent] });
  });

  return output;
}

module.exports = createMenuData;
