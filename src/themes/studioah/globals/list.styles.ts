import { css } from 'styled-components';

const list = css`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    &::before {
      display: inline-block;
      margin: 0;
    }

    line-height: 150%;
  }
`;

export default list;
