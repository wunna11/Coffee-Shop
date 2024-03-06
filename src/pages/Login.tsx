import { FormProvider, useForm } from "react-hook-form";
import AuthBgLayout from "../components/AuthBgLayout";
import TextInput from "../components/Form/TextInput";
import Button from "../components/Button";
import PasswordInput from "../components/Form/PasswordInput";
import { userLoginSchema } from "../utils/validation/userLoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthentication } from "../services/authService";
import { useAppDispatch } from "../app/hooks";
import { apiLogin } from "../features/Auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const auth = useAuthentication();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(userLoginSchema),
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = (data: any) => {
    dispatch(apiLogin(data));
    console.log('reacth')
  };

  useEffect(() => {
    if (auth) {
      console.log('auth', auth)
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <div>
      <AuthBgLayout>
        <div>
          <div className="mb-8">
            <h3 className="font-semibold text-3xl text-primary-700">
              Sign In{" "}
            </h3>
            <p className="text-primary-800 mt-3">
              Please sign in with your employee account.
            </p>
          </div>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                id="username"
                label="Username"
                placeholder="Enter your username"
                type="text"
                requiredField
              />

              <PasswordInput
                id="password"
                label="Password"
                placeholder="Enter your password"
                requiredField
              />

              <Button title="Sign In" type="submit" />
            </form>
          </FormProvider>
        </div>
      </AuthBgLayout>
    </div>
  );
}
