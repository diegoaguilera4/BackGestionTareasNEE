import mongoose from "mongoose";
const { Schema } = mongoose;

const embarazoSchema = new Schema({
    pregunta1: { type: String, required: true },
    pregunta2: { type: String, required: true },
});

const tipoDePartoSchema = new Schema({
    tipo: { type: String, required: true },
    observaciones: { type: String, required: true },
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
    nombre: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    edad: { type: Number, required: true },
    establecimientoEscolar: { type: String, required: true },
    escolaridad: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: Number, required: true },
    fechaEntrevista: { type: Date, required: true },
    asisteCon: { type: String, required: true },
    derivadoPor: { type: String, required: true },
});

const motivoConsultaSchema = new Schema({
    motivo: { type: String, required: true },
    consultasPrevias: { type: String, required: true },
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
        duracionParto: { type: String, required: true },
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
