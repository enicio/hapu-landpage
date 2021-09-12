import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SubscribeForm } from '../components';
import axios from "axios";

jest.mock("axios");

describe("Form component", () => {

  const setup = () => {
    const utils = render(<SubscribeForm />)
    const inputName = utils.getByLabelText('name-input')
    const inputEmail = utils.getByLabelText('email-input')
    const buttonSubmit = utils.getByRole('button')
    const handleSubmit = jest.fn()
    return {
      inputName,
      inputEmail,
      buttonSubmit,
      handleSubmit,
      ...utils,
    }
  }

  it("test if subscribe was sucessfull.", async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve({status: 200}));
    const {inputEmail, inputName, buttonSubmit } = setup()
    fireEvent.change(inputEmail, {target: {value: 'arthur@gdmdg.com'}})
    fireEvent.change(inputName, {target: {value: 'Arthur Dent'}})
    fireEvent.click(buttonSubmit)
    const linkElement = await waitFor(() => screen.getByText(/Sending.../i));
    expect(linkElement).toBeInTheDocument();

    const successesPage = await waitFor(() => screen.getByText(/Thanks form subscribe!/i));
    expect(successesPage).toBeInTheDocument();
    expect(axios.post).toHaveBeenCalledTimes(1);
  })

  it("test if subscribe was error.", async () => {
    axios.post.mockImplementationOnce(() =>
      Promise.reject({error:{ response: 500}}),
    );

    const {inputEmail, inputName, buttonSubmit } = setup()
    fireEvent.change(inputEmail, {target: {value: 'arthur@gdmdg.com'}})
    fireEvent.change(inputName, {target: {value: 'Arthur Dent'}})
    fireEvent.click(buttonSubmit)
    const linkElement = await waitFor(() => screen.getByText(/Sending.../i));
    expect(linkElement).toBeInTheDocument();

    const successesPage = await waitFor(() => screen.getByText(/Somethings goes wrong, try again in a few minutes./i));
    expect(successesPage).toBeInTheDocument();
    expect(axios.post).toHaveBeenCalledTimes(1);
  })

})