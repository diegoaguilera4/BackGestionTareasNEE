import mongoose from "mongoose";
const { Schema } = mongoose;

const embarazoSchema = new Schema({
    pregunta1: { type: String},
    pregunta2: { type: String},
});

const tipoDePartoSchema = new Schema({
    tipo: { type: String},
    observaciones: { type: String},
});

const periodoPerinatalSchema = new Schema({
    peso: { type: Number },
    talla: { type: Number },
    apgar: { type: Number },
    sufrimientoFetal: { type: String },
    incubadora: { type: String },
    infecciones: { type: String },
    malformacionesCongenitas: { type: String },
});

const regulacionPrimerosMesesSchema = new Schema({
    sueño: { type: String },
    duracion: { type: String },
    nivelAlerta: { type: String },
    lactancia: { type: String },
    usoMamadera: { type: String },
    chupete: { type: String },
});

const desarrolloPsicomotorSchema = new Schema({
    controlCabezaCuello: { type: String },
    gateo: { type: String },
    marcha: { type: String },
    controlEsfinter: { type: String },
    motricidadFinas: { type: String },
});

const desarrolloDelLenguajeSchema = new Schema({
    comunicacionGestual: { type: String },
    primerasPalabras: { type: String },
    frases: { type: String },
    comunicacionActual: { type: String },
    audicion: { type: String },
    respiracion: { type: String },
    voz: { type: String },
    humorTemperamento: { type: String },
});

const identificacionSchema = new Schema({
    nombre: { type: String},
    fechaNacimiento: { type: Date},
    edad: { type: Number},
    establecimientoEscolar: { type: String},
    escolaridad: { type: String},
    direccion: { type: String},
    telefono: { type: Number},
    fechaEntrevista: { type: Date },
    asisteCon: { type: String },
    derivadoPor: { type: String },
});

const motivoConsultaSchema = new Schema({
    motivo: { type: String},
    consultasPrevias: { type: String},
});

const descripcionRelacionesFamiliaresSchema = new Schema({
    relacionPareja: { type: String },
    relacionHermanos: { type: String },
    madreHijo: { type: String },
    otrasRelaciones: { type: String },
});

const historiaEscolarSchema = new Schema({
    ingresoSalaCuna: { type: String },
    inicioEscolaridad: { type: Date },
    edad: { type: Number },
    cambiosDeColegio: { type: String },
    repitencias: { type: String },
    relacionPares: { type: String },
    relacionExigenciasEscolares: { type: String },
    relacionAutoridad: { type: String },
});

const fichaSchema = new Schema({
    Identificacion: identificacionSchema,
    MotivoConsulta: motivoConsultaSchema,
    HistorialDesarrollo: {
        Embarazo: embarazoSchema,
        duracionParto: { type: String},
        TipoDeParto: tipoDePartoSchema,
        PeriodoPerinatal: periodoPerinatalSchema,
        RegulacionPrimerosMeses: regulacionPrimerosMesesSchema,
        DesarrolloPsicomotor: desarrolloPsicomotorSchema,
        DesarrolloDelLenguaje: desarrolloDelLenguajeSchema,
        vinculacion: { type: String },
        antecendentesFamiliares: { type: String },
        historiaFamiliar: { type: String },
        DescripcionRelacionesFamiliares: descripcionRelacionesFamiliaresSchema,
        HistoriaEscolar: historiaEscolarSchema,
        Observaciones: { type: String },
    },
});

const Ficha = mongoose.model("Ficha", fichaSchema);

export default Ficha;
