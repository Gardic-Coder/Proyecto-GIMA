"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, Bell, User, MessageSquare, Zap, Sparkles, Wrench, Bot, ArrowLeft, Send
} from "lucide-react";

// Definimos cómo luce un mensaje 
interface Mensaje {
  rol: 'user' | 'ia';
  texto: string;
}

export default function AsistenciaPage() {
  const [activeTab, setActiveTab] = useState<'chat' | 'diagnostico'>('chat');

  // --- ESTADOS PARA LA IA ---
  const [conversacion, setConversacion] = useState<Mensaje[]>([]);
  const [input, setInput] = useState("");
  const [enviando, setEnviando] = useState(false);

  // --- FUNCIÓN PARA CONECTAR CON LARAVEL ---
  const consultarGIMA = async () => {
    if (!input.trim() || enviando) return;

    const mensajeUsuario = input;
    setInput(""); 
    setEnviando(true);

    setConversacion(prev => [...prev, { rol: 'user', texto: mensajeUsuario }]);

    try {
      // Petición al backend de Laravel en el puerto 8000
      const response = await fetch("http://localhost:8000/api/consultar-ia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensaje: mensajeUsuario }),
      });

      const data = await response.json();

      if (data.response) {
        setConversacion(prev => [...prev, { rol: 'ia', texto: data.response }]);
      } else {
        setConversacion(prev => [...prev, { rol: 'ia', texto: "GIMA: No pude procesar esa consulta en este momento." }]);
      }
    } catch (error) {
      console.error("Error conectando con la API:", error);
      setConversacion(prev => [...prev, { rol: 'ia', texto: "Error: No hay conexión con el servidor GIMA." }]);
    } finally {
      setEnviando(false);
    }
  };

  return (
    // CAMBIO CLAVE: Usamos un div con padding ajustado para que el Layout principal lo contenga
    <div className="p-4 lg:p-8 flex flex-col gap-6 animate-in fade-in duration-500">
      
      {/* Header simplificado para integración limpia */}
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-4">
            <Link href="/dashboard" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition text-gima-navy hover:scale-110 active:scale-90">
                <ArrowLeft size={20} />
            </Link>
            <h1 className="font-microgramma text-3xl md:text-4xl text-black">Asistencia GIMA</h1>
        </div>
      </header>

      {/* Contenedor principal de la interfaz de IA */}
      <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm flex flex-col min-h-[75vh]">
        
        {/* Sub-navegación interna */}
        <div className="mb-8 bg-slate-50 rounded-2xl px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4 md:gap-12 text-xs md:text-sm font-medium text-slate-500">
              <Link href="/reportes" className="hover:text-gima-navy hover:bg-white px-3 py-2 rounded-full transition-all">Historial</Link>
              <button className="hover:text-gima-navy hover:bg-white px-3 py-2 rounded-full transition-all">Generar Reporte</button>
              <button className="hover:text-gima-navy hover:bg-white px-3 py-2 rounded-full transition-all">Programados</button>
            </div>
            
            <div className="bg-gima-navy text-white px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-md">
              <Sparkles size={14} /> Asistencia Activa
            </div>
        </div>

        {/* Tabs de modo */}
        <div className="px-4 flex gap-8 border-b border-slate-100 mb-6">
          <button 
            onClick={() => setActiveTab('chat')}
            className={`pb-3 flex items-center gap-2 transition-all border-b-2 ${
              activeTab === 'chat' 
                ? "text-gima-navy font-bold border-gima-navy" 
                : "text-slate-400 border-transparent"
            }`}
          >
            <MessageSquare size={18} /> Chat
          </button>
          
          <button 
             onClick={() => setActiveTab('diagnostico')}
             className={`pb-3 flex items-center gap-2 transition-all border-b-2 ${
              activeTab === 'diagnostico' 
                ? "text-gima-navy font-bold border-gima-navy" 
                : "text-slate-400 border-transparent"
            }`}
          >
            <Zap size={18} /> Diagnóstico
          </button>
        </div>

        {/* Área de contenido dinámico */}
        <div className="flex-1 flex flex-col overflow-hidden px-2">
           
           {activeTab === 'chat' ? (
             <div className="flex-1 flex flex-col h-full">
                
                {/* Ventana de Chat */}
                <div className="flex-1 bg-slate-50/50 rounded-2xl p-4 md:p-6 mb-4 border border-slate-100 flex flex-col gap-4 overflow-y-auto max-h-[450px]">
                    
                    {/* Bienvenida */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 max-w-2xl">
                       <div className="flex items-center gap-2 mb-2 text-gima-navy">
                          <Bot size={18} />
                          <span className="font-bold text-[10px] uppercase">GIMA bot</span>
                       </div>
                       <p className="text-slate-600 text-sm">
                         Bienvenido al Sistema GIMA. ¿En qué puedo apoyarte con el mantenimiento hoy?
                       </p>
                    </div>

                    {/* Mensajes de la conversación */}
                    {conversacion.map((msg, index) => (
                      <div key={index} className={`flex ${msg.rol === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-4 rounded-2xl max-w-[85%] text-sm shadow-sm ${
                          msg.rol === 'user' 
                            ? "bg-gima-navy text-white rounded-tr-none" 
                            : "bg-white text-slate-600 border border-slate-100 rounded-tl-none"
                        }`}>
                          <div className="flex items-center gap-2 mb-1 opacity-70 text-[10px] font-bold uppercase">
                            {msg.rol === 'user' ? <User size={12}/> : <Bot size={12}/>}
                            {msg.rol === 'user' ? 'Tú' : 'GIMA'}
                          </div>
                          {msg.texto}
                        </div>
                      </div>
                    ))}

                    {enviando && (
                      <div className="flex justify-start">
                        <div className="bg-white p-3 rounded-xl border border-slate-100 text-xs text-slate-400 animate-pulse">
                          GIMA está procesando...
                        </div>
                      </div>
                    )}
                </div>

                {/* Barra de entrada */}
                <div className="relative">
                   <input 
                     type="text" 
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     onKeyDown={(e) => e.key === 'Enter' && consultarGIMA()}
                     placeholder={enviando ? "Esperando a GIMA..." : "Escribe tu duda técnica..."} 
                     disabled={enviando}
                     className="w-full bg-slate-100 pl-6 pr-14 py-4 rounded-2xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-gima-navy/10 transition-all"
                   />
                   <button 
                     onClick={consultarGIMA}
                     disabled={enviando || !input.trim()}
                     className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gima-navy text-white rounded-xl hover:bg-slate-800 transition disabled:opacity-30"
                   >
                      <Send size={18} />
                   </button>
                </div>
             </div>
           ) : (
             /* Vista de diagnóstico */
             <div className="h-full flex flex-col items-center justify-center max-w-xl mx-auto py-10">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <Wrench className="text-gima-navy" size={32} />
                </div>
                <h3 className="font-microgramma text-2xl text-black mb-2">Diagnóstico de Fallas</h3>
                <p className="text-slate-500 text-sm text-center mb-8">
                    Ingresa los síntomas del equipo para recibir una guía técnica paso a paso.
                </p>
                <textarea 
                    className="w-full h-32 bg-slate-50 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-gima-navy/10 resize-none mb-4" 
                    placeholder="Ej: El motor del ventilador sobrecalienta a los 10 minutos..."
                ></textarea>
                <button className="w-full bg-gima-navy text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition active:scale-95">
                    Analizar Problema
                </button>
             </div>
           )}

        </div>
      </div>
    </div>
  );
}