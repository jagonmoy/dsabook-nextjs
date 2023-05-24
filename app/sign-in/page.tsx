'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { useAppDispatch } from '@redux/hooks';
import { useAuthUserMutation } from '@redux/slices/apiSlice';
import { userState } from '@redux/slices/userSlice';
import { useRouter } from 'next/navigation';

const SignIn = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authUser, { isLoading, isSuccess, isError }] = useAuthUserMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const response = await authUser({ username, password }).unwrap();
      dispatch(userState({
        username: username,
        accessToken: response.accessToken,
        loggedIn: 'Yes'
      }))
      localStorage.setItem('username',username);
      router.push('/')
    }
    catch (error: any) {
      console.log(error.data)
    }
  }
  return (
    <div className="root_div_sign_in">

      <div className="div_sign_in_text">
        <h2 className="sign_in_text">Sign in</h2>
      </div>

      <div className="form_div">
        <form className="space-y-6" onSubmit={(e) => submitForm(e)}>

          <div>
            <label htmlFor="username" className="label">Username</label>
            <div className="mt-2">
              <input id="username" name="username" type="text" autoComplete="username" required className="input_field" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="label">Password</label>
            <div className="mt-2">
              <input id="password" name="password" type="password" autoComplete="current-password" required className="input_field" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          <div>
            <button className="auth_button">
              {
                isLoading && (<svg aria-hidden="true" role="status" className="inline mr-2 mt-1 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                </svg>)
              }
              Sign In
            </button>
          </div>

        </form>

        <p className="redirect_paragraph">
          Not a member ? &nbsp;
          <Link href="\sign-up" className="redirect_text">
            Sign up now !
          </Link>
        </p>

      </div>

    </div>
  );
}

export default SignIn;
