import { IAuthProps, IUser } from '../../types';

export const auth = async (userinfo: IAuthProps): Promise<IUser> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userinfo.password === '1231aS' && userinfo.email === 'sergei-2001.07.19@mail.ru') {
        resolve({ email: 'sergei-2001.07.19@mail.ru' });
      } else {
        reject({ message: 'Bad password', status: 401 });
      }
    }, 1000);
  });
};
