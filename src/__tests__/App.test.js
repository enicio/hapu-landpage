import { render, screen, fireEvent } from '@testing-library/react';
import { Hero, PageContent, SubscribeForm } from '../components';
import contents from '../utils/info';

describe("Hero component", () => {
  it('Render the proper text when the value in localStorage is 1', () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => 1),
      },
      writable: true
    });
    render(<Hero />);
    const linkElement = screen.getByText(/Easily create or join a local nanny share with Hapu/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Render the proper text when the value in localStorage is 0', () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => 0),
      },
      writable: true
    });
    render(<Hero />);
    const linkElement = screen.getByText(/Create the childcare you need at a price you can afford/i);
    expect(linkElement).toBeInTheDocument();
  });
})

describe("Check content of each section", () => {
  it('Section 1 content', () => {
    render(<PageContent separator={true} content={ contents.section1 } contentflux={'Left'} />);
    const linkElement = screen.getByText(/Share your home, nanny and costs/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Section 2 content', () => {
    render(<PageContent separator={true} content={ contents.section2 } contentflux={'Left'} />);
    const linkElement = screen.getByText(/Are you a parent without a nanny and looking to share?/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Section 3 content', () => {
    render(<PageContent separator={true} content={ contents.section3 } contentflux={'Left'} />);
    const linkElement = screen.getByText(/Shared payments made simple/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Section 4 content', () => {
    render(<PageContent separator={true} content={ contents.section4 } contentflux={'Left'} />);
    const linkElement = screen.getByText(/A framework built for the long term/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Section 5 content', () => {
    render(<PageContent separator={true} content={ contents.section5 } contentflux={'Left'} />);
    const linkElement = screen.getByText(/Coming soon: Nanny Share Daily Diary!/i);
    expect(linkElement).toBeInTheDocument();
  });
})

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

  it("Check if name input value is equal the typed value.", () => {
    const {inputName} = setup()
    fireEvent.change(inputName, {target: {value: 'Arthur Dent'}})
    expect(inputName.value).toBe('Arthur Dent')
  })

  it("Check if email input value is equal the typed value.", () => {
    const {inputEmail} = setup()
    fireEvent.change(inputEmail, {target: {value: 'arthur@gdmdg.com'}})
    expect(inputEmail.value).toBe('arthur@gdmdg.com')
  })

})
