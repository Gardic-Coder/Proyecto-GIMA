"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, User, Lock, Mail, ArrowRight, KeyRound } from "lucide-react"
import { authService } from "@/services/authService" // Asegúrate de que el nombre del archivo sea correcto

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // 1. CORRECCIÓN: Nombres exactos que pide el AuthController de Laravel
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    pin: "",
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false) // 2. CORRECCIÓN: Booleano real

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === "pin") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      if (onlyNums.length > 4) return;
      setFormData((prev) => ({ ...prev, [name]: onlyNums }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setError("")
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    // 3. CORRECCIÓN: Validamos contra las variables correctas
    if (formData.password !== formData.password_confirmation) {
      setError("Las contraseñas no coinciden")
      return
    }

    if (formData.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres")
      return
    }

    if (formData.pin.length !== 4) {
      setError("El PIN de seguridad debe ser exactamente de 4 dígitos")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      await authService.register(formData);
      
      setSuccess(true);
      setTimeout(() => {
        router.push("/auth/login"); 
      }, 2000);

    } catch (err: any) {
      const backendError = err.response?.data?.message || err.response?.data?.mensaje || "Error al registrar el usuario. Intenta de nuevo.";
      
      if (err.response?.data?.errors) {
        const firstError = Object.values(err.response.data.errors)[0] as string[];
        setError(firstError[0]);
      } else {
        setError(backendError);
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex w-full h-full gap-0">
        
        {/* LADO IZQUIERDO (Se mantiene tu diseño intacto) */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#001F3F] to-[#002d5c] rounded-3xl m-8 p-8 md:p-12 flex-col justify-between text-white">
          <div>
            <div className="mb-8 md:mb-12">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2L8 15L20 28L32 15L20 2Z" fill="#001F3F" stroke="#001F3F" strokeWidth="2" />
                  <path d="M14 15L20 8L26 15" fill="none" stroke="#001F3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-xs md:text-sm font-semibold mt-2 text-gray-300">GIMA</p>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 md:mb-12">
              Gestión<br />Inteligente de<br />Activos y<br />Mantenimiento
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
              <div className="inline-block p-2 md:p-3 bg-white/10 rounded-lg mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <p className="text-xs md:text-sm font-semibold">Control</p>
            </div>
          </div>
        </div>

        {/* LADO DERECHO - FORMULARIO */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-8 py-6 md:py-0 overflow-y-auto md:overflow-y-visible">
          <div className="w-full max-w-md">
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Crear cuenta</h2>
              <p className="text-sm md:text-base text-gray-600">
                Regístrate para comenzar a usar GIMA
              </p>
            </div>

            {/* MENSAJE DE ÉXITO */}
            {success && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium text-center">
                ¡Registro exitoso! Redirigiendo...
              </div>
            )}

            {/* MENSAJE DE ERROR */}
            {error && !success && (
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
                    name="name" // Cambiado a name
                    value={formData.name}
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

              {/* 4. CORRECCIÓN: CAMPO DEL PIN AÑADIDO A LA UI */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">PIN de Recuperación</label>
                <div className="relative">
                  <KeyRound className="absolute left-4 top-3 md:top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="pin"
                    value={formData.pin}
                    onChange={handleInputChange}
                    placeholder="4 dígitos (Ej: 1234)"
                    className="w-full pl-12 pr-4 py-2 md:py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-sm md:text-base tracking-widest"
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
                    placeholder="Mínimo 8 caracteres"
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
                    name="password_confirmation" // Cambiado a password_confirmation
                    value={formData.password_confirmation}
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

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3 px-6 rounded-full transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base mt-6"
              >
                {isLoading ? "Creando cuenta..." : "Crear cuenta"}
                {!isLoading && <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />}
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