'use server';

interface IActionState {
  isLoginTrue: boolean;
}

export const login = async (prevState: IActionState, formData: FormData) => {
  const data = {
    email: formData.get('email'),
    username: formData.get('username'),
    password: formData.get('password'),
  };

  if (!data.email) {
    return {
      isLoginTrue: false,
      errors: { email: ['Please enter the email'] },
    };
  } else if (!data.username) {
    return {
      isLoginTrue: false,
      errors: { username: ['Please enter the username'] },
    };
  } else if (data.password !== '12345') {
    return {
      isLoginTrue: false,
      errors: { password: ['wrong password'] },
    };
  }
  return {
    isLoginTrue: true,
  };
};
