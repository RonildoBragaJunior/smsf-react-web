import styled from "styled-components";

const SignUpForm = styled.div`
  width: 300px;
  background: #f8f5f4;
  margin-bottom: -60px;
  padding: 35px;
  border-radius: 3px;
  text-align: center;

  h3,
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 500;
    margin: 0;
  }

  @media (min-width: 600px) {
    width: 400px;
  }
`;

const PersonalInformationForm = styled.div`
  margin: 20px auto;
  width: 250px;
  background: #f8f5f4;
  padding: 35px;
  border-radius: 3px;
  text-align: center;

  @media (min-width: 600px) {
    width: 400px;
  }
`;

const AcceptFessForm = styled.div`
  margin: 20px auto;
  width: 200px;
  background: #f8f5f4;
  padding: 35px;
  border-radius: 3px;
  text-align: center;

  @media (min-width: 600px) {
    width: 550px;
  }
`;

const OkButton = styled.button`
  padding: 7px 23px;
  background: #11caa1;
  color: white;
  border: 2px solid #11caa1;
  box-shadow: none;
  border-radius: 4px;
  font-size: 17px;
  text-shadow: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  transition: all 0.3s;
  margin-top: 20px;
  transition: all 0.5s;
  outline: none;

  &:hover,
  &:focus {
    background: #fd7e45;
    border: 2px solid #fd7e45;
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const squirrelThrilled = styled.div`
  background-color: #44454f;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
`;

const FirstStep = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Content = styled.div`
  width: 60%;
  color: white;
  margin-top: 40px;
  margin-right: 20px;
  max-width: 480px;

  h1 {
    font-size: 45px;
    margin-bottom: 0.75em;
  }

  ul {
    padding-left: 0;
  }

  li {
    position: relative;
    padding-left: 42px;
    margin-bottom: 1em;
    min-height: 27px;
    list-style: none;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 24px;
      height: 27px;
      background: url(https://www.squirrelsuper.com.au/images/squirrels/daves-nut.svg)
        no-repeat center;
      background-size: 24px 27px;
    }
  }

  p,
  label,
  ul li {
    font-size: 18px;
    margin-bottom: 1em;
  }
`;

const AcceptFessCheck = styled.form`
    display: flex;
    align-items: flex-start;

    label {
        text-align: left;
        margin-top: 2px;
    }

    input {
        width: 25px;
        height: 25px;
        min-width: 25px;
        min-height: 25px;
        margin-right: 10px;
    }

    a {
        color: #494645;
    }
`

export {
  PersonalInformationForm,
  squirrelThrilled,
  AcceptFessCheck,
  AcceptFessForm,
  SignUpForm,
  FirstStep,
  OkButton,
  Content
};
