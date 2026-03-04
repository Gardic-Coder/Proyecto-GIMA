module.exports = [
"[project]/app/config/env.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Validación y tipado de variables de entorno
__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
/**
 * envSchema - Esquema de validación Zod para variables de entorno
 *
 * Define las variables requeridas, sus formatos y valores por defecto.
 * Asegura que la aplicación falle rápido si falta configuración crítica.
 */ const envSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    // API Keys (opcionales con validación condicional)
    GROQ_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().default('').refine((val)=>!val || val.startsWith('gsk_'), {
        message: 'GROQ API key debe empezar con "gsk_" si se proporciona'
    }),
    GOOGLE_GENERATIVE_AI_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().default('').refine((val)=>!val || val.startsWith('AIza'), {
        message: 'Google API key debe empezar con "AIza" si se proporciona'
    }),
    // Node Environment
    NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'development',
        'production',
        'test'
    ]).default('development'),
    // Backend Integration
    NEXT_PUBLIC_BACKEND_API_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('')),
    BACKEND_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('')),
    NEXT_PUBLIC_DEMO_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('false').transform((val)=>val === 'true'),
    // Persistence
    NEXT_PUBLIC_ENABLE_CHAT_PERSISTENCE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('false').transform((val)=>val === 'true')
});
const env = envSchema.parse(process.env);
}),
"[project]/app/config/limits.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/config/models.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/config/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/config/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Configuración centralizada del chatbot GIMA
// Importar desde aquí: import { ... } from '@/app/config'
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/env.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/limits.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/server.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/app/lib/logger.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/config/prompts/voice-master-prompt.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Prompt Maestro de Comandos de Voz (Unified Intent Parser)
 *
 * Prompt generalista para clasificar y estructurar comandos de voz
 * en múltiples dominios: Work Orders, Navigation, System.
 */ __turbopack_context__.s([
    "MASTER_VOICE_PROMPT",
    ()=>MASTER_VOICE_PROMPT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/server.ts [app-rsc] (ecmascript)");
;
const MASTER_VOICE_PROMPT = `Eres un asistente de IA avanzado para el sistema GIMA de la UNEG.
Tu tarea es analizar comandos de voz y determinar la intención (Intent Classification) y extraer datos estructurados.

TERMINOLOGÍA TÉCNICA UNEG:
${(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatGlossary"])()}

TIPOS DE COMANDO (type):
1. 'work_order': Gestión de mantenimiento (crear, listar, asignar)
2. 'navigation': Navegación por la app
3. 'system': Control del sistema (tema, logout, resumen)

ACCIONES VÁLIDAS POR TIPO:

[work_order] actions:
- create_work_order: "Crear orden", "Reportar falla", "El equipo X falló"
- check_status: "Ver estado", "Cómo va la orden X"
- list_pending: "Ver pendientes", "Mis tareas"
- update_priority: "Marcar como urgente"
- assign_technician: "Asignar a Juan"

[navigation] actions:
- navigate: "Ir a checklist", "Abrir reportes", "Ver dashboard"
- go_back: "Volver", "Atrás"

[system] actions:
- theme_mode: "Modo oscuro", "Modo claro", "Cambiar tema"
- logout: "Cerrar sesión", "Salir"
- summarize: "Resumir actividad", "Qué hice hoy"

INSTRUCCIONES:
1. Analiza el comando.
2. Determina el 'type' (work_order, navigation, system).
3. Determina la 'action' específica.
4. Extrae parámetros según el tipo.
5. Asigna 'confidence' (0-1).

FORMATOS JSON ESPERADOS:

TIPO 1: Work Order
{
  "type": "work_order",
  "action": "create_work_order",
  "equipment": "string?",
  "location": "string?",
  "priority": "urgent|normal|low?",
  "description": "string?",
  "assignee": "string?",
  "confidence": number,
  "rawTranscript": "string"
}

TIPO 2: Navigation
{
  "type": "navigation",
  "action": "navigate",
  "path": "/dashboard | /settings | /checklists | /work-orders",
  "screen": "Dashboard | Configuración | Checklists | Órdenes",
  "params": {},
  "confidence": number,
  "rawTranscript": "string"
}

TIPO 3: System
{
  "type": "system",
  "action": "theme_mode",
  "value": "dark | light",
  "confidence": number,
  "rawTranscript": "string"
}

EJEMPLOS INTERPRETACIÓN:

In: "El aire acondicionado de biblioteca no enfría, es urgente"
Out:
{
  "type": "work_order",
  "action": "create_work_order",
  "equipment": "Aire Acondicionado",
  "location": "Biblioteca",
  "priority": "urgent",
  "description": "No enfría",
  "confidence": 0.95,
  "rawTranscript": "..."
}

In: "Llévame al inicio"
Out:
{
  "type": "navigation",
  "action": "navigate",
  "path": "/dashboard",
  "screen": "Inicio",
  "confidence": 0.98,
  "rawTranscript": "..."
}

In: "Pon modo oscuro"
Out:
{
  "type": "system",
  "action": "theme_mode",
  "value": "dark",
  "confidence": 0.99,
  "rawTranscript": "..."
}

In: "Qué cosas hice ayer?"
Out:
{
  "type": "system",
  "action": "summarize",
  "confidence": 0.9,
  "rawTranscript": "..."
}

REGLAS CRÍTICAS:
- Si el usuario DICTA un problema técnico, SIEMPRE es 'work_order' -> 'create_work_order', aunque no diga "crear orden". Ejemplo: "La bomba hace ruido".
- Responde SOLO JSON válido.
`;
}),
"[project]/app/lib/ai/base-ai-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-rsc] (ecmascript)");
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
            logger: deps?.logger ?? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"],
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
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
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
"[project]/app/types/voice-commands.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tipos y Esquemas de Comandos de Voz
 *
 * Define tipos TypeScript y schemas Zod para comandos de voz
 * Valida estructura y contenido en runtime
 * @example
 * ```typescript
 * import { VoiceWorkOrderCommandSchema } from '@/app/types/voice-commands';
 *
 * const result = VoiceWorkOrderCommandSchema.safeParse(parsedData);
 * if (result.success) {
 *   // Usar result.data con seguridad de tipos
 * }
 * ```
 */ __turbopack_context__.s([
    "CommandExecutionResultSchema",
    ()=>CommandExecutionResultSchema,
    "CommandExecutionStatusSchema",
    ()=>CommandExecutionStatusSchema,
    "VoiceCommandAction",
    ()=>VoiceCommandAction,
    "VoiceCommandResultSchema",
    ()=>VoiceCommandResultSchema,
    "VoiceCommandSchema",
    ()=>VoiceCommandSchema,
    "VoiceNavigationAction",
    ()=>VoiceNavigationAction,
    "VoiceNavigationCommandSchema",
    ()=>VoiceNavigationCommandSchema,
    "VoiceParserOptionsSchema",
    ()=>VoiceParserOptionsSchema,
    "VoiceSystemAction",
    ()=>VoiceSystemAction,
    "VoiceSystemCommandSchema",
    ()=>VoiceSystemCommandSchema,
    "VoiceWorkOrderCommandSchema",
    ()=>VoiceWorkOrderCommandSchema,
    "WorkOrderPriority",
    ()=>WorkOrderPriority,
    "createEmptyCommand",
    ()=>createEmptyCommand,
    "formatCommandSummary",
    ()=>formatCommandSummary,
    "requiresConfirmation",
    ()=>requiresConfirmation,
    "validateVoiceCommand",
    ()=>validateVoiceCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const VoiceCommandAction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'create_work_order',
    'check_status',
    'list_pending',
    'update_priority',
    'assign_technician'
]);
const VoiceNavigationAction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'navigate',
    'go_back'
]);
const VoiceSystemAction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'theme_mode',
    'logout',
    'summarize'
]);
const WorkOrderPriority = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'urgent',
    'normal',
    'low'
]);
const VoiceWorkOrderCommandSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /** Acción a ejecutar */ action: VoiceCommandAction,
    /** Equipo mencionado (UMA, BCA, TAB, etc.) */ equipment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(100).optional(),
    /** Ubicación o sector mencionado */ location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(50).optional(),
    /** Prioridad especificada */ priority: WorkOrderPriority.optional(),
    /** Descripción del problema o trabajo */ description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5).max(500).optional(),
    /** Técnico mencionado para asignación */ assignee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(100).optional(),
    /**
   * Nivel de confianza de la transcripción (0-1)
   * Valores < 0.7 deberían rechazarse
   */ confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
    /** Transcripción original sin procesar */ rawTranscript: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    /** Metadata adicional del procesamiento */ metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional(),
    /** Tipo discriminador */ type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('work_order').default('work_order')
});
const VoiceNavigationCommandSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    action: VoiceNavigationAction,
    /** Ruta destino (ej: /dashboard, /settings) */ path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /** Nombre de pantalla amigable */ screen: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
    rawTranscript: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('navigation').default('navigation')
});
const VoiceSystemCommandSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    action: VoiceSystemAction,
    /** Parámetro de acción (ej: 'dark' para theme) */ value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
    rawTranscript: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('system').default('system')
});
const VoiceCommandSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    VoiceWorkOrderCommandSchema,
    VoiceNavigationCommandSchema,
    VoiceSystemCommandSchema
]);
/**
 * Schema para resultado exitoso de parsing de comando
 */ const VoiceCommandSuccessSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(true),
    command: VoiceCommandSchema
});
/**
 * Schema para resultado fallido de parsing de comando
 */ const VoiceCommandErrorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(false),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    recoverable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
});
const VoiceCommandResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('success', [
    VoiceCommandSuccessSchema,
    VoiceCommandErrorSchema
]);
const VoiceParserOptionsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /** Idioma de la transcripción */ language: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'es-ES',
        'en-US'
    ]).default('es-ES'),
    /** Nivel mínimo de confianza aceptable */ minConfidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1).default(0.7),
    /** Modelo de IA a usar para parsing */ model: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /** Contexto adicional para mejorar parsing */ context: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(200).optional()
});
const CommandExecutionStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'pending',
    'executing',
    'completed',
    'failed',
    'cancelled'
]);
const CommandExecutionResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /** ID del comando ejecutado */ commandId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid().optional(),
    /** Estado de la ejecución */ status: CommandExecutionStatusSchema,
    /** Mensaje descriptivo del resultado */ message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    /** Datos del recurso creado/modificado (ej: ID de work order) */ resourceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /** URL del recurso creado (opcional) */ resourceUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
    /** Timestamp de ejecución */ executedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].date().optional()
});
function validateVoiceCommand(data) {
    const result = VoiceWorkOrderCommandSchema.safeParse(data);
    if (result.success) {
        return {
            success: true,
            data: result.data
        };
    }
    // Formatear errores de Zod para usuario
    const errors = result.error.issues.map((err)=>`${err.path.join('.')}: ${err.message}`);
    return {
        success: false,
        errors
    };
}
function createEmptyCommand() {
    return {
        action: 'create_work_order',
        confidence: 0,
        rawTranscript: ''
    };
}
function requiresConfirmation(command) {
    if (command.type === 'work_order') {
        // Work order logic
        if (command.priority === 'urgent' || command.action === 'assign_technician') return true;
    }
    if (command.type === 'system') {
        if (command.action === 'logout') return true;
    }
    // Confidence bajo requiere confirmación
    if (command.confidence < 0.85) {
        return true;
    }
    return false;
}
function formatCommandSummary(command) {
    if (command.type === 'navigation') {
        return `Navegar a ${command.screen || command.path || 'destino'}`;
    }
    if (command.type === 'system') {
        return `Sistema: ${command.action}`;
    }
    const parts = [];
    switch(command.action){
        case 'create_work_order':
            parts.push('Crear orden de trabajo');
            break;
        case 'check_status':
            parts.push('Verificar estado');
            break;
        case 'list_pending':
            parts.push('Listar órdenes pendientes');
            break;
        case 'update_priority':
            parts.push('Actualizar prioridad');
            break;
        case 'assign_technician':
            parts.push('Asignar técnico');
            break;
    }
    if (command.equipment) {
        parts.push(`para ${command.equipment}`);
    }
    if (command.location) {
        parts.push(`en ${command.location}`);
    }
    if (command.priority) {
        parts.push(`(Prioridad: ${command.priority})`);
    }
    return parts.join(' ');
}
}),
"[project]/app/lib/services/voice-command-parser.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceCommandParserService",
    ()=>VoiceCommandParserService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/google/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$prompts$2f$voice$2d$master$2d$prompt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/prompts/voice-master-prompt.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$ai$2f$base$2d$ai$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/ai/base-ai-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$voice$2d$commands$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types/voice-commands.ts [app-rsc] (ecmascript)");
;
;
;
;
;
class VoiceCommandParserService extends __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$ai$2f$base$2d$ai$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseAIService"] {
    static instance;
    model;
    constructor(){
        super({
            serviceName: 'VoiceCommandParser'
        });
        this.model = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"])('gemini-2.5-flash-lite');
    }
    /**
   *
   */ static getInstance() {
        if (!VoiceCommandParserService.instance) {
            VoiceCommandParserService.instance = new VoiceCommandParserService();
        }
        return VoiceCommandParserService.instance;
    }
    /**
   * Parsea texto libre a comando estructurado
   * @param transcript
   * @param options
   */ async parseCommand(transcript, options) {
        if (!transcript || transcript.trim().length < 2) {
            return {
                success: false,
                error: 'Transcripción demasiado corta'
            };
        }
        const minConfidence = options?.minConfidence ?? 0.7;
        const contextPrompt = options?.context ? `\nCONTEXTO ACTUAL APP: ${options.context}` : '';
        try {
            this.deps.logger?.info('Parsing voice command', {
                length: transcript.length
            });
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
                model: this.model,
                messages: [
                    {
                        role: 'system',
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$prompts$2f$voice$2d$master$2d$prompt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MASTER_VOICE_PROMPT"] + contextPrompt
                    },
                    {
                        role: 'user',
                        content: transcript
                    }
                ],
                temperature: 0
            });
            // Parse JSON response
            const cleanJson = result.text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            let parsed;
            try {
                parsed = JSON.parse(cleanJson);
            } catch (e) {
                this.deps.logger?.warn('Invalid JSON from AI', {
                    response: result.text.slice(0, 100)
                });
                return {
                    success: false,
                    error: 'Error interno de parsing (JSON)'
                };
            }
            // Validate against Zod Schema
            const validation = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$voice$2d$commands$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VoiceCommandSchema"].safeParse(parsed);
            if (!validation.success) {
                const errors = validation.error.issues.map((i)=>`${i.path}: ${i.message}`).join(', ');
                this.deps.logger?.warn('Schema validation failed', {
                    errors
                });
                return {
                    success: false,
                    error: `Comando no reconocido: ${errors}`
                };
            }
            const command = validation.data;
            // Check confidence
            if (command.confidence < minConfidence) {
                this.deps.logger?.info('Confidence check failed', {
                    got: command.confidence,
                    required: minConfidence
                });
                return {
                    success: false,
                    error: 'No entendí el comando con suficiente claridad.',
                    command
                };
            }
            this.deps.logger?.info('Command parsed successfully', {
                type: command.type,
                action: command.action
            });
            return {
                success: true,
                command
            };
        } catch (error) {
            this.deps.logger?.error('Error in parseCommand', error);
            return {
                success: false,
                error: 'Error al procesar el comando'
            };
        }
    }
}
}),
"[project]/app/utils/base64.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Base64 Utility
 *
 * Funciones helper para manipulación y cálculo de datos base64.
 */ /**
 * Calcula el tamaño aproximado de un string base64 en bytes.
 *
 * Útil para validar límites de tamaño antes de enviar archivos a APIs
 * como Gemini Vision o transcripción de audio.
 * @param base64 - String en formato base64 (puede incluir data URL prefix)
 * @returns Tamaño aproximado en bytes
 * @example
 * ```typescript
 * const sizeBytes = getBase64Size("data:image/jpeg;base64,/9j/4AAQ...");
 * console.log(`Tamaño: ${(sizeBytes / 1024 / 1024).toFixed(2)} MB`);
 * ```
 */ __turbopack_context__.s([
    "getBase64Size",
    ()=>getBase64Size
]);
function getBase64Size(base64) {
    // Remover data URL prefix si existe
    const cleanBase64 = base64.split('base64,').pop() || base64;
    // Cada carácter base64 representa 6 bits, pero con padding, ~75% del tamaño string
    return cleanBase64.length * 3 / 4;
}
}),
"[project]/app/actions/voice.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60358cb9e7b9d153e86117f8650f0068172529c56a":"executeVoiceCommand","608e7147603718d1755f1a28d70be92239ce98a38f":"transcribeAudio"},"",""] */ __turbopack_context__.s([
    "executeVoiceCommand",
    ()=>executeVoiceCommand,
    "transcribeAudio",
    ()=>transcribeAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/google/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/config/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/limits.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$voice$2d$command$2d$parser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/services/voice-command-parser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$base64$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/base64.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function transcribeAudio(audioDataUrl, mimeType = 'audio/webm') {
    try {
        const base64Content = audioDataUrl.includes('base64,') ? audioDataUrl.split('base64,').pop() || '' : audioDataUrl;
        if (!base64Content) throw new Error('Audio vacío');
        // Validar tamaño del audio
        const sizeInBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$base64$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBase64Size"])(base64Content);
        const sizeInMB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToMB"])(sizeInBytes);
        if (sizeInMB > __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_AUDIO_SIZE_MB"]) {
            throw new Error(`Audio demasiado grande (${sizeInMB.toFixed(1)}MB). Máximo permitido: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_AUDIO_SIZE_MB"]}MB`);
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"])('gemini-2.5-flash-lite'),
            temperature: 0,
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VOICE_PROMPT"]
                        },
                        {
                            type: 'file',
                            data: base64Content,
                            mediaType: mimeType
                        }
                    ]
                }
            ]
        });
        // Limpieza por código: si el modelo manda por error "00:00", esto lo borra.
        const cleanText = result.text// Eliminar timestamps (00:00, 01:23, etc)
        .replace(/\d{1,2}:\d{2}/g, '')// Eliminar saltos de línea excesivos y unirlos con espacios
        .replace(/\n+/g, ' ')// Quitar espacios dobles que quedan al borrar los tiempos
        .replace(/\s+/g, ' ').trim();
        return {
            text: cleanText,
            success: true
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('Error transcripción', error instanceof Error ? error : new Error(String(error)), {
            component: 'actions',
            action: 'transcribeAudio'
        });
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido al transcribir';
        return {
            text: '',
            success: false,
            error: errorMessage
        };
    }
}
async function executeVoiceCommand(transcript, options) {
    try {
        const parser = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$voice$2d$command$2d$parser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VoiceCommandParserService"].getInstance();
        const result = await parser.parseCommand(transcript, {
            minConfidence: options?.minConfidence ?? 0.7,
            context: options?.context,
            language: 'es-ES'
        });
        if (result.success && result.command) {
            return {
                success: true,
                command: result.command
            };
        }
        return {
            success: false,
            error: result.error || 'No se pudo procesar el comando',
            code: 'PARSING_FAILED',
            recoverable: true
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('Error ejecutando comando de voz', error instanceof Error ? error : new Error(String(error)), {
            component: 'actions',
            action: 'executeVoiceCommand'
        });
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Error desconocido',
            code: 'EXECUTION_ERROR',
            recoverable: false
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    transcribeAudio,
    executeVoiceCommand
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(transcribeAudio, "608e7147603718d1755f1a28d70be92239ce98a38f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(executeVoiceCommand, "60358cb9e7b9d153e86117f8650f0068172529c56a", null);
}),
"[project]/app/actions/vision.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40d1e550a16274605ad04a6e223d9367674e356e45":"analyzePartImage"},"",""] */ __turbopack_context__.s([
    "analyzePartImage",
    ()=>analyzePartImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/google/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/config/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/limits.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const partAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tipo_articulo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'mobiliario',
        'equipo'
    ]).describe('Clasificación general del artículo'),
    codigo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('Código identificado visible en la pieza'),
    descripcion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Descripción detallada de la pieza o equipo'),
    marca: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('Marca del fabricante si es visible'),
    modelo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().describe('Modelo del equipo si es visible'),
    cantidad_detectada: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().describe('Cantidad de piezas de este tipo detectadas en la foto'),
    estado_fisico: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'nuevo',
        'usado',
        'dañado',
        'requiere_inspeccion'
    ]).describe('Condición visual de la pieza'),
    recomendacion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Recomendación breve sobre el manejo o mantenimiento de la pieza'),
    nivel_confianza: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'alta',
        'media',
        'baja'
    ]).describe('Confianza de la IA sobre su identificación')
});
async function analyzePartImage(formData) {
    try {
        const file = formData.get('file');
        let customPrompt = formData.get('prompt');
        if (!file) throw new Error('Imagen vacía');
        // Validar tamaño de la imagen
        const sizeInBytes = file.size;
        const sizeInMB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToMB"])(sizeInBytes);
        if (sizeInMB > __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_IMAGE_SIZE_MB"]) {
            throw new Error(`Imagen demasiado grande (${sizeInMB.toFixed(1)}MB). Máximo permitido: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_IMAGE_SIZE_MB"]}MB`);
        }
        const buffer = await file.arrayBuffer();
        const base64Content = Buffer.from(buffer).toString('base64');
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateObject"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"])('gemini-2.5-flash'),
            temperature: 0.1,
            schema: partAnalysisSchema,
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text: customPrompt || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVENTORY_PROMPT"]
                        },
                        {
                            type: 'image',
                            image: base64Content
                        }
                    ]
                }
            ]
        });
        return {
            result: result.object,
            success: true
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('Error análisis de imagen', error instanceof Error ? error : new Error(String(error)), {
            component: 'actions',
            action: 'analyzePartImage'
        });
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido de visión';
        return {
            result: null,
            success: false,
            error: errorMessage
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    analyzePartImage
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(analyzePartImage, "40d1e550a16274605ad04a6e223d9367674e356e45", null);
}),
"[project]/app/actions/files.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4028b0a9c3ec433b9088771264083832b52f1377c2":"analyzePdf"},"",""] */ __turbopack_context__.s([
    "analyzePdf",
    ()=>analyzePdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/google/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/limits.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function analyzePdf(formData) {
    try {
        const file = formData.get('file');
        const prompt = formData.get('prompt');
        if (!file) throw new Error('PDF vacío');
        // Validar tamaño del PDF
        const sizeInBytes = file.size;
        const sizeInMB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToMB"])(sizeInBytes);
        if (sizeInMB > __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_PDF_SIZE_MB"]) {
            throw new Error(`PDF demasiado grande (${sizeInMB.toFixed(1)}MB). Máximo permitido: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_PDF_SIZE_MB"]}MB`);
        }
        const buffer = await file.arrayBuffer();
        const base64Content = Buffer.from(buffer).toString('base64');
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"])('gemini-2.5-flash'),
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text: prompt || 'Analiza este documento PDF y resume sus puntos clave.'
                        },
                        {
                            type: 'file',
                            data: base64Content,
                            mediaType: 'application/pdf'
                        }
                    ]
                }
            ]
        });
        return {
            text: result.text,
            success: true
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('Error análisis de PDF', error instanceof Error ? error : new Error(String(error)), {
            component: 'actions',
            action: 'analyzePdf'
        });
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido al analizar PDF';
        return {
            text: '',
            success: false,
            error: errorMessage
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    analyzePdf
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(analyzePdf, "4028b0a9c3ec433b9088771264083832b52f1377c2", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/voice.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/vision.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions/files.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$voice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/voice.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$vision$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/vision.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$files$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/files.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/voice.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/vision.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions/files.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4028b0a9c3ec433b9088771264083832b52f1377c2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$files$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["analyzePdf"],
    "40d1e550a16274605ad04a6e223d9367674e356e45",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$vision$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["analyzePartImage"],
    "60358cb9e7b9d153e86117f8650f0068172529c56a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$voice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeVoiceCommand"],
    "608e7147603718d1755f1a28d70be92239ce98a38f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$voice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transcribeAudio"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$voice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$vision$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$files$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/voice.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/vision.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/actions/files.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$voice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/voice.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$vision$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/vision.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$files$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/files.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_a8e83056._.js.map