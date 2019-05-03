import styled from "styled-components";

const NavItem = styled.li`
  margin: 10px 5px;
  box-sizing: border-box;
  display: block;
  width: 100%;

  a {
    color: #fd7e45;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    transition: all .3s;

    &:hover,
    &:active,
    &.active {
      color: white;
    }
  }

  @media (min-width: 500px) {
    margin: 5px;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;

    a {
      padding: 10px 20px;
      border-radius: 30px;

      &:hover,
      &:active,
      &.active {
        background-color: #fd7e45;
      }
    }
  }
`;

export default NavItem;