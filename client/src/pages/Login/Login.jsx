import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Google from "../../img/google.png"
import Facebook from "../../img/facebook.png"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { loginStart, loginSuccess, loginFailure } from "../../redux/userSlice"
import { useNavigate } from "react-router-dom"
import { auth, provider } from "../../resources/Firebase"
import { signInWithPopup } from "firebase/auth"
import {
  Container,
  Wrapper,
  BoxSocial,
  Social,
  Image,
  BoxRegister,
  Form,
  Input,
  Button,
  Register
} from './LoginStyle'

const Login = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
      navigate("/")
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post("/auth/google", {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            console.log(res)
            dispatch(loginSuccess(res.data));
            navigate("/")
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };

  return (
    <Container>
      <Wrapper>
      <BoxSocial>
        <Social 
          onClick={signInWithGoogle}
         style={{ background: 'red' }}
        >
          <Image  src={Google} />
          Google
        </Social>
        <Social style={{ background: 'blue' }}>
          <Image src={Facebook} />
          Facebook
        </Social>
      </BoxSocial>
      <BoxRegister>
            <Form>
              <Input
                placeholder="nome"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="password"
                placeholder="senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleLogin}
              >Entrar
              </Button>
              <Register>
                <Link to='/register'>
                  Cadastrar
                </Link>
              </Register>
            </Form>
          </BoxRegister>
          </Wrapper>
    </Container>
  )
}

export default Login