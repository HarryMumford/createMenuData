function createMenuData(data) {
  let formattedOutput = [];
  let sortedByParents = {};

  data.forEach((inputEntry) => {
    if (typeof inputEntry != 'string') {
      return;
    }

    const parent = inputEntry.split('/')[0];
    const child = inputEntry.split('/')[1];

    if (!child) {
      return;
    }

    if (sortedByParents[parent]) {
      sortedByParents[parent].push(child);
    } else {
      sortedByParents[parent] = [child];
    }
  });

  const parents = Object.keys(sortedByParents);

  parents.forEach((parent) => {
    formattedOutput.push({ title: parent, data: sortedByParents[parent] });
  });

  return formattedOutput;
}

module.exports = createMenuData;
