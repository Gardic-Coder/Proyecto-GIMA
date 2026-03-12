"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, User, Lock, Mail, ArrowRight } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError("")
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres")
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      router.push("/dashboard")
    }, 500)
  }

  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex w-full h-full gap-0">
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#001F3F] to-[#002d5c] rounded-3xl m-8 p-8 md:p-12 flex-col justify-between text-white">
          <div>
            <div className="mb-8 md:mb-12">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 2L8 15L20 28L32 15L20 2Z" fill="#001F3F" stroke="#001F3F" strokeWidth="2" />
                  <path
                    d="M14 15L20 8L26 15"
                    fill="none"
                    stroke="#001F3F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-xs md:text-sm font-semibold mt-2 text-gray-300">GIMA</p>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 md:mb-12">
              Gestión
              <br />
              Inteligente de
              <br />
              Activos y<br />
              Mantenimiento
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
              <div className="inline-block p-2 md:p-3 bg-white/10 rounded-lg mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-xs md:text-sm font-semibold">Seguridad</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
              <div className="inline-block p-2 md:p-3 bg-white/10 rounded-lg mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-xs md:text-sm font-semibold">Eficiencia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
              <div className="inline-block p-2 md:p-3 bg-white/10 rounded-lg mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <p className="text-xs md:text-sm font-semibold">Control</p>
            </div>
          </div>
        </div>

        {/* Right side - Register form */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-8 py-6 md:py-0 overflow-y-auto md:overflow-y-visible">
          <div className="w-full max-w-md">
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Crear cuenta</h2>
              <p className="text-sm md:text-base text-gray-600">
                Regístrate para comenzar a usar GIMA
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 md:p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs md:text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-4 md:space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Nombre completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-3 md:top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Pedro Pérez García"
                    className="w-full pl-12 pr-4 py-2 md:py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Correo electrónico</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3 md:top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="pedro@ejemplo.com"
                    className="w-full pl-12 pr-4 py-2 md:py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Usuario</label>
                <div className="relative">
                  <User className="absolute left-4 top-3 md:top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="pedro_perez"
                    className="w-full pl-12 pr-4 py-2 md:py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3 md:top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Mínimo 6 caracteres"
                    className="w-full pl-12 pr-12 py-2 md:py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-sm md:text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3 md:top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Confirmar contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3 md:top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Repite tu contraseña"
                    className="w-full pl-12 pr-12 py-2 md:py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-sm md:text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-3 md:top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 border border-gray-300 rounded cursor-pointer"
                  required
                />
                <span className="text-xs md:text-sm text-gray-600">
                  Acepto los términos y condiciones
                </span>
              </label>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3 px-6 rounded-full transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base mt-6"
              >
                Crear cuenta
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </form>

            <div className="mt-4 md:mt-6 text-center">
              <p className="text-xs md:text-sm text-gray-600">
                ¿Ya tienes cuenta?{" "}
                <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
