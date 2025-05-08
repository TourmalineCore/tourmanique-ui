import MetricsInfo from "./MetricsInfo";

describe(`MetricsSimilarCard`, () => {
  beforeEach(() => {
    cy.mount(<MetricsInfo isLoading={false} />);
  });
  it(`count of colors item SHOULD BE more then one and less then three`, () => {
    cy.getByData(`color`).its(`length`).should(`be.within`, 1, 3);
  });

  it(`count of emotions item SHOULD BE more then one`, () => {
    cy.getByData(`emotion`).its(`length`).should(`be.at.least`, 1);
  });

  it(`count of objects item SHOULD BE more then one`, () => {
    cy.getByData(`object`).its(`length`).should(`be.at.least`, 1);
  });

  it(`count of associations item SHOULD BE more then one`, () => {
    cy.getByData(`association`).its(`length`).should(`be.at.least`, 1);
  });
});
