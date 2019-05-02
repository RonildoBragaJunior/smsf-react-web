import styled from "styled-components";

const Toolbar = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #262b34;
  display: flex;
  justify-content: center;
  padding: 5px 20px;
  box-sizing: border-box;
  z-index: 90;

  .limit-clearfix {
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    height: 100%;
  }

  .logo {
    height: 100%;
  }

  @media (max-width: 499px) {
    .DesktopOnly {
      display: none;
    }

    .limit-clearfix {
        justify-content: center;
    }

  }
`;

export default Toolbar;
