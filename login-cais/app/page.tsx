"use client";

import { FormEvent, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErro("");

    if (!email || !senha) {
      setErro("Preencha seu e-mail e sua senha.");
      return;
    }

    // Futuramente:
    // Aqui será feita a chamada para a API do CAIS.

    console.log({
      email,
      senha,
    });
  }

  return (
    <main className="login-page">
      <section className="login-container">

        {/* Logo */}
        <div className="brand">
          <div className="brand-symbol">
            <span></span>
          </div>

          <div>
            <h1>CAIS</h1>
            <p>onde pessoas, empresas e projetos atracam</p>
          </div>
        </div>

        {/* Card */}
        <div className="login-card">

          <div className="login-header">
            <h2>Bem-vindo de volta</h2>

            <p>
              Entre na sua conta para continuar
              sua jornada no CAIS.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* E-mail */}
            <div className="form-group">
              <label htmlFor="email">
                E-mail
              </label>

              <input
                id="email"
                type="email"
                placeholder="nome@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            {/* Senha */}
            <div className="form-group">
              <div className="password-label">
                <label htmlFor="senha">
                  Senha
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() => {
                    alert(
                      "A recuperação de senha será implementada."
                    );
                  }}
                >
                  Esqueci minha senha
                </button>
              </div>

              <div className="password-input">
                <input
                  id="senha"
                  type={mostrarSenha ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setMostrarSenha(!mostrarSenha)
                  }
                  aria-label={
                    mostrarSenha
                      ? "Ocultar senha"
                      : "Mostrar senha"
                  }
                >
                  {mostrarSenha ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            {/* Erro */}
            {erro && (
              <div className="error-message" role="alert">
                <span>!</span>
                {erro}
              </div>
            )}

            {/* Entrar */}
            <button
              type="submit"
              className="login-button"
            >
              Entrar
            </button>

          </form>

          <div className="login-footer">
            <span>Primeiro acesso?</span>

            <button
              type="button"
              onClick={() =>
                alert("Fluxo de primeiro acesso.")
              }
            >
              Ative sua conta
            </button>
          </div>

        </div>

        <p className="copyright">
          © 2026 CAIS
        </p>

      </section>
    </main>
  );
}