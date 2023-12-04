// import { AnyAction, RootState, ThunkAction } from 'getStore';
// import { getEmailExist } from './signupForm.api';
// import { setEmailExist, setEmailExistError } from './signupForm.slice';

// export const checkIsEmailExist =
//   (
//     email: string,
//     userId: string,
//   ): ThunkAction<any, RootState, unknown, AnyAction> =>
//   async (dispatch) => {
//     try {
//       const response = await getEmailExist(email, userId);
//       await dispatch(setEmailExist(response));
//       return response;
//     } catch (error: any) {
//       await dispatch(setEmailExistError(error?.request?.response));
//     }
//   };
