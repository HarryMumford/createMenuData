function createMenuData(data) {
  let output = [];

  const parent = data[0].split('/')[0];
  const children = data[0].split('/')[1];

  if (!children) {
    return [];
  }

  const entry = { title: parent, data: [children] };

  output.push(entry);

  return output;
}

describe('menu Data Generator', () => {
  it('returns empty array when given no children ', () => {
    const data = ['parent1'];

    const expectedResult = [];

    const actualResult = createMenuData(data);
    expect(actualResult).toMatchObject(expectedResult);
  });

  it('returns correct data structure for single parent and single child ', () => {
    const data = ['parent1/parent1child'];

    const expectedResult = [{ title: 'parent1', data: ['parent1child'] }];

    const actualResult = createMenuData(data);
    expect(actualResult).toMatchObject(expectedResult);
  });

  it.skip('creates correct data structure ', () => {
    const data = [
      'parent1/parent1child',
      'parent1/parent1child2',
      'parent2/parent2child',
      'parent2/parent2child2',
      'parent1/parent1child3',
      'parent3',
      'parent3/parent3child1',
      'parent4'
    ];

    const expectedResult = [
      {
        title: 'parent1',
        data: ['parent1child', 'parent1child2', 'parent1child3']
      },
      { title: 'parent2', data: ['parent2child', 'parent2child2'] },
      { title: 'parent3', data: ['parent3child1'] }
    ];

    const actualResult = createMenuData(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
});
