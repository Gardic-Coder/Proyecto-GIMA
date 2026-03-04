module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/config/env.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Validación y tipado de variables de entorno
__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
/**
 * envSchema - Esquema de validación Zod para variables de entorno
 *
 * Define las variables requeridas, sus formatos y valores por defecto.
 * Asegura que la aplicación falle rápido si falta configuración crítica.
 */ const envSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    // API Keys (opcionales con validación condicional)
    GROQ_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().default('').refine((val)=>!val || val.startsWith('gsk_'), {
        message: 'GROQ API key debe empezar con "gsk_" si se proporciona'
    }),
    GOOGLE_GENERATIVE_AI_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().default('').refine((val)=>!val || val.startsWith('AIza'), {
        message: 'Google API key debe empezar con "AIza" si se proporciona'
    }),
    // Node Environment
    NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'development',
        'production',
        'test'
    ]).default('development'),
    // Backend Integration
    NEXT_PUBLIC_BACKEND_API_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('')),
    BACKEND_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('')),
    NEXT_PUBLIC_DEMO_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('false').transform((val)=>val === 'true'),
    // Persistence
    NEXT_PUBLIC_ENABLE_CHAT_PERSISTENCE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('false').transform((val)=>val === 'true')
});
const env = envSchema.parse(process.env);
}),
"[project]/app/actions/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"005583b4dc93ae3eba4b82764376492602e5f41547":"loginSilent","00cd5760c5c5fed195ec1f5ba98fb18531cb5f5da4":"getAuthToken"},"",""] */ __turbopack_context__.s([
    "getAuthToken",
    ()=>getAuthToken,
    "loginSilent",
    ()=>loginSilent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
// Desactivar validación de certificados local (Herd SSL Self-Signed workaround)
if ("TURBOPACK compile-time truthy", 1) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}
/**
 * Nombre de la cookie donde se almacenará el token Sanctum
 */ const AUTH_COOKIE_NAME = 'auth_token';
async function loginSilent() {
    try {
        const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_BACKEND_API_URL || 'https://gima-backend.test';
        const loginUrl = `${baseUrl}/api/autenticacion/iniciar-sesion`;
        // ... (rest omitted to not override whole file at once, I will just replace the specific lines)
        // Credenciales de prueba solicitadas por el usuario
        const credentials = {
            email: 'tecnico@test.com',
            password: '12345678'
        };
        console.log(`[Auth] Intentando login en: ${loginUrl}`);
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`[Auth] Error de login (${response.status}):`, errorText);
            return null;
        }
        const data = await response.json();
        // Asumiendo que el backend retorna 'estado' => 'exito' y data['token']
        if (data.estado === 'exito' && data.data?.token) {
            const token = data.data.token;
            // Guardar el token en una cookie HTTP-only
            const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
            cookieStore.set(AUTH_COOKIE_NAME, token, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            });
            console.log('[Auth] Login exitoso, token guardado en cookie.');
            return token;
        }
        console.error('[Auth] Respuesta de login inesperada:', data);
        return null;
    } catch (error) {
        console.error('[Auth] Excepción en loginSilent:', error);
        return null;
    }
}
async function getAuthToken() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const tokenCookie = cookieStore.get(AUTH_COOKIE_NAME);
    return tokenCookie?.value;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    loginSilent,
    getAuthToken
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(loginSilent, "005583b4dc93ae3eba4b82764376492602e5f41547", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getAuthToken, "00cd5760c5c5fed195ec1f5ba98fb18531cb5f5da4", null);
}),
"[project]/app/config/limits.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuración Centralizada de Límites de Tamaño
 *
 * Constantes para límites de tamaño de archivos y mensajes.
 * Centralizadas para consistencia y fácil mantenimiento.
 */ // ========================================
// Server Actions & API Limits
// ========================================
/**
 * Límite de tamaño del cuerpo para Server Actions de Next.js
 * Debe coincidir con bodySizeLimit en next.config.ts
 */ __turbopack_context__.s([
    "MAX_AUDIO_SIZE_BYTES",
    ()=>MAX_AUDIO_SIZE_BYTES,
    "MAX_AUDIO_SIZE_MB",
    ()=>MAX_AUDIO_SIZE_MB,
    "MAX_IMAGE_SIZE_BYTES",
    ()=>MAX_IMAGE_SIZE_BYTES,
    "MAX_IMAGE_SIZE_MB",
    ()=>MAX_IMAGE_SIZE_MB,
    "MAX_MESSAGE_TEXT_BYTES",
    ()=>MAX_MESSAGE_TEXT_BYTES,
    "MAX_MESSAGE_TEXT_KB",
    ()=>MAX_MESSAGE_TEXT_KB,
    "MAX_PDF_SIZE_BYTES",
    ()=>MAX_PDF_SIZE_BYTES,
    "MAX_PDF_SIZE_MB",
    ()=>MAX_PDF_SIZE_MB,
    "MAX_STORED_MESSAGES",
    ()=>MAX_STORED_MESSAGES,
    "SERVER_ACTION_BODY_SIZE_BYTES",
    ()=>SERVER_ACTION_BODY_SIZE_BYTES,
    "SERVER_ACTION_BODY_SIZE_MB",
    ()=>SERVER_ACTION_BODY_SIZE_MB,
    "SUPPORTED_PDF_MIME_TYPES",
    ()=>SUPPORTED_PDF_MIME_TYPES,
    "bytesToMB",
    ()=>bytesToMB,
    "exceedsLimit",
    ()=>exceedsLimit,
    "mbToBytes",
    ()=>mbToBytes
]);
const SERVER_ACTION_BODY_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
const SERVER_ACTION_BODY_SIZE_MB = 5;
const MAX_AUDIO_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
const MAX_AUDIO_SIZE_MB = 5;
const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
const MAX_IMAGE_SIZE_MB = 5;
const MAX_PDF_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
const MAX_PDF_SIZE_MB = 10;
const SUPPORTED_PDF_MIME_TYPES = [
    'application/pdf'
];
const MAX_MESSAGE_TEXT_BYTES = 10 * 1024; // 10KB
const MAX_MESSAGE_TEXT_KB = 10;
const MAX_STORED_MESSAGES = 100;
function bytesToMB(bytes) {
    return Math.round(bytes / (1024 * 1024) * 10) / 10;
}
function mbToBytes(mb) {
    return mb * 1024 * 1024;
}
function exceedsLimit(sizeInBytes, limitInBytes) {
    return sizeInBytes > limitInBytes;
}
}),
"[project]/app/config/models.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuración de Modelos de IA
 *
 * Define los modelos disponibles para su uso en la aplicación.
 * Compartido entre cliente y servidor.
 */ /**
 * AVAILABLE_MODELS - Lista de modelos soportados
 *
 * Contiene la configuración de nombre visual y valor de API para cada modelo.
 */ __turbopack_context__.s([
    "AVAILABLE_MODELS",
    ()=>AVAILABLE_MODELS,
    "DEFAULT_MODEL",
    ()=>DEFAULT_MODEL
]);
const AVAILABLE_MODELS = [
    {
        name: 'Llama 3.1 8B',
        value: 'llama-3.1-8b-instant'
    }
];
const DEFAULT_MODEL = AVAILABLE_MODELS[0].value;
}),
"[project]/app/config/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Configuración del servidor para GIMA chatbot
/**
 * ACRONYMS_GLOSSARY - Glosario de términos técnicos
 *
 * Mapeo de siglas utilizadas en el contexto de mantenimiento de la UNEG.
 * Se utiliza para generar contexto para las IAs y normalizar terminología.
 */ __turbopack_context__.s([
    "INVENTORY_PROMPT",
    ()=>INVENTORY_PROMPT,
    "STREAM_CONFIG",
    ()=>STREAM_CONFIG,
    "SYSTEM_PROMPT",
    ()=>SYSTEM_PROMPT,
    "VOICE_PROMPT",
    ()=>VOICE_PROMPT,
    "formatGlossary",
    ()=>formatGlossary
]);
const ACRONYMS_GLOSSARY = {
    UNEG: 'Universidad Nacional Experimental de Guayana',
    UMA: 'Unidad Manejadora de Aire',
    BCA: 'Bomba Centrífuga de Agua',
    TAB: 'Tablero de Distribución Eléctrica',
    ST: 'Subestación Transformadora',
    AA: 'Aire Acondicionado (Split/Ventana)',
    GIMA: 'Gestión Integral de Mantenimiento y Activos',
    OT: 'Orden de Trabajo',
    MP: 'Mantenimiento Preventivo',
    MC: 'Mantenimiento Correctivo'
};
const formatGlossary = ()=>{
    return Object.entries(ACRONYMS_GLOSSARY).map(([acronym, meaning])=>`- **${acronym}**: ${meaning}`).join('\n');
};
const SYSTEM_PROMPT = `Eres un asistente experto en gestión de mantenimiento y activos para la Universidad Nacional Experimental de Guayana (UNEG).

Tu objetivo es ayudar a técnicos, ingenieros y personal de mantenimiento con:
- Consultas sobre equipos y su estado
- Procedimientos de mantenimiento preventivo y correctivo
- Interpretación de manuales técnicos
- Diagnóstico de fallas comunes
- Recomendaciones de repuestos

CONTEXTO DE TERMINOLOGÍA Y SIGLAS (IMPORTANTE):
La universidad utiliza códigos y siglas específicas. Úsalas para interpretar las consultas de los usuarios y expandirlas cuando sea necesario para mayor claridad:

${formatGlossary()}

Directrices:
1. Sé preciso y técnico, pero claro
2. Si un usuario usa una sigla del glosario (ej: "Falla en la UMA"), entiende a qué equipo se refiere
3. Si no estás seguro, admítelo y sugiere consultar un manual
4. Prioriza la seguridad en todas las recomendaciones
5. Usa terminología técnica apropiada
6. Proporciona pasos claros y numerados cuando sea necesario
7. Cuando el usuario pregunte sobre activos, mantenimientos, inventario o datos del sistema, usa las herramientas disponibles para consultar datos reales del backend GIMA
8. No inventes datos de activos, mantenimientos ni inventario — consulta siempre con las herramientas
9. MUY IMPORTANTE: Usa la herramienta \`consultar_activos\` para CUALQUIER consulta de equipos o activos. Si el usuario pide listados generales, no incluyas el parámetro \`tipo\`. Si el usuario especifica una categoría (ej. mobiliario o equipos), usa el parámetro \`tipo\` con el valor correspondiente ("mobiliario" o "equipo").
10. MUY IMPORTANTE: NO repitas la información devuelta por las herramientas en tu respuesta de texto (como tablas de Markdown o listas detalladas), ya que el sistema mostrará automáticamente el resultado en una tabla interactiva. 
11. Para consultas de repuestos o piezas con stock bajo (agotándose), usa siempre la herramienta \`consultar_inventario\` con el parámetro \`bajo_stock: true\`.
12. Para consultas de mantenimientos pendientes o en progreso, usa la herramienta \`consultar_mantenimientos\` con el parámetro \`estado\` correspondiente ("pendiente" o "en_progreso").
13. Para crear órdenes de trabajo, confirma los detalles con el usuario antes de ejecutar

Contexto General: La UNEG está digitalizando su sistema de mantenimiento. Actualmente muchos procesos son manuales.`;
const VOICE_PROMPT = `Actúa como una máquina de transcripción estricta para el sistema GIMA.
Tu ÚNICA función es convertir el audio en texto, palabra por palabra.

REGLAS DE ORO:
1. Escribe EXACTAMENTE lo que escuchas.
2. IMPORTANTE: Si el usuario dice palabras cortas de verificación (ej: "Prueba", "Test", "Probando", "1 2 3"), TRANSCRÍBELAS LITERALMENTE. No las filtres.
3. NO inventes, NO completes frases.
4. NO incluyas marcas de tiempo ni descripciones de ruido (ej: [silencio]).

TERMINOLOGÍA TÉCNICA:
Si y SOLO SI escuchas términos que coincidan fonéticamente con estas siglas, úsalas en mayúsculas:

${formatGlossary()}

Si el audio no es claro, escribe lo que mejor entiendas fonéticamente.`;
const INVENTORY_PROMPT = `Eres un Auditor de Inventario Experto para el sistema GIMA de la UNEG.
Tu tarea es analizar fotografías de piezas industriales, repuestos o equipos y extraer datos técnicos precisos para el catálogo.

INSTRUCCIONES DE ANÁLISIS:
1. Identifica la pieza con su nombre técnico más preciso (evita nombres genéricos).
2. Clasifícala en una categoría (Ej: Hidráulica, Eléctrica, Herramientas, EPP, Mecánica, Electrónica).
3. Estima la cantidad visible en la foto.
4. Detecta el estado físico (Nuevo, Usado, Dañado, Requiere Inspección).
5. Extrae cualquier texto visible (Números de serie, marcas, especificaciones).
6. Si reconoces la marca o modelo, inclúyelo.

TERMINOLOGÍA TÉCNICA:
${formatGlossary()}

FORMATO DE SALIDA (IMPORTANTE):
Responde SIEMPRE con un bloque de código JSON válido seguido de un breve resumen en español.

Estructura JSON requerida:
\`\`\`json
{
  "item_name": "Nombre Técnico de la Pieza",
  "category": "Categoría",
  "quantity_detected": 1,
  "condition": "Nuevo/Usado/Dañado",
  "brand": "Marca (si visible)",
  "model": "Modelo (si visible)",
  "serial_number": "S/N (si visible)",
  "specs": ["especificación1", "especificación2"],
  "notes": "Observaciones adicionales",
  "confidence": "Alta/Media/Baja"
}
\`\`\`

Después del JSON, proporciona un resumen breve como: "He identificado un/una [nombre] en estado [condición]. Se recomienda [acción]."`;
const STREAM_CONFIG = {
    maxDuration: 30,
    sendSources: false,
    sendReasoning: false
};
}),
"[project]/app/config/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Configuración centralizada del chatbot GIMA
// Importar desde aquí: import { ... } from '@/app/config'
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/limits.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/models.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/server.ts [app-route] (ecmascript)");
;
;
;
;
}),
"[project]/app/constants/messages.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Constantes de mensajes centralizadas para la aplicación
 * Extraídas de cadenas en línea para mejorar el mantenimiento y soporte i18n
 */ __turbopack_context__.s([
    "ERROR_MESSAGES",
    ()=>ERROR_MESSAGES,
    "MAX_ERROR_MESSAGE_LENGTH",
    ()=>MAX_ERROR_MESSAGE_LENGTH,
    "VOICE_MESSAGES",
    ()=>VOICE_MESSAGES
]);
const VOICE_MESSAGES = {
    // General states
    LOCAL_MODE: '🎤 Modo local activo',
    // Gemini API errors
    QUOTA_EXCEEDED: '⚡ Cuota agotada · Modo local activo',
    API_NOT_CONFIGURED: '🔑 API sin configurar · Modo local activo',
    NO_CONNECTION: '📡 Sin conexión · Modo local activo',
    TIMEOUT: '⏱️ Tiempo agotado · Modo local activo',
    AUDIO_ERROR: '🔊 Error de audio · Modo local activo',
    SERVER_ERROR: '⚠️ Error de servidor · Modo local activo',
    MODEL_NOT_AVAILABLE: '🤖 Modelo no disponible · Modo local activo',
    // Native voice errors
    PERMISSION_DENIED: '🎤 Permiso de micrófono denegado',
    BROWSER_NOT_SUPPORTED: '🌐 Navegador sin soporte de voz · Usa Chrome o Edge',
    VOICE_ERROR_PREFIX: '⚠️ Error de voz:',
    // Processing states
    PROCESSING: 'Procesando transcripción...'
};
const ERROR_MESSAGES = {
    QUOTA_EXCEEDED_DESCRIPTION: 'Has excedido el límite de solicitudes. Intenta nuevamente en unos segundos.',
    RATE_LIMIT: 'Too Many Requests',
    INVALID_REQUEST: 'Invalid request format',
    VALIDATION_ERROR: 'Validation error',
    PROCESSING_ERROR: 'Error al procesar la solicitud',
    UNKNOWN: 'Unknown error'
};
const MAX_ERROR_MESSAGE_LENGTH = 30;
}),
"[project]/app/lib/ip-utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * IP Utilities - Validación y extracción de direcciones IP
 *
 * Proporciona funciones para validar formatos de IP y extraer
 * la dirección del cliente desde headers HTTP.
 * @module ip-utils
 */ __turbopack_context__.s([
    "createInvalidIPResponse",
    ()=>createInvalidIPResponse,
    "extractClientIP",
    ()=>extractClientIP,
    "isValidIP",
    ()=>isValidIP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// ===========================================
// Constants
// ===========================================
/**
 * Regex para validar direcciones IPv4
 * Formato: xxx.xxx.xxx.xxx donde xxx es 0-255
 */ const IPV4_REGEX = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
/**
 * Regex para validar direcciones IPv6 (simplificado)
 * Soporta formato completo y abreviado con ::
 */ const IPV6_REGEX = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::(?:[0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4}$|^(?:[0-9a-fA-F]{1,4}:){1,7}:$|^(?:[0-9a-fA-F]{1,4}:){0,6}::(?:[0-9a-fA-F]{1,4}:){0,5}[0-9a-fA-F]{1,4}$/;
function isValidIP(ip) {
    if (!ip || ip === 'unknown') return false;
    return IPV4_REGEX.test(ip) || IPV6_REGEX.test(ip);
}
function extractClientIP(req, options) {
    const forwardedFor = req.headers.get('x-forwarded-for');
    // x-forwarded-for puede tener múltiples IPs separadas por coma
    if (forwardedFor) {
        const firstIP = forwardedFor.split(',')[0].trim();
        if (isValidIP(firstIP)) return firstIP;
    }
    const realIP = req.headers.get('x-real-ip');
    if (realIP && isValidIP(realIP)) return realIP;
    // Permitir localhost en desarrollo
    if (options?.allowLocalhost) return 'localhost';
    return null;
}
function createInvalidIPResponse() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Invalid or missing client IP',
        message: 'Unable to identify client. Please try again or contact support.'
    }, {
        status: 400
    });
}
}),
"[project]/app/lib/logger.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Logger Centralizado
 *
 * Proporciona logging estructurado con diferentes niveles de severidad.
 * Filtra logs automáticamente basado en NODE_ENV y proporciona
 * hooks para servicios de logging externos (Sentry, Datadog, etc.)
 */ __turbopack_context__.s([
    "logger",
    ()=>logger
]);
class Logger {
    /**
   * Determina si un nivel de log debería registrarse basado en el entorno
   * @param level
   */ shouldLog(level) {
        if ("TURBOPACK compile-time truthy", 1) return true; // Always log on server
        //TURBOPACK unreachable
        ;
    }
    /**
   * Función central de logging
   * @param level
   * @param message
   * @param context
   */ log(level, message, context) {
        if (!this.shouldLog(level)) return;
        const timestamp = new Date().toISOString();
        const logObject = {
            timestamp,
            level,
            message,
            ...context
        };
        // In production, this would send to external service
        if (("TURBOPACK compile-time value", "development") === 'production') {
        // TODO: Integrate with Sentry or similar
        // Sentry.captureMessage(message, { level, extra: context });
        }
        // Console output with appropriate method
        const consoleMethod = console[level] || console.log;
        consoleMethod(JSON.stringify(logObject, null, 2));
    }
    /**
   * Registra información de debug (solo en desarrollo)
   * @param message
   * @param context
   */ debug(message, context) {
        this.log('debug', message, context);
    }
    /**
   * Registra mensajes informativos
   * @param message
   * @param context
   */ info(message, context) {
        this.log('info', message, context);
    }
    /**
   * Registra mensajes de advertencia
   * @param message
   * @param context
   */ warn(message, context) {
        this.log('warn', message, context);
    }
    /**
   * Registra mensajes de error con objeto Error opcional
   * @param message
   * @param error
   * @param context
   */ error(message, error, context) {
        this.log('error', message, {
            ...context,
            error: error?.message,
            stack: error?.stack
        });
    }
}
const logger = new Logger(); /**
 * Example usage:
 *
 * logger.debug('User clicked button', { component: 'ChatInput', action: 'submit' });
 * logger.info('Chat message sent', { messageId: '123', length: 50 });
 * logger.warn('Rate limit approaching', { remaining: 2, limit: 20 });
 * logger.error('Failed to send message', error, { component: 'useChat', action: 'sendMessage' });
 */ 
}),
"[project]/app/components/features/chat/utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Chat Utilities - Funciones de utilidad para el procesamiento de mensajes
 *
 * Este módulo contiene la lógica de sanitización y transformación de mensajes.
 * Separado del API route para mejor testabilidad y reutilización.
 */ __turbopack_context__.s([
    "filterEmptyMessages",
    ()=>filterEmptyMessages,
    "hasValidContent",
    ()=>hasValidContent,
    "sanitizeForModel",
    ()=>sanitizeForModel,
    "sanitizeMessages",
    ()=>sanitizeMessages
]);
/**
 * Extrae el contenido de texto de un mensaje
 *
 * Maneja los diferentes formatos que puede tener el contenido:
 * - String directo
 * - Objeto con propiedad `text`
 * - Objeto con array de `parts` que contiene partes de texto
 * @param content - El contenido del mensaje en cualquier formato válido
 * @param parts - Array opcional de partes del mensaje
 * @returns El texto extraído o string vacío si no se encuentra
 */ function extractTextContent(content, parts) {
    // Caso 1: Content es un string directo
    if (typeof content === 'string') {
        return content;
    }
    // Caso 2: Content es un objeto con propiedad text
    if (content && typeof content === 'object' && 'text' in content && content.text) {
        return content.text;
    }
    // Caso 3: Content es un objeto con parts
    if (content && typeof content === 'object' && 'parts' in content && content.parts) {
        const textPart = content.parts.find((p)=>p.type === 'text');
        if (textPart) {
            return textPart.text;
        }
    }
    // Caso 4: Hay parts en el nivel del mensaje
    if (parts && parts.length > 0) {
        const textPart = parts.find((p)=>p.type === 'text');
        if (textPart) {
            return textPart.text;
        }
    }
    // Fallback: string vacío
    return '';
}
function sanitizeMessages(rawMessages) {
    return rawMessages.map((msg)=>{
        const textContent = extractTextContent(msg.content, msg.parts);
        return {
            id: msg.id || crypto.randomUUID(),
            role: msg.role,
            content: textContent,
            parts: msg.parts || [],
            createdAt: msg.createdAt
        };
    });
}
function sanitizeForModel(rawMessages) {
    return rawMessages.map((msg)=>({
            role: msg.role,
            content: extractTextContent(msg.content, msg.parts)
        })).filter((msg)=>msg.content.trim().length > 0);
}
function hasValidContent(message) {
    // UIMessage tiene parts, necesitamos extraer el contenido de texto
    const textPart = message.parts?.find((p)=>typeof p === 'object' && p !== null && 'type' in p && p.type === 'text');
    const content = textPart?.text || '';
    return content.trim().length > 0;
}
function filterEmptyMessages(messages) {
    return messages.filter(hasValidContent);
}
}),
"[project]/app/lib/schemas/backend-response.schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Schemas Zod para respuestas del backend Laravel (GIMA API)
 *
 * Incluye:
 * - Schema genérico de paginación (LengthAwarePaginator de Laravel)
 * - Schemas de cada entidad basados en los modelos Eloquent
 */ __turbopack_context__.s([
    "activoSchema",
    ()=>activoSchema,
    "articuloSchema",
    ()=>articuloSchema,
    "calendarioSchema",
    ()=>calendarioSchema,
    "categoriaActivosSchema",
    ()=>categoriaActivosSchema,
    "direccionSchema",
    ()=>direccionSchema,
    "laravelPaginatedSchema",
    ()=>laravelPaginatedSchema,
    "mantenimientoSchema",
    ()=>mantenimientoSchema,
    "proveedorSchema",
    ()=>proveedorSchema,
    "reporteSchema",
    ()=>reporteSchema,
    "repuestoSchema",
    ()=>repuestoSchema,
    "ubicacionSchema",
    ()=>ubicacionSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
function laravelPaginatedSchema(itemSchema) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(itemSchema),
        links: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            first: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
            last: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
            prev: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
            next: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional()
        }).optional(),
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            current_page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
            last_page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            per_page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
            total: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        })
    });
}
const direccionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    estado: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    ciudad: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    sector: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    calle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    sede: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional()
});
const ubicacionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    direccion_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    edificio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    piso: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    salon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    direccion: direccionSchema.optional()
});
const articuloSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    tipo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    marca: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    modelo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    descripcion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional()
});
const activoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    articulo_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    ubicacion_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    estado: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'operativo',
        'mantenimiento',
        'fuera_servicio',
        'baja'
    ]).nullable().optional(),
    valor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    created_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    updated_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // Relaciones expandidas (cuando el backend las incluye con ->load())
    articulo: articuloSchema.optional(),
    ubicacion: ubicacionSchema.optional()
});
const reporteSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    usuario_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    activo_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    descripcion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    prioridad: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    estado: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    created_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    updated_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const mantenimientoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    activo_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    supervisor_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    tecnico_principal_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    tipo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    reporte_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    fecha_apertura: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    fecha_cierre: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    estado: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    descripcion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    validado: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().nullable().optional(),
    costo_total: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    ]).nullable().optional(),
    created_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    updated_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // Relaciones
    activo: activoSchema.optional(),
    reporte: reporteSchema.nullable().optional()
});
const calendarioSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    activo_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    tecnico_asignado_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    tipo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    fecha_programada: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    estado: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    created_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    // Relaciones
    activo: activoSchema.optional()
});
const proveedorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    nombre: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    contacto: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    telefono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional()
});
const repuestoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    proveedor_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    direccion_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    descripcion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    codigo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    stock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    stock_minimo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().optional(),
    costo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    ]).nullable().optional(),
    created_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    updated_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    // Relaciones
    proveedor: proveedorSchema.optional()
});
const categoriaActivosSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tipo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    total: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    activos: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(activoSchema).optional()
});
}),
"[project]/app/lib/services/backend-api-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * BackendAPIService — Cliente HTTP para la API REST de Laravel (GIMA)
 *
 * Características:
 * - Autenticación via Bearer token (Laravel Sanctum)
 * - Token inyectado por instancia (no global)
 * - Unwrap automático de paginación (LengthAwarePaginator)
 * - Timeout configurable (8s default, margen para Vercel Edge)
 * - Retry con backoff exponencial (2 reintentos)
 * - Manejo de errores tipado
 *
 * @see docs/backend/api.php para la lista completa de endpoints
 */ __turbopack_context__.s([
    "BackendAPIError",
    ()=>BackendAPIError,
    "BackendAPIService",
    ()=>BackendAPIService,
    "BackendAuthError",
    ()=>BackendAuthError,
    "BackendTimeoutError",
    ()=>BackendTimeoutError,
    "createBackendAPIService",
    ()=>createBackendAPIService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$backend$2d$response$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/schemas/backend-response.schema.ts [app-route] (ecmascript)");
;
;
;
const DEFAULT_TIMEOUT_MS = 8000;
const DEFAULT_MAX_RETRIES = 2;
const DEFAULT_BACKOFF_BASE_MS = 1000;
class BackendAPIError extends Error {
    statusCode;
    endpoint;
    constructor(message, statusCode, endpoint){
        super(message), this.statusCode = statusCode, this.endpoint = endpoint;
        this.name = 'BackendAPIError';
    }
}
class BackendTimeoutError extends BackendAPIError {
    constructor(endpoint, timeoutMs){
        super(`El servidor tardó más de ${Math.round(timeoutMs / 1000)}s en responder. Intenta con filtros más específicos.`, 408, endpoint);
        this.name = 'BackendTimeoutError';
    }
}
class BackendAuthError extends BackendAPIError {
    constructor(){
        super('No se pudo autenticar con el backend. Verifica tu sesión.', 401);
        this.name = 'BackendAuthError';
    }
}
class BackendAPIService {
    config;
    deps;
    constructor(config, deps){
        this.config = {
            timeoutMs: DEFAULT_TIMEOUT_MS,
            maxRetries: DEFAULT_MAX_RETRIES,
            backoffBaseMs: DEFAULT_BACKOFF_BASE_MS,
            ...config
        };
        this.deps = {
            fetchFn: deps?.fetchFn ?? fetch
        };
    }
    // -------------------------------------------
    // Core HTTP
    // -------------------------------------------
    /**
   * Ejecuta una petición HTTP con retry y timeout
   */ async request(endpoint, options) {
        const url = `${this.config.baseUrl}${endpoint}`;
        let lastError = null;
        for(let attempt = 0; attempt <= this.config.maxRetries; attempt++){
            try {
                if (attempt > 0) {
                    const delay = this.config.backoffBaseMs * Math.pow(2, attempt - 1);
                    await new Promise((resolve)=>setTimeout(resolve, delay));
                }
                const response = await this.deps.fetchFn(url, {
                    ...options,
                    headers: {
                        Authorization: `Bearer ${this.config.token}`,
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        ...options?.headers
                    },
                    signal: AbortSignal.timeout(this.config.timeoutMs)
                });
                if (response.status === 401) {
                    throw new BackendAuthError();
                }
                if (!response.ok) {
                    const errorBody = await response.text().catch(()=>'Unknown error');
                    throw new BackendAPIError(`Error ${response.status}: ${errorBody}`, response.status, endpoint);
                }
                return await response.json();
            } catch (error) {
                lastError = error instanceof Error ? error : new Error(String(error));
                // No retry on auth errors
                if (error instanceof BackendAuthError) {
                    throw error;
                }
                // Timeout: wrap in custom error
                if (error instanceof DOMException && error.name === 'TimeoutError') {
                    lastError = new BackendTimeoutError(endpoint, this.config.timeoutMs);
                    if (attempt === this.config.maxRetries) throw lastError;
                    continue;
                }
                // Non-retryable HTTP errors (4xx except 408/429)
                if (error instanceof BackendAPIError && error.statusCode && error.statusCode >= 400 && error.statusCode < 500 && error.statusCode !== 408 && error.statusCode !== 429) {
                    throw error;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warn(`Backend request attempt ${attempt + 1} failed`, {
                    component: 'BackendAPIService',
                    action: 'request',
                    endpoint,
                    error: lastError.message
                });
            }
        }
        throw lastError ?? new BackendAPIError('Request failed after retries', undefined, endpoint);
    }
    /**
   * Petición con unwrap automático de paginación Laravel
   */ async requestPaginated(endpoint, schema) {
        const raw = await this.request(endpoint);
        const paginatedSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$backend$2d$response$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["laravelPaginatedSchema"])(schema);
        const parsed = paginatedSchema.parse(raw);
        return {
            items: parsed.data,
            pagination: {
                page: parsed.meta.current_page,
                lastPage: parsed.meta.last_page,
                perPage: parsed.meta.per_page,
                total: parsed.meta.total,
                hasMore: parsed.links?.next !== null && parsed.links?.next !== undefined
            }
        };
    }
    /**
   * Construye query string desde filtros, ignorando undefined/null
   */ buildQuery(params) {
        const searchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(params)){
            if (value !== undefined && value !== null && value !== '') {
                searchParams.set(key, String(value));
            }
        }
        const qs = searchParams.toString();
        return qs ? `?${qs}` : '';
    }
    // -------------------------------------------
    // Catálogo
    // -------------------------------------------
    async getActivos(filtros) {
        const query = this.buildQuery({
            ...filtros
        });
        // Si estamos filtrando por tipo, Laravel espera usar el endpoint específico
        if (filtros?.tipo) {
            return this.requestPaginated(`/api/catalogo/activos/por-categoria${query}`, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$backend$2d$response$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["activoSchema"]);
        }
        return this.requestPaginated(`/api/catalogo/activos${query}`, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$backend$2d$response$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["activoSchema"]);
    }
    // -------------------------------------------
    // Mantenimiento
    // -------------------------------------------
    async getMantenimientos(filtros) {
        const query = this.buildQuery({
            ...filtros
        });
        return this.requestPaginated(`/api/mantenimiento/mantenimientos${query}`, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$backend$2d$response$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mantenimientoSchema"]);
    }
    async getCalendario(filtros) {
        const query = this.buildQuery({
            ...filtros
        });
        return this.requestPaginated(`/api/mantenimiento/calendario${query}`, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$backend$2d$response$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calendarioSchema"]);
    }
    async getReportes(filtros) {
        const query = this.buildQuery({
            ...filtros
        });
        return this.requestPaginated(`/api/mantenimiento/reportes${query}`, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$backend$2d$response$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["reporteSchema"]);
    }
    // -------------------------------------------
    // Inventario
    // -------------------------------------------
    async getRepuestos(filtros) {
        const query = this.buildQuery({
            ...filtros
        });
        return this.requestPaginated(`/api/inventario/repuestos${query}`, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$backend$2d$response$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["repuestoSchema"]);
    }
    async getProveedores() {
        return this.requestPaginated('/api/inventario/proveedores', __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$backend$2d$response$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["proveedorSchema"]);
    }
}
function createBackendAPIService(params) {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_BACKEND_API_URL;
    if (!baseUrl) {
        throw new BackendAPIError('NEXT_PUBLIC_BACKEND_API_URL no está configurada');
    }
    return new BackendAPIService({
        baseUrl,
        token: params.token
    }, params.deps);
}
}),
"[project]/app/config/prompts/checklist-generation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Prompts para generación de checklists de mantenimiento
 *
 * Define los prompts usados por ChecklistAIService para generar
 * checklists personalizados según tipo de activo y tarea.
 */ __turbopack_context__.s([
    "CHECKLIST_RETRY_PROMPT",
    ()=>CHECKLIST_RETRY_PROMPT,
    "CHECKLIST_SYSTEM_PROMPT",
    ()=>CHECKLIST_SYSTEM_PROMPT,
    "buildChecklistPrompt",
    ()=>buildChecklistPrompt
]);
const CHECKLIST_SYSTEM_PROMPT = `Eres un experto en mantenimiento industrial con más de 20 años de experiencia.
Tu tarea es generar checklists de mantenimiento detallados, prácticos y seguros.

REGLAS OBLIGATORIAS:
1. Los checklists deben ser específicos para el tipo de equipo y tarea solicitada
2. Incluir SIEMPRE verificaciones de seguridad primero
3. Usar lenguaje claro y técnico apropiado
4. Ordenar items lógicamente (preparación → ejecución → verificación → cierre)
5. Marcar como "required: true" los pasos críticos de seguridad
6. Incluir notas útiles cuando sea necesario

CATEGORÍAS VÁLIDAS:
- seguridad: Verificaciones de seguridad obligatorias
- operacion: Pasos operativos del mantenimiento
- inspeccion-visual: Inspecciones visuales
- mediciones: Mediciones técnicas (temperatura, presión, etc.)
- limpieza: Tareas de limpieza
- lubricacion: Lubricación y engrase
- ajustes: Ajustes mecánicos o eléctricos
- documentacion: Registro y documentación

FORMATO DE RESPUESTA (JSON):
{
  "title": "Título descriptivo del checklist",
  "description": "Descripción breve del checklist (1-2 líneas)",
  "items": [
    {
      "description": "Descripción clara del paso",
      "category": "una de las categorías válidas",
      "required": true/false,
      "notes": "OPCIONAL: Notas adicionales si son necesarias"
    }
  ]
}

IMPORTANTE: Responde SOLO con el JSON, sin texto adicional.`;
function buildChecklistPrompt(assetType, taskType, customInstructions) {
    const assetName = assetType.replace('-', ' ');
    const taskName = taskType;
    let prompt = `Genera un checklist de mantenimiento ${taskName} para: ${assetName}

El checklist debe contener entre 8 y 15 items.`;
    if (customInstructions) {
        prompt += `\n\nINSTRUCCIONES ADICIONALES DEL USUARIO:\n${customInstructions}`;
    }
    // Agregar guidance específico por tipo de activo
    const assetGuidance = getAssetSpecificGuidance(assetType, taskType);
    if (assetGuidance) {
        prompt += `\n\nCONSIDERACIONES ESPECÍFICAS:\n${assetGuidance}`;
    }
    return prompt;
}
/**
 * Retorna guidance específico por tipo de activo
 * @param assetType
 * @param taskType
 */ function getAssetSpecificGuidance(assetType, _taskType) {
    const guidance = {
        'unidad-hvac': `- Verificar filtros de aire
- Revisar niveles de refrigerante
- Comprobar funcionamiento de ventiladores
- Medir temperatura de descarga`,
        caldera: `- CRÍTICO: Verificar sistemas de seguridad
- Revisar presión de operación
- Inspeccionar nivel de agua
- Verificar válvulas de alivio`,
        bomba: `- Verificar alineación
- Revisar sellos mecánicos
- Comprobar vibración
- Verificar temperatura de cojinetes`,
        compresor: `- Verificar presión de descarga
- Revisar nivel de aceite
- Comprobar temperatura
- Inspeccionar válvulas`,
        generador: `- Verificar nivel de combustible
- Revisar sistema de enfriamiento
- Comprobar baterías
- Verificar transferencia automática`,
        'panel-electrico': `- CRÍTICO: Lockout/Tagout antes de trabajar
- Verificar conexiones
- Revisar temperatura de componentes
- Comprobar tierra física`,
        transportador: `- Verificar tensión de banda/cadena
- Revisar rodillos
- Comprobar alineación
- Lubricar puntos de fricción`,
        grua: `- CRÍTICO: Inspección de cables y ganchos
- Verificar frenos
- Comprobar límites de carga
- Revisar sistema hidráulico`,
        montacargas: `- Verificar frenos
- Revisar nivel de aceite/batería
- Comprobar horquillas
- Verificar luces y alarmas`,
        otro: `- Seguir mejores prácticas generales de mantenimiento
- Enfocarse en seguridad primero
- Verificar componentes críticos`
    };
    return guidance[assetType] || '';
}
const CHECKLIST_RETRY_PROMPT = `El formato anterior fue inválido. Por favor genera de nuevo el checklist siguiendo EXACTAMENTE el formato JSON especificado.

Recuerda:
- Solo JSON, sin texto adicional
- Categorías válidas: seguridad, operacion, inspeccion-visual, mediciones, limpieza, lubricacion, ajustes, documentacion
- Incluir entre 8 y 15 items
- Marcar items críticos como "required": true`;
}),
"[project]/app/constants/ai.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Constantes para servicios de IA
 *
 * Centraliza configuración de modelos, límites, y parámetros
 * para todas las features que usan IA.
 */ /**
 * Modelos de IA disponibles por proveedor
 *
 * GROQ: Generación de texto (chat, parsing, transformaciones)
 * Gemini: Multimodal (voz, imagen, PDF)
 */ __turbopack_context__.s([
    "AI_CACHE_TTL",
    ()=>AI_CACHE_TTL,
    "AI_MODELS",
    ()=>AI_MODELS,
    "AI_RATE_LIMITS",
    ()=>AI_RATE_LIMITS,
    "AI_RETRY_CONFIG",
    ()=>AI_RETRY_CONFIG,
    "AI_TASK_MODELS",
    ()=>AI_TASK_MODELS,
    "AI_TIMEOUTS",
    ()=>AI_TIMEOUTS,
    "ALLOWED_TRANSFORMATION_OPERATIONS",
    ()=>ALLOWED_TRANSFORMATION_OPERATIONS,
    "ASSET_TYPES",
    ()=>ASSET_TYPES,
    "DANGEROUS_VOICE_KEYWORDS",
    ()=>DANGEROUS_VOICE_KEYWORDS,
    "SUMMARY_DETAIL_LEVELS",
    ()=>SUMMARY_DETAIL_LEVELS,
    "SUMMARY_STYLES",
    ()=>SUMMARY_STYLES,
    "TASK_TYPES",
    ()=>TASK_TYPES
]);
const AI_MODELS = {
    GROQ: {
        LLAMA_3_3_70B: 'llama-3.3-70b-versatile'
    },
    GEMINI: {
        FLASH_LITE: 'gemini-2.5-flash-lite',
        FLASH: 'gemini-2.5-flash'
    }
};
const AI_TASK_MODELS = {
    // ============================================
    // GROQ - Generación de Texto
    // ============================================
    /**
   * Chat conversacional principal
   *
   * Usado en: app/api/chat/route.ts
   * Modelo: llama-3.3-70b-versatile
   */ CHAT: {
        provider: 'GROQ',
        model: AI_MODELS.GROQ.LLAMA_3_3_70B,
        temperature: undefined
    },
    /**
   * Generación de checklists de mantenimiento
   *
   * Usado en: Para implementar
   * Modelo: llama-3.3-70b-versatile
   */ CHECKLIST_GENERATION: {
        provider: 'GROQ',
        model: AI_MODELS.GROQ.LLAMA_3_3_70B,
        temperature: 0.3,
        maxTokens: 2000
    },
    /**
   * Resúmenes automáticos de actividades
   *
   * Usado en: Para implementar
   * Modelo: llama-3.3-70b-versatile
   */ ACTIVITY_SUMMARY: {
        provider: 'GROQ',
        model: AI_MODELS.GROQ.LLAMA_3_3_70B,
        temperature: 0.4,
        maxTokens: 500
    },
    /**
   * Transformaciones de datos con IA
   *
   * Usado en: Para implementar
   * Modelo: llama-3.3-70b-versatile
   */ DATA_TRANSFORMATION: {
        provider: 'GROQ',
        model: AI_MODELS.GROQ.LLAMA_3_3_70B,
        temperature: 0.1,
        maxTokens: 1000
    },
    /**
   * Notas de cierre de órdenes de trabajo
   *
   * Usado en: Para implementar
   * Modelo: llama-3.3-70b-versatile
   */ WORK_ORDER_CLOSEOUT: {
        provider: 'GROQ',
        model: AI_MODELS.GROQ.LLAMA_3_3_70B,
        temperature: 0.3,
        maxTokens: 800
    },
    // ============================================
    // Gemini - Multimodal (Voz, Imagen, PDF)
    // ============================================
    /**
   * Transcripción de audio a texto
   *
   * Usado en: app/actions/voice.ts línea 50
   * Modelo: gemini-2.5-flash-lite
   */ VOICE_TRANSCRIPTION: {
        provider: 'GEMINI',
        model: AI_MODELS.GEMINI.FLASH_LITE,
        temperature: 0,
        maxTokens: 500
    },
    /**
   * Parsing de comandos de voz a JSON estructurado
   *
   * Usado en: app/actions/voice.ts línea 148
   * Modelo: gemini-2.5-flash-lite
   */ VOICE_COMMAND_PARSING: {
        provider: 'GEMINI',
        model: AI_MODELS.GEMINI.FLASH_LITE,
        temperature: 0,
        maxTokens: 300
    },
    /**
   * Análisis de imágenes industriales
   *
   * Usado en: app/actions/vision.ts línea 50
   * Modelo: gemini-2.5-flash
   */ IMAGE_ANALYSIS: {
        provider: 'GEMINI',
        model: AI_MODELS.GEMINI.FLASH,
        temperature: 0.2,
        maxTokens: 1000
    },
    /**
   * Extracción de contenido de documentos PDF
   *
   * Usado en: app/actions/files.ts línea 47
   * Modelo: gemini-2.5-flash
   */ PDF_EXTRACTION: {
        provider: 'GEMINI',
        model: AI_MODELS.GEMINI.FLASH,
        temperature: 0.1,
        maxTokens: 2000
    }
};
const AI_CACHE_TTL = {
    CHECKLIST: 3600,
    SUMMARY: 604800,
    VOICE_COMMAND: 0,
    TRANSFORMATION_PREVIEW: 300,
    WORK_ORDER_CLOSEOUT: 0
};
const AI_RATE_LIMITS = {
    FREE_TIER: {
        requestsPerMinute: 10,
        requestsPerDay: 100
    },
    PRO_TIER: {
        requestsPerMinute: 30,
        requestsPerDay: 1000
    },
    ENTERPRISE_TIER: {
        requestsPerMinute: 100,
        requestsPerDay: 10000
    }
};
const AI_TIMEOUTS = {
    QUICK: 10000,
    NORMAL: 30000,
    LONG: 60000
};
const AI_RETRY_CONFIG = {
    MAX_RETRIES: 3,
    BASE_BACKOFF_MS: 1000,
    MAX_BACKOFF_MS: 30000
};
const ASSET_TYPES = [
    'unidad-hvac',
    'caldera',
    'bomba',
    'compresor',
    'generador',
    'panel-electrico',
    'transportador',
    'grua',
    'montacargas',
    'otro'
];
const TASK_TYPES = [
    'preventivo',
    'correctivo',
    'predictivo'
];
const SUMMARY_STYLES = {
    FORMAL: 'formal',
    CASUAL: 'casual',
    TECNICO: 'tecnico',
    EJECUTIVO: 'ejecutivo'
};
const SUMMARY_DETAIL_LEVELS = {
    BREVE: 'breve',
    NORMAL: 'normal',
    DETALLADO: 'detallado'
};
const DANGEROUS_VOICE_KEYWORDS = [
    'eliminar todo',
    'borrar todo',
    'cancelar todo',
    'delete all',
    'remove all',
    'cerrar todo'
];
const ALLOWED_TRANSFORMATION_OPERATIONS = [
    'renombrar-campo',
    'convertir-tipo',
    'combinar-campos',
    'dividir-campo',
    'filtrar-registros',
    'ordenar-registros',
    'agregar-campo',
    'eliminar-campo',
    'calcular-campo'
];
}),
"[project]/app/lib/ai/base-ai-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * BaseAIService - Clase abstracta para servicios de IA
 *
 * Proporciona funcionalidad común para todos los servicios que usan IA:
 * - Retry logic con backoff exponencial
 * - Caching de respuestas
 * - Rate limiting awareness
 * - Validación con Zod
 * - Logging estructurado
 * - Error handling tipado
 * @example
 * ```typescript
 * export class ChecklistAIService extends BaseAIService {
 *   async generateChecklist(request: ChecklistRequest) {
 *     const validated = this.validate(ChecklistRequestSchema, request);
 *
 *     return this.executeWithRetry(async () => {
 *       const cached = await this.checkCache(cacheKey);
 *       if (cached) return cached;
 *
 *       const result = await this.callAI(prompt);
 *       await this.setCache(cacheKey, result);
 *       return result;
 *     });
 *   }
 * }
 * ```
 */ __turbopack_context__.s([
    "AIServiceError",
    ()=>AIServiceError,
    "AITimeoutError",
    ()=>AITimeoutError,
    "AIValidationError",
    ()=>AIValidationError,
    "BaseAIService",
    ()=>BaseAIService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-route] (ecmascript)");
;
;
class AIServiceError extends Error {
    serviceName;
    recoverable;
    originalError;
    /**
   *
   * @param message
   * @param serviceName
   * @param recoverable
   * @param originalError
   */ constructor(message, serviceName, recoverable = false, originalError){
        super(message), this.serviceName = serviceName, this.recoverable = recoverable, this.originalError = originalError;
        this.name = 'AIServiceError';
    }
}
class AITimeoutError extends AIServiceError {
    /**
   *
   * @param serviceName
   * @param timeoutMs
   */ constructor(serviceName, timeoutMs){
        super(`AI request timed out after ${timeoutMs}ms`, serviceName, true // Timeout es recuperable
        );
        this.name = 'AITimeoutError';
    }
}
class AIValidationError extends AIServiceError {
    /**
   *
   * @param serviceName
   * @param zodError
   */ constructor(serviceName, zodError){
        super(`Validation failed: ${zodError.message}`, serviceName, false // Validation errors no son recuperables
        );
        this.name = 'AIValidationError';
    }
}
class BaseAIService {
    config;
    deps;
    /**
   *
   * @param config
   * @param deps
   */ constructor(config, deps){
        this.config = {
            serviceName: config.serviceName,
            timeoutMs: config.timeoutMs ?? 30000,
            maxRetries: config.maxRetries ?? 3,
            enableCaching: config.enableCaching ?? true,
            cacheTTL: config.cacheTTL ?? 3600
        };
        this.deps = {
            logger: deps?.logger ?? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"],
            cache: deps?.cache ?? this.createLocalStorageCache()
        };
    }
    /**
   * Valida datos con un schema Zod
   * @param schema
   * @param data
   * @throws AIValidationError si la validación falla
   */ validate(schema, data) {
        try {
            return schema.parse(data);
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
                throw new AIValidationError(this.config.serviceName, error);
            }
            throw error;
        }
    }
    /**
   * Ejecuta función con retry logic
   *
   * Solo reintentar en errores recuperables:
   * - Timeouts
   * - Errores de red
   * - Errores 5xx del server
   * @param fn
   * @param correlationId
   */ async executeWithRetry(fn, correlationId) {
        let lastError;
        for(let attempt = 1; attempt <= this.config.maxRetries; attempt++){
            try {
                return await fn();
            } catch (error) {
                lastError = error;
                const isLastAttempt = attempt === this.config.maxRetries;
                // Solo recuperable si es AIServiceError con flag o es timeout
                const isRecoverable = error instanceof AITimeoutError || error instanceof AIServiceError && error.recoverable;
                if (!isRecoverable || isLastAttempt) {
                    throw error;
                }
                // Backoff exponencial
                const backoffMs = Math.min(Math.pow(2, attempt) * 1000, 30000);
                this.deps.logger?.warn('Retrying AI request', {
                    serviceName: this.config.serviceName,
                    attempt,
                    maxRetries: this.config.maxRetries,
                    backoffMs,
                    correlationId
                });
                await this.sleep(backoffMs);
            }
        }
        throw lastError;
    }
    /**
   * Verifica cache (solo si caching está habilitado)
   * @param key
   */ async checkCache(key) {
        if (!this.config.enableCaching || !this.deps.cache) {
            return null;
        }
        try {
            const cached = await this.deps.cache.get(key);
            if (cached) {
                this.deps.logger?.info('Cache hit', {
                    serviceName: this.config.serviceName,
                    cacheKey: key
                });
                return JSON.parse(cached);
            }
        } catch (error) {
            this.deps.logger?.warn('Cache read failed', {
                serviceName: this.config.serviceName,
                cacheKey: key,
                error
            });
        }
        return null;
    }
    /**
   * Guarda en cache
   * @param key
   * @param value
   */ async setCache(key, value) {
        if (!this.config.enableCaching || !this.deps.cache) {
            return;
        }
        try {
            await this.deps.cache.set(key, JSON.stringify(value), this.config.cacheTTL);
            this.deps.logger?.info('Cache set', {
                serviceName: this.config.serviceName,
                cacheKey: key,
                ttl: this.config.cacheTTL
            });
        } catch (error) {
            this.deps.logger?.warn('Cache write failed', {
                serviceName: this.config.serviceName,
                cacheKey: key,
                error
            });
        }
    }
    /**
   * Genera clave de cache consistente
   * @param parts
   */ buildCacheKey(parts) {
        return `${this.config.serviceName}:${parts.join(':')}`;
    }
    /**
   * Sleep helper
   * @param ms
   */ sleep(ms) {
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }
    /**
   * Crea implementación simple de cache con localStorage
   * (Solo para cliente, en servidor usar Redis/Upstash)
   */ createLocalStorageCache() {
        // Check if localStorage is available (client-side)
        if ("TURBOPACK compile-time truthy", 1) {
            return {
                get: async ()=>null,
                set: async ()=>{},
                delete: async ()=>{}
            };
        }
        //TURBOPACK unreachable
        ;
    }
}
}),
"[project]/app/components/features/checklist-builder/constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Constantes para Smart Checklist Builder
 *
 * Define valores por defecto, configuración y constantes
 * usadas en la feature de generación de checklists.
 */ /**
 * Categorías de items de checklist
 */ __turbopack_context__.s([
    "CHECKLIST_CATEGORIES",
    ()=>CHECKLIST_CATEGORIES,
    "CHECKLIST_LIMITS",
    ()=>CHECKLIST_LIMITS,
    "CHECKLIST_MESSAGES",
    ()=>CHECKLIST_MESSAGES,
    "DEFAULT_CHECKLIST_CONFIG",
    ()=>DEFAULT_CHECKLIST_CONFIG,
    "STORAGE_KEYS",
    ()=>STORAGE_KEYS
]);
const CHECKLIST_CATEGORIES = [
    'seguridad',
    'operacion',
    'inspeccion-visual',
    'mediciones',
    'limpieza',
    'lubricacion',
    'ajustes',
    'documentacion'
];
const CHECKLIST_LIMITS = {
    /**
   * Número mínimo de items en un checklist
   */ MIN_ITEMS: 3,
    /**
   * Número máximo de items en un checklist
   */ MAX_ITEMS: 50,
    /**
   * Longitud máxima de descripción de item
   */ MAX_ITEM_DESCRIPTION_LENGTH: 200,
    /**
   * Longitud máxima de título de checklist
   */ MAX_TITLE_LENGTH: 100,
    /**
   * Número máximo de templates guardados
   */ MAX_SAVED_TEMPLATES: 20
};
const CHECKLIST_MESSAGES = {
    GENERATING: 'Generando checklist con IA...',
    GENERATION_SUCCESS: 'Checklist generado exitosamente',
    GENERATION_ERROR: 'Error al generar checklist',
    SAVE_SUCCESS: 'Template guardado',
    SAVE_ERROR: 'Error al guardar template',
    DELETE_CONFIRM: '¿Eliminar este template?',
    EMPTY_STATE: 'No hay checklists generados aún',
    NO_TEMPLATES: 'No hay templates guardados'
};
const STORAGE_KEYS = {
    TEMPLATES: 'checklist-templates',
    RECENT_CHECKLISTS: 'recent-checklists',
    PREFERENCES: 'checklist-preferences'
};
const DEFAULT_CHECKLIST_CONFIG = {
    /**
   * Número de items por defecto a generar
   */ defaultItemCount: 10,
    /**
   * Si mostrar categorías por defecto
   */ showCategories: true,
    /**
   * Si auto-guardar checklists generados
   */ autoSave: false
};
}),
"[project]/app/lib/schemas/checklist.schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Schemas Zod para validación de checklists
 *
 * Define schemas para validar requests y responses
 * de la generación de checklists con IA.
 */ __turbopack_context__.s([
    "aiChecklistResponseSchema",
    ()=>aiChecklistResponseSchema,
    "checklistGenerationRequestSchema",
    ()=>checklistGenerationRequestSchema,
    "checklistItemSchema",
    ()=>checklistItemSchema,
    "checklistSchema",
    ()=>checklistSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$checklist$2d$builder$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/checklist-builder/constants.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/ai.ts [app-route] (ecmascript)");
;
;
;
const checklistGenerationRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    assetType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ASSET_TYPES"], {
        error: 'Tipo de activo inválido'
    }),
    taskType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TASK_TYPES"], {
        error: 'Tipo de tarea inválido'
    }),
    customInstructions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(500, 'Instrucciones demasiado largas (máx 500 caracteres)').optional(),
    context: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(200).optional()
});
const checklistItemSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, 'Descripción muy corta').max(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$checklist$2d$builder$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CHECKLIST_LIMITS"].MAX_ITEM_DESCRIPTION_LENGTH, 'Descripción muy larga'),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$checklist$2d$builder$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CHECKLIST_CATEGORIES"], {
        error: 'Categoría inválida'
    }),
    order: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative(),
    required: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(300).optional()
});
const checklistSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, 'Título muy corto').max(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$checklist$2d$builder$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CHECKLIST_LIMITS"].MAX_TITLE_LENGTH, 'Título muy largo'),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10).max(500),
    assetType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ASSET_TYPES"]),
    taskType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TASK_TYPES"]),
    items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(checklistItemSchema).min(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$checklist$2d$builder$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CHECKLIST_LIMITS"].MIN_ITEMS, `Mínimo ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$checklist$2d$builder$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CHECKLIST_LIMITS"].MIN_ITEMS} items requeridos`).max(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$checklist$2d$builder$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CHECKLIST_LIMITS"].MAX_ITEMS, `Máximo ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$checklist$2d$builder$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CHECKLIST_LIMITS"].MAX_ITEMS} items permitidos`),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.date(),
    isTemplate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        generatedBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'ai',
            'manual'
        ]).optional(),
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
    }).optional()
});
const aiChecklistResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        required: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    }))
});
}),
"[project]/app/lib/services/checklist-ai-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ChecklistAIService - Servicio de generación de checklists con IA
 *
 * Extiende BaseAIService para proporcionar funcionalidad específica
 * de generación de checklists de mantenimiento usando GROQ.
 */ __turbopack_context__.s([
    "ChecklistAIService",
    ()=>ChecklistAIService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$groq$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/groq/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$prompts$2f$checklist$2d$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/prompts/checklist-generation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/ai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$ai$2f$base$2d$ai$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/ai/base-ai-service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$checklist$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/schemas/checklist.schema.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
class ChecklistAIService extends __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$ai$2f$base$2d$ai$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAIService"] {
    groq;
    /**
   *
   */ constructor(){
        super({
            serviceName: 'ChecklistAIService',
            timeoutMs: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AI_TIMEOUTS"].NORMAL,
            maxRetries: 3,
            enableCaching: true,
            cacheTTL: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AI_CACHE_TTL"].CHECKLIST
        });
        this.groq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$groq$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGroq"])({
            apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GROQ_API_KEY
        });
    }
    /**
   * Genera un checklist de mantenimiento con IA
   * @param request - Parámetros de generación
   * @returns Resultado con checklist generado
   */ async generateChecklist(request) {
        try {
            // 1. Validar request
            const validatedRequest = this.validate(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$checklist$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checklistGenerationRequestSchema"], request);
            // 2. Verificar cache
            const cacheKey = this.buildCacheKey([
                validatedRequest.assetType,
                validatedRequest.taskType,
                validatedRequest.customInstructions || 'default'
            ]);
            const cached = await this.checkCache(cacheKey);
            if (cached) {
                this.deps.logger?.info('Checklist from cache', {
                    serviceName: this.config.serviceName,
                    assetType: validatedRequest.assetType
                });
                return {
                    success: true,
                    checklist: cached,
                    cached: true
                };
            }
            // 3. Generar con IA y retry logic
            const checklist = await this.executeWithRetry(async ()=>{
                return this.callAI(validatedRequest.assetType, validatedRequest.taskType, validatedRequest.customInstructions);
            });
            // 4. Cachear resultado
            await this.setCache(cacheKey, checklist);
            return {
                success: true,
                checklist
            };
        } catch (error) {
            this.deps.logger?.error('Failed to generate checklist', error instanceof Error ? error : new Error(String(error)), {
                serviceName: this.config.serviceName,
                assetType: request.assetType,
                taskType: request.taskType
            });
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Error desconocido'
            };
        }
    }
    /**
   * Llama a la API de GROQ para generar checklist
   * @param assetType
   * @param taskType
   * @param customInstructions
   */ async callAI(assetType, taskType, customInstructions) {
        const modelConfig = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AI_TASK_MODELS"].CHECKLIST_GENERATION;
        const userPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$prompts$2f$checklist$2d$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildChecklistPrompt"])(assetType, taskType, customInstructions);
        this.deps.logger?.info('Calling GROQ for checklist generation', {
            serviceName: this.config.serviceName,
            model: modelConfig.model,
            assetType,
            taskType
        });
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
            model: this.groq(modelConfig.model),
            temperature: modelConfig.temperature,
            messages: [
                {
                    role: 'system',
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$prompts$2f$checklist$2d$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CHECKLIST_SYSTEM_PROMPT"]
                },
                {
                    role: 'user',
                    content: userPrompt
                }
            ]
        });
        // Parsear y validar respuesta
        const checklist = this.parseAIResponse(result.text, assetType, taskType);
        return checklist;
    }
    /**
   * Parsea y valida la respuesta de la IA
   * @param rawText
   * @param assetType
   * @param taskType
   */ parseAIResponse(rawText, assetType, taskType) {
        try {
            // Limpiar markdown si está presente
            const cleanJson = rawText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const parsed = JSON.parse(cleanJson);
            // Validar contra schema de IA
            const aiResponse = this.validate(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$checklist$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aiChecklistResponseSchema"], parsed);
            // Convertir a formato Checklist completo
            const checklist = {
                id: crypto.randomUUID(),
                title: aiResponse.title,
                description: aiResponse.description,
                assetType,
                taskType,
                items: aiResponse.items.map((item, index)=>({
                        id: crypto.randomUUID(),
                        description: item.description,
                        category: item.category,
                        order: index,
                        required: item.required,
                        notes: item.notes
                    })),
                createdAt: new Date(),
                isTemplate: false,
                metadata: {
                    generatedBy: 'ai',
                    version: '1.0'
                }
            };
            // Validar checklist completo
            return this.validate(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$checklist$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checklistSchema"], checklist);
        } catch (error) {
            this.deps.logger?.error('Failed to parse AI response', error, {
                serviceName: this.config.serviceName,
                rawText: rawText.slice(0, 200)
            });
            throw new Error('La IA generó un formato inválido');
        }
    }
}
}),
"[project]/app/config/prompts/activity-summary-generation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Activity Summary Generation Prompts
 *
 * Prompts y templates para generar resúmenes de actividades
 * con diferentes estilos y niveles de detalle.
 */ __turbopack_context__.s([
    "SUMMARY_RETRY_PROMPT",
    ()=>SUMMARY_RETRY_PROMPT,
    "SUMMARY_SYSTEM_PROMPT",
    ()=>SUMMARY_SYSTEM_PROMPT,
    "buildSummaryPrompt",
    ()=>buildSummaryPrompt,
    "getDetailLevelInstructions",
    ()=>getDetailLevelInstructions,
    "getStyleSpecificInstructions",
    ()=>getStyleSpecificInstructions
]);
const SUMMARY_SYSTEM_PROMPT = `Eres un experto redactor técnico especializado en documentación de mantenimiento industrial con más de 20 años de experiencia.

Tu tarea es generar resúmenes profesionales de actividades de mantenimiento basándote en notas y descripciones proporcionadas.

REGLAS IMPORTANTES:
1. Genera SOLO el JSON solicitado, sin texto adicional
2. El resumen ejecutivo debe ser conciso pero informativo (1-2 párrafos)
3. Las secciones deben estar bien organizadas y en orden lógico
4. Usa lenguaje profesional pero claro
5. Prioriza la información más relevante según el nivel de detalle
6. Mantén un tono apropiado al estilo solicitado

FORMATO DE SALIDA (JSON estricto):
{
  "title": "Título descriptivo del resumen",
  "executive": "Resumen ejecutivo de 1-2 párrafos",
  "sections": [
    {
      "title": "Título de sección",
      "content": "Contenido detallado de la sección",
      "order": 0
    }
  ]
}`;
function getStyleSpecificInstructions(style) {
    const styles = {
        ejecutivo: `ESTILO EJECUTIVO:
- Enfócate en resultados y métricas clave
- Usa lenguaje conciso y directo
- Destaca impacto en operaciones
- Incluye recomendaciones si aplica
- Secciones típicas: Resumen, Hallazgos Clave, Impacto, Próximos Pasos`,
        tecnico: `ESTILO TÉCNICO:
- Incluye detalles técnicos específicos
- Menciona herramientas y procedimientos utilizados
- Documenta parámetros y mediciones
- Usa terminología técnica apropiada
- Secciones típicas: Procedimiento, Observaciones Técnicas, Mediciones, Conclusiones`,
        narrativo: `ESTILO NARRATIVO:
- Describe el proceso cronológicamente
- Incluye contexto de las actividades
- Usa lenguaje descriptivo pero profesional
- Explica razonamientos detrás de decisiones
- Secciones típicas: Contexto, Desarrollo de Actividades, Resultados, Reflexiones`
    };
    return styles[style];
}
function getDetailLevelInstructions(detailLevel) {
    const levels = {
        alto: `NIVEL DE DETALLE ALTO:
- Incluye todos los detalles relevantes
- Genera 4-6 secciones detalladas
- Resumen ejecutivo de 2 párrafos
- Cada sección debe ser exhaustiva`,
        medio: `NIVEL DE DETALLE MEDIO:
- Balance entre detalle y concisión
- Genera 3-4 secciones
- Resumen ejecutivo de 1-2 párrafos
- Enfoca en puntos más importantes`,
        bajo: `NIVEL DE DETALLE BAJO:
- Solo información esencial
- Genera 2-3 secciones
- Resumen ejecutivo de 1 párrafo
- Máximo 1 párrafo por sección`
    };
    return levels[detailLevel];
}
function buildSummaryPrompt(params) {
    const { assetType, taskType, activities, style, detailLevel, context } = params;
    const styleInstructions = getStyleSpecificInstructions(style);
    const detailInstructions = getDetailLevelInstructions(detailLevel);
    return `Genera un resumen profesional de mantenimiento con las siguientes especificaciones:

INFORMACIÓN DEL ACTIVO:
- Tipo de activo: ${assetType.replace('-', ' ').toUpperCase()}
- Tipo de mantenimiento: ${taskType.toUpperCase()}
${context ? `- Contexto adicional: ${context}` : ''}

${styleInstructions}

${detailInstructions}

ACTIVIDADES REALIZADAS:
"""
${activities}
"""

IMPORTANTE: Responde SOLO con el objeto JSON. No incluyas texto adicional, explicaciones ni markdown.`;
}
const SUMMARY_RETRY_PROMPT = `La respuesta anterior no tiene el formato JSON correcto.

Por favor, genera SOLO un objeto JSON válido con esta estructura EXACTA:

{
  "title": "Título del resumen",
  "executive": "Resumen ejecutivo en 1-2 párrafos",
  "sections": [
    {
      "title": "Título de sección",
      "content": "Contenido de la sección",
      "order": 0
    }
  ]
}

Sin texto adicional, sin markdown, solo el JSON.`;
}),
"[project]/app/lib/schemas/activity-summary.schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Activity Summary Schemas - Validación con Zod
 *
 * Schemas para validar requests y responses de generación
 * de resúmenes de actividades con IA.
 */ __turbopack_context__.s([
    "activitySummaryRequestSchema",
    ()=>activitySummaryRequestSchema,
    "activitySummarySchema",
    ()=>activitySummarySchema,
    "aiSummaryResponseSchema",
    ()=>aiSummaryResponseSchema,
    "summarySectionSchema",
    ()=>summarySectionSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/ai.ts [app-route] (ecmascript)");
;
;
/**
 * Estilos de resumen válidos
 */ const summaryStyleEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'ejecutivo',
    'tecnico',
    'narrativo'
]);
/**
 * Niveles de detalle válidos
 */ const detailLevelEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'alto',
    'medio',
    'bajo'
]);
const activitySummaryRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
   * Tipo de activo
   */ assetType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ASSET_TYPES"]),
    /**
   * Tipo de tarea
   */ taskType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TASK_TYPES"]),
    /**
   * Actividades realizadas
   */ activities: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, 'Las actividades deben tener al menos 10 caracteres').max(5000, 'Las actividades no pueden exceder 5000 caracteres'),
    /**
   * Estilo del resumen
   */ style: summaryStyleEnum,
    /**
   * Nivel de detalle
   */ detailLevel: detailLevelEnum,
    /**
   * Contexto adicional (opcional)
   */ context: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(500, 'El contexto no puede exceder 500 caracteres').optional()
});
const summarySectionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
   * Título de la sección
   */ title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Título de sección requerido').max(100),
    /**
   * Contenido de la sección
   */ content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Contenido de sección requerido'),
    /**
   * Orden de la sección
   */ order: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0)
});
const activitySummarySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
   * ID único
   */ id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    /**
   * Título del resumen
   */ title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(150),
    /**
   * Resumen ejecutivo
   */ executive: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(50).max(1000),
    /**
   * Secciones del resumen
   */ sections: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(summarySectionSchema).min(1).max(10),
    /**
   * Tipo de activo
   */ assetType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ASSET_TYPES"]),
    /**
   * Tipo de tarea
   */ taskType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TASK_TYPES"]),
    /**
   * Estilo usado
   */ style: summaryStyleEnum,
    /**
   * Nivel de detalle
   */ detailLevel: detailLevelEnum,
    /**
   * Fecha de creación
   */ createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].date(),
    /**
   * Metadata opcional
   */ metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        wordCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().optional(),
        readingTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().optional(),
        generatedBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'ai',
            'manual'
        ]).optional(),
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    }).optional()
});
const aiSummaryResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
   * Título del resumen
   */ title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(150),
    /**
   * Resumen ejecutivo
   */ executive: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(50).max(1000),
    /**
   * Secciones del resumen
   */ sections: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(100),
        content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        order: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0)
    })).min(1).max(10)
});
}),
"[project]/app/lib/services/activity-summary-ai-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ActivitySummaryAIService - Servicio de generación de resúmenes con IA
 *
 * Extiende BaseAIService para generar resúmenes profesionales
 * de actividades de mantenimiento usando GROQ.
 */ __turbopack_context__.s([
    "ActivitySummaryAIService",
    ()=>ActivitySummaryAIService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$groq$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/groq/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$prompts$2f$activity$2d$summary$2d$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/prompts/activity-summary-generation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/ai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$ai$2f$base$2d$ai$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/ai/base-ai-service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$activity$2d$summary$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/schemas/activity-summary.schema.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
class ActivitySummaryAIService extends __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$ai$2f$base$2d$ai$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAIService"] {
    groq;
    /**
   *
   */ constructor(){
        super({
            serviceName: 'ActivitySummaryAIService',
            timeoutMs: 30000,
            maxRetries: 3,
            enableCaching: true,
            cacheTTL: 3600
        });
        this.groq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$groq$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGroq"])({
            apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GROQ_API_KEY
        });
    }
    /**
   * Genera un resumen de actividades con IA
   * @returns Resultado con resumen generado
   */ async generateSummary(request) {
        try {
            // Validar request
            const validatedRequest = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$activity$2d$summary$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["activitySummaryRequestSchema"].parse(request);
            this.deps.logger?.info('Generando resumen de actividades', {
                serviceName: this.config.serviceName,
                assetType: validatedRequest.assetType,
                taskType: validatedRequest.taskType,
                style: validatedRequest.style,
                detailLevel: validatedRequest.detailLevel
            });
            // Verificar caché
            const cacheKey = this.getCacheKey(validatedRequest);
            const cached = await this.checkCache(cacheKey);
            if (cached) {
                this.deps.logger?.info('Resumen recuperado de caché', {
                    serviceName: this.config.serviceName
                });
                // Normalizar Date (viene como string del JSON)
                const normalizedSummary = {
                    ...cached,
                    createdAt: cached.createdAt instanceof Date ? cached.createdAt : new Date(cached.createdAt)
                };
                return {
                    success: true,
                    summary: normalizedSummary,
                    cached: true
                };
            }
            // Generar con IA usando retry logic
            const summary = await this.executeWithRetry(async ()=>{
                return this.callAI(validatedRequest);
            });
            // Guardar en caché
            await this.setCache(cacheKey, summary);
            this.deps.logger?.info('Resumen generado exitosamente', {
                serviceName: this.config.serviceName,
                summaryId: summary.id,
                sectionsCount: summary.sections.length
            });
            return {
                success: true,
                summary
            };
        } catch (error) {
            this.deps.logger?.error('Error al generar resumen', error instanceof Error ? error : new Error('Error desconocido'));
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Error al generar resumen'
            };
        }
    }
    /**
   * Llama a la IA para generar el resumen
   * @param request - Request validado
   * @returns Resumen generado
   */ async callAI(request) {
        const modelConfig = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AI_TASK_MODELS"].CHAT;
        // Construir prompt
        const userPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$prompts$2f$activity$2d$summary$2d$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildSummaryPrompt"])({
            assetType: request.assetType,
            taskType: request.taskType,
            activities: request.activities,
            style: request.style,
            detailLevel: request.detailLevel,
            context: request.context
        });
        // Llamar a GROQ
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
            model: this.groq(modelConfig.model),
            temperature: modelConfig.temperature,
            messages: [
                {
                    role: 'system',
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$prompts$2f$activity$2d$summary$2d$generation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUMMARY_SYSTEM_PROMPT"]
                },
                {
                    role: 'user',
                    content: userPrompt
                }
            ]
        });
        // Parsear y validar respuesta
        const aiResponse = this.parseAIResponse(result.text);
        // Construir resumen completo
        const summary = {
            id: crypto.randomUUID(),
            title: aiResponse.title,
            executive: aiResponse.executive,
            sections: aiResponse.sections.map((section, index)=>({
                    ...section,
                    order: section.order ?? index
                })),
            assetType: request.assetType,
            taskType: request.taskType,
            style: request.style,
            detailLevel: request.detailLevel,
            createdAt: new Date(),
            metadata: {
                wordCount: this.countWords(aiResponse.executive + aiResponse.sections.map((s)=>s.content).join(' ')),
                readingTime: Math.ceil(this.countWords(aiResponse.executive + aiResponse.sections.map((s)=>s.content).join(' ')) / 200),
                generatedBy: 'ai',
                version: '1.0'
            }
        };
        return summary;
    }
    /**
   * Parsea la respuesta de la IA
   * @param rawResponse - Respuesta cruda de la IA
   * @returns Objeto parseado y validado
   */ parseAIResponse(rawResponse) {
        try {
            // Limpiar respuesta (remover markdown si existe)
            let cleanResponse = rawResponse.trim();
            // Remover bloques de código markdown
            const jsonMatch = cleanResponse.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
            if (jsonMatch) {
                cleanResponse = jsonMatch[1].trim();
            }
            // Parsear JSON
            const parsed = JSON.parse(cleanResponse);
            // Validar con schema
            const validated = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$activity$2d$summary$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aiSummaryResponseSchema"].parse(parsed);
            return validated;
        } catch (error) {
            this.deps.logger?.error('Error al parsear respuesta de IA', error instanceof Error ? error : new Error('Error desconocido'), {
                rawResponse: rawResponse.substring(0, 200)
            });
            throw new Error('Respuesta de IA inválida');
        }
    }
    /**
   * Genera cache key única para el request
   * @param request - Request de generación
   * @returns Cache key
   */ getCacheKey(request) {
        const parts = [
            'summary',
            request.assetType,
            request.taskType,
            request.style,
            request.detailLevel,
            request.activities.substring(0, 100)
        ];
        return parts.join(':');
    }
    /**
   * Cuenta palabras en un texto
   * @param text - Texto a analizar
   * @returns Número de palabras
   */ countWords(text) {
        return text.trim().split(/\s+/).length;
    }
}
}),
"[project]/app/lib/ai/tools/chat-tools.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Chat Tools — Definiciones de herramientas para el chatbot GIMA
 *
 * Usa AI SDK v5 con:
 * - `tool()` + `inputSchema` (no 'parameters')
 * - `stopWhen: stepCountIs(N)` para multi-step
 * - `needsApproval: true` para tools de mutación
 * - `cookies()` de Next.js para propagación del token Sanctum
 *
 * Las tools hacen 2 tipos de operaciones:
 * 1. Consultas al backend Laravel (via BackendAPIService)
 * 2. Generación con IA (reutilizando ChecklistAIService, ActivitySummaryAIService)
 */ __turbopack_context__.s([
    "TOOL_STOP_CONDITION",
    ()=>TOOL_STOP_CONDITION,
    "chatTools",
    ()=>chatTools
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$backend$2d$api$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/services/backend-api-service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$checklist$2d$ai$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/services/checklist-ai-service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$activity$2d$summary$2d$ai$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/services/activity-summary-ai-service.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
// ===========================================
// Helpers
// ===========================================
/**
 * Obtiene el BackendAPIService con el token Sanctum del usuario actual.
 * El token se extrae de las cookies de la request de Next.js.
 */ async function getAuthenticatedAPI() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get('auth_token')?.value;
    if (!token) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$backend$2d$api$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BackendAuthError"]();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$backend$2d$api$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createBackendAPIService"])({
        token
    });
}
/**
 * Envuelve la ejecución de una tool con manejo de errores estandarizado.
 * Convierte excepciones en respuestas de error amigables para el LLM.
 */ async function safeExecute(toolName, fn) {
    try {
        return await fn();
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error(`Tool ${toolName} failed`, error instanceof Error ? error : new Error(String(error)), {
            component: 'chatTools',
            action: toolName
        });
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$backend$2d$api$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BackendAuthError"]) {
            return {
                success: false,
                error: 'No se pudo autenticar con el backend. Por favor, inicia sesión nuevamente.',
                suggestion: 'Recarga la página e inicia sesión.'
            };
        }
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$backend$2d$api$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BackendTimeoutError"]) {
            return {
                success: false,
                error: error.message,
                suggestion: 'Intenta con filtros más específicos o inténtalo de nuevo.'
            };
        }
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$backend$2d$api$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BackendAPIError"]) {
            return {
                success: false,
                error: `Error del servidor: ${error.message}`,
                suggestion: 'Verifica que el backend esté disponible.'
            };
        }
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Error desconocido'
        };
    }
}
const chatTools = {
    // -------------------------------------------
    // Catálogo
    // -------------------------------------------
    consultar_activos: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
        description: 'Busca activos/equipos registrados en GIMA. Usa esta herramienta para CUALQUIER consulta de equipos, activos, UMAs, bombas, tableros, su estado o ubicación.',
        // CAMBIO 1: Usar parameters en lugar de inputSchema
        // CAMBIO 2: Eliminar z.preprocess y usar z.object directamente
        parameters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            estado: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'operativo',
                'mantenimiento',
                'fuera_servicio',
                'baja'
            ]).optional().describe('Filtrar por estado del activo'),
            buscar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('Texto de búsqueda por nombre, código o descripción'),
            tipo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'mobiliario',
                'equipo'
            ]).optional().describe('Filtrar por categoría principal: "mobiliario" o "equipo"'),
            // CAMBIO 3: Simplificar z.union a un simple z.number()
            page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional().describe('Número de página (numérico)')
        }),
        execute: async (params)=>{
            // Configuramos el default(1) aquí en el código en lugar de en Zod
            const safeParams = {
                ...params,
                page: params.page ?? 1
            };
            return safeExecute('consultar_activos', async ()=>{
                const api = await getAuthenticatedAPI();
                const result = await api.getActivos(safeParams);
                return {
                    success: true,
                    data: result,
                    summary: `Se encontraron ${result.pagination.total} activos (página ${result.pagination.page} de ${result.pagination.lastPage})`
                };
            });
        }
    }),
    // -------------------------------------------
    // Mantenimiento
    // -------------------------------------------
    consultar_mantenimientos: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
        description: 'Consulta órdenes de mantenimiento. Usa cuando pregunten por mantenimientos pendientes, en progreso, historial, por tipo (preventivo/correctivo) o por sede. Permite filtrar específicamente por estado: "pendiente", "en_progreso", "completado" o "cancelado". Devuelve datos paginados.',
        inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((val)=>val ?? {}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            estado: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'pendiente',
                'en_progreso',
                'completado',
                'cancelado'
            ]).optional().describe('Estado: pendiente, en_progreso, completado, cancelado'),
            tipo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'preventivo',
                'correctivo',
                'predictivo'
            ]).optional().describe('Tipo: preventivo, correctivo, predictivo'),
            sede_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('ID de la sede'),
            prioridad: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'baja',
                'media',
                'alta'
            ]).optional().describe('Prioridad: baja, media, alta'),
            page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((v)=>parseInt(v, 10))
            ]).optional().default(1).describe('Número de página (numérico)')
        })),
        execute: async (params)=>{
            return safeExecute('consultar_mantenimientos', async ()=>{
                const api = await getAuthenticatedAPI();
                const result = await api.getMantenimientos(params);
                return {
                    success: true,
                    data: result,
                    summary: `Se encontraron ${result.pagination.total} mantenimientos (página ${result.pagination.page} de ${result.pagination.lastPage})`
                };
            });
        }
    }),
    consultar_calendario: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
        description: 'Consulta el calendario de mantenimientos programados. Usa cuando pregunten por mantenimientos próximos, programaciones o agenda de mantenimiento.',
        inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((val)=>val ?? {}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((v)=>parseInt(v, 10))
            ]).optional().default(1).describe('Número de página (numérico)')
        })),
        execute: async (params)=>{
            return safeExecute('consultar_calendario', async ()=>{
                const api = await getAuthenticatedAPI();
                const result = await api.getCalendario(params);
                return {
                    success: true,
                    data: result,
                    summary: `Se encontraron ${result.pagination.total} entradas en el calendario (página ${result.pagination.page} de ${result.pagination.lastPage})`
                };
            });
        }
    }),
    consultar_reportes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
        description: 'Consulta reportes de mantenimiento. Usa cuando pregunten por reportes, fallos reportados, incidencias o problemas registrados.',
        inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((val)=>val ?? {}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            prioridad: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'baja',
                'media',
                'alta'
            ]).optional().describe('Prioridad: baja, media, alta'),
            estado: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'abierto',
                'asignado',
                'en_progreso',
                'resuelto',
                'cerrado'
            ]).optional().describe('Estado: abierto, asignado, en_progreso, resuelto, cerrado'),
            page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((v)=>parseInt(v, 10))
            ]).optional().default(1).describe('Número de página (numérico)')
        })),
        execute: async (params)=>{
            return safeExecute('consultar_reportes', async ()=>{
                const api = await getAuthenticatedAPI();
                const result = await api.getReportes(params);
                return {
                    success: true,
                    data: result,
                    summary: `Se encontraron ${result.pagination.total} reportes (página ${result.pagination.page} de ${result.pagination.lastPage})`
                };
            });
        }
    }),
    // -------------------------------------------
    // Inventario
    // -------------------------------------------
    consultar_inventario: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
        description: 'Busca repuestos en el inventario. Usa cuando pregunten por piezas, repuestos, stock disponible, repuestos con stock bajo (alertas de stock), o busquen un repuesto específico por código o descripción. Devuelve datos paginados.',
        inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((val)=>val ?? {}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            buscar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('Código o descripción'),
            bajo_stock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().describe('true para ver solo bajo stock'),
            proveedor_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('ID del proveedor'),
            direccion_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('ID de la sede'),
            page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((v)=>parseInt(v, 10))
            ]).optional().default(1).describe('Número de página (numérico)')
        })),
        execute: async (params)=>{
            return safeExecute('consultar_inventario', async ()=>{
                const api = await getAuthenticatedAPI();
                const result = await api.getRepuestos(params);
                return {
                    success: true,
                    data: result,
                    summary: `Se encontraron ${result.pagination.total} repuestos (página ${result.pagination.page} de ${result.pagination.lastPage})`
                };
            });
        }
    }),
    consultar_proveedores: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
        description: 'Consulta la lista de proveedores registrados. Usa cuando pregunten por proveedores, contactos de proveedores, o quién suministra repuestos.',
        inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((val)=>val ?? {}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({})),
        execute: async ()=>{
            return safeExecute('consultar_proveedores', async ()=>{
                const api = await getAuthenticatedAPI();
                const result = await api.getProveedores();
                return {
                    success: true,
                    data: result,
                    summary: `Se encontraron ${result.pagination.total} proveedores`
                };
            });
        }
    }),
    // -------------------------------------------
    // Generación con IA (servicios existentes)
    // -------------------------------------------
    generar_checklist: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
        description: 'Genera un checklist de mantenimiento personalizado usando IA. Usa cuando pidan crear, generar o sugerir un checklist/lista de verificación para un tipo de activo y tarea.',
        inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            assetType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'hvac',
                'bomba',
                'caldera',
                'tablero',
                'generador',
                'compresor',
                'motor',
                'transformador'
            ]).describe('Tipo de activo para el checklist'),
            taskType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'preventivo',
                'correctivo',
                'predictivo'
            ]).describe('Tipo de tarea de mantenimiento'),
            customInstructions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('Instrucciones adicionales del usuario para el checklist')
        }),
        execute: async (params)=>{
            return safeExecute('generar_checklist', async ()=>{
                const service = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$checklist$2d$ai$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChecklistAIService"]();
                const result = await service.generateChecklist({
                    assetType: params.assetType,
                    taskType: params.taskType,
                    customInstructions: params.customInstructions
                });
                if (!result.success || !result.checklist) {
                    return {
                        success: false,
                        error: result.error || 'No se pudo generar el checklist'
                    };
                }
                return {
                    success: true,
                    checklist: result.checklist,
                    cached: result.cached ?? false,
                    summary: `Checklist generado: "${result.checklist.title}" con ${result.checklist.items.length} items`
                };
            });
        }
    }),
    generar_resumen_actividad: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
        description: 'Genera un resumen profesional de notas de actividad usando IA. Usa cuando pidan resumir actividades, notas técnicas, o crear un informe de trabajo realizado.',
        inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            activities: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Notas de actividades a resumir (texto libre)'),
            assetType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'hvac',
                'bomba',
                'caldera',
                'tablero',
                'generador',
                'compresor',
                'motor',
                'transformador'
            ]).optional().default('hvac').describe('Tipo de activo relacionado'),
            taskType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'preventivo',
                'correctivo',
                'predictivo'
            ]).optional().default('preventivo').describe('Tipo de tarea'),
            style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'formal',
                'technical',
                'brief'
            ]).optional().default('technical').describe('Estilo de escritura del resumen'),
            detailLevel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'low',
                'medium',
                'high'
            ]).optional().default('medium').describe('Nivel de detalle del resumen')
        }),
        execute: async (params)=>{
            return safeExecute('generar_resumen_actividad', async ()=>{
                const service = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$activity$2d$summary$2d$ai$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ActivitySummaryAIService"]();
                const result = await service.generateSummary({
                    activities: params.activities,
                    assetType: params.assetType,
                    taskType: params.taskType,
                    style: params.style,
                    detailLevel: params.detailLevel
                });
                if (!result.success || !result.summary) {
                    return {
                        success: false,
                        error: result.error || 'No se pudo generar el resumen'
                    };
                }
                return {
                    success: true,
                    summary: result.summary,
                    cached: result.cached ?? false
                };
            });
        }
    }),
    // -------------------------------------------
    // Mutación (requiere aprobación del usuario)
    // -------------------------------------------
    crear_orden_trabajo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
        description: 'Crea una nueva orden de trabajo/mantenimiento en GIMA. SOLO usa esta herramienta cuando el usuario EXPLÍCITAMENTE pida crear una orden de trabajo. Esta acción modifica datos en el sistema.',
        inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            equipment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Nombre o identificador del equipo'),
            description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Descripción del problema o tarea a realizar'),
            priority: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'baja',
                'media',
                'alta'
            ]).default('media').describe('Prioridad de la orden'),
            location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('Ubicación del equipo')
        })
    })
};
const TOOL_STOP_CONDITION = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stepCountIs"])(5);
}),
"[project]/app/lib/rate-limiter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Implementación de Rate Limiter
 *
 * Rate limiter simple en memoria usando algoritmo de ventana deslizante.
 * Limita las solicitudes por dirección IP para prevenir abusos.
 */ __turbopack_context__.s([
    "RateLimiter",
    ()=>RateLimiter,
    "chatRateLimiter",
    ()=>chatRateLimiter
]);
class RateLimiter {
    requests;
    config;
    cleanupInterval;
    /**
   *
   * @param config
   */ constructor(config){
        this.requests = new Map();
        this.config = config;
        // Cleanup old entries every minute
        this.cleanupInterval = setInterval(()=>{
            this.cleanup();
        }, 60000);
    }
    /**
   * Verifica si el identificador dado ha excedido el límite de tasa
   * @param identifier - Usualmente una dirección IP
   * @returns true si está dentro del límite, false si excedió
   */ checkLimit(identifier) {
        const now = Date.now();
        const record = this.requests.get(identifier) || {
            timestamps: []
        };
        // Remove timestamps outside the window
        record.timestamps = record.timestamps.filter((timestamp)=>now - timestamp < this.config.windowMs);
        // Check if limit is exceeded
        if (record.timestamps.length >= this.config.maxRequests) {
            return false;
        }
        // Add current timestamp
        record.timestamps.push(now);
        this.requests.set(identifier, record);
        return true;
    }
    /**
   * Obtiene las solicitudes restantes para un identificador
   * @param identifier
   */ getRemaining(identifier) {
        const now = Date.now();
        const record = this.requests.get(identifier);
        if (!record) {
            return this.config.maxRequests;
        }
        const validTimestamps = record.timestamps.filter((timestamp)=>now - timestamp < this.config.windowMs);
        return Math.max(0, this.config.maxRequests - validTimestamps.length);
    }
    /**
   * Obtiene el tiempo hasta que se permita la siguiente solicitud (en ms)
   * @param identifier
   */ getRetryAfter(identifier) {
        const record = this.requests.get(identifier);
        if (!record || record.timestamps.length === 0) {
            return 0;
        }
        const oldestTimestamp = Math.min(...record.timestamps);
        const resetTime = oldestTimestamp + this.config.windowMs;
        return Math.max(0, resetTime - Date.now());
    }
    /**
   * Limpia entradas expiradas de la memoria
   */ cleanup() {
        const now = Date.now();
        for (const [identifier, record] of this.requests.entries()){
            record.timestamps = record.timestamps.filter((timestamp)=>now - timestamp < this.config.windowMs);
            // Remove entry if no valid timestamps
            if (record.timestamps.length === 0) {
                this.requests.delete(identifier);
            }
        }
    }
    /**
   * Destruye el limiter y limpia recursos
   */ destroy() {
        clearInterval(this.cleanupInterval);
        this.requests.clear();
    }
}
const chatRateLimiter = new RateLimiter({
    windowMs: 60 * 1000,
    maxRequests: 20
});
}),
"[project]/app/lib/schemas/chat.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Chat API Schemas - Validación centralizada con Zod
 *
 * Este módulo define todos los schemas de validación para el API de chat.
 * La validación solo verifica estructura, NO transforma datos.
 * La transformación se maneja en chat-utils.ts
 */ __turbopack_context__.s([
    "chatRequestSchema",
    ()=>chatRequestSchema,
    "messagePartSchema",
    ()=>messagePartSchema,
    "messageSchema",
    ()=>messageSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/config/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/models.ts [app-route] (ecmascript)");
;
;
// ============================================
// Message Part Schemas
// ============================================
/**
 * Schema para partes de texto
 */ const textPartSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('text'),
    text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
/**
 * Schema para partes de imagen
 */ const imagePartSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('image'),
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    mimeType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
/**
 * Schema para partes de archivo
 */ const filePartSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('file'),
    data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    mediaType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const messagePartSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    textPartSchema,
    imagePartSchema,
    filePartSchema
]);
// ============================================
// Content Schemas
// ============================================
/**
 * Schema para contenido que es un objeto con partes
 */ const contentObjectSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    parts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(messagePartSchema).optional(),
    text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
/**
 * Schema para contenido de mensaje (string o objeto con partes)
 * NO transforma - la sanitización se hace después
 */ const messageContentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(10000, 'Mensaje demasiado largo (max 10KB)'),
    contentObjectSchema
]);
const messageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'user',
        'assistant',
        'system'
    ]),
    content: messageContentSchema.optional().default(''),
    parts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(messagePartSchema).optional().catch(undefined),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((val)=>{
        if (val === undefined || val === null) return undefined;
        if (val instanceof Date) return val;
        if (typeof val === 'string') return new Date(val);
        return undefined;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].date().optional())
});
// ============================================
// Request Schema
// ============================================
/**
 * Extrae los valores de modelos permitidos para el schema
 */ const allowedModelValues = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AVAILABLE_MODELS"].map((m)=>m.value);
const chatRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    messages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(messageSchema).min(1, 'Se requiere al menos un mensaje').max(100, 'Demasiados mensajes (max 100)'),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(allowedModelValues).optional().default(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_MODEL"])
});
}),
"[project]/app/lib/schemas/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Chat Schemas - Barrel Export
 *
 * Re-exporta todos los schemas y tipos relacionados con el chat API.
 * @module lib/schemas
 */ // Schemas
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$chat$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/schemas/chat.ts [app-route] (ecmascript)");
;
}),
"[project]/app/lib/services/chat-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatService",
    ()=>ChatService,
    "RateLimitError",
    ()=>RateLimitError,
    "ValidationError",
    ()=>ValidationError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$groq$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/groq/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/config/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/messages.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$ai$2f$tools$2f$chat$2d$tools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/ai/tools/chat-tools.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/rate-limiter.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/lib/schemas/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$chat$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/schemas/chat.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
class ChatService {
    deps;
    /**
   *
   * @param dependencies
   */ constructor(dependencies = {}){
        this.deps = {
            logger: dependencies.logger || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"],
            rateLimiter: dependencies.rateLimiter || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chatRateLimiter"],
            modelProvider: dependencies.modelProvider || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$groq$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGroq"])({
                apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GROQ_API_KEY
            })
        };
    }
    /**
   * Process a chat message request
   * @param rawBody - The raw JSON body from the request
   * @param clientIP - The client's IP address for rate limiting
   * @returns The AI stream result
   */ async processMessage(rawBody, clientIP) {
        // 1. Rate Limiting
        if (clientIP && !this.deps.rateLimiter.checkLimit(clientIP)) {
            const retryAfter = Math.ceil(this.deps.rateLimiter.getRetryAfter(clientIP) / 1000);
            throw new RateLimitError(retryAfter);
        }
        // 2. Validation
        // console.log('RawBody:', JSON.stringify(rawBody, null, 2));
        const parseResult = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$schemas$2f$chat$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chatRequestSchema"].safeParse(rawBody);
        if (!parseResult.success) {
            throw new ValidationError(parseResult.error.issues);
        }
        const { messages: rawMessages, model } = parseResult.data;
        // 3. Sanitization
        const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeForModel"])(rawMessages);
        // 4. AI Generation
        try {
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
                model: this.deps.modelProvider(model),
                messages,
                system: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SYSTEM_PROMPT"],
                tools: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$ai$2f$tools$2f$chat$2d$tools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chatTools"],
                stopWhen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stepCountIs"])(5)
            });
            return result;
        } catch (error) {
            this.deps.logger.error('Error generando respuesta AI', error instanceof Error ? error : new Error(String(error)), {
                component: 'ChatService',
                action: 'processMessage'
            });
            throw error;
        }
    }
}
class RateLimitError extends Error {
    retryAfter;
    /**
   *
   * @param retryAfter
   */ constructor(retryAfter){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_MESSAGES"].RATE_LIMIT), this.retryAfter = retryAfter;
        this.name = 'RateLimitError';
    }
}
class ValidationError extends Error {
    details;
    /**
   *
   * @param details
   */ constructor(details){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_MESSAGES"].INVALID_REQUEST), this.details = details;
        this.name = 'ValidationError';
    }
}
}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "maxDuration",
    ()=>maxDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/config/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/messages.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$ip$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/ip-utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/services/chat-service.ts [app-route] (ecmascript)");
;
;
// Desactivar validación de certificados local (Herd SSL Self-Signed workaround)
if ("TURBOPACK compile-time truthy", 1) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}
;
;
;
;
;
;
const maxDuration = 30;
// ===========================================
// Helper Functions
// ===========================================
/**
 * Crea respuesta de rate limit excedido
 * @param retryAfterSeconds - Segundos hasta que se pueda reintentar
 * @returns NextResponse con status 429
 */ function createRateLimitResponse(retryAfterSeconds) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_MESSAGES"].RATE_LIMIT,
        message: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_MESSAGES"].QUOTA_EXCEEDED_DESCRIPTION,
        retryAfter: retryAfterSeconds
    }, {
        status: 429,
        headers: {
            'Retry-After': retryAfterSeconds.toString(),
            'X-RateLimit-Remaining': '0'
        }
    });
}
/**
 * Crea respuesta de error de validación
 * @param details - Detalles del error (issues de Zod)
 * @returns NextResponse con status 400
 */ function createValidationErrorResponse(details) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_MESSAGES"].INVALID_REQUEST,
        details
    }, {
        status: 400
    });
}
async function POST(req) {
    // 1. Validate client IP
    const clientIP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$ip$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractClientIP"])(req, {
        allowLocalhost: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NODE_ENV === 'development'
    });
    if (!clientIP) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$ip$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInvalidIPResponse"])();
    }
    // 2. Parse JSON body
    let rawBody;
    try {
        rawBody = await req.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid JSON in request body'
        }, {
            status: 400
        });
    }
    // 2.5 Ensure Auth Token
    // Intenta obtener el token; si no existe, ejecuta el login silencioso
    const currentToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthToken"])();
    if (!currentToken) {
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].info('No hay token de sesión, intentando login automático (Silent Login).', {
            component: 'ChatAPIRoute'
        });
        const loginSuccess = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loginSilent"])();
        if (!loginSuccess) {
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warn('El login automático falló. La sesión continuará pero puede tener errores de red con la IA.', {
                component: 'ChatAPIRoute'
            });
        }
    }
    // 3. Process with ChatService
    try {
        const chatService = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChatService"]();
        const result = await chatService.processMessage(rawBody, clientIP);
        return result.toUIMessageStreamResponse({
            sendSources: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STREAM_CONFIG"].sendSources,
            sendReasoning: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STREAM_CONFIG"].sendReasoning
        });
    } catch (error) {
        // 4. Map specific errors to HTTP responses
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RateLimitError"]) {
            return createRateLimitResponse(error.retryAfter);
        }
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]) {
            return createValidationErrorResponse(error.details);
        }
        // 5. Generic error handling
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error('Error en API de chat', error instanceof Error ? error : new Error(String(error)), {
            component: 'ChatAPIRoute',
            action: 'POST'
        });
        const errorMessage = error instanceof Error ? error.message : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_MESSAGES"].UNKNOWN;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_MESSAGES"].PROCESSING_ERROR,
            details: errorMessage
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c222eae7._.js.map