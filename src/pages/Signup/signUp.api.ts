import { IAuthProps } from '../../types';

export const signUp = async (userinfo: IAuthProps): Promise<{ email: string; password: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ email: userinfo.email, password: userinfo.password });
      reject({ message: 'Bad password', status: 401 });
    }, 1000);
  });
};
